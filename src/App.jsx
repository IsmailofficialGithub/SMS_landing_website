import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </Router>
  )
}

export default App
