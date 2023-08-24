import React from 'react'
import './portfoliyo.css'

import IMG1 from '../../assets/portfoliyo-1.png'
import IMG2 from '../../assets/portfoliyo-2.jpeg'
import IMG3 from '../../assets/portfoliyo-3.png'
import IMG4 from '../../assets/portfoliyo-4.jpg'
import IMG5 from '../../assets/portfoliyo-5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Central Mess Management System',
    discription: '"Central Mess Management System" is a user-friendly web project that simplifies mess operations. Developed using HTML, Bootstrap, CSS, Node.js, and MongoDB. It integrates the Mapbox API for the "locate us" feature, along with functionalities such as customer management, revenue statistics, inventory control, and customer feedback. This project demonstrates my proficiency in web development and problem-solving in the real life domain.',
    github: 'https://github.com/GaurangParmar1810/CentralMessManagementSystem.git',
    demo: 'https://centralmess-cor3.onrender.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Train Food Ordering',
    discription: '"Train Food Ordering System": A web project that revolutionizes the way food is ordered on trains. Experience the future with drone delivery and on-station options. Utilizing technologies like HTML, CSS, Bootstrap for frontend, and Node.js, MongoDB for backend. Customers enjoy ordering during their journey or at stations. Elevate the train dining experience with this innovative solution.',
    github: 'https://github.com/GaurangParmar1810/TrainFoodOrdering.git',
    demo: 'https://trainfoodorder.onrender.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Driving Test Management System',
    discription: '"Driving Test Management System": This project is constructed in C language which makes use of a variety of concepts like data structures, multi-threading, pipes, signals,Inter process communication, File I/O, processes, and make-file, etc. The program traverses through all the candidate`s details, performs the necessary driving-related checks then stores the final passed/rejected candidate lists into file and can be run using make-file.',
    github: 'https://github.com/GaurangParmar1810/DrivingTestManagementSystem.git'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Music Playlist Management',
    discription: '"Music Playlist Management": The data Structures in C++ and OOPs are used in this project, which is centred on managing music playlists. Here user can include/delete songs, add songs to Queue, create/remove playlist and sort the songs of playlist.',
    github: 'https://github.com/GaurangParmar1810/MusicPlaylistManagement.git'
  },
  {
    id: 5,
    image: IMG5,
    title: 'LDPC Decoder',
    discription: '"LDPC Decoder": LDPC decoder is implemented in C++ langauge using some Data Structures. The communication channel introduces the noise in the original transmitted message which was decoded using LDPC decoding methods.',
    github: 'https://github.com/GaurangParmar1810/LDPC_Decoder.git'
  }
];
const Portfoliyo = () => {
  return (
    <section id="portfoliyo">
      <h5>Work of Mine</h5>
      <h2>Portfolio</h2>

      <div className="container portfoliyo__container">
        {
          data.map((item) => {
            return (
              <article className="portfoliyo__item">
                <div className="portfoliyo__item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="portfoliyo__item-content">
                  <h3>{item.title}</h3>
                  <p>{item.discription}</p>
                  <div className="portfoliyo__item-cta">
                    <a href={item.github} className="btn m-auto" target="_blank">Github</a>
                    {item.demo ? (
  <a href={item.demo} className='btn btn-primary m-auto' target="_blank">Live Demo</a>
) : null}
                  </div>
                </div>

                
              </article>
            )
          })
          
        }
        
      </div>

    </section>
  )
}

export default Portfoliyo