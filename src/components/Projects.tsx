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
        <h2 className="section-headline">Projetos Entregues e Casos Reais</h2>
        <p className="section-description">
          Veja exemplos de sites, lojas virtuais e aplicativos desenvolvidos sob medida para resolver necessidades reais e acelerar negócios.
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
        <div className="projects-grid">
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
