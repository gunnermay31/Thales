import importlib
import os
import boto3
import numpy as np
import matplotlib

matplotlib.use('Agg')  # Use a non-GUI backend
import matplotlib.pyplot as plt

from openap import Emission, FuelFlow, prop
from mpl_toolkits.mplot3d import Axes3D


def aircraft_fuel_consumption(ac_type: str) -> float:
    """
    Calculate the aircraft fuel consumption using real or mock data.

    Args:
        ac_type (str): The type of aircraft.

    Returns:
        float: The average fuel consumption in kg/s (calculated or mocked).
    """
    module_name = 'traffic.data.samples'
    submodule_name = f'fuelflow_{ac_type}'

    try:
        # Dynamically import the parent module
        module = importlib.import_module(module_name)
        # Get the specific attribute (submodule) from the parent module
        submodule = getattr(module, submodule_name)

        if hasattr(submodule, 'assign'):
            f = submodule.assign(
                vertical_rate=lambda df: df.altitude.diff().fillna(0) * 60,  # Vertical rate in ft/min
                fuelflow=lambda df: df.fuelflow / 3600,  # Convert fuelflow to kg/s
            )
            resampled = f.resample("5s")
            average_fuel = resampled.weight_max - resampled.weight_min
            return average_fuel

    except (ModuleNotFoundError, AttributeError) as e:
        print(f"Warning: {e}. Using mock data for fuel consumption calculation.")

        # Mock data for fallback
        mock_data = {
            "a21n": {"mass": 70000, "tas": 450, "alt": 35000},
            "a320": {"mass": 75000, "tas": 460, "alt": 34000},
            "a359": {"mass": 280000, "tas": 510, "alt": 41000},
        }

        # Use default mock values if aircraft type is not in predefined data
        mock_values = mock_data.get(ac_type.lower(), {"mass": 50000, "tas": 400, "alt": 30000})
        mass = mock_values["mass"]
        tas_avg = mock_values["tas"]
        alt_avg = mock_values["alt"]
        path_angle_avg = 5  # Assume a default path angle of 5 degrees

        # Simplified mock fuel consumption formula
        mock_fuel_consumption = (mass * tas_avg * alt_avg * 0.00000001) / (path_angle_avg + 1)

        return round(mock_fuel_consumption, 2)


def upload_file_to_s3(file_path, bucket_name, s3_folder, s3_filename):
    """
    Uploads a file to an S3 bucket.

    Args:
        file_path (str): Local file path.
        bucket_name (str): Name of the S3 bucket.
        s3_folder (str): Folder path in the S3 bucket.
        s3_filename (str): Name of the file in the S3 bucket.
    """
    s3_client = boto3.client('s3')
    s3_path = os.path.join(s3_folder, s3_filename)
    try:
        s3_client.upload_file(file_path, bucket_name, s3_path)
        print(f'Successfully uploaded {file_path} to {bucket_name}/{s3_path}')
    except Exception as e:
        print(f'Failed to upload {file_path} to {bucket_name}/{s3_path}: {e}')


def create_dir(path):
    """
    Creates a directory if it doesn't exist.

    Args:
        path (str): Directory path.
    """
    try:
        os.makedirs(path, exist_ok=True)
        print(f"Directory for '{path}' created successfully or already exists.")
    except Exception as e:
        print(f"An error occurred while creating the directory for '{path}': {e}")


def create_plots(aircraft_type, flight_number):
    """
    Generates 3D plots of emissions and fuel flow for the given aircraft type.

    Args:
        aircraft_type (str): The type of aircraft.
        flight_number (str): The flight number.

    Returns:
        list: Paths to the generated plot files.
    """
    create_dir(f'plots/{flight_number}')
    plot_path = f'plots/{flight_number}'
    print(plot_path)

    try:
        aircraft = prop.aircraft(ac=aircraft_type, use_synonym=True)
        fuelflow = FuelFlow(ac=aircraft_type, use_synonym=True)
        emission = Emission(ac=aircraft_type, use_synonym=True)

        tas = np.linspace(50, 500, 50)
        alt = np.linspace(100, 35000, 50)
        tas_, alt_ = np.meshgrid(tas, alt)
        mass = aircraft["limits"]["MTOW"] * 0.85

        ff = fuelflow.enroute(mass=mass, tas=tas_, alt=alt_, path_angle=0)

        co2 = emission.co2(ff)
        h2o = emission.h2o(ff)
        sox = emission.sox(ff)
        nox = emission.nox(ff, tas=tas_, alt=alt_)
        co = emission.co(ff, tas=tas_, alt=alt_)
        hc = emission.hc(ff, tas=tas_, alt=alt_)

        filenames = {
            "fuel_flow": "3d_fuel_flow.png",
            "h2o": "3d_h2o_emissions.png",
            "co2": "3d_co2_emissions.png",
            "sox": "3d_sox_emissions.png",
            "nox": "3d_nox_emissions.png",
            "co": "3d_co_emissions.png",
            "hc": "3d_hc_emissions.png"
        }

        data = {
            "fuel_flow": ff,
            "h2o": h2o,
            "co2": co2,
            "sox": sox,
            "nox": nox,
            "co": co,
            "hc": hc
        }

        s3_bucket = 'airbushack'
        s3_folder = f'plots/{flight_number}'
        for key, filename in filenames.items():
            filepath = os.path.join(plot_path, filename)
            print(f"FILEPATH: {filepath}")
            fig = plt.figure()
            ax = fig.add_subplot(111, projection="3d")
            surf = ax.plot_surface(tas_, alt_, data[key], cmap='viridis')
            plt.title(f"{key.replace('_', ' ').upper()} (g/s)")
            plt.xlabel("TAS (kt)")
            plt.ylabel("Altitude (ft)")
            plt.savefig(filepath)
            upload_file_to_s3(filepath, s3_bucket, s3_folder, filename)
            print("Uploaded to s3")
            plt.close(fig)
            os.remove(filepath)

        return [os.path.join(plot_path, filename) for filename in filenames.values()]
    except Exception as e:
        print(f"Error creating plots: {e}")
        return []


# Example Usage
if __name__ == "__main__":
    print(aircraft_fuel_consumption("a21n"))  # Example with real or mock data
    print(aircraft_fuel_consumption("unknown"))  # Example with fallback to mock data
