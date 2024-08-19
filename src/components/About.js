import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <section className="about-me">
      <h1>About Me</h1>
      <p>
        I am a passionate and driven software engineer and IT specialist with a deep love for technology. My journey in software engineering has equipped me with a diverse skill set, enabling me to tackle complex challenges and deliver innovative solutions. Over the years, my dedication to learning and improving has allowed me to sharpen my technical abilities while ensuring seamless user experiences.
      </p>
      <div className="cards-container">
        <div className="card software-engineering">
          <h2>Software Engineering</h2>
          <p>
            I bring a wealth of expertise in modern development technologies, including:
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>ReactJS</li>
              <li>Flask</li>
              <li>SQL</li>
            </ul>
            My proficiency in these languages and frameworks enables me to craft intuitive, responsive applications that are both functional and visually appealing. Whether it's front-end or back-end development, I thrive in creating solutions that make an impact.
          </p>
        </div>
        <div className="card it-specialist">
          <h2>IT Specialist</h2>
          <p>
            In addition to my software engineering capabilities, I excel in offering top-tier technical support. My strong foundation in technology, combined with years of hands-on experience, has honed my ability to troubleshoot effectively and provide tailored solutions. My passion for technology has driven me to continuously enhance my skills, ensuring that I can deliver reliable and efficient IT services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
