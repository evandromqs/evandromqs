import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section
      id="projetos"
      className="py-16 sm:py-20 md:py-24 lg:py-28 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--void-black)',
        color: 'var(--ink-pure)',
      }}
    >
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span
          className="section-label"
          style={{
            color: 'var(--neon-cyan)',
            fontWeight: 700,
            fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          // projetos & criações
        </span>
        <h2
          className="section-headline"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
            fontWeight: 900,
            color: 'var(--ink-pure)',
            marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
            lineHeight: 1.25,
          }}
        >
          Projetos Entregues
        </h2>
        <p
          className="section-description"
          style={{
            color: 'var(--ink-soft)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            lineHeight: 1.6,
            maxWidth: '680px',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 500,
          }}
        >
          De R$ 500 a R$ 2.000 - Veja soluções reais no ar funcionando com carregamento rápido e sem plataformas pesadas.
        </p>

        {/* Categories Filter */}
        <div className="category-filters flex flex-wrap gap-2 mb-8 sm:mb-10">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            style={{
              backgroundColor: activeCategory === 'all' ? 'var(--neon-cyan)' : 'var(--void-card)',
              color: activeCategory === 'all' ? '#ffffff' : 'var(--ink-soft)',
              border: '1px solid',
              borderColor: activeCategory === 'all' ? 'var(--neon-cyan)' : 'var(--void-line)',
              borderRadius: '9999px',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.85rem, 1.8vw, 1.15rem)',
              fontWeight: 700,
              fontSize: 'clamp(0.78rem, 1.5vw, 0.85rem)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
          >
            Todos ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
            style={{
              backgroundColor: activeCategory === 'web' ? 'var(--neon-cyan)' : 'var(--void-card)',
              color: activeCategory === 'web' ? '#ffffff' : 'var(--ink-soft)',
              border: '1px solid',
              borderColor: activeCategory === 'web' ? 'var(--neon-cyan)' : 'var(--void-line)',
              borderRadius: '9999px',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.85rem, 1.8vw, 1.15rem)',
              fontWeight: 700,
              fontSize: 'clamp(0.78rem, 1.5vw, 0.85rem)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
          >
            Sites & Lojas Virtuais
          </button>
          <button
            className={`filter-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
            style={{
              backgroundColor: activeCategory === 'mobile' ? 'var(--neon-cyan)' : 'var(--void-card)',
              color: activeCategory === 'mobile' ? '#ffffff' : 'var(--ink-soft)',
              border: '1px solid',
              borderColor: activeCategory === 'mobile' ? 'var(--neon-cyan)' : 'var(--void-line)',
              borderRadius: '9999px',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.85rem, 1.8vw, 1.15rem)',
              fontWeight: 700,
              fontSize: 'clamp(0.78rem, 1.5vw, 0.85rem)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
          >
            Aplicativos para Celular
          </button>
          <button
            className={`filter-btn ${activeCategory === 'tools-ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools-ai')}
            style={{
              backgroundColor: activeCategory === 'tools-ai' ? 'var(--neon-cyan)' : 'var(--void-card)',
              color: activeCategory === 'tools-ai' ? '#ffffff' : 'var(--ink-soft)',
              border: '1px solid',
              borderColor: activeCategory === 'tools-ai' ? 'var(--neon-cyan)' : 'var(--void-line)',
              borderRadius: '9999px',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.85rem, 1.8vw, 1.15rem)',
              fontWeight: 700,
              fontSize: 'clamp(0.78rem, 1.5vw, 0.85rem)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
          >
            Sistemas & Automações
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
