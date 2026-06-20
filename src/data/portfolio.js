import acceptedCandidatesImage from '../assets/openhouse acceptedfyp canditates.png'
import assignVolunteerImage from '../assets/assign volunter in open house.png'
import skillMatchingImage from '../assets/studentskill matching company requrments.png'

export const profile = {
  name: 'Javed Shah',
  title: 'Software Engineering Graduate | Full Stack Developer',
  location: 'Islamabad, Pakistan',
  origin: 'Batkhela, Pakistan',
  email: 'kingdompeople3@gmail.com',
  phone: '03054541222',
  github: 'https://github.com/Javedshah11',
  linkedin: 'https://www.linkedin.com/in/javed-shah-/',
  tagline:
    'Building modern web applications with MERN Stack and AI-powered solutions.',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Featured', href: '#featured-project' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  { name: 'HTML5', level: 92, category: 'Frontend' },
  { name: 'CSS3', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 88, category: 'Language' },
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'Node.js', level: 84, category: 'Backend' },
  { name: 'Express.js', level: 84, category: 'Backend' },
  { name: 'MongoDB', level: 82, category: 'Database' },
  { name: 'Git & GitHub', level: 86, category: 'Workflow' },
  { name: 'REST APIs', level: 86, category: 'Backend' },
  { name: 'JWT Authentication', level: 80, category: 'Security' },
  { name: 'Responsive Web Design', level: 94, category: 'Frontend' },
]

export const projects = [
  {
    title: 'OpenHouse Connect',
    role: 'Full Stack Developer',
    overview:
      'OpenHouse Connect is a university open house platform built to connect companies with students through AI-assisted CV matching.',
    problem:
      'Companies visiting university open houses need a faster way to identify students whose skills match their technology requirements.',
    solution:
      'The platform lets companies manage opportunities, students submit CV data, and an AI matching feature generates compatibility scores for shortlisting.',
    description:
      'AI-powered university open house platform built with MERN Stack. Matches student CVs with company requirements and generates compatibility scores.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    highlight: 'AI CV Matching',
    imageLabel: 'OpenHouse dashboard screenshots',
    previewImages: [acceptedCandidatesImage, skillMatchingImage, assignVolunteerImage],
    cardMetrics: [
      'AI CV matching system',
      'Company and student dashboards',
      'Role-based authentication',
      'Recruiter shortlisting workflow',
    ],
    metrics: [
      'Role: Full Stack Developer',
      'Authentication System',
      'Company Dashboard',
      'Student Dashboard',
      'Job Management',
      'AI Matching System',
      'PDF Generation',
      '3 user-focused modules',
      'CV-to-job compatibility scoring',
      'Recruiter shortlisting workflow',
    ],
    features: [
      'Role-based authentication',
      'Company dashboard',
      'Student dashboard',
      'Job and requirement management',
      'AI CV matching scores',
      'PDF generation workflows',
    ],
    screenshots: ['Dashboard overview', 'AI match score', 'Student CV profile'],
    github: 'https://github.com/Javedshah11',
    demo: '#contact',
  },
  {
    title: 'MERN Stack Ecommerce Website',
    role: 'Full Stack Developer',
    overview:
      'A complete full-stack ecommerce web application built with React, Node.js, Express, MongoDB, and Tailwind CSS.',
    problem:
      'Online stores need a responsive shopping experience with reliable product management, authentication, cart persistence, checkout, and admin controls.',
    solution:
      'The application connects a modern React frontend with REST APIs, MongoDB data models, JWT authentication, cart management, checkout flow, and protected admin product CRUD.',
    description:
      'Complete full-stack ecommerce application with dynamic products, authentication, cart management, admin dashboard, product CRUD, orders, and responsive UI.',
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'REST API',
      'GitHub',
    ],
    highlight: 'MERN Ecommerce',
    imageLabel: 'Ecommerce storefront preview',
    cardMetrics: [
      'Dynamic product catalog',
      'JWT authentication',
      'Cart and checkout flow',
      'Admin product CRUD',
    ],
    metrics: [
      'Dynamic product catalog',
      'JWT authentication',
      'Cart and checkout flow',
      'Admin product CRUD',
    ],
    features: [
      'Dynamic product listing and product detail pages',
      'JWT-based login and signup',
      'Add to cart, remove from cart, and quantity updates',
      'localStorage cart persistence',
      'Protected admin routes',
      'Admin dashboard for product management',
      'Product create, read, update, and delete workflow',
      'Checkout and order flow',
      'Responsive layout for mobile, tablet, and desktop',
      'Frontend connected with backend REST APIs',
    ],
    workCompleted: [
      'Designed a modern responsive ecommerce frontend',
      'Built dynamic product listing and product detail pages',
      'Connected frontend with backend APIs',
      'Created Node.js and Express backend',
      'Integrated MongoDB for product and user data',
      'Implemented add to cart, remove from cart, and quantity update',
      'Added localStorage cart persistence',
      'Added JWT-based login and signup',
      'Added protected admin routes',
      'Built admin panel for product management',
      'Added checkout and order flow',
      'Improved mobile, tablet, and desktop responsiveness',
      'Prepared project for GitHub and deployment',
    ],
    screenshots: ['Storefront', 'Product details', 'Admin dashboard'],
    github: 'https://github.com/Javedshah11',
    demo: '#contact',
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Vercel'] },
]

export const services = [
  'MERN Stack Applications',
  'Authentication Systems',
  'Admin Dashboards',
  'REST APIs',
  'Responsive Websites',
  'Portfolio Websites',
  'Ecommerce Applications',
]

export const currentlyLearning = [
  {
    title: 'TypeScript',
    description: 'Improving code reliability with typed React and API contracts.',
  },
  {
    title: 'Docker',
    description: 'Learning containerized development and deployment workflows.',
  },
  {
    title: 'AWS Basics',
    description: 'Building cloud deployment awareness for production apps.',
  },
  {
    title: 'Testing',
    description: 'Practicing component, API, and user-flow testing fundamentals.',
  },
]

export const experienceTimeline = [
  { year: '2022', title: 'Started BS Software Engineering' },
  { year: '2023', title: 'Completed Web Development & Programming Certifications' },
  { year: '2024', title: 'Earned Cisco, IBM, Coursera and FreeCodeCamp Certifications' },
  { year: '2025', title: 'Built MERN Stack Applications' },
  {
    year: '2026',
    title: 'Graduated from Riphah International University and completed OpenHouse Connect Final Year Project',
  },
]

export const achievements = [
  { value: 2026, suffix: '', label: 'BS Software Engineering Graduate' },
  { value: 1, display: 'Grade A', label: 'Final Year Project Grade' },
  { value: 92, suffix: '%', label: 'AI CV Matching Demo Score' },
  { value: 4, suffix: '+', label: 'Core MERN Stack Domains' },
]

export const education = [
  {
    year: '2022 - 2026',
    title: 'BS Software Engineering',
    institute: 'Riphah International University',
    description:
      'Focused on full stack software development, web engineering, databases, APIs, and final year project delivery.',
  },
  {
    year: '2025 - 2026',
    title: 'OpenHouse Connect FYP',
    institute: 'AI-Based CV Matching System',
    description:
      'Designed and implemented a MERN stack platform that compares student CV skills with company requirements.',
  },
]

export const certifications = [
  'Responsive Web Design',
  'JavaScript Essentials 1',
  'JavaScript Essentials 2',
  'Python Essentials 1',
  'Discovering Entrepreneurship',
  'Engaging Stakeholders for Success',
  'Agile Meets Design Thinking',
  'Introduction to Software Engineering',
  'Command Line in Linux',
  'Bash Shell and Basic Scripting in Linux',
  'MongoDB Certifications',
  'SQL Certifications',
  'C++ Basics',
]

export const githubStats = [
  { value: '15+', label: 'Repositories & demos' },
  { value: 'React', label: 'Top frontend language' },
  { value: 'MERN', label: 'Primary stack' },
  { value: 'AI', label: 'Featured FYP work' },
]

export const topLanguages = [
  { name: 'JavaScript', value: 42 },
  { name: 'React', value: 28 },
  { name: 'CSS/Tailwind', value: 20 },
  { name: 'Node.js', value: 10 },
]

export const contributionWeeks = [
  [1, 2, 0, 3, 2, 4, 1],
  [0, 1, 2, 4, 3, 2, 1],
  [2, 3, 1, 0, 2, 4, 3],
  [3, 4, 2, 1, 3, 2, 4],
  [1, 2, 4, 3, 0, 1, 2],
  [4, 3, 2, 4, 1, 2, 3],
  [2, 1, 0, 2, 3, 4, 2],
  [3, 2, 4, 1, 2, 3, 4],
  [1, 3, 2, 4, 3, 1, 0],
  [4, 2, 3, 2, 1, 4, 3],
  [2, 4, 1, 3, 2, 0, 1],
  [3, 1, 4, 2, 4, 3, 2],
]
