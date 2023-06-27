import React from 'react';
import  {motion} from 'framer-motion';


const SectionWrapper = (Component, idName)=>
function HOC(){
  return(
    <motion.section>
      <span id={idName}>

      </span>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper