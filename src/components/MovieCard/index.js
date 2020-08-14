import React from 'react'

import moviePoster from '../../assets/images/movie-poster.jpg'
import avatar from '../../assets/images/avatar2.png'

import './style.css'

const MovieCard = (props) => {
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <img src={moviePoster} alt="movie poster"/>
        <footer>
          <img src={avatar} alt="user foto"/>
          <span>Tiago</span>
        </footer>
      </div>
      <span>Aug 12</span>
    </div>
  )
}

export default MovieCard