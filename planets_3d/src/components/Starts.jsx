import React, {useState, useRef, Suspense} from 'react';
import {Canvas, render, useFrame} from '@react-three/fiber';
import {Points, PointMaterial, Preload} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';


function Starts(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(10000), {radius: 1})

  useFrame((state, delta)=>{
    ref.current.rotation.x -= delta / 5;
    ref.current.rotation.y -= delta / 5;
  })
  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
        <PointMaterial 
        transparent
        color='yellow'
        size={0.0004}
        sizeAttenuation={true}
        depthWrite={false}/>
      </Points>
    </group>
  )
}

const StartsCanvas = ()=>{
  return (
    <div className='w-full h-auto absolute inset-0 '>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Starts />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StartsCanvas