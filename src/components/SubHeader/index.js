import React from 'react'


import './style.css'

const SubHeader = ({title, subtitle, icon, alt}) => {
  return (
    <header className="sub-header">
      <div className="container">
        <span>{title}</span>
        <div>
          <img src={icon} alt={alt}/>
          <span>{subtitle}</span>
        </div>
      </div>
    </header>
  )
}

export default SubHeader