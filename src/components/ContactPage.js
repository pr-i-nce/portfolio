import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <div className="contact-links">
          <a href="mailto:princegrcic@gmail.com" className="contact-link">
            <FaEnvelope /> Email Me
          </a>
          <a href="https://linkedin.com/in/stephen-prince" className="contact-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/pr-i-nce" className="contact-link">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
  color: #fff;
  text-align: center;

  .container {
    h2 {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 40px;
    }

    .contact-links {
      display: flex;
      justify-content: center;
      gap: 20px;

      .contact-link {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #fff;
        color: #333;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #ff6ec4;
          color: #fff;
        }
      }
    }
  }
`;

export default Contact;
