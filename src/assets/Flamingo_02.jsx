import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Flamingo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    'http://localhost:5173/models/Flamingo_02-transformed.glb'
  )
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.A1.play()
    actions.A2.play()
    actions.A3.play()
    actions.A4.play()
    actions.A5.play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="wheels"
          geometry={nodes.wheels.geometry}
          material={materials['Skateboard 80x20']}
          position={[-1.12, 0.02, -4.38]}
          rotation={[0.08, 0.28, -0.02]}
          scale={0.69}
        />
        <mesh
          name="skateboard"
          geometry={nodes.skateboard.geometry}
          material={materials['Skateboard 80x20']}
          position={[-1.24, 0, -4.56]}
          rotation={[0, 0.29, 0]}
          scale={0.69}
        >
          <mesh
            name="Wheels_Base"
            geometry={nodes.Wheels_Base.geometry}
            material={materials['Skateboard 80x20']}
            position={[0.1, 0.02, 0.3]}
          />
        </mesh>
        <mesh
          name="wheels2"
          geometry={nodes.wheels2.geometry}
          material={materials['Skateboard 80x20']}
          position={[-1.25, 0.02, -4.77]}
          rotation={[0.08, 0.28, -0.02]}
          scale={0.69}
        />
        <group
          name="Flamingo"
          position={[-1.18, 0.05, -4.53]}
          rotation={[0, -1.31, 0]}
          scale={1.99}
        >
          <mesh
            name="falmingo"
            geometry={nodes.falmingo.geometry}
            material={materials.Pink}
            morphTargetDictionary={nodes.falmingo.morphTargetDictionary}
            morphTargetInfluences={nodes.falmingo.morphTargetInfluences}
          />
          <mesh
            name="falmingo_1"
            geometry={nodes.falmingo_1.geometry}
            material={materials.Black}
            morphTargetDictionary={nodes.falmingo_1.morphTargetDictionary}
            morphTargetInfluences={nodes.falmingo_1.morphTargetInfluences}
          />
          <mesh
            name="falmingo_2"
            geometry={nodes.falmingo_2.geometry}
            material={materials.Orange}
            morphTargetDictionary={nodes.falmingo_2.morphTargetDictionary}
            morphTargetInfluences={nodes.falmingo_2.morphTargetInfluences}
          />
          <mesh
            name="falmingo_3"
            geometry={nodes.falmingo_3.geometry}
            material={materials.White}
            morphTargetDictionary={nodes.falmingo_3.morphTargetDictionary}
            morphTargetInfluences={nodes.falmingo_3.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(
  'http://localhost:5173/models/Flamingo_02-transformed.glb'
)
