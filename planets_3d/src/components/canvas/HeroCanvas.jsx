import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import { useContext } from 'react';
import { Context } from '../../context/SizeContext';


const Hero = () => {

  const earth = useGLTF('./little_astronaut/scene.gltf');
  const { screenSize } = useContext(Context)


  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[20, 60, 50]}
        angle={0.12}
        penumbra
        intensity={1}
        castShadow
        shadow-mapSize={1024} />
      <primitive
        object={earth.scene}
        scale={screenSize === 'sm' ? .7 : 'md' ? 1 : 1.2}
        position-y={screenSize === 'sm' ? -2.5 : 'md' ? -3 : -3.1}
        rotation-y={0}
      />
    </mesh>
  )
}

const HeroCanvas = () => {
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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hero />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas