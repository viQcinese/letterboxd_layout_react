import React from 'react'

import SubHeader from '../SubHeader'
import MovieCard from '../MovieCard'

import zap from '../../assets/images/icons/zap.svg'

import './style.css'

const NewFromFriends = (props) => {
  return (
    <div className="new-from-friends-container">
      <SubHeader 
        title="new from friends" 
        icon={zap} alt="bolt" 
        subtitle="all activity"
      />
      <div className="movie-cards-wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default NewFromFriends