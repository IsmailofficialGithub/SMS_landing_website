import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Monitor, Tv, Speaker, Projector, Layers, Cpu } from 'lucide-react'

const products = [
  {
    title: 'Indoor SMD Screens',
    desc: 'Ultra-high resolution indoor displays with pixel pitches from P1.5 to P4. Perfect for retail stores, corporate lobbies, control rooms, and event venues.',
    specs: ['Pixel Pitch: P1.5 – P4', 'Brightness: 800–1500 nits', 'Refresh Rate: 3840Hz', 'Front Serviceable'],
    image: '/image/products/indoor_smd.jpg',
    tag: 'Most Popular',
  },
  {
    title: 'Outdoor SMD Screens',
    desc: 'IP65-rated outdoor LED displays engineered for harsh Pakistani weather. From P4 to P10 pixel pitch with up to 7000 nits for direct sunlight visibility.',
    specs: ['Pixel Pitch: P4 – P10', 'Brightness: up to 7000 nits', 'IP65 Waterproof', 'Wind-Load Tested'],
    image: '/image/products/outdoor_smd.jpg',
    tag: 'Outdoor Grade',
  },
  {
    title: 'Samsung Video Walls',
    desc: 'Official Samsung distributor in Pakistan. Ultra-narrow bezel LCD video walls for seamless multi-screen setups in corporate and broadcast environments.',
    specs: ['Bezel: 1.8mm / 3.5mm', '4K UHD Support', '24/7 Operation', 'Samsung Warranty'],
    image: '/image/products/samsung_video_wall.jpg',
    tag: 'Samsung Authorized',
  },
  {
    title: 'NovaStar Controllers',
    desc: 'Industry-standard NovaStar LED processors for flawless content delivery. Zero-latency, multi-input, and cloud-manageable from anywhere in the world.',
    specs: ['Multi-Input Support', 'Zero Latency Output', 'Remote Cloud Management', 'Supports 4K'],
    image: '/image/products/novastar_controller.jpg',
    tag: 'Controller',
  },
  {
    title: 'Smart Podiums',
    desc: 'Interactive digital lecterns for universities, conference halls, and government institutions. Integrate touch screens, HDMI, and wireless presentation tools.',
    specs: ['Touch Screen Interface', 'HDMI / VGA Input', 'Wireless Presentation', 'Custom Branding'],
    image: '/image/products/digital_podium.jpg',
    tag: 'Education & Corporate',
  },
  {
    title: 'Interactive Screens',
    desc: 'Flat panel interactive displays for classrooms and boardrooms. Dual-OS, touch-enabled, and compatible with all major video conferencing platforms.',
    specs: ['Touch: 20-Point Multi-Touch', 'Dual OS (Android + PC)', 'Built-in Camera & Mic', 'Conference Ready'],
    image: '/image/products/interactive_screen.jpg',
    tag: 'Interactive',
  },
]

export default function Products() {
  return (
    <div style={{ backgroundColor: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1b4b 50%, #0a0a1a 100%)',
        padding: 'clamp(80px, 10vw, 120px) 0 clamp(40px, 6vw, 80px)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(0,200,255,0.15)', border: '1px solid rgba(0,200,255,0.3)', color: '#00c8ff', padding: '6px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px' }}>OUR PRODUCT RANGE</span>
            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.15 }}>Premium AV Hardware</h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>From indoor pixel-perfect SMD displays to powerful outdoor LED installations — we bring world-class brands to Pakistan.</p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'clamp(40px, 6vw, 70px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0' }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#f8fafc' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--brand-blue)', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.5px' }}>{p.tag}</span>
              </div>
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.specs.map((s, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#475569' }}>
                      <span style={{ color: 'var(--brand-cyan)', fontWeight: 700 }}>✓</span> {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
