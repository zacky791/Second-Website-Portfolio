import React from 'react'
import classes from '../../UI/Modal.module.css'

const  Xmark = (props) => {
  return (<div className={classes.xicon} onClick={props.hideCart}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
  )
}

export default Xmark