import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Trees(props) {
  const { nodes, materials } = useGLTF(
    'http://localhost:5173/models/trees_and_clouds-transformed.glb'
  )
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.04, 1.0, -4.22]}
        rotation={[Math.PI, 0.52, 0]}
        scale={[0.17, 0.12, 0.17]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere033.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere033_1.geometry}
          material={materials['LP_bark.002']}
        />
      </group>
      <group
        position={[0.59, 0, -2.25]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.28}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_03_1.geometry}
          material={materials['LP_bark.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_03_2.geometry}
          material={materials['LP_wood.001']}
        />
      </group>
      <group
        position={[-2.5, 1.31, -4.78]}
        rotation={[2.54, 0.41, 2.49]}
        scale={[0.13, 0.22, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_02_1.geometry}
          material={materials['LP_wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_02_2.geometry}
          material={materials['LP_bark.002']}
        />
      </group>
      <group
        position={[-2.39, 0.68, -3.3]}
        rotation={[0.13, 0.21, -0.68]}
        scale={0.12}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_01_1.geometry}
          material={materials.LP_wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_01_2.geometry}
          material={materials['LP_bark.002']}
        />
      </group>
      <group
        position={[1.28, 1.6, -7.93]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.23}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloud_03001.geometry}
          material={materials.lightning}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloud_03001_1.geometry}
          material={materials.cloud}
        />
      </group>
      <group
        position={[-1.44, 2.29, -8.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.2}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloud_02001.geometry}
          material={materials.lightning}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloud_02001_1.geometry}
          material={materials.cloud}
        />
      </group>
      <mesh
        geometry={nodes.cloud_01.geometry}
        material={materials.cloud}
        position={[-3.16, 1.57, -6.41]}
        rotation={[Math.PI, 0, -0.07]}
        scale={-0.18}
      />
    </group>
  )
}

useGLTF.preload(
  'http://localhost:5173/models/trees_and_clouds-transformed.glb'
)
