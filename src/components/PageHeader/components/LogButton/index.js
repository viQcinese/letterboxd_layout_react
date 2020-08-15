import React, { useState } from 'react'

import chevronDownWhiteIcon from '../../../../assets/images/icons/chevron-down-white.svg'

import './style.css'

function LogButton() {

  // STATE
  const [chevronMenuDisplay, setChevronMenuDisplay] = useState("none");
  const [logButtonDisplay, setLogButtonDisplay] = useState(false);

  // HANDLE FUNCTIONS
  function handleChevronButton(e) {
    if (chevronMenuDisplay === "flex") setChevronMenuDisplay("none")
    if (chevronMenuDisplay === "none") setChevronMenuDisplay("flex")
  }

  function handleLogButton(e) {
    e.preventDefault();
    if (logButtonDisplay) {
      document.querySelector('#overlay').style.display = "none"
      setLogButtonDisplay(false)
    } else {
      document.querySelector('#overlay').style.display = "flex"
      document.querySelector("body").style.overflow = "hidden"
      setLogButtonDisplay(true)
    }
  }

  // SFX RENDER
  return (
    <div className="log-button-container">
      <button onClick={handleLogButton}>
        <strong>+</strong> LOG
      </button>
      <button onClick={handleChevronButton}>
        <img src={chevronDownWhiteIcon} alt="chevron down"/>     
      </button>
      <div className="chevronMenu" style={{"display": chevronMenuDisplay}}>
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