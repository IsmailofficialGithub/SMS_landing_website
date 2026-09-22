import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import ProjectsPage from './pages/ProjectsPage'
import Products from './pages/Products'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import QuoteModal from './components/QuoteModal'

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <Router>
      <Navbar openQuote={() => setIsQuoteOpen(true)} />
      <Routes>
        <Route path="/" element={<Home openQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects" element={<ProjectsPage />} />
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
