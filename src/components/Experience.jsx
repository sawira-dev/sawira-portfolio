import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    year: '2025',
    title: 'Started Professional Development',
    description: 'Began building real-world projects and freelancing.',
  },
  {
    year: '2025',
    title: 'Company Websites',
    description: 'Developed responsive company websites using React and Bootstrap.',
  },
  {
    year: '2025',
    title: 'React Applications',
    description: 'Built dynamic single-page applications with React and Firebase.',
  },
  {
    year: '2025',
    title: 'School Management System',
    description: 'Designed and developed a complete .NET-based ERP for schools.',
  },
  {
    year: '2025',
    title: 'Meal Management Portal',
    description: 'Created a meal tracking and management web app with React.',
  },
  {
    year: '2025',
    title: 'VoIP LAN Communication System',
    description:
      'Engineered a real-time voice communication system with UDP, noise suppression, and jitter buffer.',
  },
  {
    year: 'Present',
    title: 'Open to Opportunities',
    description:
      'Looking for internships and full‑time roles where I can build impactful software.',
  },
];

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;