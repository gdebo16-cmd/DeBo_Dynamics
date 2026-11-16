import type { Project } from '../data/projects.ts'

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const PortfolioCard = ({ project, className }: ProjectCardProps) => {
  return (
    <article className={`project-card ${className ?? ''}`}>
      {project.image && (
        <img
          className="project-card-image"
          src={project.image}
          alt={`Screenshot of ${project.name}`}
        />
      )}
    <div className="project-card-body">
      <div className='project-card-info'>
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-desc">Summary: <br /><br />{project.description}</p>
        <ul className="project-card-tech">
          {project.tech.map((t) => <li className='tech-card' key={t}>{t}</li>)}
        </ul>
      </div>
      <div className="project-card-links">
          {project.repo && (
            <a className='project-link' href={project.repo} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.live && (
            <a className='project-link' href={project.live} target="_blank" rel="noreferrer">Live Site</a>
          )}
      </div>
    </div>
    </article>
  );
};

export default PortfolioCard;