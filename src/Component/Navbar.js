import React from 'react'
import resume from '../Assets/Resumezack.pdf'
import "./Navbar.css"

const Navbar = (props) => {

  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
           <h1 className="font-bold text-3xl">Zack</h1>
        <div className="hidden md:flex space-x-12">
            <a href="#home" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8' >Home</a>
            <a href="#about" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8' >About</a>
            <a href="#portfolio" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8'>Projects</a>
            <a href="#contact" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8'>Contact</a>
        </div>
        <a className='bg-green-500 hidden md:block px-7 py-3 rounded-full 
        text-white hover:bg-yellow-700' href={resume}> My Resume </a>

        <button onClick={props.showCart} className={`${false? "open":""} hamburger md:hidden focus:outline-none`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        </div>
    </nav>
  )
}

export default Navbar

