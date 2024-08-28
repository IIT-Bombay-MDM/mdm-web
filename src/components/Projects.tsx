import React from 'react';

interface Project {
  name: string;
  description: string;
}

const projects: Project[] = [
  { name: 'Project A', description: 'Description of Project A...' },
  { name: 'Project B', description: 'Description of Project B...' },
];
const repeatedProjects: Project[] = Array(10).fill(projects).flat();

const Projects: React.FC = () => {
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
