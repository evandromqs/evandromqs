import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { reportWhatsAppConversion } from '../utils/analytics';

const WHATSAPP_URL =
  'https://wa.me/5511976920649?text=' +
  encodeURIComponent('Olá Evandro, vim pelo site e quero um orçamento') +
  '&utm_source=site_hero';

export const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    reportWhatsAppConversion('hero_cta');
  };

  return (
    <section
      id="hero"
      className="relative bg-[#0a0a0a] text-white py-20 md:py-28 overflow-hidden flex flex-col justify-center items-center"
      style={{
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
      }}
    >
      <div className="hero-content relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1
          id="hero-title"
          className="text-white font-black"
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 900,
            color: '#ffffff',
            WebkitTextFillColor: '#ffffff',
            background: 'none',
            opacity: 1,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}
        >
          Seu Site Lento Está Perdendo Cliente do Google?
        </h1>

        <p
          className="hero-description text-zinc-400"
          style={{
            color: '#a1a1aa',
            fontWeight: 500,
            maxWidth: '680px',
            margin: '0 auto 2rem auto',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          Crio sites que abrem em 1s e levam direto pro seu WhatsApp. Sem WordPress pesado, sem enrolação de agência. A partir de R$ 500 + R$ 50/mês.
        </p>

        <div className="hero-cta-group relative z-30 mb-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp btn-whatsapp-pulse"
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.05rem',
              padding: '1.15rem 2.25rem',
              borderRadius: '9999px',
              boxShadow: '0 10px 28px rgba(37, 211, 102, 0.45)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={handleWhatsAppClick}
            aria-label="Quero Meu Orçamento de R$ 500 no WhatsApp"
          >
            <svg
              viewBox="0 0 32 32"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M16.002 2C8.28 2 2.004 8.274 2.004 15.996c0 2.593.707 5.127 2.05 7.348L2 30l6.83-1.996a13.92 13.92 0 007.172 1.992h.006c7.72 0 13.996-6.275 13.998-13.998C30 8.274 23.722 2 16.002 2zm0 25.626h-.005a11.58 11.58 0 01-5.908-1.616l-.424-.252-4.394 1.284 1.306-4.28-.277-.442a11.587 11.587 0 01-1.782-6.324c0-6.398 5.207-11.605 11.608-11.605 6.399 0 11.604 5.207 11.604 11.607 0 6.399-5.205 11.608-11.604 11.608zm6.368-8.694c-.349-.175-2.064-1.018-2.384-1.135-.32-.116-.553-.175-.786.175-.233.35-.902 1.135-1.106 1.368-.204.234-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.926-1.74-2.069-1.944-2.419-.203-.35-.022-.538.153-.712.157-.156.349-.408.524-.612.175-.204.233-.35.349-.583.117-.233.059-.437-.029-.612-.087-.175-.786-1.895-1.077-2.596-.283-.68-.57-.588-.786-.6l-.67-.012c-.233 0-.612.088-.932.437-.32.35-1.222 1.195-1.222 2.914 0 1.72 1.252 3.382 1.427 3.615.175.234 2.464 3.762 5.969 5.275.834.361 1.485.576 1.993.737.838.266 1.601.228 2.204.138.673-.1 2.064-.844 2.355-1.66.291-.815.291-1.514.204-1.66-.088-.146-.32-.233-.67-.408z" />
            </svg>
            <span>Quero Meu Orçamento de R$ 500 no WhatsApp</span>
          </a>
          <a
            href="#projetos"
            className="btn-secondary"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              borderColor: '#27272a',
            }}
          >
            <span>Ver Projetos Reais Que Estão Vendendo</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Micro-Trust Badges */}
        <div className="hero-trust-row relative z-20 flex flex-wrap justify-center gap-6 text-sm text-zinc-300">
          <div className="hero-trust-item flex items-center gap-2">
            <CheckCircle2 size={16} color="#25D366" />
            <span>Resposta em até 30min no WhatsApp</span>
          </div>
          <div className="hero-trust-item flex items-center gap-2">
            <CheckCircle2 size={16} color="#25D366" />
            <span>8 Projetos Ativos e Vendendo</span>
          </div>
          <div className="hero-trust-item flex items-center gap-2">
            <CheckCircle2 size={16} color="#25D366" />
            <span>A partir de R$ 500 + R$ 50/mês sem surpresa</span>
          </div>
        </div>
      </div>

      {/* Fade suave sem apagar o botao */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10, 10, 10, 0.6) 60%, transparent 100%)',
        }}
      />
    </section>
  );
};
