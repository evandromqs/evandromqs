import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isScrolled ? '0.5rem 1rem' : '0.75rem 1.25rem',
        zIndex: 10000,
        maxWidth: '100vw',
      }}
    >
      {/* 1. Canto Esquerdo: Logo */}
      <a
        href="#hero"
        aria-label="Início"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          flexShrink: 0,
          textDecoration: 'none',
        }}
      >
        <img
          src="/favicon.svg"
          alt="Logo Evandro Mqs"
          style={{
            width: '26px',
            height: '26px',
            filter: 'drop-shadow(0 0 10px var(--neon-glow-strong))',
            display: 'block',
          }}
        />
      </a>

      {/* 2. Centro: Nome e Título com espaço livre total */}
      <div
        style={{
          flex: 1,
          textAlign: 'center',
          padding: '0 0.5rem',
          minWidth: 0,
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(0.78rem, 2.4vw, 1.05rem)',
            letterSpacing: '-0.01em',
            color: 'var(--ink-pure)',
            textDecoration: 'none',
            display: 'inline-block',
            maxWidth: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Evandro Mqs - Criador de Sites e Apps
        </a>
      </div>

      {/* 3. Canto Direito: Botão de Tema (Sol / Lua) */}
      <div
        style={{
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexShrink: 0,
        }}
      >
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
          title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--void-line)',
            backgroundColor: 'var(--btn-sec-bg)',
            color: 'var(--ink-pure)',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.25s ease',
          }}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
};
