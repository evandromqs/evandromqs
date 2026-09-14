import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={handleLinkClick} aria-label="Início">
        <img
          src="/favicon.svg"
          alt="Logo"
          style={{
            width: '28px',
            height: '28px',
            filter: 'drop-shadow(0 0 10px var(--neon-glow-strong))',
            display: 'block',
          }}
        />
      </a>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#hero">Início</a></li>
        <li><a href="#sobre">Soluções</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#faq">Dúvidas</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      {/* Desktop Actions & Theme Toggle */}
      <div className="nav-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
          title={theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Mobile Toggle Button */}
        <button
          className={`nav-mobile-toggle ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`nav-mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={handleLinkClick}>
          <span>Início</span>
          <ArrowUpRight size={18} />
        </a>
        <a href="#sobre" onClick={handleLinkClick}>
          <span>Soluções para Negócios</span>
          <ArrowUpRight size={18} />
        </a>
        <a href="#projetos" onClick={handleLinkClick}>
          <span>Projetos & Portfólio</span>
          <ArrowUpRight size={18} />
        </a>
        <a href="#faq" onClick={handleLinkClick}>
          <span>Perguntas Frequentes</span>
          <ArrowUpRight size={18} />
        </a>
        <a href="#contato" onClick={handleLinkClick}>
          <span>Contato</span>
          <ArrowUpRight size={18} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--void-line)' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink-pure)' }}>
            Tema: {theme === 'light' ? 'Claro' : 'Escuro'}
          </span>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            style={{ width: '44px', height: '44px' }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <a
          href="https://github.com/evandromqs"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          style={{ color: 'var(--neon-cyan)', marginTop: '0.5rem' }}
        >
          <span>GitHub Profile</span>
          <ArrowUpRight size={20} />
        </a>
      </div>
    </nav>
  );
};
