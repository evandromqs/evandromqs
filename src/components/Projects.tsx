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
      className="py-20 md:py-28 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--void-black)',
        color: 'var(--ink-pure)',
      }}
    >
      <div className="section-container max-w-7xl mx-auto px-4">
        <span
          className="section-label"
          style={{
            color: 'var(--neon-cyan)',
            fontWeight: 700,
            fontSize: '0.85rem',
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
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: 'var(--ink-pure)',
            marginBottom: '0.75rem',
          }}
        >
          Projetos Reais Focados em Resultado
        </h2>
        <p
          className="section-description"
          style={{
            color: 'var(--ink-soft)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            maxWidth: '680px',
            marginBottom: '2.5rem',
            fontWeight: 500,
          }}
        >
          De R$ 500 a R$ 2.000 - Veja como microempreendedores já estão vendendo sem pagar taxas abusivas.
        </p>

        {/* Categories Filter */}
        <div className="category-filters flex flex-wrap gap-2 mb-10">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            style={{
              backgroundColor: activeCategory === 'all' ? 'var(--neon-cyan)' : 'var(--void-card)',
              color: activeCategory === 'all' ? '#ffffff' : 'var(--ink-soft)',
              border: '1px solid',
              borderColor: activeCategory === 'all' ? 'var(--neon-cyan)' : 'var(--void-line)',
              borderRadius: '9999px',
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
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
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
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
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
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
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
          >
            Sistemas & Automações
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
