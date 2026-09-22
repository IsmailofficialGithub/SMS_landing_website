import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
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
      </Routes>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </Router>
  )
}

export default App
