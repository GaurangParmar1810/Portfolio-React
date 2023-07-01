import React from 'react'
import './experience.css'

import {GiAchievement } from 'react-icons/gi'


const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3 className="text-primary">Frontend Development</h3>
          <div className="experience__content">

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate-experienced</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Basic-Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        
        <div className="experience__other">
          <h3 className="text-primary">Other Skills</h3>
          <div className="experience__content">
            
            
            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate-experienced</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>DSA</h4>
                <small className="text-light">Intermediate-experienced</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>OOPs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>Problem Solving</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>Competitive Coding</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          
          </div>
        </div>

        <div className="experinece_backend">
          <h3 className="text-primary">Backend Development</h3>
          <div className="experience__content">
            
            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Basic-Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <div>
                <GiAchievement className="experience_detail-icon" /> 
              </div>
              <div>
                <h4>Flask</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience