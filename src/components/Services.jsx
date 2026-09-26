import React from 'react';

const services = [
  { title: 'React Development', desc: 'SPAs with hooks, context, and modern patterns.' },
  { title: 'Responsive Websites', desc: 'Pixel-perfect layouts with Bootstrap, CSS3, and flex/grid.' },
  { title: 'Enterprise Software', desc: 'Management systems, ERP modules, and dashboards.' },
  { title: 'Landing Pages', desc: 'High-conversion, fast-loading promotional pages.' },
  { title: '.NET Applications', desc: 'Backend systems, APIs, and Windows services.' },
  { title: 'API Integration', desc: 'RESTful APIs, third-party services, and data sync.' },
  { title: 'Firebase', desc: 'Authentication, Firestore, real-time updates.' },
  { title: 'Database Design', desc: 'SQL schema design, queries, and optimization.' },
  { title: 'UI Development', desc: 'Interactive interfaces with smooth animations.' },
  { title: 'VoIP Applications', desc: 'LAN communication, UDP streaming, audio processing.' },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-heading">Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;