import React from 'react'

import logo from '../../assets/images/logo.png'
import searchIcon from '../../assets/images/icons/search.svg'

import LogButton from './components/LogButton'
import UserMenu from './components/UserMenu'

import './style.css'

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <div className="container">
        <img src={logo} alt="Letterboxd"/>
        <div className="actions">
          <UserMenu />
          <a href="#">ACTIVITY</a>
          <a href="#">FILMS</a>
          <a href="#">LISTS</a>
          <a href="#">PEOPLE</a>
          <span><img src={searchIcon} alt="search"/></span>
          <LogButton />
        </div>
      </div>
    </header>
  )
}

export default PageHeader