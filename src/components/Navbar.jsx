import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar"></nav>

      <div className="nav-logo">

        <div className="logo-circle">
          <div className="logo-graph"></div>

        </div>
        <h1>Groww</h1>
      </div>
      <div className="nav-actions">
        <button className="install-btn">Install app</button>
        
        <button className="search-btn" aria-label="search" >
          
          <svg viewBox="0 0 24 24" >
            <circle cx="10.5" cy="10.5" r="6.5"/>
            <path d="M16 16L22 22"/>
          </svg>
        </button>

        <button className="menu-btn" aria-label="menu">
          
        </button>
      </div>
    </div>
  )
}

export default Navbar