import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-intro">
          We are a team of passionate professionals dedicated to delivering excellence.
        </p>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide innovative solutions that empower businesses to thrive in the digital age.
              We believe in creating value through technology and creativity.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              To be the leading provider of digital solutions, recognized for our commitment to
              quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <ul>
              <li>Innovation and Creativity</li>
              <li>Customer-Centric Approach</li>
              <li>Integrity and Transparency</li>
              <li>Excellence in Everything</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
