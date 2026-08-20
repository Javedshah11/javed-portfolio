export const certifications = [
  { title: 'Full Stack Web Development With MERN STACK & GenAI 2026', issuer: 'Udemy', issued: '2026', category: 'Full-Stack', featured: true },
  { title: 'Practical Next.js & React — Build a Real WebApp with Next.js', issuer: 'Udemy', issued: 'Aug 2026', category: 'Full-Stack', featured: true },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', issued: 'Jun 2025', category: 'Web', featured: true },
  { title: 'JavaScript Essentials 2', issuer: 'Cisco', issued: 'Nov 2024', category: 'Web', featured: true },
  { title: 'JavaScript Essentials 1', issuer: 'Cisco', issued: 'Oct 2024', category: 'Web', featured: true },
  { title: 'Introduction to Software Engineering (with Honors)', issuer: 'IBM', issued: 'Apr 2024', category: 'Software Engineering', featured: true },
  { title: 'Python Essentials 1', issuer: 'Cisco', issued: 'Nov 2024', category: 'Programming', featured: true },
  { title: 'Agile Meets Design Thinking', issuer: 'University of Virginia', issued: 'May 2024', category: 'Software Engineering', featured: true },
  { title: 'The Bash Shell and Basic Scripting in Linux', category: 'Systems' },
  { title: 'Command Line in Linux', category: 'Systems' },
  { title: 'Create Your First NoSQL Database with MongoDB and Compass', category: 'Backend / Data' },
  { title: 'CRUD Operations Using MongoDB NoSQL', category: 'Backend / Data' },
  { title: 'Performing Data Definition and Manipulation in SQL', category: 'Backend / Data' },
  { title: 'Relational Modeling in Dia', category: 'Backend / Data' },
  { title: 'Discovering Entrepreneurship', category: 'Professional / Design' },
  { title: 'Engaging Stakeholders for Success', category: 'Professional / Design' },
  { title: 'C++ Basics: Selection and Iteration', category: 'Programming' },
  { title: 'How to Create a High-Quality Flyer in Adobe Photoshop', category: 'Professional / Design' },
  { title: 'Create Animated GIF for Social Media Using Adobe Photoshop', category: 'Professional / Design' },
]

export const credentialYears = ['2026', '2025', '2024']
export const credentialCategories = [...new Set(certifications.map(({ category }) => category))]
