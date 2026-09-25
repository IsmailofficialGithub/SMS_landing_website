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
        position: "relative",
        background: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0, 102, 255, 0.45) 0%, rgba(0, 163, 255, 0.15) 40%, rgba(5, 11, 24, 0.98) 85%, #050b18 100%)",
        padding: "clamp(90px, 12vw, 130px) 16px clamp(40px, 8vw, 85px)",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 163, 255, 0.18)",
      }}>
        <div style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "350px",
          background: "radial-gradient(circle, rgba(0, 163, 255, 0.3) 0%, rgba(0, 102, 255, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0, 163, 255, 0.12)",
            border: "1px solid rgba(0, 163, 255, 0.35)",
            boxShadow: "0 0 24px rgba(0, 163, 255, 0.2)",
            padding: "8px 22px",
            borderRadius: "999px",
            marginBottom: "22px",
          }}>
            <span style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#29ebf9",
              boxShadow: "0 0 10px #29ebf9",
            }} />
            <span style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#29ebf9",
            }}>
              GET IN TOUCH
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(34px, 5.5vw, 66px)",
            fontWeight: 900,
            fontFamily: "var(--font-heading)",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-1.5px",
          }}>
            Let's Talk About Your{" "}
            <span style={{
              background: "linear-gradient(135deg, #ffffff 10%, #29ebf9 60%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}>
              Display Project.
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "#cbd5e1",
            maxWidth: "640px",
            margin: "0 auto 36px",
            lineHeight: 1.65,
          }}>
            Ready to transform your space? Our display engineers and AV consultants are available to provide custom solutions, technical specs, and fast quotes.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}>
            {[
              "Fast 2-Hour Response",
              "Free On-Site Survey & Specs",
              "Official Pakistan Distributor",
            ].map((text, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "30px",
                  padding: "7px 18px",
                  fontSize: "13px",
                  color: "#f1f5f9",
                  fontWeight: 500,
                }}
              >
                <CheckCircle size={14} color="#29ebf9" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container" style={{ maxWidth: "1100px", paddingTop: "clamp(40px, 6vw, 80px)" }}>
        <div className="contact-layout-grid">

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>
              Let's Talk
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "40px" }}>
              Whether you need a quote, a technical question, or want to schedule a site survey — we are here.
            </p>

            {[
              { icon: <Phone size={20} />, label: "Phone", value: " +92 333 4727284", href: "tel:+923012224333" },
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
              <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: "20px", boxShadow: "var(--shadow-lg)", padding: "clamp(24px, 5vw, 48px)", border: "1px solid rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "32px", fontFamily: "var(--font-heading)" }}>
                  Send a Message
                </h3>

                <div className="contact-form-row">
                  <label style={labelStyle}>
                    Full Name *
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Ahmed Khan" style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    Email *
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle} />
                  </label>
                </div>

                <div className="contact-form-row">
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
