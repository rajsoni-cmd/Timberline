import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CMS } from "./lib/cms";
import { pageMeta } from "./lib/seo";
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
import BeforeAfterGallery from "./pages/BeforeAfterGallery";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

// Keeps the browser tab title and description in step while navigating.
function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = pageMeta(pathname, CMS);
    if (m.notFound) return;
    document.title = m.title;
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", m.description);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageTitle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/renovations-additions/:project/before-after" element={<BeforeAfterGallery />} />
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
