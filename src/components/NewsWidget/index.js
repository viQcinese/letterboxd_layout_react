import React from 'react'

import './style.css'

const NewsWidget = ({image, alt, title, text}) => {
  return (
    <div className="news-widget-container">
      <img src={image} alt={alt} />
      <div className="text-block">
        <h3>{title}</h3>
        <p>{text}<strong>read more</strong></p>
      </div>
    </div>
  )
}

export default NewsWidget