import React, { useState } from "react";
import "./contact.css";
import phone from '../../img/phone.jpg';
import email from '../../img/email.jpg';
import adress from '../../img/adress.jpg';
import { useRef } from "react";
import emailjs from 'emailjs-com';
import {useContext} from "react"
import { ThemeContext } from "../../context";

const Contact = () =>{

    const formref=useRef();

    const [done,setDone]=useState(false);
    const theme= useContext(ThemeContext)
  const darkMode=theme.state.darkMode;

    const handleSubmit =(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_dswbc5j', 'template_iurfgdm', formref.current, 'user_wpo36JLEevBRs8tHAGC71')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
        <div className="c-left">
        <h1 className="c-title"> Let's get Connected</h1>
        <div className="c-info">
        <div className="c-info-item"> 
        <img  src={email} alt="" className="c-icon"/>
        pavanmuttange@gmil.com
        </div>
        <div className="c-info-item"> 
        <img  src={phone} alt="" className="c-icon"/>
        +91 9663096024
        </div>
        <div className="c-info-item"> 
        <img  src={adress} alt="" className="c-icon"/>
        A 165/3 dos housing colony 
        jeevan bhima nagar
        bangalore-560075 
        </div>
        </div>
        </div>
        <div className="c-right">
        <p className="c-desc"><b>Want to hire me</b>,Please drop a mail
        </p>
        <form ref={formref} onSubmit={handleSubmit}>
        < input  style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="name" name="user_name"/>
        < input  style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="subject" name="user_subject"/>
        < input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="message" name="message" />
        <button>submit</button>
        {done && "  thank you..."}
        </form>
        </div>
        </div>
        </div>
    )
}
export default Contact;