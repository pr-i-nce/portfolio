import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import '../styles/Contacts.css';  

const Contacts = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        
        {/* Phone */}
        <a href="tel:+25428241740" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <IoCallOutline />
        </a>
        
        {/* Email */}
        <a href="mailto:princegrcic@gmail.com" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <TbBrandGmail />
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/prince-mumo-41076531a/" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/pr-i-nce" className="contact-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
