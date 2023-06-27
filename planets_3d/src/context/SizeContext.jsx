import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

const Context = createContext();

function SizeContext({children}) {

  
  const [screenSize, setScreenSize] = useState(null);
  useEffect(()=>{
    
    // useEffect for check screen size
 
      if(window.innerWidth < 600){
        setScreenSize('sm')
      } else if(window.innerWidth > 425 && window.innerWidth < 1024){
        setScreenSize('md')
      } else if(window.innerWidth > 1024){
        setScreenSize('lg')
      } 
  
  }, [])

  return (
    <Context.Provider value={{screenSize}}>
      {children}
    </Context.Provider>
  )
}

export  {SizeContext, Context}