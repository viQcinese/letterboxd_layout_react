import React from 'react'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.jpg'
import searchIcon from '../../assets/images/icons/search.svg'
import chevronDownIcon from '../../assets/images/icons/chevron-down.svg'
import chevronDownWhiteIcon from '../../assets/images/icons/chevron-down-white.svg'


import './style.css'

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <div className="container">
        <img src={logo} alt="Letterboxd"/>
        <div className="actions">
          <div className="user">
            <img src={avatar} alt="username"/>  
            <span>USERNAME</span>
            <img src={chevronDownIcon} alt="chevron down"/>  
          </div>
          <a href="#">ACTIVITY</a>
          <a href="#">FILMS</a>
          <a href="#">LISTS</a>
          <a href="#">PEOPLE</a>
          <span><img src={searchIcon} alt="search"/></span>
          <div className="buttons-container">
            <button>
              <strong>+</strong> LOG
            </button>
            <button>
              <img src={chevronDownWhiteIcon} alt="chevron down"/>     
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader