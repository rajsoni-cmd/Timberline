import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import WhatWeOffer from "./pages/WhatWeOffer";
import Portfolio from "./pages/Portfolio";
import PortfolioCategory from "./pages/PortfolioCategory";
import PortfolioProject from "./pages/PortfolioProject";
import PortfolioRenovation from "./pages/PortfolioRenovation";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/renovations-additions/:project" element={<PortfolioRenovation />} />
          <Route path="/portfolio/:category/:project" element={<PortfolioProject />} />
          <Route path="/portfolio/:category" element={<PortfolioCategory />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FAQ />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
