import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import  {SiCodeforces} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/gaurang-parmar-0158b0204" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/GaurangParmar1810" target="_blank"><FaGithub /></a>
        <a href="https://codeforces.com/profile/Gaurang1810" target="_blank"><SiCodeforces /></a>
        <a href="https://leetcode.com/GP9717/" target="_blank"><SiLeetcode /></a>
        {/* <a href="https://www.linkedin.com" target="_blank"></a> */}
        
    </div>
  )
}

export default HeaderSocials