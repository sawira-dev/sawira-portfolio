const projects = [
  {
    id: 1,
    title: 'Company Website',
    description:
      'A modern, responsive company website built with React and Bootstrap, showcasing services, portfolio, and contact.',
    tech: ['React', 'Bootstrap'],
    category: ['React', 'Landing Pages'],
    image: '/images/projects/company-website.png',
    liveLink: '#',
    githubLink: '#',  // set to null if private
    featured: false,
  },
  {
    id: 2,
    title: 'Training Website',
    description:
      'A training institute landing page with course listings, instructor profiles, and enrollment forms.',
    tech: ['React', 'CSS3'],
    category: ['React', 'Landing Pages'],
    image: '/images/projects/training-react.png',
    liveLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Corporation Website',
    description:
      'A corporate website for a business firm, featuring modern UI/UX, smooth animations, and contact integration.',
    tech: ['React', 'JavaScript'],
    category: ['React', 'Landing Pages'],
    image: '/images/projects/corporation-react.png',
    liveLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Meals Portal',
    description:
      'A full-stack meal management application allowing users to plan, track, and manage daily meals.',
    tech: ['React', 'Firebase'],
    category: ['React', 'Enterprise Software'],
    image: '/images/projects/meal-portal.png',
    liveLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'School Management System',
    description:
      'A comprehensive .NET-based ERP with portals for admin, teacher, student, including attendance, fees, and reports.',
    tech: ['.NET', 'SQL'],
    category: ['.NET', 'Enterprise Software'],
    image: '/images/projects/school-system.png',
    liveLink: '#',
    githubLink: '#',
    featured: true,   // can be highlighted
  },
  {
    id: 6,
    title: 'Student Portal',
    description:
      'A Firebase-powered student dashboard built with Bootstrap, showing grades, attendance, and notices.',
    tech: ['Firebase', 'Bootstrap'],
    category: ['React', 'Enterprise Software'],  // or other
    image: '/images/projects/student-portal.png',
    liveLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'VoIP LAN Communication System',
    description:
      'A real‑time LAN‑based Voice over IP application featuring UDP streaming, noise suppression, echo cancellation, jitter buffering, and audio compression.',
    tech: ['.NET', 'UDP', 'Audio Streaming'],
    category: ['.NET', 'Networking'],
    image: '/images/projects/voip-system.png',
    liveLink: '#',
    githubLink: '#',   // keep null if private
    featured: true,     // biggest project
    details: true,      // can open a modal or extended card
  },
];

export default projects;