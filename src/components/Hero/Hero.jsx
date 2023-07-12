import React from 'react'

import './Hero.css'
import delivery from '../../assets/icon-delivery.svg';
import time from '../../assets/icon-24hrs.svg';
import protect from '../../assets/icon-protect.svg';

import { motion } from "framer-motion"

const Hero = () => {
  const transition = {type:"spring", duration:"3"}

  return (
    <div className="hero">

      <div className="hero-contents">
        <motion.div
        initial="hidden"
        whileInView="show"
        animate={{right: '20px' }}
        transition={{ ...transition, type: 'tween'}} 
        
        className="hero-contents_info flex__start">
        <span>New Arrival</span>
          <span>Discover Our <br/> New Collection</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>

          <button className='custom__button'>BUY Now</button>
        </motion.div>
      </div>

      <div className="hero-services">
        <div className="service">
          <img src={delivery} alt='delivery'/>
          <div className="service-info flex__start">
            <span>Free Delivery</span>
          <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className="service">
          <img src={time} alt='time'/>
          <div className="service-info flex__start">
              <span>Support 24/7</span>
              <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className="service">
          <img src={protect} alt='protect'/>
          <div className="service-info flex__start">
              <span>100% Authentic</span>
              <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero