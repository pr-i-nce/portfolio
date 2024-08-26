import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      navigate('/about', { state: { scroll: true } });
    }
  };

  const handleDownClick = () => {
    navigate('/about');
  };

  return (
    <div className="homepage" onWheel={handleScroll}>
      <section className="hero">
        <div className="hero-content">
          <div className="heading name-heading">
            {'Prince'.split('').map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.025}s` }}
              >
                {letter}
              </span>
            ))}
            <br />
            {'Mumo'.split('').map((letter, index) => (
              <span
                key={index + 6} 
                className="letter"
                style={{ animationDelay: `${(index + 6) * 0.025}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="horizontal-line"></div>
          <div className="horizontal-line indented"></div>
          <div className="heading title-heading">
            {'Full Stack Developer'.split('').map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.025}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </section>
      <div className="right-side-animation">
        <div className="hex-grid">
          {Array(300).fill(0).map((_, i) => (
            <div key={i} className="hex"></div>
          ))}
        </div>
      </div>
      <div className="logo">
        <div className="logo-text">
          <div className="initials">P.M</div>
          <div className="slogan">CODE TO PERFECTION</div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="line"></div>
        <div className="line"></div>
        <div className="scroll-text">SCROLL DOWN</div>
      </div>
      {/* Down Button */}
      <button className="down-button" onClick={handleDownClick}>
        <FaAngleDoubleDown />
      </button>
    </div>
  );
};

export default HomePage;
