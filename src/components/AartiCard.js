import React from 'react';
// import '../assets/styles/AartiCard.css'; // Uncomment and create this file for styling

const AartiCard = ({ title, description, image }) => {
  return (
    <div className="aarti-card">
      <img src={image} alt={title} className="aarti-image" />
      <div className="aarti-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default AartiCard;