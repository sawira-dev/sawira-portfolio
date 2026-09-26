import { useEffect, useRef } from "react";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Code2,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: Layout,
    category: "Frontend",
    num: "01",
    skills: ["React", "HTML5", "CSS3", "Bootstrap", "JavaScript ES6+"],
  },
  {
    icon: Server,
    category: "Backend",
    num: "02",
    skills: [".NET", "Firebase"],
  },
  {
    icon: Database,
    category: "Database",
    num: "03",
    skills: ["SQL"],
  },
  {
    icon: Wrench,
    category: "Other",
    num: "04",
    skills: ["VoIP", "LAN Networking", "Git", "GitHub"],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  /* ── Reveal on scroll ─────────────────────── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = el.querySelectorAll("[data-reveal]");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Ambient glows */}
      <div className="skills-glow-a" aria-hidden="true" />
      <div className="skills-glow-b" aria-hidden="true" />

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <p className="skills-eyebrow" data-reveal>
            <Code2 size={13} /> 03 · Skills & Tech
          </p>
          <h2 className="section-title" data-reveal>
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="skills-intro" data-reveal>
            The technologies and tools I use to design, build, and ship
            production-grade software.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="skill-card"
                data-reveal
              >
                {/* Card header */}
                <div className="skill-card-head">
                  <span className="skill-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="skill-num">{group.num}</span>
                </div>

                {/* Category title */}
                <h3 className="skill-category">{group.category}</h3>

                {/* Skill list */}
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill} className="skill-item">
                      <span className="skill-dot" aria-hidden="true" />
                      <span className="skill-name">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Corner glow */}
                <span className="skill-card-glow" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}