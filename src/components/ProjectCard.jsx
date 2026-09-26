import React from "react";
import { FiExternalLink, FiGithub, FiInfo, FiStar } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const hasLive = project.liveLink && project.liveLink !== "#";
  const hasCode = project.githubLink && project.githubLink !== "#";
  const hasDetails = project.details;

  return (
    <article className={`prj-card ${project.featured ? "prj-card--featured" : ""}`}>
      {project.featured && (
        <span className="prj-card-badge">
          <FiStar size={11} /> Featured
        </span>
      )}

      <div className="prj-card-imgwrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add("prj-card-imgwrap--missing");
          }}
        />
        <span className="prj-card-imgfallback" aria-hidden="true">
          {project.title.charAt(0)}
        </span>
      </div>

      <div className="prj-card-info">
        <h3 className="prj-card-title">{project.title}</h3>

        <div className="prj-card-tags">
          {project.tech.map((t) => (
            <span key={t} className="prj-card-tag">{t}</span>
          ))}
        </div>

        <p className="prj-card-desc">{project.description}</p>

        <div className="prj-card-links">
          {hasLive && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="prj-card-link prj-card-link--primary"
            >
              <FiExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}

          {hasCode && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="prj-card-link prj-card-link--ghost"
            >
              <FiGithub size={14} />
              <span>GitHub</span>
            </a>
          )}

          {hasDetails && (
            <button
              type="button"
              className="prj-card-link prj-card-link--ghost prj-card-link--details"
            >
              <FiInfo size={14} />
              <span>Details</span>
            </button>
          )}

          {!hasLive && !hasCode && !hasDetails && (
            <span className="prj-card-link prj-card-link--muted">
              Private / Coming soon
            </span>
          )}
        </div>
      </div>

      <span className="prj-card-glow" aria-hidden="true" />
    </article>
  );
};

export default ProjectCard;