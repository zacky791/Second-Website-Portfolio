import React from 'react'
import work1 from "../Assets/work-1.png"
import work2 from "../Assets/work-2.png"
import work3 from "../Assets/work-3.png"
import bravepic from '../Assets/bravepic.PNG'
import projectpic from '../Assets/projpic2.PNG'
import projectpic2 from '../Assets/projpic3.PNG'
import AnimationImg from '../UI/AnimationImg'
import classes from '../UI/AnimationImg.module.css'


function Portfolio() {
  return (
    <div id='portfolio' className=' m-auto max-w-max mt-10 space-x-0'>
      <h1 className='text-4xl font-bold mb-10 text-red-500 text-center md:text-left' >My Project</h1>
        <div className="container flex md:space-x-10 flex-col md:flex-row items-center">
        <div className={classes.container1}>
            <img src={projectpic} alt="work1" className='max-w-xs h-72' />
            <AnimationImg title="My Portfolio Website" description="(React,Tailwind CSS)"
            landingPage={'https://zakariazainuddin.netlify.app/'}/>
        </div>
        <div className={classes.container1}>
            <img src={bravepic} alt="work1" className='max-w-xs h-72' />
            <AnimationImg title="Brave Or Coward" description="Whoever gets the 100 points first wins !" software="(Html,Css,Javascript)" 
            landingPage={"https://brave-or-coward.netlify.app/"} github={'https://github.com/zacky791/Brave-Or-Coward-Game'}/>
        </div>
        <div className={classes.container1}>
            <img src={projectpic2} alt="work1" className='max-w-xs h-72' />
            <AnimationImg title="GrabFood" description="Description"/>
        </div>
      </div>
      <div className="container flex md:space-x-10 flex-col md:flex-row items-center">
        <div className={classes.container1}>
            <img src={work1} alt="work1" className='max-w-xs' />
            <AnimationImg title="Title" description="Description"/>
        </div>
        <div className={classes.container1}>
            <img src={work2} alt="work1" className='max-w-xs' />
            <AnimationImg title="Title" description="Description"/>
        </div>
        <div className={classes.container1}>
            <img src={work3} alt="work1" className='max-w-xs' />
            <AnimationImg title="Title" description="Description"/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

//'relative overflow-hidden before:from-red-500 before:opacity-100 before:absolute before:h-0 before:ease-in-out before:content-none hover:before:h-full'
//space-y-14 md:space-y-0