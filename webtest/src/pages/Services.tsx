import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: '💻',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience.',
      icon: '🎨',
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for your infrastructure needs.',
      icon: '☁️',
    },
    {
      title: 'Consulting',
      description: 'Expert advice to help you make the right technology decisions.',
      icon: '💡',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your systems running smoothly.',
      icon: '🔧',
    },
  ];

  return (
    <div className="services">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-intro">
          We offer a comprehensive range of services to meet all your digital needs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
