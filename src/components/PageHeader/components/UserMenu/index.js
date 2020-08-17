import React, { useState } from 'react'

import avatar from '../../../../assets/images/avatar.jpg'
import chevronDownIcon from '../../../../assets/images/icons/chevron-down.svg'

import './style.css'

function UserMenu() {

  const [isMouseOnUserMenu, setMouseOnUserMenu] = useState(false);


  function handleMouseEnter(e) {
    document.querySelector('.user-menu').style.display = "flex"
    setMouseOnUserMenu(true)
    console.log(isMouseOnUserMenu)
  }

  function handleMouseLeave(e) {
    setMouseOnUserMenu(false)
    console.log(isMouseOnUserMenu)
    setTimeout( () => {
      if (isMouseOnUserMenu){
        document.querySelector('.user-menu').style.display = "none"
      }
    }, 1000)
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