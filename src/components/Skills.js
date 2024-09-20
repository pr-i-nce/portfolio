import React from 'react';
import styled from 'styled-components';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // No Flask or SQLite in react-icons

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 size={50} color="#e34c26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={50} color="#264de4" /> },
    { name: 'React', icon: <FaReact size={50} color="#61DBFB" /> },
    { name: 'Python', icon: <FaPython size={50} color="#306998" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={50} color="#f0db4f" /> },
    { name: 'Flask', icon: <FlaskIcon size={50} /> }, // Flask with custom SVG icon
    { name: 'SQLite', icon: <SQLiteIcon size={50} /> }, // SQLite with custom SVG icon
  ];

  return (
    <SkillsSection id="skills">
      <h2>My Skills</h2>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

// Custom Flask Icon using SVG
const FlaskIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
  >
    <g>
      <path
        fill="#000000"
        d="M193.4,255.5c-1.6-0.5-2.9-1-4.1-1.3c-0.9-0.2-1.9-0.5-3-0.9c-1.1-0.4-2.3-0.8-3.4-1.2c-2.3-0.9-4.5-1.8-6.7-2.6
        c-3.6-1.3-7.1-2.7-10.5-4.1c-3.6-1.4-7.1-2.8-10.4-4.3c-4.7-2-9.2-4.2-13.3-6.6c-4.1-2.4-7.8-5-11.1-7.7c-6.7-5.5-11.8-11.2-15-16.8
        c-1.7-2.8-3.1-5.6-4.3-8.5c-0.8-1.9-1.5-3.7-2.1-5.6c-0.7-2.1-1.1-4.1-1.5-6.2c-0.5-2.3-0.8-4.6-1-7c-0.1-1.5-0.2-3-0.2-4.6
        c0-1.5,0.1-3,0.2-4.6c0.3-2.4,0.8-4.7,1.5-7c0.5-2.1,1-4.1,1.5-6.2c0.6-1.8,1.3-3.7,2.1-5.6c1.1-2.8,2.5-5.7,4.3-8.5
        c3.2-5.6,8.3-11.3,15-16.8c3.3-2.7,7-5.3,11.1-7.7c4.1-2.4,8.5-4.6,13.3-6.6c3.3-1.5,6.8-3,10.4-4.3c3.4-1.4,6.9-2.7,10.5-4.1
        c2.2-0.9,4.4-1.7,6.7-2.6c1.1-0.4,2.3-0.8,3.4-1.2c1.1-0.3,2.1-0.6,3-0.9c1.2-0.3,2.5-0.7,4.1-1.3v43.4c-3.7,2.1-7.1,4.7-10.3,7.6
        c-4.5,3.9-8.5,8.3-12,13.1c-3.4,4.7-6.4,9.9-9,15.6c-2.5,5.5-4.7,11.2-6.4,17.1c-1.7,6-3,12-3.8,18c-0.8,6.4-1.2,12.7-1.2,19.2v0.4
        H193.4z"
      />
    </g>
  </svg>
);

// Custom SQLite Icon as a functional SVG component
const SQLiteIcon = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 128 128" 
    width={size} 
    height={size} 
    fill="#003b57"
  >
    <path d="M64 4c-33.137 0-60 26.863-60 60s26.863 60 60 60 60-26.863 60-60S97.137 4 64 4zm4.58 11.996h17.56c2.638 0 5.302.21 7.942.62a46.416 46.416 0 00-15.514 26.94c-.635 4.206-.79 8.554-.406 13.027 1.094 12.568 5.364 23.032 13.476 30.592 5.707 5.282 13.11 8.49 22.188 9.304-.008.143-.019.282-.034.424a46.14 46.14 0 01-6.236 20.336H64.5C39.745 116.832 20 97.071 20 72.003 20 46.937 39.755 27.16 64.58 16.008z"/>
  </svg>
);

const SkillsSection = styled.section`
  padding: 80px 20px;
  background-color: #f7f7f7;
  color: #333;
  text-align: center;

  h2 {
    margin-bottom: 40px;
    font-size: 2.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const SkillCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 1.25rem;
  }
`;

export default Skills;
