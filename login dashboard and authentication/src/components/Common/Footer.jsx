import React from "react";
import { Link } from "react-router-dom";

// Icons
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Inline styles
  const styles = {
    footer: {
      backgroundColor: "#0b1120", // Rich Black
      color: "#d1d5db", // Neutral Gray
      padding: "40px 20px",
      textAlign: "left",
    },
    section: {
      marginBottom: "20px",
    },
    title: {
      color: "#ffffff",
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#9ca3af", // Gray
      fontSize: "0.9rem",
      display: "block",
      marginBottom: "8px",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#ffffff", // White on Hover
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
    },
    socialIcon: {
      color: "#9ca3af", // Neutral Gray
      fontSize: "1.2rem",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    socialIconHover: {
      color: "#ffffff",
    },
    bottomFooter: {
      borderTop: "1px solid #374151", // Dark Gray Border
      marginTop: "30px",
      paddingTop: "20px",
      textAlign: "center",
      fontSize: "0.8rem",
      color: "#9ca3af",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Company Section */}
        <div style={{ ...styles.section, flexBasis: "30%" }}>
          <h1 style={{ fontSize: "1.5rem", color: "#ffffff" }}>Air Nav</h1>
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            Your trusted partner for modern avionics solutions. Elevate your
            flight operations with advanced planning, safety, and monitoring
            tools.
          </p>
          <div style={styles.socialIcons}>
            <FaFacebook style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
            <FaLinkedin style={styles.socialIcon} />
            <FaYoutube style={styles.socialIcon} />
          </div>
        </div>

        {/* Resources Section */}
        <div style={{ ...styles.section, flexBasis: "20%" }}>
          <h2 style={styles.title}>Resources</h2>
          {["Flight Planning", "Real-Time Risk Assessment", "Weather Integration", "System Health Monitoring"].map(
            (resource, index) => (
              <Link
                key={index}
                to={resource.toLowerCase().split(" ").join("-")}
                style={styles.link}
              >
                {resource}
              </Link>
            )
          )}
        </div>

        {/* Solutions Section */}
        <div style={{ ...styles.section, flexBasis: "20%" }}>
          <h2 style={styles.title}>Solutions</h2>
          {["Airlines", "Cargo Operators", "Private Jet Owners"].map((solution, index) => (
            <Link
              key={index}
              to={solution.toLowerCase().split(" ").join("-")}
              style={styles.link}
            >
              {solution}
            </Link>
          ))}
        </div>

        {/* Support Section */}
        <div style={{ ...styles.section, flexBasis: "20%" }}>
          <h2 style={styles.title}>Support</h2>
          {["FAQs", "Contact Us", "Help Center"].map((support, index) => (
            <Link
              key={index}
              to={support.toLowerCase().split(" ").join("-")}
              style={styles.link}
            >
              {support}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div style={styles.bottomFooter}>
        <p>&copy; 2024 Air Nav | Designed for Excellence in Avionics</p>
        <p>Made with ❤️ by Byte Busters</p>
      </div>
    </footer>
  );
};

export default Footer;
