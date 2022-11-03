import React from 'react'
import classes from './AnimationImg.module.css'
import {ReactComponent as Githubs} from '../Assets/github2.svg'
import github from '../Assets/githubgreen.svg'

function AnimationImg(props) {
  return (
    <div className={classes.text}>
      <div>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.description}>{props.description}</p>
        <a href="https://github.com/"> <img src={github} className='mt-4 ml-14' alt="github" /> </a>
      </div>
    </div>
  )
}

export default AnimationImg
