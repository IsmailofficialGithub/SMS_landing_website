import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const projectList = [
  { id: 0, title: "Khaadi - Lucky One Mall", desc: "A state-of-the-art SMD Video Wall installation for Khaadi at Lucky One Mall, Karachi.", image: "/image/projects/Project1/Project1.png", tag: "Retail" },
  { id: 1, title: "Khaadi - Mandi Bahauddin", desc: "Custom indoor LED display integrated seamlessly into Khaadi's Mandi Bahauddin outlet.", image: "/image/projects/Project2/image.png", tag: "Retail" },
  { id: 2, title: "Unilever Highway Banners", desc: "High-impact outdoor digital banners installed along the Islamabad Highway for Unilever.", image: "/image/projects/Project3/image copy.png", tag: "Outdoor" },
  { id: 3, title: "District 92 Branding", desc: "Complete digital branding and display solution for District 92 in Bahria Town Phase 8, Islamabad.", image: "/image/projects/project4/image.png", tag: "Branding" },
  { id: 4, title: "Atif Aslam Concert", desc: "Spectacular stage backdrop and full set digital displays for the Atif Aslam live concert.", image: "/image/projects/Project5/image.png", tag: "Events" },
  { id: 5, title: "Khaadi - Hyderabad", desc: "Another massive SMD Video Wall at Khaadi's Hyderabad flagship store.", image: "/image/projects/Project6/image.png", tag: "Retail" },
]

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '100px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1b4b 50%, #0a0a1a 100%)',
        padding: 'clamp(80px, 10vw, 120px) 0 clamp(40px, 6vw, 80px)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(0,200,255,0.15)', border: '1px solid rgba(0,200,255,0.3)', color: '#00c8ff', padding: '6px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px' }}>OUR PORTFOLIO</span>
            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.15 }}>Featured Projects</h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Real installations for real brands — from retail giants to live concerts.</p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'clamp(40px, 6vw, 70px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          {projectList.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/project/${proj.id}`} style={{ textDecoration: 'none', display: 'block', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: '#fff', border: '1px solid #f0f0f0' }}>
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.target.style.transform = 'scale(1)'}
                    onError={e => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }}
                  />
                  <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--brand-blue)', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>{proj.tag}</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>{proj.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px', marginBottom: '16px' }}>{proj.desc}</p>
                  <span style={{ color: 'var(--brand-cyan)', fontWeight: 700, fontSize: '14px' }}>View Project →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
