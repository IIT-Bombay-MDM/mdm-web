import React from 'react';
import projectData from '../data/projects.json';

interface Project {
  name: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = projectData;
  const repeatedProjects: Project[] = Array(10).fill(projects).flat();

  return (
    <div className="container">
      <div className="projects">
        <h2 className="team-header">Projects</h2>
        <div className="grid">
          {/* todo: remove repeated projects */}
          {repeatedProjects.map((project) => (
            <div
              key={project.name}
              className="grid-item"
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
