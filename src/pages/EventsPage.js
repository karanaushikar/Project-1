import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBannerImage from "../assets/images/event-banner.jpg";
import TempleImg2 from "../assets/images/TempleImg2.png";
import TempleImg3 from "../assets/images/TempleImg3.jpg";
import "../assets/styles/EventsPage.css";

const newsData = [
  {
    id: 1,
    title: "समाज कार्यकारिणी बैठक",
    date: "2026-08-09",
    category: "बैठक",
    featured: false,
    image: EventBannerImage,
    summary: "मासिक कार्यकारिणी बैठक आयोजित",
    additionalImages: []
  },
  {
    id: 2,
    title: "गादीपूजा आणि भंडारा",
    date: "2026-08-31",
    category: "कार्यक्रम",
    featured: true,
    image: TempleImg3,
    summary: "गादीपूजा आणि भंडारा कार्यक्रमाचे आयोजन.",
    additionalImages: [] // Future: add URLs here
  },
  
  {
    id: 3,
    title: "वार्षिक स्नेहसंमेलन २०२६",
    category: "कार्यक्रम",
    featured: false,
    image: EventBannerImage,
    summary: "वार्षिक स्नेहसंमेलन उत्साहात होणार आहे.",
    content: "या कार्यक्रमात सांस्कृतिक कार्यक्रम, विद्यार्थ्यांचा गौरव आणि सामूहिक भोजन आयोजित केले जाईल.",
    additionalImages: []
  }
];

const EventsPage = () => {
  const [expandedId, setExpandedId] = useState(null); // Track which card is expanded
  const [selectedCategory, setSelectedCategory] = useState("सर्व");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const formatMarathiDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "तारीख उपलब्ध नाही";
    return date.toLocaleDateString("mr-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const featuredNews = newsData.find((news) => news.featured);

  const filteredNews = newsData
    .filter((news) => {
      const newsDate = new Date(news.date);
      const month = String(newsDate.getMonth() + 1).padStart(2, "0");
      const year = String(newsDate.getFullYear());

      const categoryMatch = selectedCategory === "सर्व" || news.category === selectedCategory;
      const monthMatch = selectedMonth === "" || month === selectedMonth;
      const yearMatch = selectedYear === "" || year === selectedYear;

      return categoryMatch && monthMatch && yearMatch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="news-page">
      <Header />

      <section className="news-hero" style={{ backgroundImage: `url(${TempleImg2})` }}>
        <div className="news-hero-overlay">
          <h1>बातम्या</h1>
          <p>समाजातील नवीन घडामोडी व कार्यक्रम</p>
        </div>
      </section>

      {/* Featured News remains standard or can also use toggleExpand */}
      {featuredNews && (
        <section className="featured-section">
          <h2>⭐ प्रमुख बातमी</h2>
          <div className="featured-card" onClick={() => toggleExpand(featuredNews.id)}>
            <img src={featuredNews.image} alt={featuredNews.title} />
            <div className="featured-content">
              <p>📅 {formatMarathiDate(featuredNews.date)}</p>
              <h3>{featuredNews.title}</h3>
              <p>{featuredNews.summary}</p>
              {expandedId === featuredNews.id && (
                <div className="expanded-info">
                   <hr />
                   <p className="full-content">{featuredNews.content}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="filter-section">
        <h3>🏷 विभाग</h3>
        <div className="category-filters">
          {["सर्व", "उत्सव", "बैठक", "घोषणा", "कार्यक्रम"].map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="date-filter">
        <div className="date-selectors">
          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value="">सर्व महिने</option>
            <option value="01">जानेवारी</option>
            <option value="02">फेब्रुवारी</option>
            <option value="03">मार्च</option>
            <option value="04">एप्रिल</option>
            <option value="05">मे</option>
            <option value="06">जून</option>
            <option value="07">जुलै</option>
            <option value="08">ऑगस्ट</option>
            <option value="09">सप्टेंबर</option>
            <option value="10">ऑक्टोबर</option>
            <option value="11">नोव्हेंबर</option>
            <option value="12">डिसेंबर</option>
          </select>

          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">सर्व वर्षे</option>
            <option value="2026">२०२६</option>
            <option value="2025">२०२५</option>
          </select>

          <button className="clear-filter-btn" onClick={() => { setSelectedMonth(""); setSelectedYear(""); setSelectedCategory("सर्व"); }}>
            सर्व दाखवा
          </button>
        </div>
      </section>

      <main className="news-container">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className={`news-card ${expandedId === news.id ? "expanded" : ""}`}
            onClick={() => toggleExpand(news.id)}
          >
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <div className="news-date">📅 {formatMarathiDate(news.date)}</div>
              <h3>{news.title}</h3>
              <p className="summary-text">{news.summary}</p>
              
              {/* This part only shows when expanded */}
              {expandedId === news.id && (
                <div className="expanded-area">
                  <p className="full-text">{news.content}</p>
                  
                  {/* Future Image Gallery Placeholder */}
                  {news.additionalImages && news.additionalImages.length > 0 && (
                    <div className="future-image-gallery">
                      {news.additionalImages.map((img, index) => (
                        <img key={index} src={img} alt="additional" />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <button className="read-more-btn">
                {expandedId === news.id ? "कमी करा" : "संपूर्ण वाचा"}
              </button>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;