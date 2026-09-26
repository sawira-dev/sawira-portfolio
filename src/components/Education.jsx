import React, { useEffect, useRef } from "react";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";

export default function Education() {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="edu-section" ref={sectionRef}>
      <div className="edu-glow-a" aria-hidden="true" />
      <div className="edu-glow-b" aria-hidden="true" />

      <div className="edu-container">
        <div className="edu-header">
          <p className="edu-eyebrow" data-reveal>
            <BookOpen size={13} /> 07 · Education
          </p>
          <h2 className="edu-heading" data-reveal>
            My <em className="edu-heading-accent">Education</em>
          </h2>
          <p className="edu-intro" data-reveal>
            The academic foundation behind my engineering practice.
          </p>
        </div>

        <article className="edu-card" data-reveal>
          {/* Left visual — graduation cap */}
          <div className="edu-visual" aria-hidden="true">
            <div className="edu-ring edu-ring-1" />
            <div className="edu-ring edu-ring-2" />
            <div className="edu-ring edu-ring-3" />
            <div className="edu-cap">
              <GraduationCap size={44} />
            </div>
            <span className="edu-orbit-dot" />
          </div>

          {/* Right content */}
          <div className="edu-content">
            <span className="edu-badge">
              <Sparkles size={11} /> Current Student
            </span>

            <h3 className="edu-degree">BS Computer Science</h3>

            <p className="edu-university">Islamia University Bhawalpur, Rahim Yar Khan Campus</p>

            <p className="edu-focus">
              Focused on <strong>software engineering</strong>,{" "}
              <strong>web technologies</strong>, and{" "}
              <strong>networking</strong> — building the theory and practice
              that power my day-to-day engineering work.
            </p>

            <div className="edu-chips">
              <span className="edu-chip">Software Engineering</span>
              <span className="edu-chip">Web Technologies</span>
              <span className="edu-chip">Networking</span>
              <span className="edu-chip">Data Structures</span>
            </div>
          </div>

          <span className="edu-card-glow" aria-hidden="true" />
        </article>
      </div>
    </section>
  );
}