import { memo, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Sparkles,
  AccumulativeShadows,
  RandomizedLight,
} from '@react-three/drei'
import { Rocket } from './assets/Laptop_and_rocket'
import Trees from './assets/Trees_and_clouds'
import Camera from './assets/Camera'
import Flamingo from './assets/Flamingo_02'
import { Environment, Grid } from '@react-three/drei'
import CameraRig from './assets/CameraRig'
import { ACESFilmicToneMapping } from 'three'
import gsap from 'gsap'

import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing'

export default function App() {
  // LOADING ANIMATION
  let onceLoadet = gsap.timeline({ paused: true })
  onceLoadet
    .set('.loading-transition-wrapper', { opacity: 0, display: 'none' })
    .to('.blur-filter', { backdropFilter: 'blur(0px)', duration: 2 })

  function playLoadingAnimation() {
    gsap.set('.loading-transition-wrapper', { display: 'block' })
    const load = gsap.timeline({
      paused: 'true',
    })
    load
      .to('#percent , #bar', {
        duration: 0.1,
        opacity: 0,
        zIndex: -1,
      })
      .to('.progress', {
        duration: 0.8,
        width: '0%',
      })
      .to(
        '.loader_lottie',
        {
          duration: 0.6,
          opacity: 0,
        },
        '-=.5'
      )
      .to(
        '.loader_content',
        {
          duration: 0.6,

          ease: 'power1.inOut',
          display: 'none',
          marginBottom: '100%',
        },
        '-=.5'
      )
      .to('.loading-transition-wrapper', {
        duration: 0,
        display: 'none',
      })
      .to('.blur-filter', { backdropFilter: 'blur(0px)', duration: 2 })

    var id,
      width = 1
    function loading() {
      id = setInterval(frame, 25)
    }
    function frame() {
      if (width >= 100) {
        clearInterval(id)
        load.play()
      } else {
        width++
        document.getElementById('loadingbar').style.width = width + '%'
        document.getElementById('percent').innerHTML = width + '%'
      }
    }

    window.onload = function () {
      loading()
    }
  }

  if (!sessionStorage.getItem('hasLoadedOnce')) {
    sessionStorage.setItem('hasLoadedOnce', true)
    playLoadingAnimation()
  } else {
    onceLoadet.play()
  }

  return (
    <Canvas
      shadows
      gl={{ logarithmicDepthBuffer: false }}
      dpr={[1, 2]}
      colormanagement={ACESFilmicToneMapping}
    >
      <pointLight
        position={[5, 2, -4]}
        intensity={0.4}
        color={0xff229f}
        distance={10}
      />
      <pointLight
        position={[-4, 1, -1]}
        intensity={50}
        color={0xffffff}
        distance={5}
      />
      <pointLight
        position={[-0.2, 2, 4]}
        intensity={50}
        color={0xffffff}
        distance={5}
      />
      <Environment
        background
        rotation={1}
        blur={0.6}
        files="https://master--snazzy-pastelito-85935c.netlify.app/peppermint_powerplant_2_1k.hdr"
      />
      <Suspense>
        <group rotation={[0, (-35 * Math.PI) / 180, 0]} position={[2, 0, 0]}>
          <Rocket />
          <Trees />
          <Flamingo />
          <Sparkles
            count={100}
            scale={6}
            size={3}
            speed={0.2}
            position={[0, 0, -4]}
          />
        </group>
      </Suspense>
      <CameraRig>
        <Camera />
      </CameraRig>

      <Grid
        position={[0, 0, 0]}
        renderOrder={1}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={0.3}
        sectionColor={[5, 5, 0]}
        fadeDistance={30}
      />

      <AccumulativeShadows
        temporal
        frames={100}
        color="orange"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.9}
        opacity={2}
        scale={12}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </AccumulativeShadows>
{/*       <EffectComposer>
        <DepthOfField
          target={[0, -2.6, 12]}
          focusRange={0.003}
          bokehScale={3}
        />
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} height={200} />
      </EffectComposer> */}
    </Canvas>
  )
}
