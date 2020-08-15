import React from 'react'

import avatar from '../../../../assets/images/avatar.jpg'
import chevronDownIcon from '../../../../assets/images/icons/chevron-down.svg'

import './style.css'

function UserMenu() {

  function handleMouseEnter(e) {
    document.querySelector('.user-menu').style.display = "flex"
  }

  function handleMouseLeave(e) {
    
    const e2 = new CustomEvent('mouseOver')
    console.log(e2)
     
  }

  return (
    <div 
      className="user-menu-container" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="user-block">
        <img src={avatar} alt="username"/>  
        <span>USERNAME</span>
        <img src={chevronDownIcon} alt="chevron down"/>
      </div>
      <div className="user-menu">
        <div className="user-block">
          <img src={avatar} alt="username"/>  
          <span>USERNAME</span>
          <img src={chevronDownIcon} alt="chevron down"/>
        </div>
        <hr/>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Links</a>
        <a href="#">Diary</a>
        <a href="#">Reviews</a>
        <a href="#">Watchlist</a>
        <a href="#">Lists</a>
        <a href="#">Likes</a>
        <a href="#">Tags</a>
        <a href="#">Network</a>
        <hr/>
        <a href="#">Settings</a>
        <a href="#">Sign Out</a>


      </div>
    </div>
  )
}

export default UserMenu