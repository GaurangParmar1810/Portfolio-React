import React from 'react'
import './portfoliyo.css'

import IMG1 from '../../assets/portfoliyo-1.png'
import IMG2 from '../../assets/portfoliyo-2.jpeg'

const Portfoliyo = () => {
  return (
    <section id="portfoliyo">
      <h5>Work of Mine</h5>
      <h2>Portfolio</h2>

      <div className="container portfoliyo__container">
        <article className="portfoliyo__item">
          <img src={IMG1} alt="" />
          <div className="portfoliyo__item-image">
            <h3>This is the portfoliyo item</h3>
            <a href="https://github.com" className="btn" target="_blank">Github</a>
            <a href="https://" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfoliyo