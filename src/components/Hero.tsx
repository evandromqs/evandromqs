import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1 id="hero-title">EvandroMqs</h1>
        
        <h2 className="hero-subtitle">
          Ideias que viram tecnologia
        </h2>

        <p className="hero-description">
          Sou criador de aplicativos, sistemas e experiências digitais inovadoras. Transformo ideias em produtos funcionais combinando tecnologia moderna, automação e inteligência.
        </p>

        <div className="hero-cta-group">
          <a href="#projetos" className="btn-primary">
            <span>Ver Projetos</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/evandromqs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};
