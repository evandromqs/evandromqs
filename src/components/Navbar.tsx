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
        height: isScrolled ? '3.25rem' : '3.75rem',
        padding: isScrolled ? '0 1rem' : '0 1.25rem',
        zIndex: 10000,
        maxWidth: '100vw',
        transition: 'all 0.3s ease',
      }}
    >
      {/* 1. Canto Esquerdo: Logo perfeitamente centralizado verticalmente */}
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
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            filter: 'drop-shadow(0 0 10px var(--neon-glow-strong))',
            display: 'block',
          }}
        />
      </a>

      {/* 2. Centro: Nome e Título alinhado na mesma altura vertical */}
      <div
        style={{
          flex: 1,
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
            maxWidth: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Evandro Mqs - Criador de Sites e Apps
        </a>
      </div>

      {/* 3. Canto Direito: Botão de Tema na mesma altura vertical */}
      <div
        style={{
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            display: 'inline-flex',
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
