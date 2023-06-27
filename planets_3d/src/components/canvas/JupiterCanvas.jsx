import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import { useContext } from 'react';
import { Context } from '../../context/SizeContext';


const Jupiter = () => {
  
  const model = useGLTF('./jupiter/scene.gltf');
  const {screenSize} = useContext(Context)


  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[20, 50, 150]}
        angle={0.12}
        penumbra
        intensity={1}
        castShadow
        shadow-mapSize={1024} />
      <primitive
        object={model.scene}
        scale={screenSize === 'sm' ? .5 : 'md' ? .85 : 1.1}
        position-y={screenSize === 'sm' ? -1 : 'md' ? -.5 : -.6}
        rotation-y={0}
      />
    </mesh>
  )
}

const JupiterCanvas = () => {
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
        <Jupiter />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default JupiterCanvas

