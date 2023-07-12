import React from 'react'

import './Navbar.css'
import tab from '../../assets/menu.png'

const Navbar = () => {

  
  return (
    <nav>
      <div className="nav_logo">
        <span className='logo'>Furniture</span>
      </div>

      <div className="nav_menu">
        <span>Home</span>
        <span>Services</span>
        <span>Doctors</span>
        <span>Products</span>
        <span>Gallery</span>
      </div>
    
      <img src={tab} alt='menu' className='tab'/>
    </nav>
  )
}

export default Navbar