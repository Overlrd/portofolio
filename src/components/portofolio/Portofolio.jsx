import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portofolio1.jpg'
import IMG2 from '../../assets/portofolio2.jpg'
import IMG3 from '../../assets/portofolio3.jpg'
import IMG4 from '../../assets/portofolio4.jpg'
import IMG5 from '../../assets/portofolio5.jpg'
import IMG6 from '../../assets/portofolio6.jpg'
import IMG7 from '../../assets/portofolio8.png'


const data = [

  {
    id:1,
    image: IMG7,
    title: 'Cyclistic Bike Share Data Analysis Capstone Project',
    github: 'https://github.com/Overlrd/Cyclistic-Capstone-Project',
    demo: 'https://github.com/Overlrd/Cyclistic-Capstone-Project'
  
    },
  {
    id:2,
    image: IMG6,
    title: 'Image Classification With Tensorflow',
    github: 'https://github.com',
    demo: 'https://github.com'
  
    },
  {
    id:3,
    image: IMG6,
    title: 'Image Classification With Tensorflow',
    github: 'https://github.com',
    demo: 'https://github.com'
  
    },
  {
    id:4,
    image: IMG6,
    title: 'Image Classification With Tensorflow',
    github: 'https://github.com',
    demo: 'https://github.com'
  
    },
  {
    id:5,
    image: IMG6,
    title: 'Image Classification With Tensorflow',
    github: 'https://github.com',
    demo: 'https://github.com'
  
    },
  {
    id:6,
    image: IMG6,
    title: 'Image Classification With Tensorflow',
    github: 'https://github.com',
    demo: 'https://github.com'
  
    }
        ]





const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className='container portofolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portofolio__item">
                <div className="potofolio__item-image">
                  <img src={image} alt={title} />
                </div>
               <h3>{title}</h3>
              <div className="portofolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
              </div>

               </article>
            )
          } )
        }        
      </div>
    </section>
  )
}

export default Portofolio