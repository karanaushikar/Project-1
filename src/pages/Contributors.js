import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContributorHeroImg from "../assets/images/TempleImg2.png"; 
import "../assets/styles/Contributors.css";

const contributorsData = [
  {
    id: 1,
    name: "कै. देवाप्पा शंकरराव हरबा, कै. मुक्ताबाई देवाप्पा हरबा",
    contribution: "मंदिर फरशी कामासाठी १,११,१११ रुपयांची देणगी दिली.",
    date: "" // You can leave this empty if date is not needed
  },
  // Add more contributors here...
];

const Contributors = () => {
  return (
    <div className="contributors-page">
      <Header />

      {/* Hero Section */}
      <section 
        className="contributor-hero" 
        style={{ backgroundImage: `url(${ContributorHeroImg})` }}
      >
        <div className="hero-overlay">
          <h1>मंदिराच्या विकास व जीर्णोद्धाराच्या पवित्र कार्यासाठी आपण दिलेल्या मोलाच्या आर्थिक सहकार्याबद्दल मनःपूर्वक धन्यवाद!</h1>
        </div>
      </section>

      <main className="contributor-container">
        
        <div className="contributor-intro">
            <h2>🙏 कृतज्ञता यादी</h2>
        </div>

        {/* Contributors List */}
        <div className="contributor-list">
          {contributorsData.length > 0 ? (
            contributorsData.map((person) => (
              <div key={person.id} className="contributor-card">
                <div className="card-accent"></div>
                <div className="card-main">
                  <h3>{person.name}</h3>
                  <p className="contribution-text">
                    <span className="quote-icon">"</span>
                    {person.contribution}
                    <span className="quote-icon">"</span>
                  </p>
                  {/* Only show date if it exists */}
                  {person.date && <span className="contribution-date"> {person.date}</span>}
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">योगदानकर्त्यांची माहिती उपलब्ध नाही.</p>
          )}
        </div>

        {/* Note Section */}
        <section className="contribution-note">
          <p>आपल्यालाही समाजासाठी योगदान द्यायचे असल्यास कृपया ट्रस्ट कमिटीशी संपर्क साधावा.</p>
          <div className="contact-info">
            <h4>संपर्क:</h4>
            <p>श्री. उमेश लक्ष्मण दहिंडे - ९२८४८४१४०३</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contributors;