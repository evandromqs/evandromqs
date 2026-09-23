import React, { useState, useRef, useEffect } from 'react';
import { reportWhatsAppConversion } from '../utils/analytics';

const WHATSAPP_URL =
  'https://wa.me/5511976920649?text=' +
  encodeURIComponent('Olá, vim pelo seu site, quero uma proposta para o meu negócio.') +
  '&utm_source=site_hero';

export const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

  const handleWhatsAppClick = () => {
    reportWhatsAppConversion('hero_cta');
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden flex flex-col items-center transition-colors duration-300"
      style={{
        backgroundColor: 'var(--void-black)',
        color: 'var(--ink-pure)',
        minHeight: 'auto',
        justifyContent: 'flex-start',
        paddingTop: 'clamp(3.5rem, 5.5vw, 4.25rem)',
        paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
      }}
    >
      {/* Container dos dispositivos (imagem carregada primeiro + vídeo em loop sobreposto) */}
      <div
        className="hero-devices-container w-full relative overflow-hidden"
        style={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: 'clamp(240px, 42vw, 440px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'scale(1.4)',
            transformOrigin: 'center center',
          }}
        >
          {/* 1. Imagem carregada primeiro imediatamente (desaparece quando o vídeo carrega) */}
          <img
            src="/devices_image.webp"
            alt="Demonstração dos dispositivos"
            loading="eager"
            decoding="async"
            aria-hidden={isVideoLoaded}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              zIndex: 1,
              opacity: isVideoLoaded ? 0 : 1,
              transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: 'none',
            }}
          />

          {/* 2. Vídeo carregando em segundo plano e iniciando o loop acima da imagem */}
          <video
            ref={videoRef}
            src="/device_video.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setIsVideoLoaded(true)}
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            onPlaying={() => setIsVideoLoaded(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              zIndex: 2,
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      <div className="hero-content relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          id="hero-title"
          className="font-black"
          style={{
            fontSize: 'clamp(28px, 5.2vw, 50px)',
            fontWeight: 900,
            color: 'var(--ink-pure)',
            WebkitTextFillColor: 'var(--ink-pure)',
            background: 'none',
            opacity: 1,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.65)',
          }}
        >
          Quando alguém procura{' '}
          <span
            style={{
              color: 'var(--h1-highlight)',
              WebkitTextFillColor: 'var(--h1-highlight)',
              fontWeight: 900,
            }}
          >
            seu negócio
          </span>{' '}
          na internet,<br />
          acha{' '}
          <span
            style={{
              color: 'var(--h1-highlight)',
              WebkitTextFillColor: 'var(--h1-highlight)',
              fontWeight: 900,
            }}
          >
            você
          </span>{' '}
          ou o seu concorrente?
        </h1>

        <p
          className="hero-description"
          style={{
            color: 'var(--ink-soft)',
            fontWeight: 500,
            maxWidth: '720px',
            margin: '0 auto clamp(1.5rem, 3vw, 2.25rem) auto',
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            lineHeight: 1.6,
          }}
        >

          Coloco seu negócio no Google com uma página rápida e organizada.<br />
          Seu cliente te encontra, entende oque você faz vai direto para o seu WhatsApp.
        </p>

        <div className="hero-cta-group relative z-30 mb-3 sm:mb-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp btn-whatsapp-pulse w-full sm:w-auto justify-center"
            style={{
              backgroundColor: '#128C7E',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
              padding: 'clamp(0.9rem, 2vw, 1.15rem) clamp(1.5rem, 3vw, 2.25rem)',
              borderRadius: '9999px',
              boxShadow: '0 10px 28px rgba(18, 140, 126, 0.45)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={handleWhatsAppClick}
            aria-label="Pedir Proposta no WhatsApp"
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
            <span>Pedir Proposta no WhatsApp</span>
          </a>
        </div>

        {/* Badge pequeno de resposta rápida */}
        <p
          className="text-xs text-zinc-500 font-medium tracking-wide"
          style={{ color: 'var(--ink-soft)', fontSize: '0.8rem' }}
        >
          Resposta rápida | Atendimento humano | Orçamento gratuito.
        </p>
      </div>

      {/* Fade suave sem apagar o botao */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, var(--void-black) 0%, transparent 100%)',
        }}
      />
    </section >
  );
};
