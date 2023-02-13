import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">

      <li className="footer-link">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="footer-link">
        <Link to="/about">About Us</Link>
      </li>
      <li className="footer-link">
        <Link to="/contact">Contact</Link>
      </li>
      <h4>2023 measuretips.com</h4>
    </div>
  )
}

export default Footer
