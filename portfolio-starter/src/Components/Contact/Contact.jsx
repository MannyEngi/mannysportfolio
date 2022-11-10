import React, {useContext, useRef, useState} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import {themeContext} from "../../Context";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r0vsmtb', 'template_zap2m5b', form.current, '9fs8Hu9aB8PdikBQg')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button"/>
                    <span> {done && "Thank you for contacting me!"}</span>
                </form>
            </div>
        </div>


    )
}

export default Contact