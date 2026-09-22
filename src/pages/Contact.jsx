import React, { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react"

const labelStyle = {
  display: "flex", flexDirection: "column", gap: "8px",
  fontSize: "14px", fontWeight: 600, color: "var(--text-dark)",
}

const inputStyle = {
  padding: "12px 16px", borderRadius: "10px",
  border: "1px solid #e2e8f0", fontSize: "15px",
  color: "var(--text-dark)", backgroundColor: "var(--bg-light)",
  outline: "none", transition: "border-color 0.2s",
  width: "100%", fontFamily: "var(--font-body)", cursor: "text",
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ backgroundColor: "var(--bg-white)", minHeight: "100vh", paddingBottom: "100px" }}>
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: "140px 0 80px",
        textAlign: "center",
        color: "#fff",
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#00a3ff", display: "block", marginBottom: "16px" }}>
            GET IN TOUCH
          </span>
          <h1 style={{ fontSize: "52px", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1.1, marginBottom: "20px" }}>
            Contact <span style={{ background: "linear-gradient(to right, #fff, #00a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Us</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#94a3b8", maxWidth: "550px", margin: "0 auto", lineHeight: 1.6 }}>
            Ready to transform your space? Our team is available to discuss your project requirements.
          </p>
        </motion.div>
      </div>

      <div className="container" style={{ maxWidth: "1100px", paddingTop: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "60px", alignItems: "start" }}>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>
              Let"s Talk
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "40px" }}>
              Whether you need a quote, a technical question, or want to schedule a site survey — we are here.
            </p>

            {[
              { icon: <Phone size={20} />, label: "Phone", value: "+92 301 2224333", href: "tel:+923012224333" },
              { icon: <Mail size={20} />, label: "Email", value: "info@spectrumscreens.com", href: "mailto:info@spectrumscreens.com" },
              { icon: <MapPin size={20} />, label: "Address", value: "106-G Commercial Phase, Main Office, Pakistan", href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "28px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: "16px", color: "var(--text-dark)", fontWeight: 500, textDecoration: "none" }}>{item.value}</a>
                    : <span style={{ fontSize: "16px", color: "var(--text-dark)", fontWeight: 500 }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}

            <div style={{ marginTop: "40px", padding: "24px", background: "var(--bg-light)", borderRadius: "16px" }}>
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "16px" }}>Business Hours</h4>
              {[
                { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
                { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((h, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#475569", marginBottom: "8px" }}>
                  <span style={{ fontWeight: 500 }}>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "80px 40px", background: "var(--bg-light)", borderRadius: "20px" }}>
                <CheckCircle size={64} color="var(--brand-cyan)" style={{ marginBottom: "24px" }} />
                <h3 style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "16px" }}>Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: "20px", boxShadow: "var(--shadow-lg)", padding: "48px", border: "1px solid rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "32px", fontFamily: "var(--font-heading)" }}>
                  Send a Message
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    Full Name *
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Ahmed Khan" style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    Email *
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle} />
                  </label>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    Phone
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 0000000" style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    Service Needed
                    <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select a service...</option>
                      <option>Indoor SMD Screen</option>
                      <option>Outdoor LED Display</option>
                      <option>Event Rental</option>
                      <option>Digital Podium</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label style={{ ...labelStyle, marginBottom: "28px" }}>
                  Message *
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Describe your project..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                  />
                </label>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "16px", fontSize: "16px", cursor: "pointer", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
