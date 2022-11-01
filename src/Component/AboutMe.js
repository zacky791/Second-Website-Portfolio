import {React} from 'react'
import pic2 from '../Assets/mypic44.jpg'
import Example from "./Tabs";


function AboutMe() {
    
  return (
    <div id='about' className="container flex flex-col items-center md:items-start md:flex-row mt-16 m-auto max-w-5xl"> 
        <img src={pic2} alt="aboutMePic" className='max-w-xs' />
        <div className='md:ml-10'>
        <h1 className='font-bold text-4xl mb-4 mt-8 md:mt-0 text-red-500 text-center md:text-left' >About Me</h1>
        <h2 className='max-w-2xl mb-7 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente sed rerum quaerat, amet corporis suscipit velit delectus consequatur vel, provident accusamus reprehenderit odit illum doloremque adipisci soluta aperiam aliquid.</h2>

        <Example/>
       {/* <div className='flex m-x-0 mt-7 mb-40 space-x-10'>
            <p className='ok'>skills</p>
            <p className='tab-links'>Experience</p>
            <p className='tab-links'>Education</p>
        </div>  */}
       
        </div>
    </div>
  )
}

export default AboutMe


