import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Our Website
          </h1>
          <p className="hero-subtitle">
            We provide innovative solutions for your business needs
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Our Features</h2>
          <p className="section-subtitle">
            Discover what makes us different
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Fast Performance</h3>
              <p className="feature-description">
                Lightning-fast load times and optimized performance for the best user experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Beautiful Design</h3>
              <p className="feature-description">
                Modern and elegant designs that capture attention and engage users.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Safe</h3>
              <p className="feature-description">
                Top-notch security measures to protect your data and privacy.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Responsive</h3>
              <p className="feature-description">
                Fully responsive design that works perfectly on all devices.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Easy to Use</h3>
              <p className="feature-description">
                Intuitive interface that anyone can use without technical knowledge.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">
                Round-the-clock customer support to help you whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Join thousands of satisfied customers today
          </p>
          <button className="btn-cta">Start Your Journey</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
