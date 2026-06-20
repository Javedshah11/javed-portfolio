import { achievements, certifications, education, profile, projects, skills } from '../data/portfolio'

const cvExtras = {
  summary:
    'Software Engineering graduate from Riphah International University and passionate Full Stack Web Developer with experience in building modern, responsive, and scalable web applications using React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS.',
  education: {
    cgpa: '2.83 / 4.00',
  },
}

function buildCvData() {
  const primaryEducation = education[0]

  return {
    ...profile,
    summary: cvExtras.summary,
    skills: skills.map((skill) => skill.name).join(', '),
    education: {
      degree: primaryEducation.title,
      institute: primaryEducation.institute,
      graduated: primaryEducation.year.split(' - ').at(-1),
      cgpa: cvExtras.education.cgpa,
    },
    projects: projects.map((project) => ({
      title: project.title,
      description: project.description,
      tech: project.technologies.join(', '),
    })),
    achievements: achievements.map((achievement) => {
      const value = achievement.display || `${achievement.value}${achievement.suffix || ''}`
      return `${value} - ${achievement.label}`
    }),
    certifications,
  }
}

const page = {
  width: 210,
  height: 297,
  margin: 12,
  accent: [37, 99, 235],
  text: [22, 30, 46],
  muted: [82, 92, 110],
  light: [239, 246, 255],
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight, options = {}) {
  const lines = doc.splitTextToSize(text, maxWidth)
  doc.text(lines, x, y, options)
  return y + lines.length * lineHeight
}

function sectionTitle(doc, title, x, y, width) {
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...page.accent)
  doc.text(title.toUpperCase(), x, y)
  doc.setDrawColor(...page.accent)
  doc.setLineWidth(0.35)
  doc.line(x, y + 2.5, x + width, y + 2.5)
  return y + 7
}

function bulletList(doc, items, x, y, width, lineHeight = 4.4) {
  let cursorY = y

  items.forEach((item) => {
    doc.setTextColor(...page.text)
    doc.circle(x + 1.2, cursorY - 1.2, 0.55, 'F')
    cursorY = addWrappedText(doc, item, x + 4, cursorY, width - 4, lineHeight)
    cursorY += 0.7
  })

  return cursorY
}

export async function generateCvPdf() {
  const { jsPDF } = await import('jspdf')
  const cv = buildCvData()
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const leftX = page.margin
  const rightX = 132
  const leftWidth = 112
  const rightWidth = page.width - rightX - page.margin

  doc.setFillColor(...page.light)
  doc.rect(0, 0, page.width, 35, 'F')
  doc.setFillColor(...page.accent)
  doc.rect(0, 0, 5, page.height, 'F')

  doc.setTextColor(...page.text)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(23)
  doc.text(cv.name, leftX, 16)

  doc.setTextColor(...page.accent)
  doc.setFontSize(10.5)
  doc.text(cv.title, leftX, 23)

  doc.setTextColor(...page.muted)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.2)
  doc.text(`${cv.location} | Originally from ${cv.origin}`, leftX, 29)

  const contactLines = [
    cv.email,
    cv.phone,
    cv.github,
    cv.linkedin,
  ]
  doc.setFontSize(7.7)
  contactLines.forEach((line, index) => {
    doc.text(line, rightX, 14 + index * 5)
  })

  let y = 45
  y = sectionTitle(doc, 'Profile Summary', leftX, y, leftWidth)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.6)
  doc.setTextColor(...page.text)
  y = addWrappedText(doc, cv.summary, leftX, y, leftWidth, 4.2)

  y += 3
  y = sectionTitle(doc, 'Projects', leftX, y, leftWidth)
  cv.projects.forEach((project) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.2)
    doc.setTextColor(...page.text)
    doc.text(project.title, leftX, y)
    y += 4.3

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.2)
    y = addWrappedText(doc, project.description, leftX, y, leftWidth, 4)

    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...page.accent)
    y = addWrappedText(doc, `Tech: ${project.tech}`, leftX, y + 0.5, leftWidth, 4)
    y += 2.2
  })

  y = sectionTitle(doc, 'Education', leftX, y, leftWidth)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9.2)
  doc.setTextColor(...page.text)
  doc.text(cv.education.degree, leftX, y)
  y += 4.5
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.3)
  doc.text(cv.education.institute, leftX, y)
  y += 4.3
  doc.setTextColor(...page.muted)
  doc.text(`Graduated: ${cv.education.graduated} | CGPA: ${cv.education.cgpa}`, leftX, y)

  let rightY = 45
  rightY = sectionTitle(doc, 'Technical Skills', rightX, rightY, rightWidth)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.1)
  doc.setTextColor(...page.text)
  rightY = addWrappedText(doc, cv.skills, rightX, rightY, rightWidth, 4.1)

  rightY += 4
  rightY = sectionTitle(doc, 'Achievements', rightX, rightY, rightWidth)
  doc.setFontSize(8.1)
  rightY = bulletList(doc, cv.achievements, rightX, rightY, rightWidth)

  rightY += 3
  rightY = sectionTitle(doc, 'Certifications', rightX, rightY, rightWidth)
  doc.setFontSize(8.1)
  bulletList(doc, cv.certifications, rightX, rightY, rightWidth, 4.1)

  doc.setDrawColor(226, 232, 240)
  doc.line(page.margin, 282, page.width - page.margin, 282)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...page.muted)
  doc.text('Generated from Javed Shah portfolio | ATS-friendly one-page CV', page.margin, 288)

  doc.save('Javed-Shah-CV.pdf')
}
