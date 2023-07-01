import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/gaurang-parmar-0158b0204" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/GaurangParmar1810" target="_blank"><FaGithub /></a>
        {/* <a href="https://www.linkedin.com" target="_blank"></a> */}
        
    </div>
  )
}

export default HeaderSocials