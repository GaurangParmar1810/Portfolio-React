import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/my_img.png'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <div className="container header__container">
      <h5>Hi I'm</h5>
      <h1>Gaurang Parmar</h1>
      <h5 className="text-light"> Team-worker | Fast learner | Web-developer </h5>
      <CTA />
      
      <HeaderSocials></HeaderSocials>
      <div className="header__img__flex">
        <div className="my-img">
          <img src={ME} alt="my-img" />
        </div>
      </div>
      
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Header