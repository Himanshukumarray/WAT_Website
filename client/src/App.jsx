import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import About from './component/About';
import Services from './component/Services';
import Maintenance from './component/Maintenance';
import Contact from './component/Contact';
import Footer from './component/Footer';
import ScrollToTop from "./component/ScrollToTop";
import WhatsAppButton from './component/WhatsApp';
// import Login from './component/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element = { <Footer />}/>
      </Routes>
      <Footer />
      {/* <Login /> */}
    </Router>
  );
};
export default App;
