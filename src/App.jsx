import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Lazy load components
const HeroSection = lazy(() => import('./pages/herosection'));
const GalleryPage = lazy(() => import('./pages/gallerypage'));
const AboutUs = lazy(() => import('./pages/aboutus'));
const Services = lazy(() => import('./pages/servicepage'));
const ContactPage = lazy(() => import('./pages/contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
