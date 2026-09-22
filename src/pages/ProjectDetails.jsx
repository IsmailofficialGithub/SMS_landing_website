import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Using the same project data for now
const projectList = [
  { id: 0, title: "Khaadi - Lucky One Mall", desc: "A state-of-the-art SMD Video Wall installation for Khaadi at Lucky One Mall, Karachi. This massive display elevates the retail experience, providing crisp, dynamic visuals.", image: "/image/projects/Project1/Project1.png", details: "Installed a P2.5 indoor SMD video wall covering 15ft x 9ft. Delivered ultra-high contrast ratio with NovaStar processing ensuring zero-latency content delivery across the entire display. The project was completed in 4 days during mall off-hours." },
  { id: 1, title: "Khaadi - Mandi Bahauddin", desc: "Custom indoor LED display integrated seamlessly into Khaadi's Mandi Bahauddin outlet. Designed for high brightness and stunning color accuracy to captivate in-store shoppers.", image: "/image/projects/Project2/image.png", details: "A curved P3 indoor display tailored to fit the store's architectural pillars. The high refresh rate ensures it looks perfect on camera when shoppers take photos. Installation involved custom metal fabrication." },
  { id: 2, title: "Unilever Highway Banners", desc: "High-impact outdoor digital banners installed along the Islamabad Highway for Unilever. These weather-proof, ultra-bright displays guarantee maximum visibility and reach.", image: "/image/projects/Project3/image copy.png", details: "P6 Outdoor DIP LED screens designed to withstand extreme weather. Rated IP65 for waterproof performance, pushing 7000 Nits of brightness to combat direct sunlight along the highway." },
  { id: 3, title: "District 92 Branding", desc: "Complete digital branding and display solution for District 92 in Bahria Town Phase 8, Islamabad. This project involved end-to-end installation of large-format outdoor screens.", image: "/image/projects/project4/image.png", details: "A massive multi-screen setup covering the facade of the building. We utilized lightweight die-cast aluminum cabinets for quick installation and easy front-maintenance." },
  { id: 4, title: "Atif Aslam Concert", desc: "Spectacular stage backdrop and full set digital displays for the Atif Aslam live concert at Jinnah Convention Center. Delivered real-time, zero-latency visual effects.", image: "/image/projects/Project5/image.png", details: "Provided a 40ft x 20ft P3.91 rental LED screen as the main backdrop, along with 4 side-wing screens. Synchronized visuals with live lighting via Art-Net and Resolume Arena." },
  { id: 5, title: "Khaadi - Hyderabad", desc: "Continuing our strong partnership with Khaadi, we deployed another massive SMD Video Wall at their Hyderabad flagship store. Providing brilliant, bezel-less visuals.", image: "/image/projects/Project6/image.png", details: "A stunning 4K resolution capable setup using ultra-fine P2.0 pitch panels. The display provides bezel-less continuity that aligns perfectly with Khaadi's premium brand aesthetic." }
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
      <div className="container" style={{ paddingTop: '80px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', marginBottom: '40px', fontWeight: '500' }}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)' }}>{project.title}</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '800px', lineHeight: '1.6' }}>{project.desc}</p>
          
          <div style={{ width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', marginBottom: '50px', boxShadow: 'var(--shadow-md)' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"}} 
            />
          </div>

          <div className="project-info" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--text-dark)' }}>Project Overview</h2>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8' }}>
                {project.details}
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--bg-light)', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--text-dark)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#475569', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>✓ High Refresh Rate</li>
                <li>✓ Seamless Installation</li>
                <li>✓ Remote Management</li>
                <li>✓ 24/7 Support</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
