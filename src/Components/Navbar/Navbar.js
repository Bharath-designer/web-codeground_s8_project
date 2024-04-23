import React from 'react'
import './Navbar.css'

const Navbar = ({navigateToEditor}) => {
  return (
      <div className="home-header">
        <div className="home-header-left">Web CodeGround</div>
        <div className="home-header-right">
          <button onClick={navigateToEditor}>Open Editor</button>
        </div>
    </div>
  )
}

export default Navbar