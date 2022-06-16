import React from 'react'
import './about.css'
import ME from '../../assets/vador.png'
import {FaAward} from 'react-icons/fa'
import {ImFolderOpen} from 'react-icons/im'


const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2> 

     <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Ideas</h5>
                <small>∞</small>
              
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ years Working</small>
              </article>

              <article className='about__card'>
                <ImFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>Hi My name is Augustin KPADONOU, computer enthusiast, fan of music and anime.
               I am currently training in Data Science and machine learning.
               You can take a look at my <a href="#certifications">certifications</a>.
               I am fascinated by the way we consume and produce data and all the usefulness that
                can be drawn from this data through analytics and machine
                learning to create powerful and useful tools that will improve our standard of living.
               </p>

               <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
     </div>
    </section>
  )
}

export default About