import React from 'react'
import classes from './AnimationImg.module.css'
// import {ReactComponent as Githubs} from '../Assets/github2.svg'
import github from '../Assets/githubgreen.svg'
import liverservericon from '../Assets/landingpageicon2.png'

function AnimationImg(props) {
  return (
    <div className={classes.text}>
      <div>
        <p className='font-bold'>{props.title}</p>
        <p className='text-xs italic mt-2'>{props.description}</p>
        <p className='text-xs italic mt-2'>{props.software}</p>
        <div className='flex align-middle justify-center mt-4'>
        <a href={props.github}> <img src={github} className='' alt="github" /> </a>
        <a href={props.landingPage}> <img src={liverservericon} className=' ml-4' alt="landing page" /> </a>
        </div>
      </div>
    </div>
  )
}

export default AnimationImg
