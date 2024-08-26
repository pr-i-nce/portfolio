import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/About.css';

const AboutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      navigate('/', { state: { scroll: true } });
    }
  };

  return (
    <section id="about-me" className="about-me" onWheel={handleScroll}>
      <h1>About Me</h1>
      <p className="about">Engineering digital experiences with precision and creativity.</p>
      <div className="card full-stack">
        Full Stack Developer
      </div>
      <div class="stars"></div>
      <button className="button" onClick={() => navigate('/resume')}>Show me more</button>
    </section>
  );
};

export default AboutPage;
