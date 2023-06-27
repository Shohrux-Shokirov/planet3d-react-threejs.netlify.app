import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import { useContext } from 'react';
import { Context } from '../../context/SizeContext';


const Earth = () => {
  
  const earth = useGLTF('./earth/scene.gltf');
  const {screenSize} = useContext(Context)


  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[20, 50, 50]}
        angle={0.12}
        penumbra
        intensity={1}
        castShadow
        shadow-mapSize={1024} />
      <primitive
        object={earth.scene}
        scale={screenSize === 'sm' ? 4 : 'md' ? 7 : 8}
        position-y={-0.5}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas