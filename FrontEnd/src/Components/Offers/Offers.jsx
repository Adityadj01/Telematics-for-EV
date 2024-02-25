import React from 'react'
import './Offers.css'
// import exclusive_image from '../Assets/exclusive_image.png'
import offer from '../Assets/offfer.jpg'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Instant vehicle  </h1>
        <h1>diagnostics  </h1>
        <p> by one click</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={offer} alt="" />
      </div>
    </div>
  )
}

export default Offers
