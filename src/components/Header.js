import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          अहिल्यानगर गवळी समाज ( सावरगाव ट्रस्ट )
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">मुख्यपृष्ठ</Link>
          </li>
          <li>
            <Link to="/aartis">आरती</Link>
          </li>
          <li>
            <Link to="/about">समाज</Link>
          </li>
          <li>
            <Link to="/events">बातम्या</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header