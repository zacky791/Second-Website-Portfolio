import {React} from 'react'
import pic2 from '../Assets/mypic44.jpg'
import Example from "./Tabs";


function AboutMe() {
    
  return (
    <section id='about' className="container flex flex-col items-center md:items-start md:flex-row mt-16 m-auto md:max-w-5xl max-w-md"> 
        <img src={pic2} alt="aboutMePic" className='max-w-xs' />
        <div className='md:ml-10'>
        <h1 className='font-bold text-4xl mb-4 mt-8 md:mt-0 text-red-500 text-center md:text-left' >About Me</h1>
        <h2 className='max-w-2xl mb-5 text-base'>Self-taught programmer whose has been dedicated day and
          night studying in order to be a great programmer. Outgoing and
          enthusiastic employee with great adaptability in various working
          environments. Passionate at learning and can lead people in a
          team. My dream is to explore and dominate tons of knowledge regarding in 
          programming.
          </h2>

        <Example/>
       {/* <div className='flex m-x-0 mt-7 mb-40 space-x-10'>
            <p className='ok'>skills</p>
            <p className='tab-links'>Experience</p>
            <p className='tab-links'>Education</p>
        </div>  */}
       
        </div>
    </section>
  )
}

export default AboutMe


