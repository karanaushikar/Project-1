import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AartiCard from '../components/AartiCard';

// Import all Aarti images
import GaneshAartiImage from '../assets/images/ganesh-aarti.jpg';
import ShivAartiImage from '../assets/images/shiv-aarti.jpg';
import DeviAartiImage from '../assets/images/devi-aarti.jpg';
// import HanumanAartiImage from '../assets/images/hanuman-aarti.jpg'; // Using the placeholder as requested
// import '../assets/styles/AartiGalleryPage.css'; // Uncomment and create this file for styling


const aartisData = [
  {
    id: 1,
    title: 'Ganesh Aarti',
    description: 'Performed to invoke blessings, Lord Ganesh, the remover of obstacles, before any auspicious beginning.',
    image: GaneshAartiImage,
  },
  {
    id: 2,
    title: 'Shiv Aarti',
    description: 'A devotional prayer dedicated to Lord Shiva, the destroyer of evil and transformer, integral to our daily worship and festivals.',
    image: ShivAartiImage,
  },
  {
    id: 3,
    title: 'Devi Aarti',
    description: 'A powerful prayer celebrating the the divine feminine, Devi\'s strength, and protection, especially during Navaratri.',
    image: DeviAartiImage,
  },
//   {
//     id: 4,
//     title: 'Hanuman Aarti',
//     description: 'A powerful prayer for strength, courage, and devotion, essential for well-being and overcoming challenges.',
//     image: HanumanAartiImage,
//   },
];

const AartiGalleryPage = () => {
  return (
    <div className="aarti-gallery-page">
      <Header />
      <main>
        <section className="gallery-header">
          <h2>Our Sacred Aartis</h2>
          <p>Explore a collection of beautiful Aartis cherished by the Ahilyanagar Gawali Samaj.</p>
        </section>
        <section className="aarti-grid">
          {aartisData.map((aarti) => (
            <AartiCard
              key={aarti.id}
              title={aarti.title}
              description={aarti.description}
              image={aarti.image}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AartiGalleryPage;