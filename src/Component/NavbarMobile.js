import React from 'react'
import Modal from '../UI/Modal'
import resume from '../Assets/Resumezack.pdf'

function NavbarMobile(props) {
    
  return (
    <Modal hideCart={props.hideCart}>
    <div>
      <div id="menu" className={`${false? "hidden":""} ${false? "":"flex"} absolute flex-col items-center self-end  py-8 mt-2 space-y-6
       font-bold bg-red-500 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
        <a onClick={props.hideCart} href="#home">Home</a>
        <a onClick={props.hideCart} href="#about">About</a>
        <a onClick={props.hideCart} href="#portfolio">Projects</a>
        <a onClick={props.hideCart} href="#contact">Contact</a>
        <a href={resume}>My Resume</a>
       </div>
    </div>
    </Modal>
  )
}

export default NavbarMobile
