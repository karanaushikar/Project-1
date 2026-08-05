import React from 'react';
import '../assets/styles/AartiCard.css'; // Make sure this path is correct

const AartiCard = ({ title, description, image, onClick, isSelected }) => {
  return (
    // The entire card is now clickable
    <div
      className={`aarti-card ${isSelected ? 'selected' : ''}`} // Add 'selected' class if this card is chosen
      onClick={onClick}
      role="button" // Improve accessibility
      tabIndex="0" // Improve accessibility
    >
      <img src={image} alt={title} className="aarti-image" />
      <div className="aarti-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* The 'View Details' button is removed */}
      </div>
    </div>
  );
};

export default AartiCard;