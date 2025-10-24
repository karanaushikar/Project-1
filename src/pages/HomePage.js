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
              <Link to="/aartis" className="btn primary-btn">आरती</Link>
              <Link to="/about" className="btn secondary-btn">गवळी समाज</Link>
            </div>
          </div>
        </section>

        <section className="welcome-section">
          <h2>अहिल्यानगर गवळी समाजात आपले स्वागत आहे</h2>
          <p>
            अहिल्यानगर गवळी समाज हा एक उत्साही समुदाय आहे जो आपला समृद्ध सांस्कृतिक वारसा जपण्यासाठी, सामाजिक कल्याणाला चालना देण्यासाठी आणि आपल्या सदस्यांमध्ये एकता वाढवण्यासाठी समर्पित आहे. प्रगती स्वीकारताना आपल्या परंपरा जपण्यावर आमचा विश्वास आहे.
          </p>
          <p>
विविध कार्यक्रम, सांस्कृतिक कार्यक्रम आणि सामुदायिक उपक्रमांद्वारे, आम्ही सर्वांसाठी एक सहाय्यक आणि आकर्षक वातावरण निर्माण करण्याचा प्रयत्न करतो.          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;