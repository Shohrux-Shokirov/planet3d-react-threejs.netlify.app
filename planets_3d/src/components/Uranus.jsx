import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import UranusCanvas from './canvas/UranusCanvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../styles';
import { planetsInfo } from '../constants'
import { useState } from 'react';
import { BiShow , BiHide} from 'react-icons/bi'



function Uranus() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className='w-[80%] h-screen mx-auto p-5'>
      <div className='w-auto absolute z-10 overflow-hidden'>
        <h1 className={styles.title}>Uranus</h1>
        <span className='text-[24px] cursor-pointer'  onClick={() => setShowInfo(!showInfo)} >
          {showInfo ? <BiHide/> : <BiShow/>}
        </span>
        <div className={`${showInfo ? 'opacity-100 p-1' : 'opacity-0'} duration-100`}>
          <p className={styles.detailes}>Surface area: <span>{planetsInfo[0].uranus[0].size}</span></p>
          <p className={styles.detailes}>Age: <span>{planetsInfo[0].uranus[0].age}</span></p>
          <p className={styles.detailes}>Distance from Sun: <span>{planetsInfo[0].uranus[0].distancefromSun}</span></p>
          <p className={styles.detailes}>Mass: <span>{planetsInfo[0].uranus[0].mass}</span></p>
          <a className={styles.link} target='blank' href={planetsInfo[0].uranus[0].link}>Raed more</a>
        </div>
      </div>

      <UranusCanvas />
    </section>
  )
}


export default SectionWrapper(Uranus, 'uranus')