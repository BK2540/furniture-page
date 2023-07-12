import React from 'react'

import './Email.css'

const Email = () => {
  return (
    <div className="email">
        <div className="email-info flex__center">
        <span className='title'>Join Our Mailing List</span>
        <span className='body'>Sign up to receive inspiration, product updates,<br/> and special offers from our team.</span>
      </div>

        <div className="email-input_container">
            <input type="email" placeholder='example@gmail.com'/>
            <button>Submit</button>
        </div>

    </div>
  )
}

export default Email