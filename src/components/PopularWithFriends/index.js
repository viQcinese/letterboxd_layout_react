import React from 'react'

import SubHeader from '../SubHeader'
import MovieCard from '../MovieCard'
import LatestNews from '../LatestNews'

import './style.css'

const PopularWithFriends = () => {
  return (
    <div className="popular-with-friends-container">
      <SubHeader 
        title="popular with friends" 
        subtitle="more"
      />
      <div className="movie-cards-wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <LatestNews />
    </div>
  )
}

export default PopularWithFriends