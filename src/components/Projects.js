import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Recipe App</h3>
            <p>A full-stack web application built with React and Flask.</p>
            <a href="https://github.com/pr-i-nce/recipe-app" className="project-link">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>A sleek design portfolio showcasing creative designs and animations.</p>
            <a href="https://princemumo.netlify.app" className="project-link">Visit Website</a>
          </div>
        </div>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #f5f5f5;
  color: #333;

  .container {
    h2 {
      margin-bottom: 40px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;

      .project-card {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        h3 {
          margin-bottom: 10px;
        }

        .project-link {
          color: #1a73e8;
          text-decoration: none;
          font-weight: bold;
          margin-top: 10px;
          display: inline-block;
        }

        &:hover {
          transform: translateY(-10px);
        }
      }
    }
  }
`;

export default Projects;
