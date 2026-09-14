import React from 'react';
import {
  coreHighlights,
  solutionsData,
  processSteps,
  trustPillars,
} from '../data/skills';
import { timelineData } from '../data/timeline';
import { CheckCircle2, ShieldCheck, Zap, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    if (idx === 0) return <UserCheck size={24} color="var(--neon-cyan)" />;
    if (idx === 1) return <Zap size={24} color="var(--neon-cyan)" />;
    return <ShieldCheck size={24} color="var(--neon-cyan)" />;
  };

  return (
    <section id="sobre">
      <div className="section-container">
        <span className="section-label">// soluções & diferenciais</span>

        {/* Highlights Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {coreHighlights.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--void-card)',
                border: '1px solid var(--void-line)',
                padding: '1.5rem',
                borderRadius: 'var(--r-md)',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  color: 'var(--neon-cyan)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--ink-pure)',
                }}
              >
                {item.count}
              </div>
            </div>
          ))}
        </div>

        {/* Section: Soluções Comerciais */}
        <div style={{ marginBottom: '4.5rem' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              color: 'var(--ink-pure)',
              marginBottom: '0.85rem',
            }}
          >
            O que desenvolvo para o seu negócio
          </h2>
          <p
            style={{
              color: 'var(--ink-soft)',
              maxWidth: '680px',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Soluções completas e práticas, projetadas sob medida para gerar resultados, simplificar sua rotina e posicionar sua empresa com autoridade.
          </p>

          <div className="solutions-grid">
            {solutionsData.map((sol, idx) => (
              <div key={idx} className="solution-card">
                <span className="solution-category">{sol.badge}</span>
                <h3 className="solution-title">{sol.title}</h3>
                <p className="solution-desc">{sol.description}</p>

                <ul className="solution-bullets" style={{ marginBottom: 0 }}>
                  {sol.highlights.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={16} color="var(--neon-cyan)" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Pilares de Confiança */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="trust-grid">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="trust-card">
                <div className="trust-icon-box">{getPillarIcon(idx)}</div>
                <h3 className="trust-title">{pillar.title}</h3>
                <p className="trust-desc">{pillar.desc}</p>
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
            Como funciona o projeto
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
            Um processo claro e sem burocracia, do primeiro contato até o lançamento oficial.
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

        {/* Bio & Timeline Grid */}
        <div className="about-grid">
          {/* Bio & Skills */}
          <div className="about-text">
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--ink-pure)',
                marginBottom: '1rem',
              }}
            >
              Compromisso com Qualidade Técnica
            </h3>
            <p>
              Sou desenvolvedor full-stack e mobile focado em criar ferramentas funcionais, rápidas e seguras.
            </p>
            <p>
              Em vez de templates pesados e genéricos que deixam os sites lentos, construo aplicações utilizando tecnologias modernas adotadas pelas maiores empresas de tecnologia do mundo.
            </p>
            <p>
              O resultado para o seu negócio é um site ou aplicativo que carrega em fração de segundos, não trava e oferece uma experiência de compra ou navegação impecável para o seu cliente.
            </p>

            <p style={{ marginTop: '1rem', color: 'var(--ink-mute)', fontSize: '0.9rem' }}>
              Base tecnológica moderna: <strong>React, TypeScript, Flutter, Android Nativo, Node.js, Firebase</strong> e infraestrutura em nuvem de alta disponibilidade.
            </p>
          </div>

          {/* Timeline & Milestones */}
          <div>
            <span className="about-subtitle" style={{ marginTop: 0 }}>
              Jornada & Experiência
            </span>
            <div className="timeline">
              {timelineData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-phase">{item.period} — {item.phase}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
