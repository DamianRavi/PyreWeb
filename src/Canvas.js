import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls, Box, Image } from '@react-three/drei'
//import { Bloom } from '@react-three/postprocessing'
//import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'

const backgrounds = [
  "",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant",
  "plant"
]

export default function Scene(props) {
  const slideList = [
    <Logo />,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <Pane img={backgrounds[props.scrollState]}/>,
    <DownloadPanel />,
    <Pane img={backgrounds[props.scrollState]}/>,
    <DownloadPanel />
  ]


  return (
    <Canvas className="canvas">
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {slideList[props.scrollState]}
      <AsciiRenderer fgColor="white" bgColor="transparent" color="true" resolution={0.2}/>
    </Canvas>
  )
}

function Logo(props) {
  const viewport = useThree((state) => state.viewport)
  return (
    <Image
      transparent={true}
      url="logo512.png" // Path relative to the public folder
      position={[0, 0, 0]}
      scale={Math.min(viewport.width, viewport.height)} // Adjust scale to your desired size
    />
  )
}

function Pane(props) {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  //useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  return (
    <Image
      transparent={true}
      url={`slides/${props.img}.png`}
      position={[0, 0, 0]}
      scale={Math.min(viewport.width, viewport.height)}
    />
  )
}

function DownloadPanel(props) {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  //useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  const downloadApp = (os) => {
    //fetch("https://api.pyrebrowser.com/pingDownload")
    window.location.href = "https://github.com/DamianRavi/PyreBrowser-win32-x64/releases/download/v1.1.0/Pyre-1.1.0.Setup.exe"
    //"https://github.com/DamianRavi/PyreBrowser-win32-x64/releases/latest/download/"
  }

  return (
    <Image
      transparent={true}
      url={`slides/windows.png`}
      position={[0, 0, 0]}
      scale={Math.min(viewport.width, viewport.height)}
    />
  )
}
