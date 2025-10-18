import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import HomeHeroImage from '../assets/images/home-hero.jpg'; // Import the image
// import '../assets/styles/HomePage.css'; // Uncomment and create this file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <section className="hero-section" style={{ backgroundImage: `url(${HomeHeroImage})` }}>
          <div className="hero-content">
            <h1>अहिल्यानगर गवळी समाज</h1>
            <p>Preserving Culture, Fostering Unity</p>
            <div className="hero-buttons">
              <Link to="/aartis" className="btn primary-btn">Explore Aartis</Link>
              <Link to="/about" className="btn secondary-btn">Join Community</Link>
            </div>
          </div>
        </section>

        <section className="welcome-section">
          <h2>Welcome to Ahilyanagar Gawali Samaj</h2>
          <p>
            The Ahilyanagar Gawali Samaj is a vibrant community dedicated to preserving our rich cultural heritage, promoting social welfare, and fostering unity among our members. We believe in upholding our traditions while embracing progress.
          </p>
          <p>
            Through various events, cultural programs, and community initiatives, we strive to create a supportive and engaging environment for all.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;