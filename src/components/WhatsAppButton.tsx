import React, { useState, useEffect } from 'react';
import { reportWhatsAppConversion } from '../utils/analytics';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '5511976920649',
  message = 'Olá, vim pelo seu site portfólio, gostaria de um orçamento.',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) {
      setIsVisible(true);
      return;
    }

    const checkVisibility = () => {
      const rect = heroSection.getBoundingClientRect();
      // O botão flutuante aparece somente quando a primeira seção (#hero) com botão de WhatsApp sai da tela
      const isHeroGone = rect.bottom <= 60;
      setIsVisible(isHeroGone);
    };

    checkVisibility();

    const observer = new IntersectionObserver(
      () => {
        checkVisibility();
      },
      {
        threshold: [0, 0.05, 0.1, 0.2, 0.5, 1],
      }
    );

    observer.observe(heroSection);
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    reportWhatsAppConversion('floating_whatsapp_button');
  };

  return (
    <aside
      aria-label="Contato via WhatsApp"
      className={`wa-floating-container ${isVisible ? 'visible' : ''}`}
      aria-hidden={!isVisible}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        aria-label="Conversar no WhatsApp"
        title="Falar no WhatsApp"
        onClick={handleClick}
        tabIndex={isVisible ? 0 : -1}
      >
        <span className="wa-pulse-ring" aria-hidden="true" />
        <span className="wa-pulse-ring wa-pulse-ring-delay" aria-hidden="true" />

        <div className="wa-icon-wrapper" aria-hidden="true">
          <svg
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 2C8.28 2 2.004 8.274 2.004 15.996c0 2.593.707 5.127 2.05 7.348L2 30l6.83-1.996a13.92 13.92 0 007.172 1.992h.006c7.72 0 13.996-6.275 13.998-13.998C30 8.274 23.722 2 16.002 2zm0 25.626h-.005a11.58 11.58 0 01-5.908-1.616l-.424-.252-4.394 1.284 1.306-4.28-.277-.442a11.587 11.587 0 01-1.782-6.324c0-6.398 5.207-11.605 11.608-11.605 6.399 0 11.604 5.207 11.604 11.607 0 6.399-5.205 11.608-11.604 11.608zm6.368-8.694c-.349-.175-2.064-1.018-2.384-1.135-.32-.116-.553-.175-.786.175-.233.35-.902 1.135-1.106 1.368-.204.234-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.926-1.74-2.069-1.944-2.419-.203-.35-.022-.538.153-.712.157-.156.349-.408.524-.612.175-.204.233-.35.349-.583.117-.233.059-.437-.029-.612-.087-.175-.786-1.895-1.077-2.596-.283-.68-.57-.588-.786-.6l-.67-.012c-.233 0-.612.088-.932.437-.32.35-1.222 1.195-1.222 2.914 0 1.72 1.252 3.382 1.427 3.615.175.234 2.464 3.762 5.969 5.275.834.361 1.485.576 1.993.737.838.266 1.601.228 2.204.138.673-.1 2.064-.844 2.355-1.66.291-.815.291-1.514.204-1.66-.088-.146-.32-.233-.67-.408z" />
          </svg>
        </div>

        <span className="wa-badge-online" title="Atendimento rápido" />
      </a>
    </aside>
  );
};
