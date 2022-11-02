import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="font-bold text-3xl">
                <h1>LOGO</h1>
            </div>
        <div className="hidden md:flex space-x-12">
            <a href="#home" className='hover:text-yellow-400 font-bold' >Home</a>
            <a href="#about" className='hover:text-yellow-400 font-bold' >About</a>
            <a href="#portfolio" className='hover:text-yellow-400 font-bold'>Projects</a>
            <a href="#contact" className='hover:text-yellow-400 font-bold'>Contact</a>
        </div>
        <button className='bg-green-500 hidden md:block px-7 py-3 rounded-full 
        text-white hover:bg-yellow-700'> Let's Connect </button>
        </div>
    </nav>
  )
}

export default Navbar

