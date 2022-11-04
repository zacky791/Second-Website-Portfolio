import React, { useState } from 'react'
import resume from '../Assets/Zakaria_Resumee.pdf'
import "./Navbar.css"

const Navbar = () => {

  const [click,setClick] = useState(false)

  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
           <h1 className="font-bold text-3xl">LOGO</h1>
        <div className="hidden md:flex space-x-12">
            <a href="#home" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8' >Home</a>
            <a href="#about" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8' >About</a>
            <a href="#portfolio" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8'>Projects</a>
            <a href="#contact" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8'>Contact</a>
        </div>
        <a className='bg-green-500 hidden md:block px-7 py-3 rounded-full 
        text-white hover:bg-yellow-700' href={resume}> My Resume </a>

        <button onClick={()=>{setClick(!click)}} className={`${click? "open":""} hamburger md:hidden focus:outline-none`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        </div>
        <div className='md:hidden'>
          <div id="menu" className={`${click? "":"hidden"} ${click? "flex":""} absolute flex-col items-center self-end  py-8 mt-10 space-y-6
           font-bold bg-red-500 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
            <a onClick={()=>{setClick(!click)}} href="#home">Home</a>
            <a onClick={()=>{setClick(!click)}} href="#about">About</a>
            <a onClick={()=>{setClick(!click)}} href="#portfolio">Projects</a>
            <a onClick={()=>{setClick(!click)}} href="#contact">Contact</a>
            <a href={resume}>My Resume</a>
           </div>
        </div>
    </nav>
  )
}

export default Navbar

