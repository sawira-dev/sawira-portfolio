import React, { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  "All",
  "React",
  "Frontend",
  "Full-Stack",
  ".NET",
  "Desktop",
  "Networking",
  "Enterprise",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  /* Filter: check if the filter is inside project's category array */
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          const cats = Array.isArray(p.category) ? p.category : [p.category];
          return cats.includes(activeFilter);
        });

  /* Count for each filter */
  const getCount = (filter) =>
    filter === "All"
      ? projects.length
      : projects.filter((p) => {
          const cats = Array.isArray(p.category) ? p.category : [p.category];
          return cats.includes(filter);
        }).length;

  return (
    <section id="projects" className="prj-section">
      <div className="prj-glow-a" aria-hidden="true" />
      <div className="prj-glow-b" aria-hidden="true" />

      <div className="prj-container">
        <h2 className="prj-heading">
          <span className="prj-heading-kicker">05 · PORTFOLIO</span>
          My <em className="prj-heading-accent">Projects</em>
        </h2>

        <p className="prj-intro">
          A selection of the web applications, enterprise systems, and
          real-time products I've designed and shipped.
        </p>

        {/* Filters */}
        <div className="prj-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((filter) => {
            const count = getCount(filter);
            if (count === 0 && filter !== "All") return null;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`prj-filter ${
                  activeFilter === filter ? "prj-filter--active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                <span className="prj-filter-label">{filter}</span>
                <span className="prj-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="prj-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="prj-empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;