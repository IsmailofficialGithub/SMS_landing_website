import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { workGalleryItems } from '../data/workGalleryData';
import './Gallery.css';

const categories = [
  'All',
  'Outdoor Screens',
  'Indoor Video Walls',
  'Digital Standees',
  'Touch Kiosks',
  'Commercial & Retail'
];

export default function Gallery({ openQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return workGalleryItems.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Navigate lightbox with keyboard arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gallery-hero-inner"
          >
            <span className="gallery-badge">
              <Sparkles size={14} className="gallery-badge-icon" />
              NATIONWIDE DEPLOYMENTS • 60+ REAL INSTALLATIONS
            </span>
            <h1 className="gallery-title">Our Installation Gallery</h1>
            <p className="gallery-subtitle">
              Authentic on-site photographs of our SMD screens, video walls, digital standees, and interactive kiosks installed across Pakistan for government, corporate, and retail clients.
            </p>

            <div className="gallery-stats-row">
              <div className="gallery-stat-card">
                <span className="gallery-stat-number">{workGalleryItems.length}+</span>
                <span className="gallery-stat-label">Real Projects</span>
              </div>
              <div className="gallery-stat-card">
                <span className="gallery-stat-number">100%</span>
                <span className="gallery-stat-label">Turnkey Execution</span>
              </div>
              <div className="gallery-stat-card">
                <span className="gallery-stat-number">10+</span>
                <span className="gallery-stat-label">Major Cities</span>
              </div>
              <div className="gallery-stat-card">
                <span className="gallery-stat-number">24/7</span>
                <span className="gallery-stat-label">Local Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gallery-controls-section">
        <div className="container">
          <div className="gallery-controls-card">
            <div className="gallery-search-wrap">
              <Search size={18} className="gallery-search-icon" />
              <input
                type="text"
                placeholder="Search by project name, screen type, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gallery-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="gallery-search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="gallery-categories-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`gallery-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                  {cat === 'All' && ` (${workGalleryItems.length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-results-count">
            Showing <strong>{filteredItems.length}</strong> of {workGalleryItems.length} installations
          </div>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          {filteredItems.length === 0 ? (
            <div className="gallery-empty-state">
              <h3>No installations found</h3>
              <p>Try searching for a different keyword or select another category filter.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="gallery-reset-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="gallery-item-card"
                  onClick={() => setActiveItem(item)}
                >
                  <div className="gallery-thumb-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="gallery-thumb-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
                      }}
                    />
                    <div className="gallery-thumb-overlay">
                      <span className="gallery-preview-badge">
                        <Maximize2 size={16} /> Preview
                      </span>
                    </div>
                    <span className="gallery-category-pill">{item.category}</span>
                  </div>

                  <div className="gallery-item-body">
                    <div className="gallery-location-tag">
                      <MapPin size={12} /> {item.location}
                    </div>
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-desc">{item.desc}</p>
                    <div className="gallery-item-footer">
                      <span className="gallery-view-link">View Details →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="gallery-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
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
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <button
                className="gallery-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous item"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="gallery-nav-btn next"
                onClick={handleNext}
                aria-label="Next item"
              >
                <ChevronRight size={24} />
              </button>

              <div className="gallery-modal-grid">
                <div className="gallery-modal-image-col">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="gallery-modal-image"
                  />
                </div>

                <div className="gallery-modal-info-col">
                  <div className="gallery-modal-tags">
                    <span className="gallery-category-pill modal-pill">{activeItem.category}</span>
                    <span className="gallery-location-tag modal-loc">
                      <MapPin size={13} /> {activeItem.location}
                    </span>
                  </div>

                  <h2 className="gallery-modal-title">{activeItem.title}</h2>
                  <p className="gallery-modal-desc">{activeItem.desc}</p>

                  <div className="gallery-modal-meta-box">
                    <h4>Installation Highlights</h4>
                    <ul>
                      <li>Commercial high-grade SMD / LED components</li>
                      <li>High refresh rate & seamless cabinet calibration</li>
                      <li>Turnkey fabrication, structure & electrical setup</li>
                      <li>NovaStar / Android integrated controller architecture</li>
                    </ul>
                  </div>

                  <div className="gallery-modal-actions">
                    <button
                      className="btn btn-primary gallery-quote-btn"
                      onClick={() => {
                        setActiveItem(null);
                        if (openQuote) openQuote();
                      }}
                    >
                      Get Quote for This Screen <ArrowRight size={16} />
                    </button>
                    <a
                      href="tel:+923334727284"
                      className="btn btn-outline gallery-call-btn"
                    >
                      <Phone size={16} /> +92 333 4727284
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="gallery-cta-banner">
        <div className="container">
          <div className="gallery-cta-box">
            <h2>Looking for a Customized Screen Setup?</h2>
            <p>
              From outdoor billboards to corporate video walls and digital kiosks, our engineers deliver tailored turnkey AV solutions across Pakistan.
            </p>
            <div className="gallery-cta-btns">
              <button
                className="btn btn-primary"
                onClick={openQuote}
              >
                Request Consultation <ArrowRight size={16} />
              </button>
              <a
                href="https://wa.me/923334727284"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
