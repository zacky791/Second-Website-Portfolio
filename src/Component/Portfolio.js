import React from 'react'
// import bravepic from '../Assets/brave.PNG'
import projectpic from '../Assets/projpic2.PNG'
import projectpic2 from '../Assets/projpic3.PNG'
import AnimationImg from '../UI/AnimationImg'
import classes from '../UI/AnimationImg.module.css'
import omnifood from '../Assets/omnifood.PNG' 
import spotify from '../Assets/spotify.PNG'
import ai from "../Assets/ai.PNG"
import zackbank from '../Assets/zackbankpic.PNG'


function Portfolio() {
  return (
    <div id='portfolio' className=' m-auto max-w-max mt-10'>
      <h1 className='text-4xl font-bold mb-10 text-red-500 text-center md:text-left' >My Projects</h1>
        <div className="container flex md:space-x-10 flex-col md:flex-row items-center ">
        <div className={classes.container1}>
            <img src={omnifood} alt="" className='w-auto h-72' />
            <AnimationImg title="Omni Food" description="" software="Html,Css,Javascript"
            landingPage={'https://omni-foodss.netlify.app/'} github={'https://github.com/zacky791/Omni-Food-'}/>
        </div>
        <div className={classes.container1}>
            <img src={ai} alt="" className='w-auto h-72' />
            <AnimationImg title="Artificial Intellegance" description="" software="React,CSS" 
            landingPage={"https://artificial-intelligence3.netlify.app/"} github={'https://github.com/zacky791/Artificial-Intelligence'}/>
        </div>
      </div>
      <div className="container flex md:space-x-10 flex-col md:flex-row items-center">
      <div className={classes.container1}>
            <img src={projectpic} alt="" className='w-auto h-72' />
            <AnimationImg title="My Portfolio" description="" software='React,Tailwind CSS'
            landingPage={'https://zakariazainuddin.netlify.app/'} github={''}
            />
        </div>
        <div className={classes.container1}>
            <img src={zackbank} alt="" className='w-auto h-72' />
            <AnimationImg title="ZackBank" description="" software='React,Tailwind CSS'
            landingPage={'https://zackbank.netlify.app/'} github={'https://github.com/zacky791/ZackBank'}/>
        </div>
      </div>
      <div className="container flex md:space-x-10 flex-col md:flex-row items-center">
        <div className={classes.container1}>
            <img src={projectpic2} alt="" className='w-auto h-72' />
            <AnimationImg title="GrabFood" description="" software='React,Tailwind CSS'
            landingPage={''} github={'https://github.com/zacky791/grabfood-project'}/>
        </div>
        <div className={classes.container1}>
            <img src={spotify} alt="" className='w-auto h-72' />
            <AnimationImg title="Spotify (Future Project)" description="" software='Next.js, Middleware, Spotify API, Tailwind, NextAuth, Recoil'
            landingPage={''} github={''}
            />
        </div>
                 {/* <div className={classes.container1}>
            <img src={bravepic} alt="" className='w-auto h-72' />
            <AnimationImg title="Brave Or Coward" description="Whoever gets the 100 points first wins !" software="(Html,Css,Javascript)" 
            landingPage={"https://brave-or-coward.netlify.app/"} github={'https://github.com/zacky791/Brave-Or-Coward-Game'}/>
        </div> */}
      </div>
    </div>
    
  )
}

export default Portfolio

//'relative overflow-hidden before:from-red-500 before:opacity-100 before:absolute before:h-0 before:ease-in-out before:content-none hover:before:h-full'
//space-y-14 md:space-y-0