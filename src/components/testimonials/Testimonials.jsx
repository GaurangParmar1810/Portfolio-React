import React from 'react'
import './testimonials.css'

import {Pagination, Navigation,EffectCoverflow} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import HARSH from '../../assets/harsh.jpg'
import ADITYA from '../../assets/aditya.jpg'
import AGAM from '../../assets/agam.jpg'
import CHINTAN from '../../assets/chintan.jpg'
import DARSHIT from '../../assets/darshit.jpg'
import DHARVA from '../../assets/dharva.jpg'
import MANAN from '../../assets/manan.jpg'
import PARTH from '../../assets/parth.jpg'
import PARTH_ from '../../assets/parth_.jpg'

const data = [
  {
    id: 1,
    name: 'Agam Mistry',
    image: AGAM,
    review: 'review'
  },
  {
    id: 2,
    name: 'Aditya Jadeja',
    image: ADITYA,
    review: 'review'
  },
  {
    id: 3,
    name: 'Harsh Parmar',
    image: HARSH,
    review: 'review'
  },
  {
    id: 4,
    name: 'Chintan Kanpariya',
    image: CHINTAN,
    review: 'review'
  },
  {
    id: 5,
    name: 'Darshit Bhakhar',
    image: DARSHIT,
    review: 'review'
  },
  {
    id: 6,
    name: 'Dharva Patel',
    image: DHARVA,
    review: 'review'
  },
  {
    id: 7,
    name: 'Manan Dankhara',
    image: MANAN,
    review: 'review'
  },
  {
    id: 8,
    name: 'Parth Patel',
    image: PARTH,
    review: 'review'
  },
  {
    id: 9,
    name: 'Parth Prajapati',
    image: PARTH_,
    review: 'review'
  }
];
const Testimonials = () => {
  
  return (
    <section id="testimonials">
      <h5>Review from colleague</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        effect = "coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          "rotate": 0,
          "stretch": 0,
          "depth": 100,
          "modifier": 2.5,
          "slideShadows": true
        }}
        modules={[EffectCoverflow,Pagination,Navigation]}
        // spaceBetween={50}
        pagination={{el:'.swiper-pagination',clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {
          data.map((item) => {
            return (
              <SwiperSlide className="testimonial swiper_container" key={item.id}>
                <div className="colleague_image">
                  <img src={item.image} alt={item.name} />
                </div>
                {/* <div className="colleague_content"> */}
                  <h5 className="colleague_name">{item.name}</h5>
                  <small className="colleague_review">{item.review}</small>
                {/* </div> */}
              </SwiperSlide>
            );
          })
        }
        <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  )
}

export default Testimonials