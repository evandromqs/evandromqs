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
      <div className="card-media-wrapper" style={{ height: '200px', position: 'relative' }}>
        {project.image ? (
          <img
            src={project.image}
            alt={`Print do projeto ${project.name}`}
            className="card-media-img"
            loading="lazy"
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              height: '200px',
              width: '100%',
              background: 'radial-gradient(circle at 50% 50%, rgba(37, 211, 102, 0.15) 0%, #0d0d14 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
        <div className="card-media-overlay" />

        {/* Tag de preco/resultado no topo da imagem */}
        <span
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: '#25D366',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '0.75rem',
            padding: '4px 11px',
            borderRadius: '9999px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
            zIndex: 3,
            letterSpacing: '0.02em',
          }}
        >
          {project.tagline}
        </span>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-live-badge"
            onClick={(e) => e.stopPropagation()}
            title={`Acessar ${project.name}`}
            style={{ zIndex: 3 }}
          >
            <Globe size={12} />
            <span>Online</span>
          </a>
        )}
      </div>

      <h3 className="card-name" style={{ marginTop: '0.75rem' }}>{project.name}</h3>
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
