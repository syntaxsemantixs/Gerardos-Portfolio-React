import React, { useRef } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../stylesheets/App.css";
import "../stylesheets/Contact.css";
// importing the emailjs library
import emailjs from '@emailjs/browser';

export default function Contact() {
  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bou8hac', 'template_3o83xpc', form.current, 'jqm10N66yC4KZBrhY')
            .then((result) => {
                console.log(result.text);
                // the reset function tells the field to reset after entry
                e.target.reset(); 
            }, (error) => {
                console.log(error.text);
        });
    };
  
    return (
    <div className='main-div-contact'>
        <div className='main-head'>
            <Header />
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='section-header'>
            <h2 className='header-h2'>Contact Me</h2>
            </div>
            <div className='center-divs'>
            {/* <label className='name-label'>Name</label> */}
            <input 
                placeholder='Name'
                required
                min={3}
                type="text" 
                name="user_name"
                className='name-input'
                />
            </div>
            <div className='center-divs'>
            {/* <label className='email-label'>Email</label> */}
            <input
                placeholder='Email'
                required 
                type="email" 
                name="user_email" 
                className='email-input'
                />
            </div>
            <div className='center-divs'>
            {/* <label className='message-label'>Message</label> */}
            <textarea 
                placeholder='Message'
                required
                rows={5}
                name="message"
                type='text'
                className='message-textarea'
                ></textarea>
            </div>
            <div className='submite-c-div center-divs'>
                <input type="submit" value="Send" className='submit-contact'/>
            </div>
        </form>
        <div className='main-foot foot-con'>
            <Footer />
        </div>
    </div>
  );
}