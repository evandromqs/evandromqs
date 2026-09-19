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
      className="py-20 md:py-28 bg-[#0a0a0a] text-white"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="section-container max-w-6xl mx-auto px-4">
        {/* ==========================================================================
            1. COMO FUNCIONA (Respiro mt-24 md:mt-32 pt-16 border-t border-zinc-900)
           ========================================================================== */}
        <div id="como-funciona" className="pt-4">
          <span
            className="section-label"
            style={{
              color: '#25D366',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            // como funciona o processo
          </span>

          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '0.85rem',
              lineHeight: 1.25,
            }}
          >
            Como funciona - Simples e sem burocracia para microempreendedores
          </h2>

          <p
            className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl"
            style={{ color: '#a1a1aa' }}
          >
            Um processo claro e sem enrolação, do primeiro contato até o lançamento oficial com suporte garantido.
          </p>

          <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="process-card bg-[#141414] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all flex flex-col justify-between"
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #27272a',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div>
                  <div
                    className="process-number"
                    style={{
                      color: '#25D366',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {step.step}
                  </div>
                  <h4
                    className="process-title text-base font-bold text-white mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="process-desc text-sm text-zinc-400 leading-relaxed"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#a1a1aa',
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
            2. O QUE DESENVOLVO (Respiro mt-24 md:mt-32 pt-16 border-t border-zinc-900)
           ========================================================================== */}
        <div
          id="solucoes"
          className="mt-24 md:mt-32 pt-16 border-t border-zinc-900"
          style={{
            borderTop: '1px solid #18181b',
          }}
        >
          <span
            className="section-label"
            style={{
              color: '#25D366',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            // soluções & diferenciais
          </span>

          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            O que desenvolvo para o seu negócio - Focado em vender mais gastando menos
          </h2>

          {/* 3 Bullets com check embaixo do título da seção */}
          <div className="flex flex-col gap-3 mb-10">
            {sectionCheckpoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-zinc-300"
              >
                <CheckCircle2
                  size={20}
                  className="w-5 h-5 flex-shrink-0 text-emerald-400"
                  color="#25D366"
                />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsData.map((sol, idx) => (
              <div
                key={idx}
                className="solution-card bg-[#141414] border border-zinc-800 hover:border-emerald-500/40 transition-all rounded-2xl p-6 flex flex-col justify-between"
                style={{
                  backgroundColor: '#141414',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div>
                  <span
                    className="solution-category"
                    style={{
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid rgba(37, 211, 102, 0.4)',
                      color: '#25D366',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      display: 'inline-block',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {sol.badge}
                  </span>

                  <h3
                    className="solution-title text-base font-bold text-white mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: 1.35,
                    }}
                  >
                    {sol.title}
                  </h3>

                  <p
                    className="solution-desc text-sm text-zinc-400 leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#a1a1aa',
                    }}
                  >
                    {sol.description}
                  </p>
                </div>

                <ul className="solution-bullets flex flex-col gap-3 pt-2">
                  {sol.highlights.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center gap-2.5 text-sm font-semibold text-zinc-200"
                    >
                      <CheckCircle2
                        size={20}
                        className="w-5 h-5 flex-shrink-0 text-emerald-400"
                        color="#25D366"
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
            3. COMPARATIVO & TECH STACK (Respiro mt-24 md:mt-32 pt-16 border-t border-zinc-900)
           ========================================================================== */}
        <div
          className="about-grid mt-24 md:mt-32 pt-16 border-t border-zinc-900 grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{
            borderTop: '1px solid #18181b',
          }}
        >
          {/* COLUNA 1: Por que microempreendedor foge de agência? */}
          <div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}
            >
              Por que microempreendedor foge de agência?
            </h3>

            <div className="flex flex-col gap-4">
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-[#141414] border border-zinc-800 rounded-xl p-4"
                  style={{
                    backgroundColor: '#141414',
                    border: '1px solid #27272a',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: '#25D366',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {row.criterion}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Agência */}
                    <div
                      style={{
                        backgroundColor: 'rgba(255, 60, 60, 0.06)',
                        border: '1px solid rgba(255, 80, 80, 0.25)',
                        borderRadius: '0.5rem',
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
                          fontSize: '0.88rem',
                          color: '#a1a1aa',
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
                        backgroundColor: 'rgba(37, 211, 102, 0.08)',
                        border: '1px solid rgba(37, 211, 102, 0.45)',
                        borderRadius: '0.5rem',
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
                          fontSize: '0.88rem',
                          color: '#ffffff',
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
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}
            >
              Tecnologia que não te deixa na mão
            </h3>
            <p
              style={{
                color: '#a1a1aa',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Em vez de templates pesados e genéricos que deixam seu site lento e te fazem perder o cliente que você pagou no Google, eu construo do zero usando o que as maiores empresas do mundo usam: React, Next.js, Flutter e Firebase. O resultado é um site que carrega em fração de segundos, não trava e passa segurança para quem compra.
            </p>

            <span
              className="about-subtitle"
              style={{
                color: '#25D366',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Tecnologias Utilizadas
            </span>
            <div className="about-tech-grid flex flex-wrap gap-2">
              {skillsData.map((tech, idx) => (
                <div
                  key={idx}
                  className="tech-pill bg-[#141414] border border-zinc-800"
                  style={{
                    backgroundColor: '#141414',
                    border: '1px solid #27272a',
                    color: '#e4e4e7',
                    fontWeight: 600,
                    padding: '0.5rem 0.85rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================================================
            4. BLOCO DE GARANTIA (destaque com fundo escuro #111 e borda verde)
           ========================================================================== */}
        <div
          className="mt-16 md:mt-24"
          style={{
            backgroundColor: '#111111',
            border: '2px solid #25D366',
            borderRadius: '1rem',
            padding: '2.25rem',
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
                fontWeight: 900,
                fontSize: '1.4rem',
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
                fontSize: '1.05rem',
                color: '#e4e4e7',
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
