import React, { useState } from 'react';
import { Globe, Check, Copy, Mail } from 'lucide-react';
import { reportWhatsAppConversion } from '../utils/analytics';
import { GithubIcon } from './icons/GithubIcon';
import {
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  TiktokIcon,
  ThreadsIcon,
} from './icons/SocialIcons';

interface FooterProps {
  emailContact?: string;
}

export const Footer: React.FC<FooterProps> = ({
  emailContact = 'evandro.dev.mqs@gmail.com',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailContact);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppFooterClick = () => {
    reportWhatsAppConversion('footer_cta');
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

        <h2 className="footer-title">Pronto para tirar o seu projeto do papel?</h2>
        <p className="footer-subtitle">
          Vamos conversar sem compromisso. Explique o que você precisa e receba uma orientação clara com orçamento para o seu site ou aplicativo.
        </p>

        {/* Big WhatsApp Action Button */}
        <div style={{ marginBottom: '2rem' }}>
          <a
            href="https://wa.me/5511976920649?text=Ol%C3%A1%20vi%20seu%20an%C3%BAncio%20no%20Google%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp"
            style={{ fontSize: '1rem', padding: '1rem 2.2rem', display: 'inline-flex' }}
            onClick={handleWhatsAppFooterClick}
          >
            <svg
              viewBox="0 0 32 32"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M16.002 2C8.28 2 2.004 8.274 2.004 15.996c0 2.593.707 5.127 2.05 7.348L2 30l6.83-1.996a13.92 13.92 0 007.172 1.992h.006c7.72 0 13.996-6.275 13.998-13.998C30 8.274 23.722 2 16.002 2zm0 25.626h-.005a11.58 11.58 0 01-5.908-1.616l-.424-.252-4.394 1.284 1.306-4.28-.277-.442a11.587 11.587 0 01-1.782-6.324c0-6.398 5.207-11.605 11.608-11.605 6.399 0 11.604 5.207 11.604 11.607 0 6.399-5.205 11.608-11.604 11.608zm6.368-8.694c-.349-.175-2.064-1.018-2.384-1.135-.32-.116-.553-.175-.786.175-.233.35-.902 1.135-1.106 1.368-.204.234-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.926-1.74-2.069-1.944-2.419-.203-.35-.022-.538.153-.712.157-.156.349-.408.524-.612.175-.204.233-.35.349-.583.117-.233.059-.437-.029-.612-.087-.175-.786-1.895-1.077-2.596-.283-.68-.57-.588-.786-.6l-.67-.012c-.233 0-.612.088-.932.437-.32.35-1.222 1.195-1.222 2.914 0 1.72 1.252 3.382 1.427 3.615.175.234 2.464 3.762 5.969 5.275.834.361 1.485.576 1.993.737.838.266 1.601.228 2.204.138.673-.1 2.064-.844 2.355-1.66.291-.815.291-1.514.204-1.66-.088-.146-.32-.233-.67-.408z" />
            </svg>
            <span>Iniciar Conversa no WhatsApp</span>
          </a>
        </div>

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
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
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
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
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

        <div className="footer-location-trust">
          <p className="footer-location">
            São Paulo - SP &bull; Atendimento para empresas de todo o Brasil
          </p>
          <p className="footer-security">
            Suas ideias e informações de projeto são tratadas com total sigilo profissional.
          </p>
        </div>

        <div className="footer-copy">
          <p>
            EvandroMqs &bull; Soluções Digitais sob Medida &bull; &copy; {new Date().getFullYear()}
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
