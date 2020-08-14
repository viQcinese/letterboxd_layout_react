import React from 'react'

import poster from '../../../../assets/images/movie-poster.jpg'
import avatar from '../../../../assets/images/avatar2.png'
import heart from '../../../../assets/images/icons/heart2.svg'
import message from '../../../../assets/images/icons/message-square2.svg'

import './style.css'

const ListBlock = (props) => {
  return (
    <div className="list-block-container">
      <div className="movie-cards">
        <div className="movie"><img src={poster} alt="movie poster"/></div>
        <div className="movie"><img src={poster} alt="movie poster"/></div>
        <div className="movie"><img src={poster} alt="movie poster"/></div>
        <div className="movie"><img src={poster} alt="movie poster"/></div>
        <div className="movie"><img src={poster} alt="movie poster"/></div>
      </div>
      <h3>List Title</h3>
      <div className="info">
        <div className="author">
          <img src={avatar} alt="profile picture"/>
          <span>Tiago</span>
        </div>
        <div className="likes">
          <img src={heart} alt="heart"/>
          <span>75</span>
        </div>
        <div className="comments">
          <img src={message} alt="message"/>
          <span>75</span>
        </div>
      </div>
    </div>
  )
}

export default ListBlock