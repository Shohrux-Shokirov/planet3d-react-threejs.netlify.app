import React from 'react';
import { Html, useProgress } from '@react-three/drei';

function CanvasLoader() {
  const {progress} = useProgress();
  return (
    <Html>
      <span>
        <p className='text-[14px]'>{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default CanvasLoader