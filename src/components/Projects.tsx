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
      className="py-20 md:py-28 bg-white text-black"
      style={{
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
      }}
    >
      <div className="section-container max-w-7xl mx-auto px-4">
        <span
          className="section-label"
          style={{
            color: '#16a34a',
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
          className="section-headline text-black"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: '#0a0a0a',
            marginBottom: '0.75rem',
          }}
        >
          Projetos Reais Focados em Resultado
        </h2>
        <p
          className="section-description"
          style={{
            color: '#52525b',
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
              backgroundColor: activeCategory === 'all' ? '#0a0a0a' : '#f4f4f5',
              color: activeCategory === 'all' ? '#ffffff' : '#3f3f46',
              border: '1px solid',
              borderColor: activeCategory === 'all' ? '#0a0a0a' : '#e4e4e7',
              borderRadius: '9999px',
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
            }}
          >
            Todos ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
            style={{
              backgroundColor: activeCategory === 'web' ? '#0a0a0a' : '#f4f4f5',
              color: activeCategory === 'web' ? '#ffffff' : '#3f3f46',
              border: '1px solid',
              borderColor: activeCategory === 'web' ? '#0a0a0a' : '#e4e4e7',
              borderRadius: '9999px',
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
            }}
          >
            Sites & Lojas Virtuais
          </button>
          <button
            className={`filter-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
            style={{
              backgroundColor: activeCategory === 'mobile' ? '#0a0a0a' : '#f4f4f5',
              color: activeCategory === 'mobile' ? '#ffffff' : '#3f3f46',
              border: '1px solid',
              borderColor: activeCategory === 'mobile' ? '#0a0a0a' : '#e4e4e7',
              borderRadius: '9999px',
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
            }}
          >
            Aplicativos para Celular
          </button>
          <button
            className={`filter-btn ${activeCategory === 'tools-ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools-ai')}
            style={{
              backgroundColor: activeCategory === 'tools-ai' ? '#0a0a0a' : '#f4f4f5',
              color: activeCategory === 'tools-ai' ? '#ffffff' : '#3f3f46',
              border: '1px solid',
              borderColor: activeCategory === 'tools-ai' ? '#0a0a0a' : '#e4e4e7',
              borderRadius: '9999px',
              padding: '0.5rem 1.15rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
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
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
