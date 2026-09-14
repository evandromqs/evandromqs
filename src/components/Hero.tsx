import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511976920649?text=Ol%C3%A1%20vi%20seu%20an%C3%BAncio%20no%20Google%20gostaria%20de%20um%20or%C3%A7amento.';

export const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'lead',
        event_label: 'hero_cta',
        value: 1,
      });
    }
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <h1 id="hero-title">EvandroMqs</h1>

        <h2 className="hero-subtitle">
          Criação de Sites e Aplicativos Profissionais para o Seu Negócio
        </h2>

        <p className="hero-description">
          Ajudo empresas e profissionais a conquistarem mais clientes com sites rápidos, modernos e aplicativos sob medida. Sem complicações técnicas, com atendimento direto e entrega rápida.
        </p>

        <div className="hero-cta-group">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp"
            onClick={handleWhatsAppClick}
            aria-label="Solicitar orçamento no WhatsApp"
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
            <span>Solicitar Orçamento Grátis</span>
          </a>
          <a href="#projetos" className="btn-secondary">
            <span>Ver Projetos Feitos</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Micro-Trust Badges */}
        <div className="hero-trust-row">
          <div className="hero-trust-item">
            <CheckCircle2 size={15} color="var(--neon-cyan)" />
            <span>Orçamento sem compromisso</span>
          </div>
          <div className="hero-trust-item">
            <CheckCircle2 size={15} color="var(--neon-cyan)" />
            <span>Resposta rápida em até 30min</span>
          </div>
          <div className="hero-trust-item">
            <CheckCircle2 size={15} color="var(--neon-cyan)" />
            <span>Atendimento para todo o Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};
