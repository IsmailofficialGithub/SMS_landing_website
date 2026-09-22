import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Mail, BookUser, X, Plus } from 'lucide-react';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0, scale: 0.5, filter: "blur(4px)" },
    open: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }
  };

  return (
    <div className="floating-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.a href="tel:+923012224333" className="floating-item bg-phone" variants={itemVariants} aria-label="Phone" title="Phone">
              <Phone size={24} color="white" fill="white" />
            </motion.a>
            <motion.a href="https://wa.me/923012224333" className="floating-item bg-whatsapp" variants={itemVariants} aria-label="WhatsApp" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </motion.a>
            <motion.a href="mailto:info@spectrumscreens.com" className="floating-item bg-mail" variants={itemVariants} aria-label="Mail" title="Email">
              <Mail size={24} color="white" />
            </motion.a>
            <motion.a href="#contact" className="floating-item bg-contact" variants={itemVariants} aria-label="Contact Book" title="Contact Us">
              <BookUser size={24} color="white" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        className="floating-toggle"
        onClick={toggleOpen}
        animate={{ rotate: isOpen ? 135 : 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Toggle Menu"
      >
        <Plus size={36} color="white" strokeWidth={2.5} />
      </motion.button>
    </div>
  );
};

export default FloatingContact;
