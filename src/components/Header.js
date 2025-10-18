import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Ahilyanagar Gawali Samaj
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aartis">Aartis</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
