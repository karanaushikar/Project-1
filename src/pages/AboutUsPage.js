import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommunityImage from '../assets/images/ahilyanagar-community.jpg'; // Import the image
// import '../assets/styles/AboutUsPage.css'; // Uncomment and create this file for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Header />
      <main>
        <section className="about-hero">
          <img src={CommunityImage} alt="Ahilyanagar Gawali Community" className="about-hero-image" />
          <div className="about-hero-overlay">
            <h2></h2>
          </div>
        </section>

        <section className="about-content">
          <h3>आमचा इतिहास </h3>
          <p>
            The Ahilyanagar Gawali Samaj was founded with the vision of uniting the Gawali community in Ahilyanagar and fostering a strong sense of identity and belonging. For generations, our community has thrived on shared values of devotion, hard work, and mutual support.
          </p>
          <p>
            Our mission is to preserve and promote the rich cultural traditions, language, and spiritual practices of the Gawali community. We strive to empower our members through educational initiatives, support social causes, and celebrate our heritage through various cultural events and festivals.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>**Unity:** Building a strong, cohesive community.</li>
            <li>**Tradition:** Upholding our ancestral customs and rituals.</li>
            <li>**Service:** Contributing to the welfare of society.</li>
            <li>**Education:** Promoting learning and personal growth.</li>
            <li>**Devotion:** Nurturing spiritual well-being through shared practices.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;