import Nav from '../components/nav';
import Banner from '../components/banner';
import Footer from '../components/footer';
import BgToggle from '../components/BgToggle';
import ThemeToggle from '../components/ThemeButton';
import './resume.css';

const CONTACT: { label: string; href?: string }[] = [
  { label: 'Colorado Springs, CO' },
  { label: '(720) 666-4441', href: 'tel:+17206664441' },
  { label: 'gdebo16@gmail.com', href: 'mailto:gdebo16@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-deboer-093b52166' },
  { label: 'GitHub', href: 'https://github.com/gdebo16-cmd' },
];

const TITLE_LINE = 'JavaScript · TypeScript · React · Node.js · AI/LLM';

const SUMMARY =
  'Software developer seeking a mid-level software engineering position. ' +
  'Builds full-stack and AI projects with JavaScript, TypeScript, React, Next.js, Node.js, Express, and local LLMs, ' +
  'with additional experience in Java and Python. Brings 8 years as an Operations Manager at USAA delivering ' +
  'high-visibility programs and features with cross-functional teams, plus a SAFe POPM certification. ' +
  'Focused on software developer roles in Colorado Springs and Denver.';

  const SKILL_GROUPS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Back End',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Vite', 'REST APIs', 'Socket.IO', 'JWT & Session Auth', 'Zod'],
  },
  {
    category: 'AI Engineering',
    items: ['Local LLMs (Ollama)', 'Vision-Model Chat', 'ComfyUI Image Generation', 'Agent Bots'],
  },
  {
    category: 'Data, Testing & Tools',
    items: ['PostgreSQL (incl. Neon)', 'SQLite', 'Playwright', 'Node Test Runner', 'Git / GitHub', 'Docker'],
  },
];

const PROJECTS: { name: string; url: string; stack: string; bullets: string[] }[] = [
  {
    name: 'Project Umber — Eldrid Tales (character & campaign platform)',
    url: 'https://github.com/gdebo16-cmd/Project-Umber',
    stack: 'Node.js · Express 5 · PostgreSQL · Sequelize · React 19 · Vite · Socket.IO · Playwright · Docker',
    bullets: [
      'Building a full-stack tabletop RPG platform for creating characters and running campaigns: an Express REST API with controllers and models for users, characters, campaigns, inventory, and spells on PostgreSQL, paired with a React + Vite client.',
      'Implemented session auth with bcrypt hashing, Postgres-backed sessions, and rate limiting; wrote SQL migrations with dry-run and rollback support for local and Neon cloud databases.',
      'Set up Playwright end-to-end testing and Docker; authored a phased roadmap with milestones, exit criteria, and a risk register.',
    ],
  },
  {
    name: 'Illumination Intelligence (local AI app suite)',
    url: 'https://github.com/gdebo16-cmd/Illumination-Intelligence',
    stack: 'TypeScript · Next.js · React · Node.js 22 · SQLite · Ollama (local LLMs) · ComfyUI',
    bullets: [
      'Built a Next.js suite of local AI tools: LLM chat via Ollama with image input for vision models, a ComfyUI image studio, and configurable agent bots, with SQLite storage.',
      'Wrote a GPU job queue that swaps models so LLM chat and image generation can share a single graphics card.',
    ],
  },
  {
    name: 'Pulse (team status board)',
    url: 'https://github.com/gdebo16-cmd/Pulse',
    stack: 'Node.js · Express · React · Vite · SQLite · JWT · Zod · Docker',
    bullets: [
      'Full-stack CRUD app: Express API with JWT auth, Zod validation, and owner-only deletes; React + Vite UI; Node test runner smoke tests; Docker Compose.',
    ],
  },
];

const ROLES: { title: string; company: string; period: string; bullets: string[] }[] = [
  {
    title: 'Operations Manager',
    company: 'USAA',
    period: '2019 – Present',
    bullets: [
      'Work with cross-functional teams to deliver high-visibility programs and features — including Guidewire ClaimCenter and MyNRT — from planning through rollout.',
      'Coordinate work across teams and stakeholders, keeping priorities, dependencies, and status aligned so delivery stays on track.',
      'Serve as a connection point between business and technical teams, clarifying needs and resolving blockers.',
      'Acted as a company change agent, translating company goals into delivery work for developer teams of up to 20.',
    ],
  },
  {
    title: 'Data Entry Processing',
    company: 'Datamark',
    period: '2018 – 2019',
    bullets: [
      'Processed and verified data records accurately in a fast-paced, deadline-driven environment.',
      'Trained new employees on command-line usage and operating-system fundamentals.',
    ],
  },
  {
    title: 'Assistant Chief Engineer',
    company: 'Bimbo Bakeries',
    period: '2016 – 2017',
    bullets: [
      'Identified pitfalls and partnered with stakeholders and engineers to pinpoint areas of improvement across the facility.',
      'Trained incoming engineers to identify facility deficits and implement improvement strategies.',
      'Facilitated and implemented Oracle Fusion Cloud Warehouse to maintain and track inventory and reduce errors company-wide, surfacing a $34,000 part deficit that was rectified.',
    ],
  },
];

const EDUCATION: { title: string; org: string; period: string }[] = [
  { title: 'Master of Science, Software Engineering (in progress)', org: 'Western Governors University', period: '2025 – Present' },
  { title: 'Associate of Science, Software Engineering', org: 'Alamo Colleges', period: '2018' },
  { title: 'SAFe Product Owner / Product Manager (POPM)', org: 'Scaled Agile, Inc.', period: '2025' },
];

interface ResumeProps {
  className?: string;
}

const Resume = ({ className }: ResumeProps) => {
    return (
    <main className={className}>
        <BgToggle className="Lottie-bg" />
        <Banner className="banner" />
        <button type="button" className="resume-print-btn no-print" onClick={() => window.print()}>
            Print / Save as PDF
        </button>

      <header className="resume-header">
        <h1>Gabriel DeBoer</h1>
        <p className="resume-role">Software Developer</p>
        <p className="resume-stack-line">{TITLE_LINE}</p>
        <ul className="resume-contact">
          {CONTACT.map(({ label, href }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {label}
                </a>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>
      </header>

      <section className="resume-section" aria-labelledby="resume-summary">
        <h2 id="resume-summary">Summary</h2>
        <p>{SUMMARY}</p>
      </section>

      <section className="resume-section" aria-labelledby="resume-skills">
        <h2 id="resume-skills">Technical Skills</h2>
        {SKILL_GROUPS.map((group) => (
          <div className="resume-skill-row" key={group.category}>
            <span className="resume-skill-category">{group.category}:</span>
            <br />
            <ul className="resume-chips">
              {group.items.map((item) => (
                <li className="resume-chip" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-projects">
        <h2 id="resume-projects">Projects</h2>
        {PROJECTS.map((p) => (
          <article className="resume-entry" key={p.name}>
            <div className="resume-entry-head">
              <h3>
                <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
              </h3>
              <a className="resume-link" href={p.url} target="_blank" rel="noreferrer">
                {p.url.replace('https://', '')}
              </a>
            </div>
            <p className="resume-stack">{p.stack}</p>
            <ul className="resume-bullets">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-experience">
        <h2 id="resume-experience">Experience</h2>
        {ROLES.map((r) => (
          <article className="resume-entry" key={`${r.title}-${r.company}`}>
            <div className="resume-entry-head">
              <h3>
                {r.title} — <span className="resume-company">{r.company}</span>
              </h3>
              <span className="resume-period">{r.period}</span>
            </div>
            <ul className="resume-bullets">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-education">
        <h2 id="resume-education">Education &amp; Certifications</h2>
        {EDUCATION.map((e) => (
          <article className="resume-entry" key={`${e.title}-${e.org}`}>
            <div className="resume-entry-head">
              <h3>{e.title}</h3>
              <span className="resume-period">{e.period}</span>
            </div>
            <p className="resume-org">{e.org}</p>
          </article>
        ))}
        <p className="resume-note">Willing to obtain a U.S. security clearance.</p>
      </section>
        <ThemeToggle className='adapt-item'/>
        <Nav className="nav" />
        <Footer className="footer" />
        </main>
  );
};

export default Resume;
