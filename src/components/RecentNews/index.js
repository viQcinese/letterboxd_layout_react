import React from 'react'

import frame from '../../assets/images/movie-frame.jpg'

import SubHeader from '../SubHeader'
import FrameWidget from '../FrameWidget'

import './style.css'

const RecentNews = (props) => {
  return (
    <div className="recent-news-container">
      <SubHeader title="recent news" subtitle="more" />
      <div className="showdowns">
        <FrameWidget 
          title="A title"
          text="A text not so long but no so small. About 2 lines of width"
          image={frame}
          alt="frame"
        />
        <FrameWidget 
          title="A title"
          text="A text not so long but no so small. About 2 lines of width"
          image={frame}
          alt="frame"
        />
        <FrameWidget 
          title="A title"
          text="A text not so long but no so small. About 2 lines of width"
          image={frame}
          alt="frame"
        />
      </div>
    </div>
  )
}

export default RecentNews