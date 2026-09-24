import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import ProjectsPage from './pages/ProjectsPage'
import Products from './pages/Products'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import QuoteModal from './components/QuoteModal'

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Navbar openQuote={() => setIsQuoteOpen(true)} />
      <Routes>
        <Route path="/" element={<Home openQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<Gallery openQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/our-work" element={<Gallery openQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </Router>
  )
}

export default App
