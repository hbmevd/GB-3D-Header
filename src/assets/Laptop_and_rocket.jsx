import { gsap } from 'gsap'
import React, { useRef, useEffect } from 'react'
import { useGLTF, Float, MeshWobbleMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Rocket(props) {
  const { nodes, materials } = useGLTF(
    'http://localhost:5173/models/laptop_and_rocket-transformed.glb'
  )

  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    // Listen for mouse move events on the document
    document.addEventListener('mousemove', handleMouseMove)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (event) => {
    const canvas = document.querySelector('canvas')
    const canvasRect = canvas.getBoundingClientRect()

    const mouseX = event.clientX - canvasRect.left
    const mouseY = event.clientY - canvasRect.top

    // Calculate the mouse position relative to the canvas
    pointer.current = {
      x: (mouseX / canvasRect.width) * 2 - 1,
      y: -(mouseY / canvasRect.height) * 2 + 1,
    }
  }

  const rocket = useRef()
  useFrame(() => {
    gsap.to(rocket.current.position, {
      y: pointer.current.y / 10 + 0.5,
      ease: 'power1.easeOut',
    })
    gsap.to(rocket.current.rotation, {
      y: pointer.current.y,
      ease: 'power1.easeOut',
    })
    gsap.to(rocket.current.rotation, {
      x: pointer.current.x / 10 + 0,
      ease: 'power1.easeOut',
    })
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Torus_Baked_Baked}
        position={[0.55, 0, -1.73]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.spheres.geometry}
        material={materials.spheres_Baked_Baked}
        position={[1.01, 0.06, -0.22]}
        rotation={[0, 0.42, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.smoke.geometry}
        material={nodes.smoke.material}
        position={[-0.09, 0.3, -0.16]}
        rotation={[-0.09, 0, 0]}
        scale={0.07}
      >
        {' '}
        <MeshWobbleMaterial factor={0.3} speed={1} />
      </mesh>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.1}
        floatIntensity={0.2}
        floatingRange={[0, 1]}
      >
        <group position={[0, 0.53, -0.06]} scale={0.95} ref={rocket}>
          <mesh
            geometry={nodes.rocket001.geometry}
            material={materials.rocket_Baked}
          />
          <mesh
            geometry={nodes.rocket001_1.geometry}
            material={materials.flame}
          />
          <mesh
            geometry={nodes.rocket001_2.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rocket001_3.geometry}
            material={materials['Material.001']}
          />
        </group>
      </Float>
      <group position={[-0.45, 0.51, -0.55]} rotation={[1.26, 0, 0]}>
        <mesh
          geometry={nodes.image.geometry}
          material={materials['Material.009']}
        />
        <mesh
          geometry={nodes.image_1.geometry}
          material={materials['Material.012']}
        />
        <mesh
          geometry={nodes.image_2.geometry}
          material={materials['Material.005']}
        />
      </group>
      <mesh
        geometry={nodes.laptop_frames.geometry}
        material={materials['Material.007']}
        position={[-0.85, 0.08, -0.51]}
        rotation={[1.29, 0, 0]}
      />
      <mesh
        geometry={nodes.laptop_frameright.geometry}
        material={materials['Material.012']}
        position={[-0.85, 0.1, -0.42]}
        rotation={[1.29, 0, 0]}
      />
      <mesh
        geometry={nodes.laptop_frameleft_text.geometry}
        material={materials['Material.015']}
        position={[-0.51, 0.98, -0.76]}
        rotation={[1.24, 0, 0]}
      />
      <group position={[0, 0.05, 0]}>
        <mesh
          geometry={nodes.laptop.geometry}
          material={materials.Laptop_Baked}
        />
        <mesh
          geometry={nodes.laptop_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          geometry={nodes.laptop_2.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        geometry={nodes.diagram.geometry}
        material={materials['Material.016']}
        position={[-1.13, 0.1, -0.37]}
        rotation={[1.29, 0, 0]}
      />
      <mesh
        geometry={nodes.arrow.geometry}
        material={materials['Material.011']}
        position={[0.38, 0.71, -0.46]}
        rotation={[-0.31, -0.05, 0.14]}
      />
    </group>
  )
}

useGLTF.preload(
  'http://localhost:5173/models/laptop_and_rocket-transformed.glb'
)
