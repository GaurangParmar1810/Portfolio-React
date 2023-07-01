import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {GiAchievement } from 'react-icons/gi'
import {FaLaptopCode} from 'react-icons/fa'
import {VscFeedback} from 'react-icons/vsc'
import {BiMessageSquareDetail} from 'react-icons/bi'

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <GiAchievement /> </a>
      <a href="#portfoliyo" onClick={() => setActiveNav('#portfoliyo')} className={activeNav === '#portfoliyo' ? 'active' : ''}> <FaLaptopCode /> </a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <VscFeedback /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
    </nav>
  )
}

export default Nav