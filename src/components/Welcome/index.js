import React from 'react'

import './style.css'

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <div className="container">
        <span>Welcome back, <em>Username</em>. Here's what your friends have been watching...</span>
      </div>
    </div>
  )
}

export default Welcome