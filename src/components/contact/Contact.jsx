import React from 'react'
import './contact.css'

import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_msrvjlr', 'template_4d7zpmp', form.current, 'yBqQ1rZkkFRi_Lkge')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id="contact">
      <h5>To discuss skills and experience in more detail </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>ggparmar1810@gmail.com</h5>
            <a href="mailto:ggparmar1810@gmail.com" target="_blank">Send a mail</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icons'/>
            <h4>LinkedIn</h4>
            <h5>gaurang-parmar-0158b0204</h5>
            <a href="https://www.linkedin.com/in/gaurang-parmar-0158b0204" target="_blank">Connect with me</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons'/>
            <h4>WhatsApp</h4>
            <h5>Gaurang Parmar</h5>
            <a href="https://api.whatsapp.com/send?phone=917383560012" target="_blank">Send a Message</a>
          </article>


          
        </div>
        {/* end of contact option  */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Name' required/>
            <input type="email" name='email' placeholder='Email' required/>
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact