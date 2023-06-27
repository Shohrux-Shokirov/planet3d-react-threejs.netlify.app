import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from './canvas/HeroCanvas';
import { styles } from '../styles';

function Hero() {

  return (
    <section className='w-[80%] h-screen  p-5 text-center mx-auto flex justify-center'>
      <motion.div
        className='absolute'
        initial={{ scale: 2, y: 300 }}
        animate={{ opacity: 0 }}
        transition={{ duration: .1, delay: 20 }}
      >
        <div className='flex flex-row items-center justify-center'>
          <h1 className={styles.title2}>Sp</h1>
          <span><img className='w-20' src="./assets/logo.png" alt="" /></span>
          <h1 className={styles.title3}>ce</h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
        >
          <span>Downloading 3D objects...</span>
        </motion.p>
      </motion.div>
      <motion.div animate={{ y: 100, opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .7, delay: 20.6 }} className='w-auto absolute z-10 overflow-hidden'>
        <h1 className={styles.title}>Planet3d</h1>

        <p className={styles.detailes}>Let's learn Solar System</p>

      </motion.div>


      <motion.div animate={{ y: -130, opacity: 1 }} initial={{ opacity: 0 }}
        transition={{ duration: 2, delay: 20.9 }}>
        <HeroCanvas />
      </motion.div>
    </section>
  )
}

export default Hero