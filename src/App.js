import * as React from "react";
import './App.css';
import './components/Styling/index.css';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import NoPage from './components/Pages/NoPage';
import Contact from './components/Pages/Contact';
import CaseStudies from './components/Pages/CaseStudies';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case studies" element={<CaseStudies/>} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
