import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { reportWhatsAppConversion } from '../utils/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Quanto custa para desenvolver um site ou aplicativo?',
    answer:
      'O investimento depende do tipo e tamanho do projeto. Uma landing page para anúncios no Google tem um valor diferente de uma loja virtual ou de um aplicativo para celular. Trabalho com propostas transparentes, preço fechado e sem custos ocultos, com soluções acessíveis para quem está começando e para empresas consolidadas. Você pode me chamar no WhatsApp para avaliarmos a sua ideia e receber uma estimativa rápida.',
  },
  {
    question: 'Qual é o prazo médio de entrega?',
    answer:
      'Landing pages e sites profissionais costumam ser entregues entre 5 a 10 dias úteis. Projetos de aplicativos e sistemas variam de acordo com as funcionalidades necessárias. Desde o primeiro dia você recebe um cronograma com datas bem definidas.',
  },
  {
    question: 'Eu consigo atualizar meu site ou produtos sozinho depois?',
    answer:
      'Sim! Sua página ou catálogo é desenvolvida de forma prática para que você mesmo consiga alterar textos, adicionar fotos e novos produtos sem depender de ninguém. Além disso, forneço um treinamento rápido e suporte após a entrega para tirar qualquer dúvida.',
  },
  {
    question: 'Como funciona a forma de pagamento?',
    answer:
      'O pagamento é facilitado e seguro: geralmente com uma entrada para início do desenvolvimento e o restante apenas após você visualizar, testar e aprovar o projeto final. Aceito Pix, transferência bancária e cartão de crédito.',
  },
  {
    question: 'Você atende empresas de outras cidades e estados?',
    answer:
      'Sim, atendo empresas e profissionais de todo o Brasil. Todo o alinhamento é feito de maneira ágil e direta pelo WhatsApp e chamadas de vídeo, com acompanhamento em tempo real do seu projeto.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        <span className="section-label">// tire suas dúvidas</span>
        <h2 className="section-headline">Perguntas Frequentes</h2>
        <p className="section-description">
          Respostas rápidas para as principais dúvidas de quem deseja criar um site ou aplicativo.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-icon ${isOpen ? 'rotate' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA Callout */}
        <div className="faq-footer-cta">
          <p>Ainda tem alguma dúvida sobre o seu projeto?</p>
          <a
            href="https://wa.me/5511976920649?text=Ol%C3%A1%20tenho%20uma%20d%C3%BAvida%20sobre%20cria%C3%A7%C3%A3o%20de%20site%20ou%20app."
            target="_blank"
            rel="noopener noreferrer"
            className="faq-cta-btn"
            onClick={() => reportWhatsAppConversion('faq_cta')}
          >
            <svg
              viewBox="0 0 32 32"
              width="16"
              height="16"
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
