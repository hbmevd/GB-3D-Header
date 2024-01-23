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

export default function FeatureTest() {
  return <h1>hello</h1>
}
