import { BrowserRouter } from 'react-router-dom';
import Earth from './components/Earth';
import Hero from './components/Hero';
import Jupiter from './components/Jupiter';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Moon from './components/Moon';
import Navbar from './components/Navbar';
import Neptune from './components/Neptune';
import Saturn from './components/Saturn';
import StartsCanvas from './components/Starts';
import Sun from './components/Sun';
import Uranus from './components/Uranus';
import Venus from './components/Venus';


function App() {

  return (
    <BrowserRouter>
      <div className='bg-black text-white relative min-h-screen overflow-x-hidden'>
        <StartsCanvas />
        <Navbar />
        <Hero />
        <Earth />
        <Moon />
        <Mars />
        <Saturn />
        <Jupiter />
        <Venus />
        <Neptune />
        <Mercury />
        <Uranus />
        <Sun />
      </div>
    </BrowserRouter>
  )
}

export default App