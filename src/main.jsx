import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import gsap from 'gsap'
import FeatureTest from './FeatureTest'

// LOADING ANIMATION
let onceLoadet = gsap.timeline({ paused: true })
onceLoadet
  .set('.loading-transition-wrapper', { opacity: 0, display: 'none' })

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
createRoot(document.getElementById('root')).render(<App />)
