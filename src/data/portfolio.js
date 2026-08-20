import acceptedCandidatesImage from '../assets/openhouse acceptedfyp canditates.png'
import assignVolunteerImage from '../assets/assign volunter in open house.png'
import skillMatchingImage from '../assets/studentskill matching company requrments.png'

export const profile = { name: 'Javed Shah', role: 'Software Engineer', location: 'Islamabad, Pakistan', origin: 'Batkhela, Pakistan', email: 'kingdompeople3@gmail.com', phone: '03054541222', github: 'https://github.com/Javedshah11', linkedin: 'https://www.linkedin.com/in/javed-shah-/' }

export const navItems = [['Home','#home'],['About','#about'],['Projects','#projects'],['Skills','#skills'],['Experience','#experience'],['Journey','#journey'],['Contact','#contact']].map(([label,href]) => ({ label, href }))

export const featuredProjects = [
  { number:'01', title:'OpenHouse Connect', kicker:'Flagship full-stack platform', role:'Full Stack Developer', description:'A university open-house platform connecting students and companies through role-based workflows and CV-to-requirement matching.', detail:'Built around student, company, and administrator experiences—with authentication, dashboards, opportunity management, shortlisting, PDF workflows, and compatibility scoring.', technologies:['React','Node.js','Express.js','MongoDB','JWT','Tailwind CSS'], features:['Role-based authentication','Student & company dashboards','Job workflows','AI-assisted CV matching'], images:[acceptedCandidatesImage,skillMatchingImage,assignVolunteerImage] },
  { number:'02', title:'Ecommerce Fullstack', kicker:'Production-shaped MERN application', role:'Full Stack Developer', description:'A responsive ecommerce application with a dynamic catalog, protected authentication, cart persistence, checkout, orders, and admin product management.', detail:'The React storefront connects to Node and Express APIs backed by MongoDB, with JWT authentication and protected administrative workflows.', technologies:['React','Vite','Node.js','Express.js','MongoDB','JWT'], features:['Dynamic product catalog','Cart & checkout','Protected admin routes','Product CRUD'], images:[], github:'https://github.com/Javedshah11/ecommerce-fullstack-design', live:'https://ecommerce-fullstack-design-nu-beryl.vercel.app' },
  { number:'03', title:'CYBERGUARD', kicker:'Security-focused MERN interface', role:'Software Engineering Project', description:'A web-based network intrusion detection interface for secure authentication, alert monitoring, attack simulation, and incident management.', detail:'An interactive dashboard that turns security events into understandable, actionable workflows.', technologies:['MERN Stack','Authentication','Dashboards','Security UI'], features:['Secure authentication','Alert monitoring','Attack simulation','Incident management'], images:[], github:'https://github.com/Javedshah11/CYBERGUARD' },
]

export const otherProjects = [
  { title:'Nextalk', description:'A JavaScript project and Javed’s most recently updated public repository.', tech:['JavaScript'], github:'https://github.com/Javedshah11/nextalk' },
  { title:'Machine Learning Semester Project', description:'Titanic survival prediction using Decision Tree, KNN, and Naive Bayes with preprocessing and cross-validation.', tech:['Jupyter Notebook','Machine Learning'], github:'https://github.com/Javedshah11/machine-learning-semister-project' },
  { title:'QR Code', description:'A focused QR code project available in Javed’s public GitHub work.', tech:['Open Source'], github:'https://github.com/Javedshah11/QR_code' },
  { title:'Javed Portfolio', description:'The evolving portfolio system for presenting engineering work and product thinking.', tech:['React','Vite','Framer Motion'], github:'https://github.com/Javedshah11/javed-portfolio', live:'https://javed-portfolio-brown.vercel.app' },
]

export const skillGroups = [
  { title:'Frontend', items:['React','JavaScript','HTML','CSS','Tailwind CSS','Responsive Design'] },
  { title:'Backend', items:['Node.js','Express.js','REST APIs','API Integration'] },
  { title:'Data & Security', items:['MongoDB','JWT Authentication','Role-Based Access'] },
  { title:'Engineering', items:['Git','GitHub','Debugging','Testing','Product Thinking'] },
]

export const journey = [
  ['2022','Started BS Software Engineering','Riphah International University'],
  ['2023','Expanded web engineering foundations','Programming and responsive web development'],
  ['2024','Built broader software foundations','Cisco, IBM, Coursera and freeCodeCamp coursework'],
  ['2025','Shipped MERN applications','Frontend, backend, APIs, authentication and databases'],
  ['2026','Graduated and completed OpenHouse Connect','BS Software Engineering · Final Year Project'],
]
