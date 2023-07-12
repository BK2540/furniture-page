import React from 'react'

import './Beautify.css'
import women from '../../assets/women.png'

import { motion } from 'framer-motion'

const Beautify = () => {
  const transition = {type:"spring", duration:"2"}

  return (
    <div className="beautify">
      <div className="beautify-contents flex__start">
        <span className='title'>Beautify Your Space</span>
        <span className='body'>
        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </span>

        <button className='custom__button'>LEARN MORE</button>
      </div>

      <motion.div 
      initial={{ opacity: 0, right: '-10px' }}
      whileInView={{ opacity: 1, right: '20px' }}
      transition={{ ...transition, type: 'tween'}}

      className="beautify-image">
        <img src={women} alt='women'/>
        <div className='circle-background'/>
      </motion.div>
    </div>
  )
}

export default Beautify