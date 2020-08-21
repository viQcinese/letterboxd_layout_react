import React, { useState } from 'react'

import chevronDownWhiteIcon from '../../../../assets/images/icons/chevron-down-white.svg'

import './style.css'

function LogButton() {

  // STATE
  const [isChevronMenuOpen, setChevronMenuOpen] = useState(false);
  const [isLogContainerOpen, setLogContainerOpen] = useState(false);

  let closeChevronMenu;

  // CHEVRON MENU FUNCTIONS
  function handleChevronButton(e) {
    if (isChevronMenuOpen) {
      document.querySelector('.chevronMenu').style.display = "none"
      setChevronMenuOpen(false)
    }
      
    if (!isChevronMenuOpen) {
      document.querySelector('.chevronMenu').style.display = "flex"
      setChevronMenuOpen(true)
    }
  }

  function handleMouseEnterButtonContainer(e) {
    console.log("enter")
    clearTimeout(closeChevronMenu)
  }

  function handleMouseLeaveButtonContainer(e) {
    console.log("exit")
    closeChevronMenu = setTimeout(() => {
      document.querySelector('.chevronMenu').style.display = "none"
    }, 1000)
  }

  // LOG CONTAINER
  function handleLogButton(e) {
    e.preventDefault();
    if (isLogContainerOpen) {
      document.querySelector('#overlay').style.display = "none"
      // document.querySelector("body").style.overflow = "visible"
      setLogContainerOpen(false)
    } else {
      document.querySelector('#overlay').style.display = "flex"
      // document.querySelector("body").style.overflow = "hidden"
      document.querySelector('#log-prompt input').focus()
      setLogContainerOpen(true)
    }
  }

  // SFX RENDER
  return (
    <div 
    className="log-button-container"
    onMouseEnter={handleMouseEnterButtonContainer}
    onMouseLeave={handleMouseLeaveButtonContainer}
    >
      <button onClick={handleLogButton}>
        <strong>+</strong> LOG
      </button>
      <button onClick={handleChevronButton}>
        <img src={chevronDownWhiteIcon} alt="chevron down"/>     
      </button>
      <div className="chevronMenu">
        <a>Start a new list...</a>
        <a>Find your friends</a>
      </div>
      <div id="overlay">
        <div id="log-prompt">
          <form>
            <legend>
              ADD TO YOUR FILMS...
              <button onClick={handleLogButton}>x</button>  
            </legend>
            <label>Name of Film</label>
            <input type="text"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogButton