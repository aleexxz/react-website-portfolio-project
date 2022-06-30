import React, { useRef } from 'react'
import "./contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { AiOutlineWhatsApp } from "react-icons/ai"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ljk1s8n', 'service_ljk1s8n', form.current, 'M0uXHQI6I2-DZI-3J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>rcosminalexandru@gmail.com</h5>
                        <a href="mailto:rcosminalexandru@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>My facebook</h5>
                        <a href="https://facebook.com" target="_blank">Send a message on Facebook</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineWhatsApp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>My WhatsApp</h5>
                        <a href="https://api.whatsapp.com/send?phone=+40722123456" target="_blank">Send a message on WhatsApp</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <textarea name="message" cols="30" rows="7" placeholder='Send me a message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact