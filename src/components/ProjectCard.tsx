import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isVideo = project.image && project.image.endsWith('.mp4');

  return (
    <div
      className="project-card group"
      onClick={() => onSelect(project)}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '1rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {/* Media Top Container */}
      <div
        className="card-media-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '12rem',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          marginBottom: '1rem',
          backgroundColor: '#f8fafc',
          border: '1px solid #e5e7eb',
        }}
      >
        {isVideo ? (
          <video
            src={project.image}
            autoPlay
            loop
            muted
            playsInline
            className="card-media-img h-48 w-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <img
            src={project.image}
            alt={`Prévia do projeto ${project.name}`}
            className="card-media-img h-48 w-full object-cover"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )}

        <div className="card-media-overlay" />

        {/* Tag verde superior */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#25D366',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '0.72rem',
            padding: '4px 11px',
            borderRadius: '9999px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
            zIndex: 3,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
          }}
        >
          {project.tagline}
        </span>
      </div>

      {/* Conteúdo do Card */}
      <h3
        className="card-name"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.15rem',
          fontWeight: 800,
          color: '#0a0a0a',
          marginBottom: '0.5rem',
          lineHeight: 1.25,
        }}
      >
        {project.name}
      </h3>

      <p
        className="card-description"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.88rem',
          color: '#475569',
          lineHeight: 1.5,
          marginBottom: '1.25rem',
          fontWeight: 500,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {project.description}
      </p>

      {/* Footer: Visitar + DETALHES */}
      <div
        className="card-footer-info"
        style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-quick-link"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#25D366',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            <span>Visitar</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <span />
        )}

        <button
          type="button"
          className="card-arrow"
          onClick={() => onSelect(project)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'none',
            border: 'none',
            color: '#0a0a0a',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '0.82rem',
            cursor: 'pointer',
            padding: 0,
            letterSpacing: '0.04em',
          }}
        >
          <span>DETALHES</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
};
