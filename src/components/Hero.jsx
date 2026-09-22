import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background glow effects */}
      <div className="glow-orb cyan-orb"></div>
      <div className="glow-orb magenta-orb"></div>
      
      <div className="hero-content container">
        <div className="hero-logo-wrapper">
          <img src="/image/Logo.png" alt="Spectrum SMD & LED Screens" className="hero-logo" />
        </div>
        
        <h1 className="hero-title">
          Command <span className="text-gradient">Attention</span>.<br />
          Rent Premium LED Screens.
        </h1>
        
        <p className="hero-subtitle">
          Ultra-bright digital displays for billboards, shopping malls, storefronts, and events. 
          Bring your vision to light with our state-of-the-art rental screens.
        </p>
        
        <div className="hero-cta">
          <button className="btn-glow">Get a Free Quote</button>
          <a href="#services" className="hero-link">Explore Screens</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
