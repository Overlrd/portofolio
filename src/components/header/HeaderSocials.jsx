import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/augustin-kpadonou-590aa5227" rel='noreferrer' target="_blank"><BsLinkedin/></a>
        <a href= "https://github.com/Overlrd" rel='noreferrer'  target="_blank"><FaGithub/>  </a>
        <a href="https://www.kaggle.com/augustinkpadonou/" rel='noreferrer'  target="_blank"><FaKaggle/> </a>

    </div>
  )
}

export default HeaderSocials