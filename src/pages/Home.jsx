import React, { useState, useRef } from 'react'
import { Phone, Mail, MapPin, ArrowRight, Play, Building2, Route, Store, MonitorPlay, Volume2, VolumeX, X, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import FloatingContact from '../components/FloatingContact'
import Hyperspeed from '../components/Hyperspeed'
import { Link, useNavigate } from 'react-router-dom'
import BeamCircle from '../components/lightswind/beam-circle'
import { InteractiveCardGallery } from '../components/lightswind/interactive-card-gallery'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/lightswind/accordion'

// Navbar moved to global App level

const Hero = ({ openQuote }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/image/Video.mp4" type="video/mp4" />
      </video>

      <button className="mute-toggle-btn" onClick={toggleMute} aria-label="Toggle video sound">
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Removed text block per user request */}
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={openQuote}>Get a Quote <ArrowRight size={16} style={{ marginLeft: '8px' }} /></button>
            <button className="btn btn-outline"><Play size={16} style={{ marginRight: '8px', fill: 'currentColor' }} /> Watch Video</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-features"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="hero-feature">
            <Building2 className="hero-feature-icon" size={24} />
            <h4>Shopping Malls</h4>
            <p>Attract shoppers with stunning visuals.</p>
          </div>
          <div className="hero-feature">
            <Route className="hero-feature-icon" size={24} />
            <h4>Roads &amp; Highways</h4>
            <p>Reach thousands every day.</p>
          </div>
          <div className="hero-feature">
            <Store className="hero-feature-icon" size={24} />
            <h4>Retail Stores</h4>
            <p>Boost in-store engagement &amp; sales.</p>
          </div>
          <div className="hero-feature">
            <MonitorPlay className="hero-feature-icon" size={24} />
            <h4>Events &amp; Public Spaces</h4>
            <p>Create unforgettable experiences.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Brands = () => {
  const logos = [
    { src: "/image/golootlo.png", alt: "Golootlo" },
    { src: "/image/telenor.png", alt: "Telenor" },
    { src: "/image/imarat.png", alt: "Imarat" },
    { src: "/image/bahria_town.png", alt: "Bahria Town" },
    { src: "/image/golootlo.png", alt: "Golootlo" },
    { src: "/image/telenor.png", alt: "Telenor" },
    { src: "/image/imarat.png", alt: "Imarat" },
    { src: "/image/bahria_town.png", alt: "Bahria Town" },
  ];

  return (
    <motion.section
      className="brands"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h4>Authorized Partners &amp; Clients</h4>
        <div className="brands-slider-container">
          <div className="brands-track">
            {/* First Set */}
            {logos.map((logo, i) => (
              <img key={`logo-1-${i}`} src={logo.src} alt={logo.alt} style={{ height: '90px', objectFit: 'contain', padding: '0 20px' }} onError={(e) => { e.target.style.display = 'none' }} />
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {logos.map((logo, i) => (
              <img key={`logo-2-${i}`} src={logo.src} alt={logo.alt} style={{ height: '90px', objectFit: 'contain', padding: '0 20px' }} onError={(e) => { e.target.style.display = 'none' }} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const Products = () => {
  return (
    <section id="products" className="bento-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '15px' }}>Premium Hardware</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Discover our range of professional AV equipment, designed for stunning clarity and relentless reliability.</p>
        </motion.div>

        <div className="bento-grid">
          <motion.div
            className="bento-card bento-large"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src="/image/products/indoor_smd.jpg" alt="SMD Screens" />
            <div className="bento-content">
              <h3>SMD Screens &amp; Video Walls</h3>
              <p>High-resolution indoor and outdoor displays for massive visual impact.</p>
              <button className="btn-bento">Explore Series</button>
            </div>
          </motion.div>

          <motion.div
            className="bento-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/image/products/novastar_controller.jpg" alt="Novastar Controllers" />
            <div className="bento-content">
              <h3>Novastar Controllers</h3>
              <p>Industry-standard processing for seamless playback.</p>
            </div>
          </motion.div>

          <motion.div
            className="bento-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="/image/products/digital_podium.jpg" alt="Digital Podiums" />
            <div className="bento-content">
              <h3>Smart Podiums</h3>
              <p>Interactive lecterns for modern presentations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Reviews = () => {
  const reviews = [
    { name: "Ali Khan", location: "Lahore, PK", review: "The video wall installed at our retail store is phenomenal. Exceptional service by the team!", avatar: "https://i.pravatar.cc/150?u=ali" },
    { name: "Fatima Ahmed", location: "Karachi, PK", review: "Highly professional. The outdoor SMD screen quality is the best we've seen in Pakistan.", avatar: "https://i.pravatar.cc/150?u=fatima" },
    { name: "Usman Tariq", location: "Islamabad, PK", review: "They delivered right on time. The digital podiums are a huge hit in our university auditoriums.", avatar: "https://i.pravatar.cc/150?u=usman" },
    { name: "Ayesha Mahmood", location: "Faisalabad, PK", review: "Great pricing and unmatched after-sales support. Highly recommend their LED solutions.", avatar: "https://i.pravatar.cc/150?u=ayesha" },
    { name: "Bilal Qureshi", location: "Multan, PK", review: "We rented their screens for a major tech event. Stunning visuals and completely hassle-free.", avatar: "https://i.pravatar.cc/150?u=bilal" },
    { name: "Sana Rizvi", location: "Rawalpindi, PK", review: "The team is highly technical and guided us to the perfect indoor display for our corporate lobby.", avatar: "https://i.pravatar.cc/150?u=sana" },
    { name: "Zeeshan Malik", location: "Karachi, PK", review: "Top-notch quality! The brightness and clarity of the screens are exactly what they promised.", avatar: "https://i.pravatar.cc/150?u=zeeshan" },
    { name: "Hina Shah", location: "Lahore, PK", review: "Best AV solutions provider in Punjab. The installation was seamless and professional.", avatar: "https://i.pravatar.cc/150?u=hina" },
    { name: "Kamran Faisal", location: "Peshawar, PK", review: "Very satisfied with their SMD screens. Transformed the entire look of our showroom.", avatar: "https://i.pravatar.cc/150?u=kamran" },
    { name: "Sadia Iqbal", location: "Islamabad, PK", review: "Amazing customer service. The interactive screens are incredibly responsive and modern.", avatar: "https://i.pravatar.cc/150?u=sadia" }
  ];

  return (
    <section id="blog" className="reviews section bg-light-gray">
      <div className="container">
        <div className="reviews-header">
          <div className="avatar-group-container">
            <div className="avatar-group">
              {reviews.slice(0, 6).map((r, i) => (
                <img key={i} src={r.avatar} className="avatar-circle" alt="reviewer" />
              ))}
              <div className="avatar-circle more-count">+4</div>
            </div>
            <p><strong>4.9/5</strong> based on 100+ reviews across Pakistan</p>
          </div>
          <h2 className="section-title">Trusted by Top Brands</h2>
          <p className="section-subtitle">See what businesses and professionals across Pakistan are saying about our digital display solutions.</p>
        </div>

        <div className="reviews-scroll-container">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#e2b005" color="#e2b005" />)}
                </div>
                <p className="review-text">"{r.review}"</p>
                <div className="review-author">
                  <img src={r.avatar} alt={r.name} />
                  <div>
                    <h4>{r.name}</h4>
                    <span>{r.location}</span>
                  </div>
                  <div className="google-icon">G</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ proj, idx, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
      className="featured-project-card"
    >
      <img
        src={proj.image}
        alt={proj.title}
        loading="lazy"
        decoding="async"
        className="featured-project-img"
        onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'; }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5, 12, 28, 0.95) 0%, rgba(5, 12, 28, 0.4) 55%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="featured-hover-glow" />

      <div style={{
        position: 'absolute', top: '18px', left: '18px',
        background: 'rgba(0, 102, 255, 0.88)', color: '#fff',
        fontSize: '12px', fontWeight: 700, letterSpacing: '1px',
        padding: '4px 12px', borderRadius: '20px',
        backdropFilter: 'blur(4px)',
      }}>
        {String(idx + 1).padStart(2, '0')}
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
        <h3 style={{
          color: '#fff', fontSize: '21px', fontWeight: 700,
          fontFamily: 'var(--font-heading)', marginBottom: '8px',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
        }}>
          {proj.title}
        </h3>

        <p style={{
          color: 'rgba(255,255,255,0.85)', fontSize: '13.5px', lineHeight: 1.5,
          marginBottom: '14px',
        }}>
          {proj.desc.substring(0, 85)}...
        </p>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: 'var(--brand-cyan)', fontWeight: 600, fontSize: '14px',
          letterSpacing: '0.5px',
        }}>
          View Project <span style={{ fontSize: '16px' }}>→</span>
        </span>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  const projectList = [
    { title: "Khaadi - Lucky One Mall", desc: "A state-of-the-art SMD Video Wall installation for Khaadi at Lucky One Mall, Karachi. This massive display elevates the retail experience, providing crisp, dynamic visuals.", image: "/image/projects/Project1/Project1.png" },
    { title: "Khaadi - Mandi Bahauddin", desc: "Custom indoor LED display integrated seamlessly into Khaadi's Mandi Bahauddin outlet. Designed for high brightness and stunning color accuracy to captivate in-store shoppers.", image: "/image/projects/Project2/image.png" },
    { title: "Unilever Highway Banners", desc: "High-impact outdoor digital banners installed along the Islamabad Highway for Unilever. These weather-proof, ultra-bright displays guarantee maximum visibility and reach.", image: "/image/projects/Project3/image copy.png" },
    { title: "District 92 Branding", desc: "Complete digital branding and display solution for District 92 in Bahria Town Phase 8, Islamabad. This project involved end-to-end installation of large-format outdoor screens.", image: "/image/projects/project4/image.png" },
    { title: "Atif Aslam Concert", desc: "Spectacular stage backdrop and full set digital displays for the Atif Aslam live concert at Jinnah Convention Center. Delivered real-time, zero-latency visual effects.", image: "/image/projects/Project5/image.png" },
    { title: "Khaadi - Hyderabad", desc: "Continuing our strong partnership with Khaadi, we deployed another massive SMD Video Wall at their Hyderabad flagship store. Providing brilliant, bezel-less visuals.", image: "/image/projects/Project6/image.png" }
  ]

  return (
    <section id="projects" style={{ padding: '120px 0', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '1300px' }}>

        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '70px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'inline-block', fontSize: '12px', fontWeight: 700,
              letterSpacing: '3px', textTransform: 'uppercase',
              color: 'var(--brand-blue)', background: 'rgba(0,102,255,0.08)',
              padding: '6px 18px', borderRadius: '20px', marginBottom: '16px',
              border: '1px solid rgba(0,102,255,0.15)',
            }}
          >
            Our Work
          </motion.span>
          <h2 style={{ fontSize: '48px', fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '16px' }}>
            Featured Projects
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
            Take a look at some of our recent installations and see how we help brands stand out.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projectList.map((proj, idx) => (
            <ProjectCard
              key={idx}
              proj={proj}
              idx={idx}
              onClick={() => navigate(`/project/${idx}`)}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '60px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="/#projects" className="btn btn-outline" style={{ borderRadius: '50px', padding: '14px 40px', fontSize: '15px', fontWeight: 600 }}>
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  )
}


const ProcessSection = () => {
  return (
    <section className="section bg-light-gray" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">A seamless end-to-end process ensuring flawless execution for every display project.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
          {[
            { step: '01', title: 'Consultation & Strategy', desc: 'We analyze your space, lighting conditions, and business goals to recommend the perfect display technology.' },
            { step: '02', title: 'Custom Installation', desc: 'Our expert engineers handle the fabrication, wiring, and structural installation with zero disruption to your business.' },
            { step: '03', title: 'Content & Support', desc: 'We provide training on content management software and offer 24/7 technical support to keep you shining.' }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg-white)', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
              <div style={{ fontSize: '64px', fontWeight: '900', color: 'rgba(0,102,255,0.1)', position: 'absolute', top: '20px', right: '30px', lineHeight: '1' }}>{item.step}</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--text-dark)', position: 'relative', zIndex: 1 }}>{item.title}</h3>
              <p style={{ color: '#475569', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Do you provide outdoor waterproof screens?", a: "Yes! Our outdoor SMD screens are IP65 rated, fully waterproof, and feature ultra-high brightness (up to 7000 nits) to combat direct sunlight." },
    { q: "How long does installation usually take?", a: "For standard indoor video walls, installation typically takes 2-4 days. Large outdoor structural projects can take 1-2 weeks depending on fabrication requirements." },
    { q: "Can I update the screen content remotely?", a: "Absolutely. We provide cloud-based digital signage software (like NovaStar) that allows you to manage content from anywhere in the world using your laptop or smartphone." },
    { q: "What happens if a module fails?", a: "We provide comprehensive warranties on all our displays. Thanks to front-serviceable cabinets, our technicians can swap out a faulty module in minutes without dismantling the screen." }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-white)', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about our digital display solutions.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    gap: '16px',
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    fontWeight: '300',
                    color: 'var(--brand-blue)',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </button>
                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '200px' : '0px',
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px', paddingBottom: '24px', margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}


const CallToAction = ({ openQuote }) => {
  return (
    <section className="cta-section">
      <Hyperspeed
        effectOptions={{
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x0f172a,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0x0066ff, 0x00a3ff, 0x1e293b],
            rightCars: [0x00a3ff, 0x0066ff, 0xcbd5e1],
            sticks: 0x00a3ff
          }
        }}
      />
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Accelerate Your Brand?</h2>
          <p>Join hundreds of businesses across Pakistan who trust us for their high-impact visual displays.</p>
          <button className="btn btn-primary" onClick={openQuote}>Get a Custom Quote <ArrowRight size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></button>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <img src="/image/Logo.png" alt="Logo" style={{ height: '40px', marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
          <p>We are a leading provider of professional AV and digital display solutions, delivering excellence to clients nationwide.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Projects</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Info</h4>
          <ul>
            <li style={{ display: 'flex', gap: '10px' }}><MapPin size={16} /> 106-G Commercial Phase, Main Office</li>
            <li style={{ display: 'flex', gap: '10px' }}><Phone size={16} />  +92 333 4727284</li>
            <li style={{ display: 'flex', gap: '10px' }}><Mail size={16} /> info@spectrumscreens.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 Spectrum Digital. All Rights Reserved.
      </div>
    </div>
  </footer>
)

// QuoteModal moved to global App level

const AboutUs = () => {
  return (
    <section id="about" className="section bg-light-gray" style={{ padding: '100px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Spectrum Digital is Pakistan's leading provider of professional AV and digital display solutions.
          With years of experience in the industry, we specialize in high-impact LED and SMD screens for
          shopping malls, highways, retail stores, and massive public events. Our mission is to transform
          spaces into unforgettable visual experiences using top-tier hardware and seamless installation services.
        </p>
      </div>
    </section>
  )
}

function Home({ openQuote }) {
  return (
    <>
      <Hero openQuote={openQuote} />
      <AboutUs />
      <Brands />
      <Projects />
      <Products />
      <Reviews />
      <ProcessSection />
      <FaqSection />
      <CallToAction openQuote={openQuote} />
      <Footer />
      <FloatingContact />
    </>
  )
}

export default Home
