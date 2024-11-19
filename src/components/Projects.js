import React, { useEffect, useState } from 'react';
import "../styles/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Define your projects array here
    const projectData = [
      {
        title: "Recipe App",
        description: "A full-stack web application built with React and Flask. It allows users to browse, add, and manage recipes.",
        link: "https://github.com/pr-i-nce/recipe-app",
        type: "GitHub"
      },
      {
        title: "MC Event Website",
        description: "A website designed for an MC service with a modern layout and easy navigation, showcasing sound system and event services.",
        link: "https://mccalebke.netlify.app",
        type: "Website"
      },
      {
        title: "MC Website",
        description: "A website designed for an MC service with a modern layout and easy navigation, showcasing sound system and event services.",
        link: "https://ckenya.netlify.app/",
        type: "Website"
      }
    ];

    setProjects(projectData);
  }, []);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                {project.type === "GitHub" ? "View on GitHub" : "Visit Website"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
