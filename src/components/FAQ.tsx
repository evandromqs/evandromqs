import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        Preço fechado e acessível para pequenos e médios empresários. Sites e landing pages profissionais a partir de {priceHighlight('R$ 500')} para criar + {priceHighlight('R$ 50/mês')} de manutenção (já inclui hospedagem, domínio, suporte e otimização). Aplicativos a partir de {priceHighlight('R$ 1.000')}. Lojas virtuais e sistemas completos a partir de {priceHighlight('R$ 2.000 + R$ 50/mês')}. Me chama no WhatsApp que em 10 minutos te passo o valor fechado exato.
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
        Agência te cobra R$ 3 mil + R$ 300/mês, te atende um estagiário e usa plataforma pesada que trava. Comigo você investe a partir de {priceHighlight('R$ 500 + R$ 50/mês')}, fala direto comigo, tem entrega em dias e código que abre em 1s.
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
      <div className="faq-container px-4 sm:px-6">
        <h2
          className="section-headline"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
            fontWeight: 700,
            textAlign: 'center',
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
            textAlign: 'center',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          Respostas rápidas para as principais dúvidas dos clientes.
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
      </div>
    </section>
  );
};
