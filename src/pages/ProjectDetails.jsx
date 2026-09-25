import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const projectList = [
  {
    id: 0, title: "Khaadi - Lucky One Mall",
    desc: "A state-of-the-art SMD Video Wall installation for Khaadi at Lucky One Mall, Karachi. This massive display elevates the retail experience, providing crisp, dynamic visuals.",
    image: "/image/projects/Project1/Project1.png",
    details: "Installed a P2.5 indoor SMD video wall covering 15ft x 9ft. Delivered ultra-high contrast ratio with NovaStar processing ensuring zero-latency content delivery across the entire display. The project was completed in 4 days during mall off-hours.",
    specs: { location: "Lucky One Mall, Karachi", client: "Khaadi", screenType: "P2.5 Indoor SMD", size: "15ft x 9ft", controller: "NovaStar MSD300", duration: "4 Days" },
    features: ["Ultra-High Contrast Ratio", "Zero-Latency NovaStar Processing", "Front-Serviceable Panels", "Remote Content Management", "Seamless Bezel-Less Display"]
  },
  {
    id: 1, title: "Khaadi - Mandi Bahauddin",
    desc: "Custom indoor LED display integrated seamlessly into Khaadi's Mandi Bahauddin outlet. Designed for high brightness and stunning color accuracy to captivate in-store shoppers.",
    image: "/image/projects/Project2/image.png",
    details: "A curved P3 indoor display tailored to fit the store's architectural pillars. The high refresh rate ensures it looks perfect on camera when shoppers take photos. Installation involved custom metal fabrication.",
    specs: { location: "Mandi Bahauddin", client: "Khaadi", screenType: "P3 Indoor Curved", size: "Custom", controller: "NovaStar", duration: "3 Days" },
    features: ["High Refresh Rate Panel", "Custom Metal Fabrication", "Color-Accurate Display", "Camera-Friendly Output", "24/7 Support"]
  },
  {
    id: 2, title: "Unilever Highway Banners",
    desc: "High-impact outdoor digital banners installed along the Islamabad Highway for Unilever. These weather-proof, ultra-bright displays guarantee maximum visibility and reach.",
    image: "/image/projects/Project3/image copy.png",
    details: "P6 Outdoor DIP LED screens designed to withstand extreme weather. Rated IP65 for waterproof performance, pushing 7000 Nits of brightness to combat direct sunlight along the highway.",
    specs: { location: "Islamabad Highway", client: "Unilever Pakistan", screenType: "P6 Outdoor DIP", brightness: "7000 Nits", ipRating: "IP65", duration: "7 Days" },
    features: ["IP65 Waterproof Rated", "7000 Nits Brightness", "Wind-Load Structural Frame", "24/7 Operation", "Automated Brightness Control"]
  },
  {
    id: 3, title: "District 92 Branding",
    desc: "Complete digital branding and display solution for District 92 in Bahria Town Phase 8, Islamabad. This project involved end-to-end installation of large-format outdoor screens.",
    image: "/image/projects/project4/image.png",
    details: "A massive multi-screen setup covering the facade of the building. We utilized lightweight die-cast aluminum cabinets for quick installation and easy front-maintenance.",
    specs: { location: "Bahria Town Phase 8, Islamabad", client: "District 92", screenType: "Large-Format Outdoor", coverage: "Full Facade", cabinets: "Die-Cast Aluminum", duration: "10 Days" },
    features: ["Full-Facade Coverage", "Lightweight Die-Cast Cabinets", "Easy Front-Maintenance", "Structural Wind Analysis", "Content Management System"]
  },
  {
    id: 4, title: "Atif Aslam Concert",
    desc: "Spectacular stage backdrop and full set digital displays for the Atif Aslam live concert at Jinnah Convention Center. Delivered real-time, zero-latency visual effects.",
    image: "/image/projects/Project5/image.png",
    details: "Provided a 40ft x 20ft P3.91 rental LED screen as the main backdrop, along with 4 side-wing screens. Synchronized visuals with live lighting via Art-Net and Resolume Arena.",
    specs: { location: "Jinnah Convention Center", client: "Event Organizer", screenType: "P3.91 Rental LED", size: "40ft x 20ft + 4 Wings", sync: "Art-Net / Resolume", duration: "2 Days" },
    features: ["Zero-Latency Live Output", "Art-Net Lighting Sync", "Resolume Arena Integration", "4 Side-Wing Screens", "Full Technical Crew"]
  },
  {
    id: 5, title: "Khaadi - Hyderabad",
    desc: "Continuing our strong partnership with Khaadi, we deployed another massive SMD Video Wall at their Hyderabad flagship store. Providing brilliant, bezel-less visuals.",
    image: "/image/projects/Project6/image.png",
    details: "A stunning 4K resolution capable setup using ultra-fine P2.0 pitch panels. The display provides bezel-less continuity that aligns perfectly with Khaadi's premium brand aesthetic.",
    specs: { location: "Hyderabad", client: "Khaadi", screenType: "P2.0 Ultra-Fine Indoor", resolution: "4K Ready", finish: "Bezel-Less", duration: "4 Days" },
    features: ["Ultra-Fine P2.0 Pixel Pitch", "4K Resolution Ready", "Bezel-Less Continuity", "Premium Brand Aesthetic", "Remote Management"]
  }
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectList.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details-page" style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-dark)', minHeight: '100vh', paddingBottom: '100px' }}>
      <div className="container" style={{ paddingTop: 'clamp(30px, 5vw, 60px)' }}>
        <a href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', marginBottom: '30px', fontWeight: '500', cursor: 'pointer' }}>
          <ArrowLeft size={16} /> Back to Projects
        </a>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 46px)', marginBottom: '16px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>{project.title}</h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '800px', lineHeight: '1.6' }}>{project.desc}</p>
          
          <div style={{ width: '100%', height: 'clamp(240px, 45vw, 480px)', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--shadow-md)' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"}} 
            />
          </div>

          <div className="project-info">
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', marginBottom: '16px', color: 'var(--text-dark)' }}>Project Overview</h2>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>{project.details}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Specs Card */}
              <div style={{ backgroundColor: 'var(--bg-light)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--text-dark)', fontSize: '18px', fontWeight: 700 }}>Project Specs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {Object.entries(project.specs || {}).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', fontSize: '14px' }}>
                      <span style={{ color: 'var(--text-muted)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span style={{ color: 'var(--text-dark)', fontWeight: 600, textAlign: 'right' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Features Card */}
              <div style={{ backgroundColor: 'var(--bg-light)', padding: '30px', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--text-dark)', fontSize: '18px', fontWeight: 700 }}>Key Features</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: '#475569', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {(project.features || ['High Refresh Rate', 'Seamless Installation', 'Remote Management', '24/7 Support']).map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--brand-cyan)', fontWeight: 700, fontSize: '18px' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
