import React from 'react'
import './about.css'
import ABOUT_ME from '../../assets/about_me.jpg'

import {HiUserGroup} from 'react-icons/hi' // for team work
import {MdOutlineVolunteerActivism, MdOutlineLeaderboard} from 'react-icons/md' // for volunteering
import {GoCodeReview} from 'react-icons/go' // for review
import {VscFolderLibrary} from 'react-icons/vsc' // for projects

const About = () => {
  return (
    <section id="about">
      <h5>Have some insight</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT_ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <HiUserGroup className="about__icon" />
              <h5>Team Work</h5>
              <small>=success</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>

            <article className="about__card">
              <GoCodeReview className="about__icon" />
              <h5>Collegue's Review</h5>
              <small>5+ reviews</small>
            </article>
          
          </div>

          <p>
          I am a tech-enthusiast who strongly believes in the power of teamwork. With a natural aptitude for learning new concepts quickly, I have honed my skills in Data Structures and Algorithms (DSA) and problem solving. My experience spans across multiple projects, where I have not only contributed as a team member but also served as a team leader.  
          </p>
          
          <p>
          Additionally, I have volunteered with the GKSM NGO, actively working towards spreading digital awareness in rural areas. 
          </p>
          <p>
          Excited to connect and explore opportunities in the tech industry!
          </p>
          <div className="m-auto">
            <a href="#contact" className="btn btn-primary "> Talk to me?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About