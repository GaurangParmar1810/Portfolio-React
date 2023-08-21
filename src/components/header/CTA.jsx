import React from 'react'
import './header.css'
import CV from '../../assets/Gaurang_Parmar_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'> Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's have some talk!</a>
    </div>
  )
}

export default CTA