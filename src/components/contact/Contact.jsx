import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bzrj67y', 'template_yv2h23q', form.current, 'ZMT2FeGhsTbr42Itj')
    e.target.reset()
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Mail has been sent',
      showConfirmButton: false,
      timer: 1500
    })
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

      
      <div className="contact__options">

      
      <article className='contact__option'>
        <AiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>premieraugust28@gmail.com</h5>
        <a href="mailto:premieraugust28@gmail.com" rel="noreferrer" target={"_blank"}>
          Send a message
        </a>
      </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>augustin-kpadonou</h5>
        <a href="https://m.me/#" rel="noreferrer" target={"_blank"}>
          Send a message
        </a>
      </article>
      <article className='contact__option'>
        <SiWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>

        <h5>WhatsApp Me</h5>
        <a href="https://api.whatsapp.com/send?phone=+22879811323" rel="noreferrer" target={"_blank"}>
          Send a message
        </a>
      </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name'  required />
        <input type="text" name='email' placeholder='Your Email'  required />      
        <textarea name="message"rows="7" placeholder='Your Message'  required></textarea>
        <button className='btn btn-primary' type="submit">
          Send Message
        </button>
      </form>
      
        </div>
    </section>
  )
}

export default Contact