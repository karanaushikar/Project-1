import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AartiGalleryPage from './pages/AartiGalleryPage';
import AboutUsPage from './pages/AboutUsPage';
import EventsPage from './pages/EventsPage';
// import TrustMember from './pages/TrustMembers';
import ScrollToTop from './components/ScrollToTop';
import SamajInfoPage from './pages/SamajInfoPage';
import Contributor from './pages/Contributors';
// import './assets/styles/App.css'; // Uncomment and create this file for global styles

function App() {
  return (
    <Router>
    
      <div className="App">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aartis" element={<AartiGalleryPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/samaj-history" element={<SamajInfoPage/>} />
          <Route path="/events" element={<EventsPage />} />
          {/* <Route path="/TrustMembers" element={<TrustMember/>}/> */}
          <Route path="/Contributor" element={<Contributor/>}/>
          {/* Add a catch-all route for 404 if needed */}
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;