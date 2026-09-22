import React from 'react'
import { motion } from 'framer-motion'

const team = [
  { name: 'Muhammad Adnan', role: 'CEO & Founder', desc: 'With 15+ years in the AV industry, Adnan leads Spectrum Digital with a vision to bring world-class display technology to Pakistan.' },
  { name: 'Imran Hussain', role: 'Chief Technical Officer', desc: 'An expert in LED processing and structural engineering, Imran oversees every technical installation from planning to delivery.' },
  { name: 'Sara Malik', role: 'Head of Sales', desc: 'Sara has built strong partnerships with leading brands across Pakistan, delivering tailored display solutions for every business need.' },
]

const milestones = [
  { year: '2012', event: 'Spectrum Digital founded in Lahore with a focus on SMD screen distribution.' },
  { year: '2015', event: 'Became official distributor of Samsung Professional Displays in Pakistan.' },
  { year: '2018', event: 'Completed 100+ large-scale installations across major Pakistani cities.' },
  { year: '2021', event: 'Expanded to NovaStar and LianTronics product lines. Opened Karachi office.' },
  { year: '2024', event: 'Delivered the largest LED screen installation at Jinnah Convention Center.' },
  { year: '2026', event: 'Now serving 500+ clients with a portfolio spanning retail, events, and government.' },
]

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1b4b 50%, #0a0a1a 100%)',
        padding: '120px 0 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(0,200,255,0.15)', border: '1px solid rgba(0,200,255,0.3)', color: '#00c8ff', padding: '6px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '20px', letterSpacing: '1px' }}>WHO WE ARE</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>About Spectrum Digital</h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto' }}>Pakistan's leading provider of SMD, LED, and digital display solutions — trusted by top brands for over a decade.</p>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <div className="container" style={{ marginTop: '80px', maxWidth: '900px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px' }}>Our Mission</h2>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.9' }}>
            At Spectrum Digital, we believe every brand deserves to be seen. Since 2012, we have been bringing cutting-edge visual display technology from Samsung, NovaStar, LianTronics, and Unilumin to businesses across Pakistan — providing end-to-end solutions from consultation and fabrication to installation and long-term support.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container" style={{ marginTop: '70px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '14+', label: 'Years Experience' },
            { number: '4', label: 'City Offices' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center', background: '#f8fafc', borderRadius: '16px', padding: '40px 20px', border: '1px solid #e2e8f0' }}
            >
              <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--brand-blue)', marginBottom: '8px' }}>{stat.number}</div>
              <div style={{ color: '#64748b', fontWeight: 600 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="container" style={{ marginTop: '100px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', textAlign: 'center', marginBottom: '50px' }}>Meet The Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: '#fff', borderRadius: '16px', padding: '36px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0' }}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '28px', fontWeight: 900 }}>
                {member.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>{member.name}</h3>
              <p style={{ color: 'var(--brand-blue)', fontWeight: 600, marginBottom: '14px', fontSize: '14px' }}>{member.role}</p>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="container" style={{ marginTop: '100px', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', textAlign: 'center', marginBottom: '50px' }}>Our Journey</h2>
        <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '3px solid #e2e8f0' }}>
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ marginBottom: '40px', position: 'relative' }}
            >
              <div style={{ position: 'absolute', left: '-42px', top: '4px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--brand-blue)', border: '3px solid white', boxShadow: '0 0 0 3px var(--brand-blue)' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand-cyan)', letterSpacing: '1px' }}>{m.year}</span>
              <p style={{ color: '#475569', lineHeight: '1.7', marginTop: '6px', fontSize: '16px' }}>{m.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
