import React, { useState } from 'react';
import { Globe, Check, Copy, Mail } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import {
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  TiktokIcon,
  ThreadsIcon,
} from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailContact = 'contato@evandromqs.site';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailContact);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/evandromqs',
      icon: <GithubIcon size={18} />,
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@evandromqs',
      icon: <ThreadsIcon size={18} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/evandromqs/',
      icon: <InstagramIcon size={18} />,
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/evandromqs',
      icon: <XIcon size={16} />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@evandromqs',
      icon: <YoutubeIcon size={18} />,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@evandromqs',
      icon: <TiktokIcon size={18} />,
    },
    {
      name: 'Blog',
      url: 'https://evandromqs.blogspot.com',
      icon: <Globe size={18} />,
    },
  ];

  return (
    <footer id="contato">
      <div className="footer-content">
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/favicon.svg"
            alt="EvandroMqs"
            style={{
              width: '52px',
              height: '52px',
              border: 'none',
              background: 'transparent',
              padding: 0,
              filter: 'drop-shadow(0 0 14px rgba(0, 212, 255, 0.45))',
            }}
          />
        </div>

        <h2 className="footer-title">Vamos construir algo incrível juntos?</h2>
        <p className="footer-subtitle">
          Tem uma ideia de aplicativo, sistema ou precisa de uma solução técnica personalizada? Sinta-se à vontade para me contatar.
        </p>

        {/* E-mail CTA Direct Box */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--void-card)',
            border: '1px solid var(--void-line-hover)',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--r-full)',
            marginBottom: '2.5rem',
            boxShadow: '0 0 25px rgba(0, 212, 255, 0.12)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href={`mailto:${emailContact}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--neon-cyan)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <Mail size={16} />
            <span>{emailContact}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--void-line)',
              color: 'var(--ink-soft)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--r-full)',
              fontSize: '0.75rem',
              fontFamily: "'JetBrains Mono', monospace",
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            title="Copiar endereço de e-mail"
          >
            {copied ? <Check size={14} color="var(--neon-cyan)" /> : <Copy size={14} />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </div>

        {/* Social Links Bar */}
        <div className="footer-social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title={social.name}
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        <div className="footer-copy">
          <p>
            Desenvolvido com React & TypeScript por Evandro Mqs &bull; &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {copied && (
        <div className="copy-toast">
          <Check size={15} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} />
          <span>E-mail copiado: {emailContact}</span>
        </div>
      )}
    </footer>
  );
};
