import React from 'react';
import { FiExternalLink, FiGithub, FiInfo } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && <span className="featured-badge">Featured</span>}
      <div className="project-img-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="project-links">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-link">
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-link">
              <FiGithub /> GitHub
            </a>
          )}
          {project.details && (
            <button className="btn-link btn-details">
              <FiInfo /> Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;