import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript ES6+'],
  },
  {
    category: 'Backend',
    skills: ['.NET', 'Firebase'],
  },
  {
    category: 'Database',
    skills: ['SQL'],
  },
  {
    category: 'Other',
    skills: ['VoIP', 'LAN Networking', 'Git', 'GitHub'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-card">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-dot"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;