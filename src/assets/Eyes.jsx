/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/eyes.glb -T 
Files: public/models/eyes.glb [26.26MB] > C:\Users\Studio\Desktop\GorillaBullys\Web3Webflow\eyes-transformed.glb [2.19MB] (92%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Eyes(props) {
  const { nodes, materials } = useGLTF('https://master--effortless-caramel-ffd67a.netlify.app/models/Eyes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.RightEye.geometry} material={materials['Material.004']} position={[-0.026, 1.389, 0.267]} scale={0.08} />
    </group>
  )
}

useGLTF.preload('https://master--effortless-caramel-ffd67a.netlify.app/models/Eyes.glb')
