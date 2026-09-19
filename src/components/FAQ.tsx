import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { reportWhatsAppConversion } from '../utils/analytics';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const priceHighlight = (text: string) => (
  <strong style={{ color: 'var(--neon-cyan)', fontWeight: 800 }}>{text}</strong>
);

const faqData: FAQItem[] = [
  {
    question: 'Quanto custa para criar um site ou aplicativo?',
    answer: (
      <>
        Preço fechado e acessível para microempreendedor. Sites e landing pages profissionais a partir de {priceHighlight('R$ 500')} para criar + {priceHighlight('R$ 50/mês')} de manutenção (já inclui hospedagem, domínio, suporte e otimização). Aplicativos a partir de {priceHighlight('R$ 1.000')}. Lojas virtuais e sistemas completos a partir de {priceHighlight('R$ 2.000 + R$ 50/mês')}. Me chama no WhatsApp que em 10 minutos te passo o valor fechado exato.
      </>
    ),
  },
  {
    question: 'O que está incluso nos R$ 50/mês?',
    answer: (
      <>
        Tudo para você não se preocupar: hospedagem ultrarrápida, domínio, certificado de segurança, suporte comigo direto e otimização para manter seu site abrindo em 1s. Sem surpresa, sem taxa extra.
      </>
    ),
  },
  {
    question: 'Qual é o prazo de entrega?',
    answer: (
      <>
        Site e landing page: 5 a 10 dias úteis. Loja e aplicativo: 15 a 30 dias úteis. Com acompanhamento diário no WhatsApp.
      </>
    ),
  },
  {
    question: 'Por que contratar direto com você e não com uma agência?',
    answer: (
      <>
        Agência te cobra R$ 3 mil + R$ 300/mês, te atende um estagiário e usa WordPress lento. Comigo você investe a partir de {priceHighlight('R$ 500 + R$ 50/mês')}, fala direto comigo, tem entrega em dias e código que abre em 1s.
      </>
    ),
  },
  {
    question: 'Vou ter mensalidade ou comissão por venda?',
    answer: (
      <>
        Zero comissão sobre vendas. Você só paga os {priceHighlight('R$ 50/mês')} fixos de manutenção. Diferente do iFood que leva até 27% do seu pedido, aqui o cliente compra direto no seu WhatsApp e o lucro é 100% seu.
      </>
    ),
  },
  {
    question: 'Eu consigo atualizar sozinho e como é o pagamento?',
    answer: (
      <>
        Sim, entrego com painel simples e vídeo de 5 minutos. Pagamento: 50% para iniciar e 50% na entrega. Com garantia de 1 segundo - se não abrir em 1s no celular, eu otimizo de graça.
      </>
    ),
  },
];

const FAQ_WHATSAPP_URL = `https://wa.me/5511976920649?text=${encodeURIComponent(
  'Olá Evandro, tenho uma dúvida sobre criação de site ou app.'
)}&utm_source=faq`;

export const FAQ: React.FC = () => {
  // P1 aberta por padrão (defaultOpen=true)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="faq-section py-16 sm:py-20 md:py-24 lg:py-28 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--void-black)',
        color: 'var(--ink-pure)',
      }}
    >
      <div className="section-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span
          className="section-label"
          style={{
            color: 'var(--neon-cyan)',
            fontWeight: 700,
            fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          // tire suas dúvidas
        </span>
        <h2
          className="section-headline"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
            fontWeight: 900,
            color: 'var(--ink-pure)',
            marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
            lineHeight: 1.25,
          }}
        >
          Perguntas Frequentes
        </h2>
        <p
          className="section-description"
          style={{
            color: 'var(--ink-soft)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            lineHeight: 1.6,
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          Respostas rápidas para as principais dúvidas de quem deseja criar um site ou aplicativo.
        </p>

        <div className="faq-list flex flex-col gap-3.5 sm:gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item transition-all ${isOpen ? 'open' : ''}`}
                style={{
                  backgroundColor: isOpen ? 'var(--void-card-hover)' : 'var(--void-card)',
                  border: isOpen ? '1px solid var(--neon-cyan)' : '1px solid var(--void-line)',
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 4px 20px -2px rgba(37, 99, 235, 0.15)' : 'var(--card-shadow)',
                }}
                onClick={() => toggleFAQ(index)}
              >
                <button
                  type="button"
                  className="faq-question-btn w-full flex items-center justify-between p-4 sm:p-5 text-left"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'var(--ink-pure)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <ChevronDown
                    size={20}
                    color="var(--neon-cyan)"
                    className={`faq-icon ${isOpen ? 'rotate' : ''}`}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '0.75rem',
                    }}
                  />
                </button>
                {isOpen && (
                  <div
                    className="faq-answer px-4 pb-4 sm:px-5 sm:pb-5"
                    style={{
                      borderTop: '1px solid var(--void-line)',
                      paddingTop: '0.85rem',
                      fontSize: 'clamp(0.85rem, 1.6vw, 0.98rem)',
                      lineHeight: 1.65,
                      color: 'var(--ink-soft)',
                    }}
                  >
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA Callout */}
        <div
          className="faq-footer-cta mt-10 sm:mt-14 p-5 sm:p-7 md:p-8 rounded-2xl text-center flex flex-col items-center justify-center gap-3"
          style={{
            backgroundColor: 'var(--void-card)',
            border: '1px solid var(--void-line)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <p style={{ color: 'var(--ink-soft)', fontWeight: 600, fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', margin: 0 }}>
            Ainda tem dúvida?
          </p>
          <a
            href={FAQ_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-cta-btn btn-whatsapp-pulse inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            style={{
              backgroundColor: '#128C7E',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 'clamp(0.9rem, 1.8vw, 0.95rem)',
              padding: 'clamp(0.8rem, 1.8vw, 0.95rem) clamp(1.5rem, 3vw, 2rem)',
              borderRadius: '9999px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={() => reportWhatsAppConversion('faq_cta')}
          >
            <svg
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M16.002 2C8.28 2 2.004 8.274 2.004 15.996c0 2.593.707 5.127 2.05 7.348L2 30l6.83-1.996a13.92 13.92 0 007.172 1.992h.006c7.72 0 13.996-6.275 13.998-13.998C30 8.274 23.722 2 16.002 2zm0 25.626h-.005a11.58 11.58 0 01-5.908-1.616l-.424-.252-4.394 1.284 1.306-4.28-.277-.442a11.587 11.587 0 01-1.782-6.324c0-6.398 5.207-11.605 11.608-11.605 6.399 0 11.604 5.207 11.604 11.607 0 6.399-5.205 11.608-11.604 11.608zm6.368-8.694c-.349-.175-2.064-1.018-2.384-1.135-.32-.116-.553-.175-.786.175-.233.35-.902 1.135-1.106 1.368-.204.234-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.926-1.74-2.069-1.944-2.419-.203-.35-.022-.538.153-.712.157-.156.349-.408.524-.612.175-.204.233-.35.349-.583.117-.233.059-.437-.029-.612-.087-.175-.786-1.895-1.077-2.596-.283-.68-.57-.588-.786-.6l-.67-.012c-.233 0-.612.088-.932.437-.32.35-1.222 1.195-1.222 2.914 0 1.72 1.252 3.382 1.427 3.615.175.234 2.464 3.762 5.969 5.275.834.361 1.485.576 1.993.737.838.266 1.601.228 2.204.138.673-.1 2.064-.844 2.355-1.66.291-.815.291-1.514.204-1.66-.088-.146-.32-.233-.67-.408z" />
            </svg>
            <span>Falar agora no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
