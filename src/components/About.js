import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <h2>About Me</h2>
        <ProfileImage src={`${process.env.PUBLIC_URL}/my-portfolio-image.jpeg`} alt="My Portfolio" />
        <p>
          I'm a passionate software engineer specializing in both frontend and backend development. My goal is to create smooth, high-performance web experiences using modern technologies.
        </p>
        <p>
          I have a strong background in HTML, CSS, JavaScript, React, Python, and more, and am always eager to learn and grow.
        </p>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #6ee2f5 0%, #6454f0 100%);
  color: #fff;
  text-align: center;

  .container {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }
  }
`;

const ProfileImage = styled.img`
  width: auto;
  height: 200px;
  object-fit: contain;
  border-radius: 50%;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export default About;
