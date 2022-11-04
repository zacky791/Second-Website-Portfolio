import React from 'react'
import resume from '../Assets/Zakaria_Resumee.pdf'

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="font-bold text-3xl">
                <h1>LOGO</h1>
            </div>
        <div className="hidden md:flex space-x-12">
            <a href="#home" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8' >Home</a>
            <a href="#about" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8' >About</a>
            <a href="#portfolio" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8'>Projects</a>
            <a href="#contact" className='hover:text-yellow-400 font-bold hover:underline hover:decoration-red-500 hover:underline-offset-8'>Contact</a>
        </div>
        <a className='bg-green-500 hidden md:block px-7 py-3 rounded-full 
        text-white hover:bg-yellow-700' href={resume}> My Resume </a>
        </div>
    </nav>
  )
}

export default Navbar

