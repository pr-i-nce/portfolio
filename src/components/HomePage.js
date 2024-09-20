import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <HomeSection>
      <Background>
        <Circle className="circle1" />
        <Circle className="circle2" />
        <Circle className="circle3" />
      </Background>
      <ContentWrapper>
        <motion.div
          className="intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Stephen Prince Mumo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full Stack Developer & Designer
          </motion.p>
          <motion.a
            href="#about"
            className="btn"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </ContentWrapper>
    </HomeSection>
  );
};

// Keyframe animation for floating circles
const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0); }
`;

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  z-index: 1;
  position: relative;

  .intro {
    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
    }

    p {
      font-size: 1.75rem;
      color: #dcdcdc;
      margin-top: 1rem;
    }

    .btn {
      display: inline-block;
      margin-top: 2.5rem;
      padding: 12px 30px;
      background-color: #ff6ec4;
      border: none;
      border-radius: 30px;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      box-shadow: 0 10px 20px rgba(255, 110, 196, 0.4);
      transition: all 0.3s ease-in-out;
    }

    .btn:hover {
      background-color: #ff47b6;
      box-shadow: 0 10px 30px rgba(255, 110, 196, 0.7);
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    .intro {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.25rem;
      }

      .btn {
        padding: 10px 20px;
        font-size: 0.875rem;
      }
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${floatAnimation} 6s ease-in-out infinite;
  pointer-events: none;

  &.circle1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 20%;
    animation-duration: 8s;
    animation-delay: 0s;
  }

  &.circle2 {
    width: 150px;
    height: 150px;
    top: 40%;
    left: 70%;
    animation-duration: 10s;
    animation-delay: 2s;
  }

  &.circle3 {
    width: 250px;
    height: 250px;
    top: 70%;
    left: 30%;
    animation-duration: 12s;
    animation-delay: 4s;
  }
`;

export default Home;
