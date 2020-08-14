import React from 'react'

import SubHeader from '../SubHeader'
import NewsWidget from '../NewsWidget'

import newsImage from '../../assets/images/movie-frame2.jpg'

import './style.css'

const LatestNews = (props) => {
  return (
    <div className="latest-news-container">
      <SubHeader 
        title="latest news"
        subtitle="more"
      />
      <NewsWidget 
        image={newsImage} 
        title={title} 
        text={text}
      />
    </div>
  )
}

const title = "A simple title"
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus fugit unde, saepe delectus officiis? Voluptates facere quis voluptatibus alias. Velit nemo repellendus saepe. Dolorem temporibus blanditiis iste dolores... "

export default LatestNews