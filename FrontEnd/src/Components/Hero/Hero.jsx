import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import hero_clip from '../Assets/hero_videoclip.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>EV Condition Control</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Revolutionize   </p>
            {/* <img src={hand_icon} alt="" /> */}

          </div>
          <p>your EV experience  </p>
          <p>with  precision diagnostics</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Updates</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={hero_image} alt="" /> */}
        <video autoPlay loop muted>
          <source src={hero_clip} type="video/mp4" />


        </video>
      </div>
    </div>
  )
}

export default Hero
