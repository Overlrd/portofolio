import React from 'react'
import './certifications.css'
import AVT1 from '../../assets/certif1.png'
import AVT2 from '../../assets/certif2.jpg'
import AVT3 from '../../assets/certif3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'




const data = [

      {
        avatar:AVT1,
        name: 'Google Data Analytics Professional Certificate',
        review: 'Image Classification With Tensorflow'
      
        },
      {
        avatar:AVT1,
        name: 'Google Data Analytics Professional Certificate',
        review: 'Image Classification With Tensorflow'
      
        },
      {
        avatar:AVT1,
        name: 'Google Data Analytics Professional Certificate',
        review: 'Image Classification With Tensorflow'
      
        },
      {
        avatar:AVT1,
        name: 'Google Data Analytics Professional Certificate',
        review: 'Image Classification With Tensorflow'
      
        },
      {
        avatar:AVT1,
        name: 'Google Data Analytics Professional Certificate',
        review: 'Image Classification With Tensorflow'
      
        },
      {
        avatar:AVT1,
        name: 'Google Data Analytics Professional Certificate',
        review: 'Image Classification With Tensorflow'
      
        }
  ]
  




const Certifications = () => {
  return (
    <section id='certifications'>
      <h5>Accomplishment</h5>
      <h2>Certifications</h2>

      <Swiper className="container certifications__container" 
       modules={[Navigation, Pagination, Autoplay]}
       spaceBetween={40}
       slidesPerView={1}
       autoplay={{delay: 2500,
        disableOnInteraction:false,}}
       pagination={{clickable: true}}
       scrollbar={{ draggable: true }}
        >
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="certification">
              <div className="certif__avatar">
                <img src={avatar} />
              </div>
              <h5 className='certif__name'>{name}</h5>
              <small className='certif__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }



      </Swiper>
    </section>
  )
}

export default Certifications