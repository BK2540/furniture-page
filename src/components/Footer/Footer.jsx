import React from 'react'

import './Footer.css'
import footer1 from '../../assets/footer-1.jpg';
import footer2 from '../../assets/footer-2.jpg';
import footer3 from '../../assets/footer-3.jpg';
import footer4 from '../../assets/footer-4.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contents flex__start">
        <span>Beauty Care</span>
        <span>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
        <span>Follow Us</span>
      </div>

      <div className='footer-line'/>

      <div className='footer-instagram'>
        <span>Instagram Shop</span>
        <div className="footer-instagram_img">
            <img src={footer1} alt="decor room" />
            <img src={footer2} alt="decor room" />
            <img src={footer3} alt="decor room" />
            <img src={footer4} alt="decor room" />
        </div>
        
      </div>
    </div>
  )
}

export default Footer