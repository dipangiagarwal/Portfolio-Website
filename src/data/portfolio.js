// Centralized portfolio content — edit this file to update the site.

export const profile = {
  name: 'Dipangi Agarwal',
  role: 'Full Stack Developer',
  tagline:
    'I build modern web applications and practical software solutions with a focus on clean, scalable, and user-friendly development.',
  resumeUrl: '/DIPANGI_AGARWAL_Resume_webdev.pdf',
  available: true,
};

export const socials = {
  github: '[ADD GITHUB URL]',
  linkedin: 'https://www.linkedin.com/in/dipangi-agarwal-42222524b',
  email: 'dipangiagarwal04@gmail.com',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  intro:
    "I'm a Full Stack Developer focused on building real-world web applications that are clean, scalable, and genuinely useful. Through hands-on internship experience, I've worked across the full stack — from frontend interfaces and backend APIs to databases and application logic.",
  detail:
    "I enjoy turning ideas into working software, and I'm comfortable moving between frontend, backend, and database work. Beyond web development, I'm also interested in AI/ML and Data Science, and I continuously sharpen my problem-solving and development skills.",
  highlights: [
    { label: 'Full Stack Development', icon: 'Layers' },
    { label: 'Backend & APIs', icon: 'Server' },
    { label: 'Database Development', icon: 'Database' },
    { label: 'AI/ML & Data Science', icon: 'BrainCircuit' },
  ],
};

export const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Kuchoriya Techsoft',
    status: 'Current',
    current: true,
    period: '[Add dates]',
    points: [
      'Working on full-stack web application development',
      'Developing frontend interfaces and backend functionality',
      'Working with APIs and databases',
      'Building and improving real-world software projects',
      'Collaborating with development workflows and improving application functionality',
      'Gaining hands-on experience with modern web technologies',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Pixel Genix',
    status: 'Previous Internship',
    current: false,
    period: '[Add dates]',
    points: [
      'Worked on full-stack web development projects',
      'Developed frontend and backend features',
      'Worked with APIs and databases',
      'Contributed to real-world application development',
      'Gained practical experience with software development workflows',
    ],
  },
];

export const projects = [
  {
    name: 'AI Attendance System',
    description:
      'An AI-powered attendance management system designed to automate student attendance using face recognition.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
    features: [
      'Face recognition-based attendance',
      'Student management',
      'Admin authentication',
      'JWT authentication',
      'Attendance tracking',
      'REST APIs',
      'PostgreSQL database',
      'Attendance rules and validation',
    ],
    github: '[ADD GITHUB URL]',
    demo: '[ADD LIVE DEMO URL]',
    image: '[ADD PROJECT IMAGE]',
  },
  {
    name: 'Pixel CRM',
    description:
      'A full-stack CRM application designed to manage customer information and business workflows.',
    technologies: ['MERN Stack', 'REST APIs', 'Database'],
    features: [
      'Customer management',
      'CRM workflows',
      'Backend API integration',
      'Database management',
      'Full-stack architecture',
    ],
    github: '[ADD GITHUB URL]',
    demo: '[ADD LIVE DEMO URL]',
    image: '[ADD PROJECT IMAGE]',
  },
  {
    name: 'Car Price Prediction',
    description:
      'A machine learning application that predicts used-car prices based on factors such as company, year, kilometers driven, and fuel type.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
    features: [
      'Data preprocessing',
      'Feature engineering',
      'Machine learning model training',
      'Price prediction',
      'Model evaluation',
    ],
    github: '[ADD GITHUB URL]',
    demo: '[ADD LIVE DEMO URL]',
    image: '[ADD PROJECT IMAGE]',
  },
];

export const skillCategories = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: ['Python', 'JavaScript', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'AI / ML & Data Science',
    icon: 'BrainCircuit',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Docker', 'REST APIs'],
  },
];

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'JECRC University, Jaipur',
    period: '[Add dates]',
  },
];

export const contact = {
  heading: "Let's Connect",
  text: 'Interested in working together or discussing an opportunity? Feel free to reach out.',
  linkedin: 'https://www.linkedin.com/in/dipangi-agarwal-42222524b',
  email: 'dipangiagarwal04@gmail.com',
  github: '[ADD GITHUB URL]',
};
