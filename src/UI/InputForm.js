
import classes from './InputForm.module.css'

const InputForm = (props) =>{
    return(
        <input 
                className={`${classes.inputForm} ${props.className}`} //module.css + tailwind (dope)
                onChange={props.onChange} 
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
         />
    )
}

export default InputForm