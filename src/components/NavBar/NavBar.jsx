import React from 'react'
import {Link} from "react-router-dom"

const NavBar = props => {
  return (
    <nav className='nav-link'>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
    </nav>
  )
}

export default NavBar
