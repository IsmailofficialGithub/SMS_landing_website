import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles, Maximize2, X, Phone } from 'lucide-react';
import { workGalleryItems } from '../data/workGalleryData';
import './LiveWorkShowcase.css';
import '../pages/Gallery.css';

export default function LiveWorkShowcase({ openQuote }) {
  const [selectedItem, setSelectedItem] = useState(null);

  // Take the top featured real installations from public/image/MY_WORK
  const featuredWorks = workGalleryItems.filter(item => item.featured).slice(0, 8);

  return (
    <section className="live-work-section">
      <div className="container">
        <div className="live-work-header">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="live-work-pill">
              <Sparkles size={14} /> ON-SITE PORTFOLIO
            </span>
            <h2 className="live-work-title">Live Installations Across Pakistan</h2>
            <p className="live-work-subtitle">
              Take a closer look at our authentic, deployed digital screens, high-brightness outdoor billboards, and smart interactive kiosks.
            </p>
          </motion.div>

          <Link to="/gallery" className="btn btn-outline live-work-all-btn">
            View All 60+ Deployments <ArrowRight size={16} />
          </Link>
        </div>

        <div className="live-work-grid">
          {featuredWorks.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="live-work-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="live-work-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="live-work-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
                  }}
                />
                <span className="live-work-badge">{item.category}</span>
                <div className="live-work-overlay">
                  <span className="live-work-preview-btn">
                    <Maximize2 size={16} /> Expand Photo
                  </span>
                </div>
              </div>

              <div className="live-work-card-content">
                <span className="live-work-loc">
                  <MapPin size={12} /> {item.location}
                </span>
                <h3 className="live-work-card-title">{item.title}</h3>
                <p className="live-work-card-desc">{item.desc}</p>
                <div className="live-work-card-link">
                  <span>Inspect Details</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="live-work-footer">
          <Link to="/gallery" className="btn btn-primary live-work-browse-btn">
            Explore Full Installation Gallery (68 Projects) <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="gallery-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="gallery-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-modal-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div className="gallery-modal-grid">
                <div className="gallery-modal-image-col">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="gallery-modal-image"
                  />
                </div>

                <div className="gallery-modal-info-col">
                  <div className="gallery-modal-tags">
                    <span className="gallery-category-pill modal-pill">{selectedItem.category}</span>
                    <span className="gallery-location-tag modal-loc">
                      <MapPin size={13} /> {selectedItem.location}
                    </span>
                  </div>

                  <h2 className="gallery-modal-title">{selectedItem.title}</h2>
                  <p className="gallery-modal-desc">{selectedItem.desc}</p>

                  <div className="gallery-modal-meta-box">
                    <h4>Installation Details</h4>
                    <ul>
                      <li>Commercial high-grade SMD / LED components</li>
                      <li>High refresh rate & seamless cabinet calibration</li>
                      <li>Turnkey fabrication, structure & electrical setup</li>
                    </ul>
                  </div>

                  <div className="gallery-modal-actions">
                    <button
                      className="btn btn-primary gallery-quote-btn"
                      onClick={() => {
                        setSelectedItem(null);
                        if (openQuote) openQuote();
                      }}
                    >
                      Get Quote for This Screen <ArrowRight size={16} />
                    </button>
                    <a
                      href="tel:+923334727284"
                      className="btn btn-outline gallery-call-btn"
                    >
                      <Phone size={16} /> Call +92 333 4727284
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
