import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../styles/ResumeTransition.css';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const ResumeTransition = () => {
  const navigate = useNavigate();


  return (
    <section id="about-me" className="about-me" >
      <button 
        onClick={() => navigate('/about')} 
        className="back-button"
      >
        <FaAngleDoubleLeft />
      </button>
      <h1>About Me</h1>
      <p className="about">Engineering digital experiences with precision and creativity.</p>
      <div className="card full-stack">
        Full Stack Developer
      </div>
    </section>
  );
};

export default ResumeTransition;
