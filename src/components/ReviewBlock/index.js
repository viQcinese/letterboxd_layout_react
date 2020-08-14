import React from 'react'

import heart from '../../assets/images/icons/heart.svg'

import ReviewBlockHeader from './components/ReviewBlockHeader'

import './style.css'

const ReviewBlock = (props) => {
  return (
    <article className="review-block-container">
      <ReviewBlockHeader />
      <div className="review-body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga ratione esse nostrum laborum, omnis, cumque dolore nam et repudiandae asperiores nisi dolorem beatae, incidunt saepe non eum laudantium... <strong>more</strong></p>
      </div>
      <footer>
        <div className="like">
          <img src={heart} alt="like"/>
          <strong>Like review</strong>
        </div>
        <span>38 likes</span>
      </footer>
    </article>
  )
}

export default ReviewBlock