/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import PropTypes from "prop-types"
import { useFrame } from "@react-three/fiber"

export default function Plane({ faultyWireLocations = [], ...props }) {
  const { nodes, materials } = useGLTF("/plane.glb")
  const markersRef = useRef([])

  useEffect(() => {
    markersRef.current = markersRef.current.slice(0, faultyWireLocations.length)
  }, [faultyWireLocations])

  useFrame((state, delta) => {
    markersRef.current.forEach((marker, index) => {
      marker.material.opacity = 0.5 + 0.5 * Math.sin(state.clock.getElapsedTime() * 8 + index)
    })
  })
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Group_211_001001.geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006006.geometry} material={materials.dbl_Group_023} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006005.geometry} material={materials.dbl_Group_022} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006004.geometry} material={materials.dbl_Group_021} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006003.geometry} material={materials.dbl_Group_020} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006002.geometry} material={materials.dbl_Group_019} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006001.geometry} material={materials.dbl_Group_006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_027003.geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes.Group_027002.geometry} material={materials.dbl_Group_030} />
      <mesh castShadow receiveShadow geometry={nodes.Group_027001.geometry} material={materials.dbl_Group_029} />
      <mesh castShadow receiveShadow geometry={nodes.Group_016003.geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes.Group_016002.geometry} material={materials.dbl_Group_030} />
      <mesh castShadow receiveShadow geometry={nodes.Group_016001.geometry} material={materials.dbl_Group_029} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001014.geometry} material={materials.dbl_Group_014} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001013.geometry} material={materials.dbl_Group_013} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001012.geometry} material={materials.dbl_Group_012} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001011.geometry} material={materials.dbl_Group_011} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001010.geometry} material={materials.dbl_Group_010} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001009.geometry} material={materials.dbl_Group_009} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001008.geometry} material={materials.dbl_Group_008} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001007.geometry} material={materials.dbl_Group_007} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001006.geometry} material={materials.dbl_Group_006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001005.geometry} material={materials.dbl_Group_005} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001004.geometry} material={materials.dbl_Group_004} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001003.geometry} material={materials.dbl_Group_003} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001002.geometry} material={materials.dbl_Group_002} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001001.geometry} material={materials.dbl_Group_001} />
      <mesh castShadow receiveShadow geometry={nodes.Group_212_002.geometry} material={materials.wire_134006006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_026.geometry} material={materials.wire_006134006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_017.geometry} material={materials.wire_143224087} />
      <mesh castShadow receiveShadow geometry={nodes.Group_024.geometry} material={materials.wire_224086086} />
      <mesh castShadow receiveShadow geometry={nodes.Group_023.geometry} material={materials.wire_224198087} />
      <mesh castShadow receiveShadow geometry={nodes.Group_006.geometry} material={materials.dbl_Group_024} />
      <mesh castShadow receiveShadow geometry={nodes.Group_028.geometry} material={materials.wire_134006006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_011.geometry} material={materials.wire_143224087} />
      <mesh castShadow receiveShadow geometry={nodes.Group_016.geometry} material={materials.dbl_Group_007} />
      <mesh castShadow receiveShadow geometry={nodes.Group_021.geometry} material={materials.wire_224086086} />
      <mesh castShadow receiveShadow geometry={nodes.Group_012.geometry} material={materials.wire_006134006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_015.geometry} material={materials.wire_087224198} />
      <mesh castShadow receiveShadow geometry={nodes.Group_014.geometry} material={materials.wire_177028149} />
      <mesh castShadow receiveShadow geometry={nodes.Group_212_001.geometry} material={materials.wire_229166215} />
      <mesh castShadow receiveShadow geometry={nodes.Group_013.geometry} material={materials.wire_224198087} />
      <mesh castShadow receiveShadow geometry={nodes.Group_010.geometry} material={materials.wire_028089177} />
      <mesh castShadow receiveShadow geometry={nodes.Group_022.geometry} material={materials.wire_006134006} />
      <mesh castShadow receiveShadow geometry={nodes.Group_001.geometry} material={materials.dbl_Group_015} />
      <mesh castShadow receiveShadow geometry={nodes.Group_211_001.geometry} material={materials.dbl_Group_211_001} />
      <mesh castShadow receiveShadow geometry={nodes.Group_027.geometry} material={materials.dbl_Group_007} />
      <mesh castShadow receiveShadow geometry={nodes.Group_025.geometry} material={materials.wire_028089177} />
      <mesh castShadow receiveShadow geometry={nodes["Group_009-Mesh"].geometry} material={materials.dbl_Group_025} />
      <mesh castShadow receiveShadow geometry={nodes["Group_009-Mesh_1"].geometry} material={materials.dbl_Group_027} />
      <mesh castShadow receiveShadow geometry={nodes["Group_009-Mesh_2"].geometry} material={materials.dbl_Group_012} />
      <mesh castShadow receiveShadow geometry={nodes["Group_009-Mesh_3"].geometry} material={materials.dbl_Group_026} />
      <mesh castShadow receiveShadow geometry={nodes["Group_005-Mesh"].geometry} material={materials.dbl_Group_018} />
      <mesh castShadow receiveShadow geometry={nodes["Group_005-Mesh_1"].geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes["Group_005-Mesh_2"].geometry} material={materials.dbl_Group_016} />
      <mesh castShadow receiveShadow geometry={nodes["Group_029-Mesh"].geometry} material={materials.dbl_Group_018} />
      <mesh castShadow receiveShadow geometry={nodes["Group_029-Mesh_1"].geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes["Group_211_002-Mesh"].geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes["Group_211_002-Mesh_1"].geometry} material={materials.dbl_Group_211_001} />
      <mesh castShadow receiveShadow geometry={nodes["Group_018-Mesh"].geometry} material={materials.dbl_Group_018} />
      <mesh castShadow receiveShadow geometry={nodes["Group_018-Mesh_1"].geometry} material={materials.dbl_Group_017} />
      <mesh castShadow receiveShadow geometry={nodes["Group_030-Mesh"].geometry} material={materials.dbl_Group_033} />
      <mesh castShadow receiveShadow geometry={nodes["Group_030-Mesh_1"].geometry} material={materials.dbl_Group_032} />
      <mesh castShadow receiveShadow geometry={nodes["Group_020-Mesh"].geometry} material={materials.dbl_Group_025} />
      <mesh castShadow receiveShadow geometry={nodes["Group_020-Mesh_1"].geometry} material={materials.dbl_Group_027} />
      <mesh castShadow receiveShadow geometry={nodes["Group_020-Mesh_2"].geometry} material={materials.dbl_Group_012} />
      <mesh castShadow receiveShadow geometry={nodes["Group_020-Mesh_3"].geometry} material={materials.dbl_Group_026} />
      <mesh castShadow receiveShadow geometry={nodes["Group_004-Mesh"].geometry} material={materials.dbl_Group_001} />
      <mesh castShadow receiveShadow geometry={nodes["Group_004-Mesh_1"].geometry} material={materials.dbl_Group_002} />
      <mesh castShadow receiveShadow geometry={nodes["Group_019-Mesh"].geometry} material={materials.dbl_Group_033} />
      <mesh castShadow receiveShadow geometry={nodes["Group_019-Mesh_1"].geometry} material={materials.dbl_Group_032} />
      {faultyWireLocations.map((location, index) => (
        <mesh key={index} position={[location.x, location.y, location.z]} ref={el => (markersRef.current[index] = el)}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial color={"red"} emissive={"red"} emissiveIntensity={1} transparent={true} opacity={1} />
        </mesh>
      ))}
    </group>
  )
}

Plane.propTypes = {
  faultyWireLocations: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired
    })
  )
}

useGLTF.preload("/plane.glb")
