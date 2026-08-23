import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>

                    <Link to="/" className="logo">
                        <div className="logo-title">
                            वीरशैव लिंगायत गवळी समाज, अहिल्यानगर
                        </div>
                        <div className="logo-subtitle">
                            ब्रह्मसिद्धेश्वर ट्रस्ट, सावरगाव 
                        </div>
                    </Link>
                </div>
            </header>

            {menuOpen && (
                <div
                    className="overlay"
                    onClick={closeMenu}
                ></div>
            )}

            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <div className="menu-header">
                    <h2 className="header-text">🙏 ब्रह्मसिद्धेश्वर ट्रस्ट</h2>
                    <button
                        className="close-menu"
                        onClick={closeMenu}
                    >
                        ✕
                    </button>
                </div>

                <nav className="menu-nav">
                    <Link to="/" onClick={closeMenu}>
                        🏠 मुख्यपृष्ठ
                    </Link>

                    <Link to="/about" onClick={closeMenu}>
                        🛕 आमच्याविषयी
                    </Link>

                    <Link to="/samaj-history" onClick={closeMenu}>
                        👥 समाज माहिती
                    </Link>

                    <Link to="/events" onClick={closeMenu}>
                        📰 बातम्या
                    </Link>

                    <Link to="/aartis" onClick={closeMenu}>
                        🙏 आरती
                    </Link>

                    <Link to="/TrustMembers" onClick={closeMenu}>
                        👤 ट्रस्ट कार्यकारिणी
                    </Link>

                    <Link to="/Contributor" onClick={closeMenu}>
                        🤝 विशेष योगदान
                    </Link>

                </nav>

                {/* New Footer Section for Location and Feedback */}
                <div className="menu-footer">
                    <a 
                        href="https://maps.app.goo.gl/uRQKVDS8rKEDn1U76" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link location-link"
                    >
                        🗺️ मंदिर लोकेशन (Maps)
                    </a>
                    
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeQ0Nep5YbJORym3HFvsNVTFa5VlN6lhJ5kK8iByp8mf7LVxw/viewform?usp=publish-editor" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link feedback-link"
                    >
                        📝 तक्रार व सुधारणा फॉर्म
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;