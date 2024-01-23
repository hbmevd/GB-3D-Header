import React from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Camera() {
  return (
    <>
      <PerspectiveCamera
        name="Camera"
        makeDefault={true}
        far={1000}
        near={0.1}
        fov={30}
        position={[1.6, 0.65, 5]}
      />
    </>
  );

}
