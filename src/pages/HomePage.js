import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HomeHeroImage from "../assets/images/home-hero.jpg";
import "../assets/styles/HomePage.css";
// import Newspaper from "../assets/images/newspaper.png";

const HomePage = () => {

  // const latestNews = [
  //   {
  //     title: "कार्यकारिणी बैठक",
  //     date: "९ ऑगस्ट २०२६"
  //   }
  // ];

  const upcomingEvents = [
    
    {
      id: 2, // Matches ID in EventsPage
      title: "बीज उत्सव",
      day: "१३",
      month: "सप्टेंबर",
      location: "सिदाजी आप्पा मंदिर, सारस नगर",
      description: ""
    },
    {
      id: 3, // Matches ID in EventsPage
      title: "अमावस्या भंडारा",
      month: (<>
        <p style={{textAlign: "center" }}>दर <br/> अमावस्या</p>
      </>),
      location: "ब्रह्मसिद्धेश्वर मंदिर सावरगाव",
      description: ""
    }
  ];

  return (
    <div className="home-page">
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-section" style={{ backgroundImage: `url(${HomeHeroImage})` }}>
          <div className="hero-content">
            <h1>वीरशैव लिंगायत गवळी समाज, अहिल्यानगर</h1>
            <p>धर्म • संस्कृती • सेवा</p>
            <div className="hero-buttons">
              <Link to="/aartis" className="hero-btn">🙏 आरती</Link>
              <Link to="/events" className="hero-btn">📰 बातम्या</Link>
              <Link to="/about" className="hero-btn">🛕 ट्रस्ट</Link>
            </div>
          </div>
        </section>

        {/* Today's Message */}
        <section className="message-section">
          <h2>🙏 आजचा सुविचार</h2>
          <p>"समाजाची सेवा हीच खरी ईश्वरसेवा."</p>
        </section>

         {/* Trust */}
        <section className="trust-section">
          <h2>🛕 ब्रह्मसिद्धेश्वर ट्रस्ट</h2>
          <p>सावरगाव ट्रस्ट समाजाच्या धार्मिक, सांस्कृतिक व सामाजिक कार्यासाठी समर्पित आहे.</p>
          <Link to="/about" className="trust-btn">अधिक माहिती</Link>
        </section>

        {/* Events */}
        <section className="home-section">
          <div className="section-header">
            <h2>📅 आगामी कार्यक्रम</h2>
            <Link to="/events" className="view-all-btn">सर्व कार्यक्रम →</Link>
          </div>
          <div className="card-grid">
            {upcomingEvents.map((event, index) => (
              <Link 
                to={`/events?id=${event.id}`} 
                key={index} 
                className="event-home-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="event-date-box">
                  <span className="event-day">{event.day}</span>
                  <span className="event-month">{event.month}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event-location">📍 {event.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

            {/* Latest News
        <section className="home-section">
          <div className="section-header">
            <h2><img  className="newsicon" alt="" src={Newspaper}/> नवीन बातम्या</h2>
            <Link to="/events">
              सर्व पहा →
            </Link>
          </div>
          <div className="card-grid">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className="home-card"
              >
                <h3>{news.title}</h3>
                <span>{news.date}</span>
              </div>
            ))}
          </div>
        </section> */}

         {/* Gallery */}
        {/* <section className="gallery-preview"> */}
          {/* <h2>
            📷 फोटो गॅलरी
          </h2>
          <p>
            समाजातील कार्यक्रमांचे फोटो पाहा.
          </p> */}
          {/* <Link
            to="/gallery"
            className="trust-btn"
          >
            गॅलरी पहा
          </Link> */}
        {/* </section> */}
     
        {/* Quick Aarti */}
        <section className="home-section">
          <h2>🙏 दैनंदिन आरती</h2>
          <div className="aarti-buttons">
            <Link to="/aartis?id=1">श्री गणपती आरती</Link>
            <Link to="/aartis?id=5">श्री सिदाजी आप्पा आरती</Link>
            <Link to="/aartis?id=2">श्री शंकराची आरती</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;