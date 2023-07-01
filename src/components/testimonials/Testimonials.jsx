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
    review: 'My coworker is a quick learner who is constantly willing to pick up new skills and expertise. We collaborated on several academic projects, and I saw personally his capacity to understand complicated topics and apply them efficiently.'
  },
  {
    id: 2,
    name: 'Aditya Jadeja',
    image: ADITYA,
    review: 'Gaurang has demonstrated skills in academic projects in addition to his strong coding and problem-solving abilities. His dedicated work and attention to detail have resulted in effective project results that have received favourable reviews from our lecturers.'
  },
  {
    id: 3,
    name: 'Harsh Parmar',
    image: HARSH,
    review: 'Gaurang continually shows strong programming skills and logical thinking. However, one area where he could have an opportunity to get better is in his documentation skills. He is urged to concentrate on project documentation in order to nurture teamwork.'
  },
  {
    id: 4,
    name: 'Chintan Kanpariya',
    image: CHINTAN,
    review: 'Gaurang has consistently demonstrated leadership qualities in multiple projects on which we collaborated. He gives leadership and direction, ensuring that our initiatives stay on track and that deadlines are met.'
  },
  {
    id: 5,
    name: 'Darshit Bhakhar',
    image: DARSHIT,
    review: 'Although Gaurang excels in technical areas, he has the capacity to increase his knowledge of the financial side of projects. '
  },
  {
    id: 6,
    name: 'Dharva Patel',
    image: DHARVA,
    review: `My colleague's sense of humour has made our collaboration pleasurable outside of the academics. He brings a positive and light-hearted attitude to the team which creates a pleasant and motivating work atmosphere.`
  },
  {
    id: 7,
    name: 'Manan Dankhara',
    image: MANAN,
    review: 'He is skilled at communicating complex technological concepts to non-technical people. '
  },
  {
    id: 8,
    name: 'Parth Patel',
    image: PARTH,
    review: 'Gaurang is a good programmer and problem solver who works well with colleagues. He will remain a valued asset with continued leadership growth.'
  },
  {
    id: 9,
    name: 'Parth Prajapati',
    image: PARTH_,
    review: 'If the deadline is near then he is the person on whom I can put my trust on. He is a quick learner and a good team player.'
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