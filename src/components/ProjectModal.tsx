import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
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

  const handleWhatsAppModalClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'lead',
        event_label: `modal_project_${project.id}`,
        value: 1,
      });
    }
  };

  const whatsappProjectUrl = `https://wa.me/5511976920649?text=${encodeURIComponent(
    `Olá vi o projeto "${project.name}" no seu site e gostaria de um orçamento para algo parecido no meu negócio.`
  )}`;

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

        <div style={{ marginBottom: '1.5rem', color: 'var(--ink-soft)', fontSize: '0.9rem' }}>
          <span style={{ fontWeight: 600, color: 'var(--ink-pure)', marginRight: '0.5rem' }}>
            Tecnologias:
          </span>
          <span>{project.technologies.join(' • ')}</span>
        </div>

        <div className="modal-actions">
          <a
            href={whatsappProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp"
            onClick={handleWhatsAppModalClick}
          >
            <MessageCircle size={16} />
            <span>Quero um projeto parecido</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink size={16} />
              <span>Acessar Projeto</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={16} />
              <span>Código no GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
