import React from 'react';
import { navPlanets } from '../constants';
import { BsTelegram as Chat } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {

  const [active, setActive] = useState('');

  return (
    <nav className='fixed right-[-20px] top-0 bottom-0 flex flex-col items-center justify-between h-full p-2'>
      <Link to='/' onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
        <img src="./assets/logo.png" alt="" className='w-20 sm:w-28' />
      </Link>
      {navPlanets.map((planet, index) => {
        return (
          <ul className='flex flex-col justify-center h-[0px] my-5' key={index}>
            <a
              href={`#${planet.name}`}
              onClick={() => setActive(planet.name)}
              className={`${active === planet.name ? 'w-12 mr-5 opacity-100' : 'w-7 sm:w-8 opacity-60'} hover:w-12 hover:mr-5 duration-100  hover:opacity-100 text-center`}
              title={planet.name}>
              <img src={planet.icon} alt={planet.name}
                className='w-full' />
              <p className='text-[9px] sm:text-[12px] first-letter:capitalize'>{planet.name}</p>
            </a>
          </ul>
        )
      })}

      <a className='text-[28px] opacity-30 hover:opacity-60 ml-4 mb-4 flex items-end duration-100 w-10 h-10' href="https://t.me/i_am_greatfull" title='Telegram'><Chat /></a>

    </nav>
  )
}

export default Navbar


// planets   <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by piksart - Flaticon</a>