import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <h2>Get a Custom Quote</h2>
        <p>Tell us about your project and we'll get back to you within 24 hours.</p>
        <form className="quote-form" onSubmit={(e) => { e.preventDefault(); alert('Quote request sent successfully!'); onClose(); }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select required>
            <option value="" disabled selected>Select Display Type</option>
            <option value="indoor">Indoor SMD/LED</option>
            <option value="outdoor">Outdoor LED Screen</option>
            <option value="rental">Event/Rental Display</option>
            <option value="other">Other / Not Sure</option>
          </select>
          <textarea placeholder="Project Details" rows="4" required></textarea>
          <button type="submit" className="quote-submit-btn">Submit Request</button>
        </form>
      </motion.div>
    </div>
  )
}

export default QuoteModal;
