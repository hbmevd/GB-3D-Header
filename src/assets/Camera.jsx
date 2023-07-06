import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

export default function Camera() {
  return (
    <PerspectiveCamera
      name="Camera"
      makeDefault={true}
      far={1000}
      near={0.1}
      fov={27}
      position={[1.3, 0.9, 7]}
    />
  )
}
