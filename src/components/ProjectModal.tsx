import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
          <X size={24} />
        </button>

        {project.image && (
          <div className="modal-image-wrapper">
            <img
              src={project.image}
              alt={`Screenshot de ${project.name}`}
              className="modal-image-img"
            />
            <div className="modal-image-overlay" />
          </div>
        )}

        <span className="modal-tagline">{project.tagline}</span>
        <h2 className="modal-title">{project.name}</h2>

        <p className="modal-desc">
          {project.longDescription || project.description}
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <span className="about-subtitle" style={{ margin: '0 0 0.75rem 0' }}>
            Tecnologias Utilizadas
          </span>
          <div className="card-tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={16} />
              <span>Acessar Website / Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={project.liveUrl ? 'btn-secondary' : 'btn-primary'}
            >
              <GithubIcon size={16} />
              <span>Ver no GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
