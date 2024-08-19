import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/About.css'; 
import { FaPython } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbSql } from "react-icons/tb";

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
      // Smooth scrolling back to Home page
      navigate('/', { state: { scroll: true } });
    }
  };

  return (
    <section id="about-me" className="about-me" onWheel={handleScroll}>
      <h1>About Me</h1>
      <p>
        I'm a dedicated software engineer skilled in solving problems and building user-friendly solutions, driven by a passion for technology.
      </p>

      <div className="cards-container">
        <div className="card software-engineering">
          <h2>Software Engineering</h2>
          <p>
            I bring a wealth of expertise in modern development technologies, including:
          </p>
          <ul className="tech-list">
            <li><IoLogoHtml5 /> HTML5</li>
            <li><IoLogoCss3 /> CSS</li>
            <li><IoLogoJavascript /> JavaScript</li>
            <li><FaPython /> Python</li>
            <li><RiReactjsLine /> ReactJS</li>
            <li><TbSql /> SQL</li>
          </ul>
          <p>
            My proficiency in these languages and frameworks enables me to craft intuitive, responsive applications that are both functional and visually appealing. Whether it's front-end or back-end development, I thrive in creating solutions that make an impact.
          </p>
        </div>

        <div className="card it-specialist">
          <h2>IT</h2>
          <p>
            In addition to my software engineering expertise, I excel in providing top-tier technical support. My extensive hands-on experience and love for technology have enabled me to troubleshoot and solve issues effectively. Over the years, I’ve developed a keen ability to provide reliable and efficient IT services, keeping systems running smoothly and ensuring that users can work without disruption.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
