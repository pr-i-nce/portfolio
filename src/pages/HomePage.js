import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const getRandomDirection = () => {
  const directions = [
    { transform: 'translateX(-100vw)' },
    { transform: 'translateX(100vw)' },
    { transform: 'translateY(-100vh)' },
    { transform: 'translateY(100vh)' },
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const HomePage = () => {
  const navigate = useNavigate();

  const headings = [
    'Welcome to My Portfolio',
    "I'm Stephen Prince Mumo",
  ];

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Smooth scrolling to About page
      navigate('/about', { state: { scroll: true } });
    }
  };

  return (
    <div className="homepage" onWheel={handleScroll}>
      <section className="hero">
        <div className="hero-content">
          {headings.map((heading, headingIndex) => (
            <div key={headingIndex} className="heading">
              {heading.split('').map((letter, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    ...getRandomDirection(),
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
