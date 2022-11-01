import React from 'react'
import classes from './AnimationImg.module.css'

function AnimationImg(props) {
  return (
    <div className={classes.text}>
      <div>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  )
}

export default AnimationImg
