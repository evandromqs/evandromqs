import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="project-card" onClick={() => onSelect(project)}>
      {project.image && (
        <div className="card-media-wrapper">
          <img
            src={project.image}
            alt={`Print do projeto ${project.name}`}
            className="card-media-img"
            loading="lazy"
          />
          <div className="card-media-overlay" />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-live-badge"
              onClick={(e) => e.stopPropagation()}
              title={`Acessar ${project.name}`}
            >
              <Globe size={12} />
              <span>Online</span>
            </a>
          )}
        </div>
      )}

      <span className="card-tagline">{project.tagline}</span>
      <h3 className="card-name">{project.name}</h3>
      <p className="card-description">{project.description}</p>

      <div className="card-tech-clean">
        <span>{project.technologies.slice(0, 3).join(' • ')}</span>
      </div>

      <div className="card-footer-info">
        <div className="card-status">
          <span className={`status-dot ${project.status === 'active' ? 'active' : 'dev'}`} />
          <span>{project.status === 'active' ? 'Ativo' : 'Em Desenvolvimento'}</span>
        </div>

        <div className="card-actions-group">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-quick-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Visitar</span>
              <ExternalLink size={13} />
            </a>
          )}
          <div className="card-arrow">
            <span>Detalhes</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

