import React from 'react'

import banner from '../../assets/images/banner.png'

import './style.css'

const Banner = (props) => {
  return (
    <div className="banner-container">
      <img src={banner} alt="Need an upgrade?"/>
    </div>
  )
}

export default Banner