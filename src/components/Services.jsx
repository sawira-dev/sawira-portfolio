import React, { useEffect, useRef } from "react";
import { Sparkles, Wrench } from "lucide-react";

const services = [
  { title: "React Development", desc: "SPAs with hooks, context, and modern patterns." },
  { title: "Responsive Websites", desc: "Pixel-perfect layouts with Bootstrap, CSS3, and flex/grid." },
  { title: "Enterprise Software", desc: "Management systems, ERP modules, and dashboards." },
  { title: "Landing Pages", desc: "High-conversion, fast-loading promotional pages." },
  { title: ".NET Applications", desc: "Backend systems, APIs, and Windows services." },
  { title: "API Integration", desc: "RESTful APIs, third-party services, and data sync." },
  { title: "Firebase", desc: "Authentication, Firestore, real-time updates." },
  { title: "Database Design", desc: "SQL schema design, queries, and optimization." },
  { title: "UI Development", desc: "Interactive interfaces with smooth animations." },
  { title: "VoIP Applications", desc: "LAN communication, UDP streaming, audio processing." },
];

export default function Services() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="svc-section" ref={sectionRef}>
      <div className="svc-glow-a" aria-hidden="true" />
      <div className="svc-glow-b" aria-hidden="true" />

      <div className="svc-container">
        <div className="svc-header">
          <p className="svc-eyebrow" data-reveal>
            <Wrench size={13} /> 06 · Services
          </p>
          <h2 className="svc-heading" data-reveal>
            What I <em className="svc-heading-accent">Offer</em>
          </h2>
          <p className="svc-intro" data-reveal>
            From concept to launch — services I provide to help you ship
            impactful, production-ready software.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="svc-card"
              data-reveal
              style={{ "--i": i }}
            >
              <span className="svc-card-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="svc-card-title">{service.title}</h3>
              <p className="svc-card-desc">{service.desc}</p>
              <span className="svc-card-glow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}