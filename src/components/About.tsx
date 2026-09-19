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
    <section
      id="sobre"
      className="py-16 sm:py-20 md:py-24 lg:py-28 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--void-black)',
        color: 'var(--ink-pure)',
      }}
    >
      <div className="section-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==========================================================================
            1. COMO FUNCIONA (Respiro generoso e responsivo)
           ========================================================================== */}
        <div id="como-funciona" className="pt-2 sm:pt-4">
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
            // como funciona o processo
          </span>

          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
              fontWeight: 900,
              color: 'var(--ink-pure)',
              marginBottom: '0.75rem',
              lineHeight: 1.25,
            }}
          >
            Como funciona - Simples e sem burocracia para microempreendedores
          </h2>

          <p
            className="text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 max-w-2xl"
            style={{ color: 'var(--ink-soft)' }}
          >
            Um processo claro e sem enrolação, do primeiro contato até o lançamento oficial com suporte garantido.
          </p>

          <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="process-card rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--void-card)',
                  border: '1px solid var(--void-line)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div>
                  <div
                    className="process-number"
                    style={{
                      color: 'var(--neon-cyan)',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.step}
                  </div>
                  <h4
                    className="process-title text-sm sm:text-base font-bold mb-1.5 sm:mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'var(--ink-pure)',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="process-desc text-xs sm:text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            2. O QUE DESENVOLVO (Respiro mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16)
           ========================================================================== */}
        <div
          id="solucoes"
          className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16"
          style={{
            borderTop: '1px solid var(--void-line)',
          }}
        >
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
            // soluções & diferenciais
          </span>

          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
              fontWeight: 900,
              color: 'var(--ink-pure)',
              marginBottom: '0.85rem',
              lineHeight: 1.2,
            }}
          >
            O que desenvolvo para o seu negócio - Focado em vender mais gastando menos
          </h2>

          {/* 3 Bullets com check embaixo do título da seção */}
          <div className="checkpoints-grid mb-8 sm:mb-10">
            {sectionCheckpoints.map((point, idx) => (
              <div key={idx} className="checkpoint-chip">
                <CheckCircle2
                  size={18}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  color="var(--neon-cyan)"
                />
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--ink-soft)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {solutionsData.map((sol, idx) => (
              <div
                key={idx}
                className="solution-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all"
                style={{
                  backgroundColor: 'var(--void-card)',
                  border: '1px solid var(--void-line)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div>
                  <span
                    className="solution-category"
                    style={{
                      backgroundColor: 'var(--tag-bg)',
                      border: '1px solid var(--tag-border)',
                      color: 'var(--neon-cyan)',
                      fontWeight: 800,
                      fontSize: 'clamp(0.72rem, 1.3vw, 0.8rem)',
                      padding: '4px 11px',
                      borderRadius: '9999px',
                      display: 'inline-block',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {sol.badge}
                  </span>

                  <h3
                    className="solution-title text-base sm:text-lg font-bold mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'var(--ink-pure)',
                      lineHeight: 1.35,
                    }}
                  >
                    {sol.title}
                  </h3>

                  <p
                    className="solution-desc text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {sol.description}
                  </p>
                </div>

                <ul className="solution-bullets flex flex-col gap-2.5 sm:gap-3 pt-2">
                  {sol.highlights.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold"
                      style={{ color: 'var(--ink-pure)' }}
                    >
                      <CheckCircle2
                        size={18}
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        color="var(--neon-cyan)"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            3. COMPARATIVO & TECH STACK (Respiro mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16)
           ========================================================================== */}
        <div
          className="about-grid mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          style={{
            borderTop: '1px solid var(--void-line)',
          }}
        >
          {/* COLUNA 1: Por que microempreendedor foge de agência? */}
          <div>
            <h3
              className="text-lg sm:text-xl font-black mb-3 sm:mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                fontWeight: 900,
                color: 'var(--ink-pure)',
                lineHeight: 1.3,
              }}
            >
              Por que microempreendedor foge de agência?
            </h3>

            <div className="flex flex-col gap-3 sm:gap-4">
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-3.5 sm:p-4 transition-all"
                  style={{
                    backgroundColor: 'var(--void-card)',
                    border: '1px solid var(--void-line)',
                    boxShadow: 'var(--card-shadow)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(0.75rem, 1.4vw, 0.85rem)',
                      color: 'var(--neon-cyan)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {row.criterion}
                  </div>

                  <div className="comparison-row-grid">
                    {/* Agência */}
                    <div
                      className="p-2.5 sm:p-3 rounded-lg"
                      style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.06)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          color: '#ef4444',
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        <XCircle size={14} />
                        <span>Agência</span>
                      </div>
                      <p
                        style={{
                          fontSize: 'clamp(0.8rem, 1.4vw, 0.88rem)',
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
                      className="p-2.5 sm:p-3 rounded-lg"
                      style={{
                        backgroundColor: 'var(--tag-bg)',
                        border: '1px solid var(--neon-cyan)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          color: 'var(--neon-cyan)',
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--neon-cyan)" />
                        <span>Direto com Dev</span>
                      </div>
                      <p
                        style={{
                          fontSize: 'clamp(0.8rem, 1.4vw, 0.88rem)',
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
              className="text-lg sm:text-xl font-black mb-3 sm:mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                fontWeight: 900,
                color: 'var(--ink-pure)',
                lineHeight: 1.3,
              }}
            >
              Tecnologia que não te deixa na mão
            </h3>
            <p
              style={{
                color: 'var(--ink-soft)',
                fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
                lineHeight: 1.65,
                marginBottom: '1.25rem',
              }}
            >
              Em vez de templates pesados e genéricos que deixam seu site lento e te fazem perder o cliente que você pagou no Google, eu construo do zero usando o que as maiores empresas do mundo usam: React, Next.js, Flutter e Firebase. O resultado é um site que carrega em fração de segundos, não trava e passa segurança para quem compra.
            </p>

            <span
              className="about-subtitle"
              style={{
                color: 'var(--neon-blue)',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '1.5rem',
                marginBottom: '0.75rem',
              }}
            >
              Tecnologias Utilizadas
            </span>
            <div className="about-tech-grid flex flex-wrap gap-2">
              {skillsData.map((tech, idx) => (
                <div
                  key={idx}
                  className="tech-pill transition-all"
                  style={{
                    backgroundColor: 'var(--void-card)',
                    border: '1px solid var(--void-line)',
                    color: 'var(--ink-pure)',
                    fontWeight: 600,
                    padding: '0.45rem 0.75rem',
                    borderRadius: '0.5rem',
                    fontSize: 'clamp(0.75rem, 1.3vw, 0.82rem)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================================================
            4. BLOCO DE GARANTIA (destaque em Azul Royal)
           ========================================================================== */}
        <div className="guarantee-card mt-12 sm:mt-16 md:mt-20">
          <div className="guarantee-icon-wrapper">
            <Award size={30} color="var(--neon-cyan)" />
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                color: 'var(--ink-pure)',
                marginBottom: '0.35rem',
                letterSpacing: '-0.01em',
              }}
            >
              Garantia de Performance e Funcionamento
            </h4>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(0.88rem, 1.6vw, 1.02rem)',
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
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
