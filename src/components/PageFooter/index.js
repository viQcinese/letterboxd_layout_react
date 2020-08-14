import React from 'react'

import twitter from '../../assets/images/icons/twitter.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import instagram from '../../assets/images/icons/instagram.svg'

import './style.css'

const MainFooter = (props) => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="left">
          <div className="links">
            <a href="#">About</a>
            <a href="#">News</a>
            <a href="#">Pro</a>
            <a href="#">Apps</a>
            <a href="#">Year in Review</a>
            <a href="#">Gift Guide</a>
            <a href="#">Podcast</a>
            <a href="#">Help</a>
            <a href="#">Terms</a>
            <a href="#">API</a>
            <a href="#">Contact</a>
          </div>
          <span>
            © Letterboxd Limited. Made by fans in Auckland, New Zealand. Film data from TMDb. Mobile site.
          </span>
        </div>
        <div className="right">
          <img src={twitter} alt="twitter"/>
          <span> / </span>
          <img src={facebook} alt="facebook"/>
          <span> / </span>
          <img src={instagram} alt="instagram"/>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter