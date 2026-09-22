import './Services.css';

const services = [
  {
    id: 1,
    title: 'Electric Billboards',
    description: 'High-visibility outdoor LED screens perfect for roadside advertising and highways. Built to withstand all weather conditions.',
    icon: '🛣️',
    glowColor: 'cyan'
  },
  {
    id: 2,
    title: 'Shopping Malls',
    description: 'Captivate shoppers with ultra-bright indoor displays for directories, promotions, and brand storytelling.',
    icon: '🏬',
    glowColor: 'magenta'
  },
  {
    id: 3,
    title: 'Shop Fronts & Stores',
    description: 'Turn your storefront into a dynamic attraction. Perfect for window displays to draw foot traffic.',
    icon: '🏪',
    glowColor: 'yellow'
  },
  {
    id: 4,
    title: 'Events & Meetings',
    description: 'Crystal-clear modular screens for corporate events, weddings, and massive indoor presentations.',
    icon: '🤝',
    glowColor: 'green'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Where You Can Use Our Screens</h2>
          <p className="section-subtitle">
            Versatile, high-resolution digital displays for every environment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`glass-card service-card glow-${service.glowColor}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
