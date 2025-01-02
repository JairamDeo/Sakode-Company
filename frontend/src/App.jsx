import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Screens/Home";
import Category from "./Screens/Category";
import Aboutus from "./Screens/Aboutus";
import Contactus from "./Screens/Contactus";

import SyntheticPage from "./Categories/SyntheticPage";
import ZariPage from "./Categories/ZariPage";
import CottonPage from "./Categories/CottonPage";
import ShaluPage from "./Categories/ShaluPage";
import FancyPage from "./Categories/FancyPage";
import AdminUploadPage from './pages/AdminUploadPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-[80px]">
        {/* Define section IDs for smooth scrolling */}
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="category">
                <Category />
              </section>
              <section id="aboutus">
                <Aboutus />
              </section>
              <section id="contactus">
                <Contactus />
              </section>
            </>
          } />
          <Route path="/synthetic" element={<SyntheticPage />} />
          <Route path="/zari" element={<ZariPage />} />
          <Route path="/cotton" element={<CottonPage />} />
          <Route path="/shalu" element={<ShaluPage />} />
          <Route path="/fancy" element={<FancyPage />} />

          <Route path="/admin/upload" element={<AdminUploadPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
