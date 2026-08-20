import { useState } from "react";
import Reveal from "../Reveal";
import {
  featuredProjects,
  journey,
  otherProjects,
  profile,
  skillGroups,
} from "../../data/portfolio";
import portrait from "../../assets/1771322868416.jpg";
import Credentials from "../credentials/Credentials";

const traits = [
  "Clean Code",
  "Problem Solving",
  "Responsive Design",
  "Scalable Architecture",
  "Product Thinking",
  "Continuous Learning",
];
const architecture = [
  "UI",
  "Frontend",
  "REST API",
  "Authentication",
  "Business Logic",
  "Database",
  "Services",
];
const SectionTitle = ({ index, eyebrow, title, copy }) => (
  <Reveal className="section-title">
    <div className="section-index"><span>{index}</span><i aria-hidden="true" /></div>
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  </Reveal>
);

function ProjectVisual({ project }) {
  if (project.images.length)
    return (
      <div className="browser">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>openhouse.connect / dashboard</span>
        </div>
        <img src={project.images[0]} alt={`${project.title} dashboard`} loading="lazy" />
        <img
          className="floating-shot"
          src={project.images[1]}
          alt={`${project.title} matching interface`}
          loading="lazy"
        />
      </div>
    );
  return (
    <div className={`project-art art-${project.number}`}>
      <div className="art-grid" />
      <div className="art-window">
        <span>{project.number}</span>
        <b>{project.title}</b>
        <small>{project.kicker}</small>
      </div>
    </div>
  );
}

function Architecture() {
  return (
    <section id="experience" className="section architecture">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="Engineering approach"
          title={
            <>
              HOW I THINK
              <br />
              ABOUT <span>SOFTWARE</span>
            </>
          }
          copy="A product is a connected system. I think across the interface, application logic, data, security, and the experience holding it all together."
        />
        <Reveal className="architecture-flow">
          {architecture.map((item, index) => (
            <div className="flow-step" key={item}>
              <article>
                <span>0{index + 1}</span>
                <b>{item}</b>
                <small>
                  {index === 0
                    ? "User experience"
                    : index === 1
                      ? "Component systems"
                      : index === 2
                        ? "Clear contracts"
                        : index === 3
                          ? "Protected access"
                          : index === 4
                            ? "Product rules"
                            : index === 5
                              ? "Reliable data"
                              : "Deployment layer"}
                </small>
              </article>
              {index < architecture.length - 1 && (
                <div className="connector">
                  <i />
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default function PortfolioSections() {
  const [activeSkill, setActiveSkill] = useState("React");
  const skillProjectMap = {
    React: "OpenHouse Connect · Ecommerce Fullstack",
    JavaScript: "All featured projects",
    "Node.js": "OpenHouse Connect · Ecommerce Fullstack",
    "Express.js": "OpenHouse Connect · Ecommerce Fullstack",
    MongoDB: "OpenHouse Connect · Ecommerce Fullstack",
    "JWT Authentication": "OpenHouse Connect · Ecommerce Fullstack",
    "Responsive Design": "Portfolio · Ecommerce Fullstack",
    "Product Thinking": "OpenHouse Connect · Portfolio",
  };
  return (
    <div id="main-content">
      <section id="about" className="section about">
        <div className="container">
          <SectionTitle
            index="01"
            eyebrow="Engineering profile"
            title={
              <>
                I DON’T JUST WRITE CODE.
                <br />
                <span>I BUILD SOLUTIONS.</span>
              </>
            }
            copy="Software Engineering graduate from Riphah International University, focused on turning real product requirements into thoughtful full-stack experiences."
          />
          <div className="about-grid">
            <Reveal className="portrait-card">
              <img src={portrait} alt="Portrait of Javed Shah" loading="lazy" width="1040" height="1300" />
              <div>
                <span>Based in</span>
                <b>{profile.location}</b>
              </div>
            </Reveal>
            <Reveal className="about-content" delay={0.08}>
              <p className="lead">
                I care about the whole product: how it feels, how it behaves,
                and how reliably it works behind the interface.
              </p>
              <p>
                My core stack spans React, Node.js, Express, MongoDB,
                JavaScript, Tailwind CSS, REST APIs, and JWT authentication. I
                bring them together to build responsive applications with clear
                user flows and maintainable structure.
              </p>
              <div className="trait-grid">
                {traits.map((trait, index) => (
                  <div key={trait}>
                    <span>0{index + 1}</span>
                    {trait}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <SectionTitle
            index="02"
            eyebrow="Selected work"
            title={
              <>
                FEATURED
                <br />
                <span>ENGINEERING WORK.</span>
              </>
            }
            copy="A closer look at the systems, decisions, and user experiences behind selected projects."
          />
          <div className="featured-list">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.title}
                className={`featured-project ${index % 2 ? "reverse" : ""}`}
              >
                <div className="project-visual" data-cursor="VIEW">
                  <ProjectVisual project={project} />
                </div>
                <div className="project-story">
                  <p className="project-number">{project.number} / 03</p>
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p>{project.description}</p>
                  <p className="project-detail">{project.detail}</p>
                  <div className="feature-list">
                    {project.features.map((feature) => (
                      <span key={feature}>↳ {feature}</span>
                    ))}
                  </div>
                  <div className="tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Source code ↗
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live project ↗
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="explorer-head">
            <div>
              <p className="eyebrow">More from the lab</p>
              <h3>Project explorer</h3>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer">
              View all on GitHub ↗
            </a>
          </Reveal>
          <div className="project-grid">
            {otherProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <article className="project-card" data-cursor="VIEW">
                  <div className="card-top">
                    <span>0{index + 1}</span>
                    <a
                      href={project.github}
                      aria-label={`Open ${project.title} repository`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ↗
                    </a>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {project.live && (
                    <a
                      className="live-link"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site ↗
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Architecture />
      <section id="skills" className="section skills">
        <div className="container">
          <SectionTitle
            index="04"
            eyebrow="Technology ecosystem"
            title={
              <>
                TOOLS I USE TO
                <br />
                <span>SHIP PRODUCTS.</span>
              </>
            }
            copy="No arbitrary percentages—just the technologies and engineering practices that support my work."
          />
          <div className="skills-map">
            <div className="skills-core">
              <span>JS</span>
              <b>
                Javed’s
                <br />
                stack
              </b>
            </div>
            {skillGroups.map((group, index) => (
              <Reveal
                className={`skill-group skill-${index}`}
                key={group.title}
                delay={index * 0.06}
              >
                <p>0{index + 1}</p>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => (
                    <button
                      type="button"
                      className={activeSkill === item ? "active" : ""}
                      aria-pressed={activeSkill === item}
                      onClick={() => setActiveSkill(item)}
                      key={item}
                    >{item}</button>
                  ))}
                </div>
              </Reveal>
            ))}
            <div className="skill-context" aria-live="polite">
              <span>ACTIVE RELATION</span>
              <b>{activeSkill}</b>
              <p>{skillProjectMap[activeSkill] || "Applied across the engineering workflow"}</p>
            </div>
          </div>
        </div>
      </section>

      <Credentials />

      <section id="journey" className="section journey">
        <div className="container">
          <SectionTitle
            index="06"
            eyebrow="Journey"
            title={
              <>
                BUILDING, LEARNING,
                <br />
                <span>AND MOVING FORWARD.</span>
              </>
            }
            copy="A factual timeline from software engineering education to full-stack product work."
          />
          <div className="timeline">
            {journey.map(([year, title, detail], index) => (
              <Reveal className="timeline-item" key={year} delay={index * 0.05}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-dot" />
                <article>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="github-section">
        <div className="container">
          <Reveal className="github-card">
            <div>
              <p className="eyebrow">Open source identity</p>
              <h2>
                Javedshah11<span>.</span>
              </h2>
              <p>
                Explore source code, experiments, full-stack applications, and
                the work behind this portfolio.
              </p>
            </div>
            <a
              className="button primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <span>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-grid" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2>
              HAVE AN IDEA?
              <br />
              <span>LET’S TURN IT INTO SOFTWARE.</span>
            </h2>
            <p>
              I’m open to software engineering opportunities, thoughtful
              collaborations, and products worth building.
            </p>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                Contact me <span>↗</span>
              </a>
              <a
                className="button secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="button secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Reveal>
        </div>
      </section>
      <footer>
        <div className="container">
          <a className="brand" href="#home">
            <span>JS</span>
            <b>Javed Shah</b>
          </a>
          <p>Software Engineer · Full-Stack Developer</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
