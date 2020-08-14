import React from 'react'

import frame from '../../assets/images/movie-frame.jpg'

import SubHeader from '../SubHeader'
import FrameWidget from '../FrameWidget'

import './style.css'

const RecentShowdowns = (props) => {
  return (
    <div className="recent-showdowns-container">
      <SubHeader title="recent showdowns" subtitle="more" />
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

export default RecentShowdowns