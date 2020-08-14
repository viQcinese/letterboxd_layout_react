import React from 'react'

import SubHeader from '../SubHeader'
import ReviewBlock from '../ReviewBlock'

import './style.css'

const PopularReviews = (props) => {
  return (
    <div className="popular-reviews-container">
       <SubHeader 
        title="popular reviews this week" 
        subtitle="more"
      />
      <div className="review-list">
        <ReviewBlock />
        <ReviewBlock />
        <ReviewBlock />
        <ReviewBlock />
        <ReviewBlock />
        <ReviewBlock />
      </div>
    </div>
  )
}

export default PopularReviews