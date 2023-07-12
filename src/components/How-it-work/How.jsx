import React from 'react'

import './How.css'
import how1 from '../../assets/purchase.png';
import how2 from '../../assets/warehouse.png';
import how3 from '../../assets/style.png';

import { motion } from 'framer-motion';

const How = () => {
  const transition = {type:"spring", duration:"2"}

  return (
    <div className="how">
        <div className='line'/>

        <div className="how-info flex__center">
        <span className='title'>How It Works</span>
        <span className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>

      <div className="how-image">
        <div className='how-image_contents'>
            <motion.div
            initial={{ opacity: 0, bottom: '-20px' }}
            whileInView={{ opacity: 1, bottom: '1px'}}
            transition={{ ...transition, type: 'tween'}}
            className="how-image-container">
              <img src={how1} alt='man'/>
              <div className='image-number'>1</div>          
            </motion.div>

            <div className="how-image_info">
                    <span className='title'>Purchase Securely</span>
                    <span className='body'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
            </div>
        </div>

        <motion.div
        initial={{ opacity: 0, bottom: '-20px' }}
        whileInView={{ opacity: 1, bottom: '1px'}}
        transition={{ ...transition, type: 'tween'}}
        className='how-image_contents'>
            <div className="how-image-container">
              <img src={how2} alt='warehouse'/>
              <div className='image-number'>2</div>          
            </div>

            <div className="how-image_info">
                    <span className='title'>Ships From Warehouse</span>
                    <span className='body'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
            </div>
        </motion.div>

        <div className='how-image_contents'>
            <motion.div
            initial={{ opacity: 0, bottom: '-20px' }}
            whileInView={{ opacity: 1, bottom: '1px'}}
            transition={{ ...transition, type: 'tween'}}
            className="how-image-container">
              <img src={how3} alt='room'/>
              <div className='image-number'>3</div>          
            </motion.div>

            <div className="how-image_info">
                    <span className='title'>Style Your Room</span>
                    <span className='body'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
            </div>
        </div>


        

        

       

        </div>

    </div>
  )
}

export default How