import React from 'react'

import SubHeader from '../SubHeader'
import ListBlock from './components/ListBlock'

import './style.css'

const PopularLists = (props) => {
  return (
    <div className="popular-lists-container">
      <SubHeader title="popular lists" subtitle="more" />
      <div className="lists">
        <ListBlock />
        <ListBlock />
        <ListBlock />
      </div>
    </div>
  )
}

export default PopularLists