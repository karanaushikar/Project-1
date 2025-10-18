import React from 'react';
// import '../assets/styles/Footer.css'; // Uncomment and create this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ahilyanagar Gawali Samaj. All rights reserved.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a> | <a href="#instagram">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;