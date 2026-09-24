import React from 'react';
import {
  solutionsData,
  processSteps,
  skillsData,
} from '../data/skills';
import { CheckCircle2, Award, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 md:py-24 lg:py-28 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--void-black)',
        color: 'var(--ink-pure)',
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
            fontWeight: 900,
            textAlign: 'center',
            color: 'var(--ink-pure)',
            marginBottom: '2rem',
            lineHeight: 1.25,
          }}>
          Um processo simples de 4 passos.
        </h2>
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
                    marginBottom: '1rem',
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

        {/* ==========================================================================
            2. O QUE DESENVOLVO (Respiro mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16)
           ========================================================================== */}
        <div
          id="solucoes"
          className="about-section-divider"
        >
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
              fontWeight: 900,
              textAlign: 'center',
              color: 'var(--ink-pure)',
              marginBottom: '1em',
              lineHeight: 1.2,
            }}
          >
            O que desenvolvo para o seu negócio de acordo com sua necessidade.
          </h2>
          <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsData.map((sol, idx) => (
              <div
                key={idx}
                className="solution-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all"
                style={{
                  backgroundColor: 'var(--void-card)',
                  border: '1px solid var(--void-line)',
                  boxShadow: 'var(--card-shadow)',
                  minHeight: '380px',
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
            3. TECH STACK & DIFERENCIAIS
           ========================================================================== */}
        <div className="about-section-divider max-w-3xl mx-auto">
          <div className="about-text">
            <h3
              className="text-lg sm:text-xl font-black mb-3 sm:mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                fontWeight: 900,
                textAlign: 'center',
                paddingBottom: '1em',
                color: 'var(--ink-pure)',
                lineHeight: 1.3,
              }}
            >
              Tecnologia que não te deixa na mão
            </h3>

            {/* 3 Diferenciais de Engenharia */}
            <div className="flex flex-col gap-2.5 my-3">
              <div className="tech-benefit-item">
                <Zap size={18} className="flex-shrink-0" style={{ color: 'var(--neon-cyan)', marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--ink-pure)', fontSize: '0.86rem', display: 'inline-block' }}>
                    Código Próprio e Rápido:
                  </strong>{' '}
                  <span style={{ color: 'var(--ink-soft)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                    Sem plataformas pesadas. Carregamento em 1s que converte visitantes em contatos.
                  </span>
                </div>
              </div>

              <div className="tech-benefit-item">
                <ShieldCheck size={18} className="flex-shrink-0" style={{ color: 'var(--neon-cyan)', marginTop: '2px', marginBottom: '20px' }} />
                <div>
                  <strong style={{ color: 'var(--ink-pure)', fontSize: '0.86rem', display: 'inline-block' }}>
                    Segurança & Alta Disponibilidade:
                  </strong>{' '}
                  <span style={{ color: 'var(--ink-soft)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                    Zero risco de ataques vulneráveis ou invasões. Estabilidade 24 horas.
                  </span>
                </div>
              </div>

              <div className="tech-benefit-item">
                <Sparkles size={18} className="flex-shrink-0" style={{ color: 'var(--neon-cyan)', marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--ink-pure)', fontSize: '0.86rem', display: 'inline-block' }}>
                    Propriedade 100% Sua:
                  </strong>{' '}
                  <span style={{ color: 'var(--ink-soft)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                    Código, domínio e dados pertencem a você. Sem fidelidade forçada ou pegadinhas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            4. BLOCO DE GARANTIA (destaque em Azul Royal)
           ========================================================================== */}
        <div className="guarantee-card">
          <div className="guarantee-icon-wrapper">
            <Award size={30} color="var(--neon-cyan)" />
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                color: 'var(--ink-pure)',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
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
      </div >
    </section >
  );
};
