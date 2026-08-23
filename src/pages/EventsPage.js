import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBannerImage from "../assets/images/event-banner.jpg";
import TempleImg2 from "../assets/images/TempleImg2.png";
import TempleImg3 from "../assets/images/TempleImg3.jpg";
import "../assets/styles/EventsPage.css";

const newsData = [
  {
    id: 2,
    title: "गादीपूजा आणि भंडारा",
    date: "2026-08-31",
    category: "कार्यक्रम",
    featured: false,
    image: TempleImg3,
    summary: "गादीपूजा आणि भंडारा कार्यक्रमाचे आयोजन.",
    content: "सावरगाव येथील ब्रह्मसिद्धेश्वर मंदिरात वार्षिक गादीपूजा व महाप्रसाद सोहळा आयोजित केला आहे. समाज बांधवांनी दर्शनाचा लाभ घ्यावा.",
    contributors: ["सर्व समाज बांधव"], 
    additionalImages: []
  },
  {
    id: 4,
    title: "अमावस्या भंडारा",
    category: "कार्यक्रम",
    featured: false,
    image: EventBannerImage,
    summary: "दर अमावस्या",
    content: (<>
      <h4>!! श्री गणेशाय नमः !! <br/>!! ॐ नमः शिवाय !! <br/>|| श्री सिदाजी आप्पा प्रसन्न ||<br/>!! शिव शरणार्थ !! </h4>
      <p>नगर शहर व परिसरात बऱ्याच देवस्थानच्या ठिक ठिकाणी गटागटाने एकत्र येऊन देणगीतून साप्ताहिक किंवा मासिक तिथी ला भंडारे होत असतात त्याच धर्तीवर आपणही श्री ब्रम्ह सिदाजीआप्पा भाविक भक्त गटागटाने एकत्र येवून 'श्री क्षेत्र सावरगाव'येथे श्री ब्रम्ह सिदाजी आप्पांच्या मंदिरात प्रत्येक महिन्याच्या अमावास्येला श्री ब्रम्ह सिदाजी आप्पांचीआरती करून दुपारी 12 ते 03 या वेळेत (भंडारा ) महा प्रसादाचे आयोजन सुरू केले आहे. तरी येणाऱ्या अमावस्येला ज्या ज्या भाविक भक्तांना महाप्रसाद (भंडारा) आयोजन करावयाची इच्छा असेल त्यांनी खालील नंबर वर संपर्क साधावा.</p>
      <p>श्री.विनोद बहिरवाडे...9423465399 <br/>श्री.बाळासाहेब तोरडे...9860701015 <br/>श्री. भीमा नागापुरे...7796183563 </p>
      
      
      

    </>),
    contributors: ["श्री.विनोद बहिरवाडे","श्री.बाळासाहेब तोरडे","श्री. भीमा नागापुरे"], 
    additionalImages: []
  },
  {
    id: 3,
    title: "बीज उत्सव",
    date: "2026-09-13",
    category: "उत्सव",
    featured: false,
    image: EventBannerImage,
    summary: "",
    content: "",
    contributors: ["सर्व समाज बांधव"],
    additionalImages: []
  }
  
];

const EventsPage = () => {
  const [expandedId, setExpandedId] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState("सर्व");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      setExpandedId(Number(id));
      window.scrollTo({ top: 450, behavior: "smooth" });
    }
  }, [location]);

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

  // Helper component to render contributors on the face of the card
  const renderContributorBadges = (contributors) => {
    if (!contributors || contributors.length === 0) return null;
    return (
      <div 
        className="card-contributors"
        onClick={(e) => e.stopPropagation()} // PREVENTS EXPANDING THE CARD WHEN CLICKING NAMES
      >
        <span className="contributor-label">🙏 योगदान:</span>
        <div className="contributor-badge-list">
          {contributors.map((name, index) => (
            <span key={index} className="mini-badge">{name}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="news-page">
      <Header />

      <section className="news-hero" style={{ backgroundImage: `url(${TempleImg2})` }}>
        <div className="news-hero-overlay">
          <h1>बातम्या</h1>
          <p>समाजातील नवीन घडामोडी व कार्यक्रम</p>
        </div>
      </section>

      {/* FEATURED SECTION */}
      {featuredNews && (
        <section className="featured-section">
          <h2>⭐ प्रमुख बातमी</h2>
          <div className="featured-card" onClick={() => toggleExpand(featuredNews.id)}>
            <img src={featuredNews.image} alt={featuredNews.title} />
            <div className="featured-content">
              <p>📅 {formatMarathiDate(featuredNews.date)}</p>
              <h3>{featuredNews.title}</h3>
              <p>{featuredNews.summary}</p>
              
              {/* Contributors shown on face with click protection */}
              {renderContributorBadges(featuredNews.contributors)}

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

          <button className="clear-filter-btn" onClick={() => { 
            setSelectedMonth(""); setSelectedYear(""); setSelectedCategory("सर्व"); 
          }}>
            सर्व दाखवा
          </button>
        </div>
      </section>

      <main className="news-container">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
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
                
                {/* CONTRIBUTORS ON FACE OF CARD with click protection */}
                {renderContributorBadges(news.contributors)}

                {expandedId === news.id && (
                  <div className="expanded-area">
                    <p className="full-text">{news.content}</p>
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
          ))
        ) : (
          <p className="no-news">या कालावधीसाठी कोणतीही बातमी उपलब्ध नाही.</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;