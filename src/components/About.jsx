import { useEffect, useRef } from "react";
import { Code2, Sparkles } from "lucide-react";

const TRAITS = [
  "Problem Solver",
  "Fast Learner",
  "Team Player",
  "Clean Code",
  "UI/UX Focused",
  "Responsive Design",
  "API Integration",
  "Performance Optimization",
];

export default function About() {
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
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Ambient glows */}
      <div className="about-glow-a" aria-hidden="true" />
      <div className="about-glow-b" aria-hidden="true" />

      <div className="about-container">
        {/* ── LEFT — Visual ─────────────────────── */}
        <div className="about-visual" data-reveal>
          <div className="initials-card">
            {/* Rotating decorative rings */}
            <span className="ring ring-1" aria-hidden="true" />
            <span className="ring ring-2" aria-hidden="true" />
            <span className="ring ring-3" aria-hidden="true" />

            {/* Orbiting dot */}
            <span className="orbit-dot" aria-hidden="true" />

            {/* Center monogram */}
            <span className="initials-text">
              <span className="letter-s">S</span>
              <span className="letter-m">M</span>
            </span>

            {/* Soft glow behind */}
            <span className="card-glow" aria-hidden="true" />
          </div>

          <p className="name-under">
            <Sparkles size={13} />
            Sawira Manzoor
          </p>
          <p className="role-under">Software Engineer</p>
        </div>

        {/* ── RIGHT — Bio ───────────────────────── */}
        <div className="about-content">
          <p className="about-eyebrow" data-reveal>
            <Code2 size={13} /> 01 · About
          </p>

          <h2 className="section-title" data-reveal>
            About <span className="text-accent">Me</span>
          </h2>

          <p className="about-description" data-reveal>
            I am a passionate <strong>Software Engineer</strong> and{" "}
            <strong>BS Computer Science student</strong> with over 1.5 years of
            hands-on development experience. I specialize in building modern
            web applications using <strong>React</strong>, <strong>.NET</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>Bootstrap</strong>. My
            experience ranges from enterprise management systems and company
            websites to real-time <strong>Voice over IP communication systems</strong>.
          </p>

          <div className="trait-grid" data-reveal>
            {TRAITS.map((trait) => (
              <span key={trait} className="trait-badge">
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}