import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const allCategories = ['All', 'React', '.NET', 'Landing Pages', 'Enterprise Software', 'Networking'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((proj) => proj.category.includes(activeTab));

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Featured Projects</h2>

      <div className="tabs">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;