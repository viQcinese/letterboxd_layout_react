import React from 'react'

import poster from '../../../../assets/images/movie-poster.jpg'
import avatar from '../../../../assets/images/avatar2.png'
import star from '../../../../assets/images/icons/star.svg'
import message from '../../../../assets/images/icons/message-square.svg'

import './style.css'

const ReviewBlockHeader = (props) => {
  return (
    <div className="review-block-header-container">
      <header>
        <div className="poster">
          <img src={poster} alt="movie poster"/>
        </div>
        <div className="info">
          <div className="author">
            <img src={avatar} alt="user"/>
            <span>Tiago</span>
          </div>
          <span>
            <strong>Movie Title</strong>
            <em>2017</em>
          </span>
          <div className="movie">
            <div className="ratings">
              <img src={star} alt="star"/>
              <img src={star} alt="star"/>
              <img src={star} alt="star"/>
            </div>
            <div className="comments">
              <img src={message} alt="comment"/>
              <span>34</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default ReviewBlockHeader;