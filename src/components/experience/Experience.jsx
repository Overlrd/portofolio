import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Data Analytics/Machine Learning</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>PYTHON(Analytics)</h4>
            <small className='text-light'>Advanced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>PYTHON(Tensorflow)</h4>
            <small className='text-light'>Advanced</small>
            </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

            <div><h4>R</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

            <div><h4>SQL</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>
          
        </div>
      </div>



      <div className="experience__backend">
      <h3>Mobile/Web Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

            <div><h4>PHP</h4>
            <small className='text-light'>Experienced</small></div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

            <div><h4>HTML/CSS</h4>
            <small className='text-light'>Experienced</small></div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

            <div><h4>JS(React)</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

            <div><h4>C#</h4>
            <small className='text-light'>Intermediate</small></div>
          </article>

        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience