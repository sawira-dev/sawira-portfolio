import { useEffect, useRef } from "react";
import { Briefcase, Sparkles, Clock, ChevronRight } from "lucide-react";

const EXPERIENCES = [
  {
    year: "2024 — 2025",
    title: "Sipra Fusion — Software Engineer",
    company: "Sipra Fusion",
    description:
      "Worked 1.5 years at Sipra Fusion delivering responsive web applications and enterprise solutions. Led multiple client-facing projects end-to-end using React, JavaScript, Bootstrap, .NET, and REST APIs.",
    tag: "1.5 yrs",
    featured: true,
    projectsLabel: "Projects delivered at Sipra Fusion",
    projects: [
      "React Corporate Website",
      "React Company Website",
      "React Educational Platform",
      "SFSchool Landing Page",
      "Cave School Landing Page",
      "School Management System ",
    ],
  },
  {
    year: "2026",
    title: "VoIP Desktop Application",
    company: "Independent Project",
    description:
      "Engineered a real-time voice communication desktop application in C#/.NET — UDP networking, Opus codec, noise suppression, echo cancellation, and jitter buffer.",
    tag: "C# / .NET",
    featured: true,
  },
  {
    year: "Present",
    title: "Open to Opportunities",
    company: "Looking for next role",
    description:
      "Looking for internships, freelance projects, and full-time roles where I can build impactful software.",
    tag: "Now",
    current: true,
  },
];

export default function Experience() {
  const timelineRef = useRef(null);

  /* ── Reveal on scroll ─────────────────────── */
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const items = el.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="exp-glow-a" aria-hidden="true" />
      <div className="exp-glow-b" aria-hidden="true" />

      <div className="exp-container">
        <div className="exp-header">
          <p className="exp-eyebrow">
            <Briefcase size={13} /> 04 · Experience
          </p>
          <h2 className="section-title">
            My <span className="text-accent">Journey</span>
          </h2>
          <p className="exp-tenure">
            <Clock size={12} /> 1.5 years @ Sipra Fusion
          </p>
          <p className="exp-intro">
            A timeline of the projects, systems, and milestones that shaped me
            as a software engineer.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line" aria-hidden="true" />

          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${exp.featured ? "featured" : ""} ${
                exp.current ? "current" : ""
              }`}
            >
              <div className="timeline-dot" aria-hidden="true">
                <span className="dot-core" />
                <span className="dot-ring" />
              </div>

              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-year">{exp.year}</span>
                  {exp.tag && <span className="timeline-tag">{exp.tag}</span>}
                </div>

                <h3 className="timeline-title">{exp.title}</h3>

                {/* Company line — shown only when company is defined */}
                {exp.company && (
                  <p className="timeline-company">
                    <Briefcase size={11} /> {exp.company}
                  </p>
                )}

                <p className="timeline-description">{exp.description}</p>

                {/* Nested projects list */}
                {exp.projects && exp.projects.length > 0 && (
                  <>
                    {exp.projectsLabel && (
                      <p className="timeline-projects-label">
                        {exp.projectsLabel}
                      </p>
                    )}
                    <ul className="timeline-projects">
                      {exp.projects.map((p) => (
                        <li key={p}>
                          <ChevronRight size={12} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {exp.current && (
                  <span className="current-badge">
                    <Sparkles size={11} /> Available now
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}