import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {GiAchievement } from 'react-icons/gi'
import {FaLaptopCode} from 'react-icons/fa'
import {VscFeedback} from 'react-icons/vsc'
import {BiMessageSquareDetail} from 'react-icons/bi'

import { useState,useEffect } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [tootlTips, setTootlTips] = useState(null);

  const handleMouseEnter = (e) => {
    setTootlTips(e.target.title);
  };

  const handleMouseLeave = () => {
    setTootlTips(null);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsNavVisible(currentScrollPos > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isNavVisible ? 'show' : ''}>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title="Home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <AiOutlineHome /> 
        <span className="tooltip">{tootlTips}</span>
      </a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}  title="About Me" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <AiOutlineUser /> 
      <span className="tooltip">{tootlTips}</span>
      </a>
      
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title="Skill-set" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <GiAchievement /> 
        <span className="tooltip">{tootlTips}</span>
      </a>
      
      <a href="#portfoliyo" onClick={() => setActiveNav('#portfoliyo')} className={activeNav === '#portfoliyo' ? 'active' : ''} title="View Protfolio" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <FaLaptopCode /> 
        <span className="tooltip">{tootlTips}</span>
      </a>
      
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''} title="Take a look of Testinomials" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <VscFeedback /> 
        <span className="tooltip">{tootlTips}</span>
      </a>
      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title = "Contact Me" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <BiMessageSquareDetail /> 
        <span className="tooltip">{tootlTips}</span>
      </a>
    </nav>
  )
}

export default Nav