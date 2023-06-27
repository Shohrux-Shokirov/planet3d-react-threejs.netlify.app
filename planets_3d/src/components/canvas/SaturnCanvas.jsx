import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import { useContext } from 'react';
import { Context } from '../../context/SizeContext';


const Saturn = () => {
  
  const model = useGLTF('./saturn/scene.gltf');
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
        scale={screenSize === 'sm' ? .6 : 'md' ? 1.2 : 1.1}
        position-y={screenSize === 'sm' ? -.5 : 'md' ? -.5 : -2.2}
        position-x={0.3}
        
      />
    </mesh>
  )
}

const SaturnCanvas = () => {
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
        <Saturn />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default SaturnCanvas

