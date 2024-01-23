import { memo, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Sparkles,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
} from '@react-three/drei'
import Camera from './assets/Camera'
import { BullyScene } from './assets/BullyScene'
import { Environment, Grid } from '@react-three/drei'
import CameraRig from './assets/CameraRig'
import { ACESFilmicToneMapping } from 'three'
import { Teeth } from './assets/Teeth'
import { Eyes } from './assets/Eyes'
import { Jacket } from './assets/Jacket'

import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing'
import { BullyNew } from './assets/Bullynew'
import { Bully2 } from './assets/Bully2'

export default function App() {
  return (
    <Canvas
      shadows
      gl={{ logarithmicDepthBuffer: false }}
      dpr={[1, 2]}
      colormanagement={ACESFilmicToneMapping}
    >
      <pointLight
        position={[2, 0, 12]}
        intensity={25}
        color={0xffffff}
        distance={5}
      />
      <pointLight
        position={[-3, 4, -3]}
        intensity={25}
        color={0xffffff}
        distance={10}
      />
      <pointLight
        position={[-1, 2, 4]}
        intensity={25}
        color={0xffffff}
        distance={5}
      />
      <Environment
        background
        rotation={2}
        blur={0.5}
        files="https://master--effortless-caramel-ffd67a.netlify.app/images/whitehdr.hdr"
      />
      <Suspense>
        <group rotation={[0, (35 * Math.PI) / 180, 0]} position={[0, 0, 0]}>
          <Bully2/>
          <Jacket/>
          <Teeth/>
          <Eyes/>
        </group>
      </Suspense>
      {/* <Suspense>
        <group rotation={[0, (-35 * Math.PI) / 180, 0]} position={[-1, 0, 0]}>
          <BullyScene/>
          <Jacket/>
          <Teeth/>
          <Eyes/>
        </group>
      </Suspense>
      <Suspense>
        <group rotation={[0, (35 * Math.PI) / 180, 0]} position={[1, 0, 0]}>
          <BullyScene/>
          <Jacket/>
          <Teeth/>
          <Eyes/>
        </group>
      </Suspense> */}
      <CameraRig>
        <Camera />
      </CameraRig>

      <Grid
        position={[0, 0.0, 0]}
        renderOrder={1}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={0.3}
        sectionColor={[5, 5, 0]}
        fadeDistance={17}
      />

      <ContactShadows         
        temporal
        color="#d4d4d4"
        colorBlend={0.5}
        alphaTest={0.9}
        scale={10}>
        </ContactShadows>
      <EffectComposer disableNormalPass>
        <DepthOfField
          target={[0, -2.6, 12]}
          focusRange={0.04}
          bokehScale={3}
        />
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} height={200} />
      </EffectComposer>
    </Canvas>
  )
}
