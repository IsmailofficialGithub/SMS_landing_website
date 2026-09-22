import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'How LED Video Walls Are Transforming Retail in Pakistan',
    date: 'September 10, 2026',
    category: 'Industry Insights',
    excerpt: 'Retail brands across Pakistan are upgrading from static signage to dynamic LED video walls. We explore why this shift is happening and what it means for customer engagement and brand perception.',
    readTime: '5 min read',
  },
  {
    title: 'P2.5 vs P4 vs P6: Choosing the Right Pixel Pitch for Your Space',
    date: 'August 25, 2026',
    category: 'Technical Guide',
    excerpt: 'Pixel pitch is one of the most misunderstood specs in the LED display industry. This guide breaks it down with real-world examples so you can make the right investment.',
    readTime: '7 min read',
  },
  {
    title: 'Behind the Screens: How We Built the Atif Aslam Concert Setup',
    date: 'August 12, 2026',
    category: 'Case Study',
    excerpt: 'A 40ft x 20ft main stage backdrop, 4 wing screens, and zero-latency synchronization with live lighting. Here\'s how the Spectrum Digital team pulled off one of Pakistan\'s biggest LED concert setups.',
    readTime: '6 min read',
  },
  {
    title: 'NovaStar vs Brompton: Which LED Controller Is Right for You?',
    date: 'July 30, 2026',
    category: 'Technical Guide',
    excerpt: 'Both NovaStar and Brompton are industry leaders in LED processing. We compare their strengths, use cases, pricing, and support in the Pakistani market.',
    readTime: '8 min read',
  },
  {
    title: 'Outdoor Digital Signage in Pakistan: IP Ratings Explained',
    date: 'July 15, 2026',
    category: 'Buying Guide',
    excerpt: 'When buying an outdoor LED screen in Pakistan, the IP rating is critical. We explain what IP65, IP66, and IP67 mean and which one you actually need for your environment.',
    readTime: '4 min read',
  },
  {
    title: 'How to Calculate the Viewing Distance for Your LED Screen',
    date: 'June 28, 2026',
    category: 'Technical Guide',
    excerpt: 'Installing an LED screen without checking the optimal viewing distance is a costly mistake. Use our simple formula and chart to get it right the first time.',
    readTime: '3 min read',
  },
]

const categoryColors = {
  'Industry Insights': '#3b82f6',
  'Technical Guide': '#8b5cf6',
  'Case Study': '#06b6d4',
  'Buying Guide': '#f59e0b',
}

export default function Blog() {
  return (
    <div style={{ backgroundColor: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '100px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1b4b 50%, #0a0a1a 100%)',
        padding: '120px 0 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(0,200,255,0.15)', border: '1px solid rgba(0,200,255,0.3)', color: '#00c8ff', padding: '6px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px' }}>KNOWLEDGE HUB</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>The Spectrum Blog</h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>Expert guides, case studies, and industry insights from Pakistan's leading AV display specialists.</p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '70px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.14)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ background: categoryColors[post.category] || '#3b82f6', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>{post.category}</span>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>{post.readTime}</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px', lineHeight: 1.3 }}>{post.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px', marginBottom: '20px' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>{post.date}</span>
                <span style={{ color: 'var(--brand-cyan)', fontWeight: 700, fontSize: '14px' }}>Read More →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
