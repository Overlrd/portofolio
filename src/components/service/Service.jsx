import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              MACHINE LEARNING
            </h3>
          </div>
          <ul className="service__list">

          <li><BiCheck className='service__list-icon'/> 
            <p>Stock market forecasting</p>
            </li>

            
          <li><BiCheck className='service__list-icon'/> 
            <p>Natural language understanding</p>
            </li>


            <li><BiCheck className='service__list-icon'/> 
            <p>Sentiment analysis</p>
            </li>

            <li><BiCheck className='service__list-icon'/> 
            <p>Image recognition</p>
            </li>

            <li><BiCheck className='service__list-icon'/> 
            <p>Machine learning model creation</p>
            </li>

          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>
              DATA ANALYSIS
            </h3>
          </div>
          <ul className="service__list">

            <li><BiCheck className='service__list-icon'/> 
            <p>Financial analytics</p>
            </li>

            <li><BiCheck className='service__list-icon'/> 
            <p>Customer analytics</p>
            </li>

            <li><BiCheck className='service__list-icon'/> 
            <p>Sales and product analytics</p>
            </li>

            <li><BiCheck className='service__list-icon'/> 
            <p>Asset analytics.</p>
            </li>

            <li><BiCheck className='service__list-icon'/> 
            <p>HR analytics.</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service