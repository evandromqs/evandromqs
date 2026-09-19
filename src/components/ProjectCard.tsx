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
        backgroundColor: 'var(--void-card)',
        border: '1px solid var(--void-line)',
        borderRadius: '1rem',
        padding: 'clamp(1rem, 2vw, 1.25rem)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--card-shadow)',
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
          height: 'clamp(10.5rem, 16vw, 12rem)',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          marginBottom: '1rem',
          backgroundColor: 'var(--void-dark)',
          border: '1px solid var(--void-line)',
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

        {/* Tag superior em Azul Royal */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'var(--neon-cyan)',
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
          fontSize: 'clamp(1.05rem, 2vw, 1.15rem)',
          fontWeight: 800,
          color: 'var(--ink-pure)',
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
          fontSize: 'clamp(0.82rem, 1.5vw, 0.88rem)',
          color: 'var(--ink-soft)',
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
          borderTop: '1px solid var(--void-line)',
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
              color: 'var(--neon-cyan)',
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
            color: 'var(--ink-pure)',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '0.75rem',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            padding: '0.35rem 0.6rem',
            borderRadius: '0.375rem',
            transition: 'all 0.2s',
          }}
        >
          <span>DETALHES</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
};
