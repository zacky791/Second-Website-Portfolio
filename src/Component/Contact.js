import { useState,useRef } from "react"
import InputForm from "../UI/InputForm"
import classes from './Contact.module.css'
import pic from "../Assets/spacecat.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const initialDetail= {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    const form = useRef();

    const [formDetail,setFormDetail] = useState(initialDetail)
    const [status,setStatus] = useState('')
  

    const changeHandlerFirstName = (e) => {
        setFormDetail({ ...formDetail, firstName: e.target.value})
    }

    const changeHandlerLastName = (e) =>{
        setFormDetail({ ...formDetail, lastName: e.target.value})
    }

    const changeHandlerEmail = (e) =>{
        setFormDetail({ ...formDetail, email: e.target.value})
    }

    const changeHandlerPhoneNumber = (e) =>{
        setFormDetail({ ...formDetail, phone: e.target.value})
    }

    const changeHandlerMessage = (e) =>{
        setFormDetail({ ...formDetail, message: e.target.value})
    }

    // const onFormUpdate = (category,value) => {
    //     console.log(category,value)
    //     setFormDetail({...formDetail,
    //        [category]:value} )
    // }
    
    const sendEmail = (e) => {
        e.preventDefault()
        setFormDetail(initialDetail)
        console.log(formDetail)
    
        emailjs.sendForm('service_8qnti8g', 'template_l0z0kv4', form.current, 'Vgxe09W1admkxYKsd')
          .then((result) => {
              console.log(result.text);
              setStatus(result.text)

          }, (error) => {
              console.log(error.text);
          });
      };

    return(<div id="contact">
        <h2 className="text-center text-red-500 mt-8 text-4xl font-bold">Get In Touch</h2>
        <div  className="flex max-w-4xl m-auto mt-10 flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 ">
                <img src={pic} alt="cartoon cat" className="max-w-xs animate-bounce"/>
            <form className={classes.containerContactForm} onSubmit={sendEmail} ref={form}>
                <InputForm 
                onChange={changeHandlerFirstName}
                className="text-red-500"
                type='text'
                placeholder='First Name' 
                value={formDetail.firstName}
                name='name'
                />
                <InputForm
                onChange={changeHandlerLastName}
                className="text-red-500"
                type='text'
                placeholder='Last Name'
                value={formDetail.lastName}
                name='lastName'
                />
                <InputForm
                onChange={changeHandlerEmail}
                className="text-red-500"
                type={'email'}
                placeholder={'Email Address'}
                value={formDetail.email}
                name='email'
                />
                <InputForm
                onChange={changeHandlerPhoneNumber}
                className="text-red-500"
                type={'number'}
                placeholder='Phone No.'
                value={formDetail.phone}
                name='number'
                />
                <InputForm
                onChange={changeHandlerMessage}
                className={classes.message}
                type='text'
                placeholder={'Message'}
                value={formDetail.message}
                name='message'
                 />
             <button type="submit" className={classes.btnSend} >Send</button>
            </form>
            <h1 className={`classes.${status === "OK" ? "success" : "danger"}`}>
                {status && alert("Email Send")}
            </h1>
            </div>
        </div>
    )
}

export default Contact

