import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Example, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import { useContext } from 'react';
import { Context } from '../../context/SizeContext';


const Venus = () => {

  const model = useGLTF('./venus/scene.gltf');
  const { screenSize } = useContext(Context)


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
        scale={screenSize === 'sm' ? 1.8 : 'md' ? 2.5 : 1.2}
        position-y={screenSize === 'sm' ? -2 : 'md' ? -2.6 : -2.7}

      />
    </mesh>
  )
}

const VenusCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 1,
        far: 200,
        position: [-40, -3, -6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />
        <Venus />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default VenusCanvas

