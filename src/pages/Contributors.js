import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContributorHeroImg from "../assets/images/TempleImg2.png"; // Reuse your temple image
import "../assets/styles/Contributors.css";

const contributorsData = [
  {
    id: 1,
    name: "कै. देवाप्पा शंकरराव हरबा, कै. मुक्ताबाई देवाप्पा हरबा",
    contribution: "मंदिर फरशी कामासाठी १,११,१११ रुपयांची देणगी दिली.",
  },
]

const Contributors = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // Filter contributors based on search input
  const filteredContributors = contributorsData.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        
        {/* Search Bar
        <div className="search-section">
          <input 
            type="text" 
            placeholder="नाव शोधण्यासाठी येथे टाईप करा..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}

        {/* Contributors List */}
        <div className="contributor-list">
          {filteredContributors.length > 0 ? (
            filteredContributors.map((person) => (
              <div key={person.id} className="contributor-card">
                <div className="card-accent"></div>
                <div className="card-main">
                  <h3>{person.name}</h3>
                  <p className="contribution-text">
                    <span className="quote-icon">"</span>
                    {person.contribution}
                    <span className="quote-icon">"</span>
                  </p>
                  <span className="contribution-date"> {person.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">या नावाचे योगदानकर्ते आढळले नाहीत.</p>
          )}
        </div>

        {/* Note Section */}
        <section className="contribution-note">
          <p>आपल्यालाही समाजासाठी योगदान द्यायचे असल्यास कृपया ट्रस्ट कमिटीशी संपर्क साधावा.</p>
          <h4>संपर्क:<br/> श्री. उमेश लक्ष्मण दहिंडे - ९२८४८४१४०३ </h4>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contributors;