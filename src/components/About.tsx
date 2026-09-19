import React from 'react';
import {
  solutionsData,
  processSteps,
  sectionCheckpoints,
  skillsData,
} from '../data/skills';
import { comparisonData } from '../data/timeline';
import { CheckCircle2, XCircle, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre">
      <div className="section-container">
        <span className="section-label">// soluções & diferenciais</span>

        {/* Section: O que desenvolvo para o seu negócio */}
        <div style={{ marginBottom: '4.5rem' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              color: 'var(--ink-pure)',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            O que desenvolvo para o seu negócio - Focado em vender mais gastando menos
          </h2>

          {/* 3 Bullets com check embaixo do título da seção */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '2.5rem',
            }}
          >
            {sectionCheckpoints.map((point, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: 'var(--ink-soft)',
                }}
              >
                <CheckCircle2 size={18} color="#25D366" style={{ flexShrink: 0 }} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="solutions-grid">
            {solutionsData.map((sol, idx) => (
              <div key={idx} className="solution-card">
                <span
                  className="solution-category"
                  style={{
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    borderColor: 'rgba(37, 211, 102, 0.35)',
                    color: '#25D366',
                    fontWeight: 700,
                  }}
                >
                  {sol.badge}
                </span>
                <h3 className="solution-title">{sol.title}</h3>
                <p className="solution-desc">{sol.description}</p>

                <ul className="solution-bullets" style={{ marginBottom: 0 }}>
                  {sol.highlights.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={16} color="#25D366" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Como Funciona o Processo */}
        <div style={{ marginBottom: '4.5rem' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
              fontWeight: 800,
              color: 'var(--ink-pure)',
              marginBottom: '0.85rem',
            }}
          >
            Como funciona - Simples e sem burocracia para microempreendedores
          </h2>
          <p
            style={{
              color: 'var(--ink-soft)',
              maxWidth: '600px',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Um processo claro e sem enrolação, do primeiro contato até o lançamento oficial com suporte garantido.
          </p>

          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-card">
                <div className="process-number">{step.step}</div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns Comparison & Tech Stack */}
        <div className="about-grid" style={{ marginBottom: '3.5rem' }}>
          {/* COLUNA 1: Por que microempreendedor foge de agência? */}
          <div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--ink-pure)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Por que microempreendedor foge de agência?
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--void-card)',
                    border: '1px solid var(--void-line)',
                    borderRadius: 'var(--r-md)',
                    padding: '1.15rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      color: '#25D366',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {row.criterion}
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                      gap: '0.85rem',
                    }}
                  >
                    {/* Agência */}
                    <div
                      style={{
                        background: 'rgba(255, 60, 60, 0.05)',
                        border: '1px solid rgba(255, 80, 80, 0.15)',
                        borderRadius: 'var(--r-sm)',
                        padding: '0.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          color: '#ff6b6b',
                          marginBottom: '0.35rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        <XCircle size={14} />
                        <span>Agência</span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--ink-soft)',
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {row.agency}
                      </p>
                    </div>

                    {/* Direto com Dev */}
                    <div
                      style={{
                        background: 'rgba(37, 211, 102, 0.07)',
                        border: '1px solid rgba(37, 211, 102, 0.35)',
                        borderRadius: 'var(--r-sm)',
                        padding: '0.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          color: '#25D366',
                          marginBottom: '0.35rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        <CheckCircle2 size={14} />
                        <span>Direto com Dev</span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--ink-pure)',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {row.direct}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUNA 2: Tecnologia que não te deixa na mão */}
          <div className="about-text">
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--ink-pure)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Tecnologia que não te deixa na mão
            </h3>
            <p>
              Em vez de templates pesados e genéricos que deixam seu site lento e te fazem perder o cliente que você pagou no Google, eu construo do zero usando o que as maiores empresas do mundo usam: React, Next.js, Flutter e Firebase. O resultado é um site que carrega em fração de segundos, não trava e passa segurança para quem compra.
            </p>

            <span className="about-subtitle" style={{ marginTop: '1.75rem' }}>
              Tecnologias Utilizadas
            </span>
            <div className="about-tech-grid">
              {skillsData.map((tech, idx) => (
                <div key={idx} className="tech-pill">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCO DE GARANTIA (destaque com fundo escuro #111 e borda verde) */}
        <div
          style={{
            backgroundColor: '#111111',
            border: '2px solid #25D366',
            borderRadius: 'var(--r-lg)',
            padding: '2rem 2.5rem',
            boxShadow: '0 0 35px rgba(37, 211, 102, 0.25)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid #25D366',
              borderRadius: '50%',
              padding: '0.85rem',
              color: '#25D366',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Award size={32} />
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '1.35rem',
                color: '#ffffff',
                marginBottom: '0.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              Garantia de Performance e Funcionamento
            </h4>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.02rem',
                color: '#e2e8f0',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Se seu site não abrir em até 1 segundo no celular após a entrega, eu otimizo de graça até abrir. Suporte e manutenção já inclusos nos R$ 50/mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
