import React from 'react'

import './Collections.css'
import inspiration1 from '../../assets/insp-1.png';
import inspiration2 from '../../assets/insp-2.png';
import inspiration3 from '../../assets/insp-3.png';

import { motion } from "framer-motion"

const Collections = () => {
  const transition = {type:"spring", duration:"2"}

  return (
    <div className="collection">
      <div className="collection-info flex__center">
        <span className='title'>Inspiration Collection</span>
        <span className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <motion.div 
      initial={{ opacity: 0, bottom: '-10px' }}
      whileInView={{ opacity: 1 }}
      animate={{bottom: '20px' }}
      transition={{ ...transition, type: 'tween'}} 
      className="collection-image">
        <img src={inspiration1} alt='inspiration'/>
        <img src={inspiration2} alt='inspiration'/>
        <img src={inspiration3} alt='inspiration'/>
      </motion.div>
    </div>
  )
}

export default Collections