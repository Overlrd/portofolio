import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Build with <AiFillHeart/> by Me </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/profile.php?id=100082434036761"><FaFacebookF/></a>
        <a href="https://theuselessweb.com/"><FiInstagram/> </a>
        <a href="https://twitter.com/SOverloord"><BsTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All right reserved </small>
      </div>
    </footer>
  )
}

export default Footer