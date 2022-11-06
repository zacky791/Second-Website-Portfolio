import { Fragment } from "react"
import ReactDOM from 'react-dom'
import Xmark from "../Assets/Icons/xIcon"
import classes from './Modal.module.css'
//backdrop gelapkan and modalOverlay display data


const Modal = (props) =>{
    const BackDrop = () =>{
        return<div className={classes.backdrop}/>
    }
    
    const ModalOverlay = () =>{
        return(
            <div className={classes.modal}>
                <Xmark hideCart={props.hideCart} />
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }
    
    const portalElement = document.getElementById('overlays')
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal