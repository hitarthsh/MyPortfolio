import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FreelancerTerms from "./pages/FreelancerTerms";
import { initSmoothScroll } from "./utils/smoothScroll";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div id="smooth-wrapper" className="min-h-screen font-sans">
        <div id="smooth-content">
          <Header isScrolled={isScrolled} />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <About />
                  <Portfolio />
                  <Skills />
                  <Contact />
                </main>
              }
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/freelancer-terms" element={<FreelancerTerms />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
