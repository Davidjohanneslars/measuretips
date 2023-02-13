import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// const Toggle = () => {
//   return (
//     <div>     
//     </div>
//   )
// }


const Navbar = () => {
  return (
    <>
    <nav className="nav">

      <div className="nav-section">
        <Link to="/" className='nav-click-link'>
          <img src="../Logo.png" className="nav-logo" />
          <div className="nav-logo-title">
            <h4 className="nav-title">Measuretips.com</h4>
            <h5 className="nav-subtitle" >Everything related to Digital Analytics</h5>
          </div>
        </Link>
      </div>
      <div className="navbar-menu">
   
      </div>
    </nav>

    </>
  )
}



export default Navbar

