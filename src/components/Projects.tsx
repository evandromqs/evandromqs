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
    <section id="projetos">
      <div className="section-container">
        <span className="section-label">// projetos & criações</span>
        <h2 className="section-headline">Projetos Reais Focados em Resultado</h2>
        <p className="section-description">
          De R$ 500 a R$ 2.000 - Veja como microempreendedores já estão vendendo sem pagar taxas abusivas.
        </p>

        {/* Categories Filter */}
        <div className="category-filters">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Todos ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Sites & Lojas Virtuais
          </button>
          <button
            className={`filter-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            Aplicativos para Celular
          </button>
          <button
            className={`filter-btn ${activeCategory === 'tools-ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools-ai')}
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
