import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

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
          >
            <MessageCircle size={16} />
            <span>Falar agora no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
