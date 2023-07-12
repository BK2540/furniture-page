import React from 'react'

import './Browse.css'
import browse1 from '../../assets/browse-1.png';
import browse2 from '../../assets/browse-2.png';
import browse3 from '../../assets/browse-3.png';

import { motion } from 'framer-motion';

const Browse = () => {
  const transition = {type:"spring", duration:"2"}

  return (
    <div className="browse">
      <div className="collection-info flex__center">
        <span className='title'>Browse The Range</span>
        <span className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <motion.div 
      initial={{ opacity: 0, bottom: '-10px' }}
      whileInView={{ opacity: 1, bottom: '20px'  }}
      transition={{ ...transition, type: 'tween'}}
      className="collection-image">
        <div className="image-container">
          <img src={browse1} alt='room'/>
          <span>Dining</span>
        </div>

        <div className="image-container">
          <img src={browse2} alt='room'/>
          <span>Living</span>
        </div>

        <div className="image-container">
          <img src={browse3} alt='room'/>
          <span>Bedroom</span>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Browse