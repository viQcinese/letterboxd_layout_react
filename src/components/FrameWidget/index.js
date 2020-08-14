import React from 'react'

import './style.css'

const FrameWidget = ({image, alt, title, text}) => {
  return (
    <div className="frame-widget-container">
      <img src={image} alt={alt}/>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default FrameWidget