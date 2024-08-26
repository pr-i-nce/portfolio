import React from 'react';
import { FaJs, FaPython, FaDatabase, FaReact, FaHtml5, FaCss3, FaFlask, FaGithub, FaGitAlt } from 'react-icons/fa';
import '../styles/Resume.css';
import ResumeTransition from './ResumeTransition';

const Resume = () => {
  return (
    <section className="resume-section">
      <ResumeTransition />
      <div className="resume-container">
        <header>
          <h1>Prince Mumo</h1>
          <h2>Full-Stack Developer</h2>
        </header>

        <main>
          <section className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <h4>Languages</h4>
                <ul>
                  <li><FaJs /> JavaScript</li>
                  <li><FaPython /> Python</li>
                  <li><FaDatabase /> SQLite</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Frontend</h4>
                <ul>
                  <li><FaReact /> React</li>
                  <li><FaHtml5 /> HTML5</li>
                  <li><FaCss3 /> CSS3</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Backend</h4>
                <ul>
                  <li> Flask</li>
                </ul>
              </div>
              <div className="skill-item">
                <h4>Version Control</h4>
                <ul>
                  <li><FaGitAlt /> Git</li>
                  <li><FaGithub /> GitHub</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="experience-section">
            <h3>Professional Experience</h3>
            <div className="experience-item">
              <h4>IT Specialist at Lizkam</h4>
              <p><em>2023 - Present</em></p>
              <ul>
                <li>Managed and maintained company IT infrastructure.</li>
                <li>Developed and deployed internal tools to improve productivity.</li>
              </ul>
            </div>
          </section>

          <section className="education-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Moringa School</h4>
              <p><em>Certificate in Software Engineering, 2024</em></p>
            </div>
            <div className="education-item">
              <h4>Wantech College</h4>
              <p><em>Certificate in ICT, 2024</em></p>
            </div>
          </section>

          <section className="projects-section">
            <h3>Projects</h3>
            <div className="project-item">
              <h4>Recipe App</h4>
              <p>
                A full-stack recipe application with a Flask backend and a React frontend.
                <br />
                <a href="https://github.com/pr-i-nce/recipe-app" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Resume;
