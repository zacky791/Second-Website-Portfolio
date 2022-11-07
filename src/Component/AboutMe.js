import {React} from 'react'
import pic2 from '../Assets/mypic44.jpg'
import Example from "./Tabs";


function AboutMe() {
    
  return (
    <div id='about' className="container flex flex-col items-center md:items-start md:flex-row mt-16 m-auto md:max-w-5xl max-w-md"> 
        <img src={pic2} alt="aboutMePic" className='max-w-xs' />
        <div className='md:ml-10'>
        <h1 className='font-bold text-4xl mb-4 mt-8 md:mt-0 text-red-500 text-center md:text-left' >About Me</h1>
        <h2 className='max-w-2xl mb-5 text-base'>I am self taught developer and been commiting to learn coding for about 
        6 months straight already. My dedication so pure due to my deep interest into coding. In my journey I start my
        planning with strengh the core of fundamental html , CSS and Javascript .Doing a lot of project so that
        I able to gains lot of confident and trying develop critical thinking</h2>

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


