import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface LaserBolt {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
}

export const CustomCursor: React.FC = () => {
  const shipRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let shipX = mouseX;
    let shipY = mouseY;
    let currentAngle = 0;
    let targetAngle = 0;
    let currentRoll = 0;
    let targetRoll = 0;
    let currentPitch = 0;
    let targetPitch = 0;

    let isVisible = false;
    let isHovering = false;
    let isClicking = false;

    const particles: Particle[] = [];
    const laserBolts: LaserBolt[] = [];
    const maxParticles = 50;

    const shipElement = shipRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && shipElement) {
        isVisible = true;
        shipElement.classList.add('is-visible');
      }
    };

    const fireLasers = (x: number, y: number, angleDeg: number) => {
      const rad = ((angleDeg - 90) * Math.PI) / 180;
      const perpRad = rad + Math.PI / 2;
      const speed = 14;

      // Left wing cannon
      const leftX = x + Math.cos(rad) * 10 - Math.cos(perpRad) * 14;
      const leftY = y + Math.sin(rad) * 10 - Math.sin(perpRad) * 14;

      // Right wing cannon
      const rightX = x + Math.cos(rad) * 10 + Math.cos(perpRad) * 14;
      const rightY = y + Math.sin(rad) * 10 + Math.sin(perpRad) * 14;

      laserBolts.push({
        x: leftX,
        y: leftY,
        vx: Math.cos(rad) * speed,
        vy: Math.sin(rad) * speed,
        length: 22,
        alpha: 1,
      });

      laserBolts.push({
        x: rightX,
        y: rightY,
        vx: Math.cos(rad) * speed,
        vy: Math.sin(rad) * speed,
        length: 22,
        alpha: 1,
      });
    };

    const onMouseDown = () => {
      isClicking = true;
      if (shipElement) shipElement.classList.add('is-clicking');
      fireLasers(shipX, shipY, currentAngle);
    };

    const onMouseUp = () => {
      isClicking = false;
      if (shipElement) shipElement.classList.remove('is-clicking');
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (shipElement) shipElement.classList.remove('is-visible');
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (shipElement) shipElement.classList.add('is-visible');
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.project-card') ||
          target.closest('.social-btn') ||
          target.closest('.btn-primary') ||
          target.closest('.btn-secondary') ||
          target.classList.contains('tech-pill') ||
          target.classList.contains('filter-btn'))
      ) {
        if (!isHovering) {
          isHovering = true;
          if (shipElement) shipElement.classList.add('is-hovering');
        }
      } else {
        if (isHovering) {
          isHovering = false;
          if (shipElement) shipElement.classList.remove('is-hovering');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', handleHover);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    let animationId: number;

    const render = () => {
      animationId = requestAnimationFrame(render);

      // Smooth physics tracking
      const dx = mouseX - shipX;
      const dy = mouseY - shipY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      shipX += dx * 0.24;
      shipY += dy * 0.24;

      // Smooth direction angle calculation
      if (dist > 1.5) {
        targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        targetRoll = Math.max(-28, Math.min(28, (dx / 4) * 6));
        targetPitch = Math.max(-20, Math.min(20, (dy / 4) * 5));
      } else {
        targetRoll = 0;
        targetPitch = 0;
      }

      // Mathematical shortest angular distance interpolation
      const angleDiff =
        (((targetAngle - currentAngle + 180) % 360) + 360) % 360 - 180;
      currentAngle += angleDiff * 0.25;

      currentRoll += (targetRoll - currentRoll) * 0.18;
      currentPitch += (targetPitch - currentPitch) * 0.18;

      // Update 3D Spaceship DOM element
      if (shipElement) {
        const scale = isClicking ? 0.92 : isHovering ? 1.25 : 1;
        shipElement.style.transform = `translate3d(${shipX}px, ${shipY}px, 0) translate(-50%, -24%) rotate(${currentAngle}deg) rotateY(${currentRoll}deg) rotateX(${-currentPitch}deg) scale(${scale})`;
      }

      // Spawn plasma engine exhaust particles
      if (dist > 1.8 && particles.length < maxParticles) {
        const rad = ((currentAngle - 90) * Math.PI) / 180;
        const perpRad = rad + Math.PI / 2;
        const rearDist = 22;

        // Left & Right engine nozzles
        const leftEngineX =
          shipX - Math.cos(rad) * rearDist - Math.cos(perpRad) * 6;
        const leftEngineY =
          shipY - Math.sin(rad) * rearDist - Math.sin(perpRad) * 6;

        const rightEngineX =
          shipX - Math.cos(rad) * rearDist + Math.cos(perpRad) * 6;
        const rightEngineY =
          shipY - Math.sin(rad) * rearDist + Math.sin(perpRad) * 6;

        const spawnEngine = (ex: number, ey: number) => {
          particles.push({
            x: ex + (Math.random() - 0.5) * 3,
            y: ey + (Math.random() - 0.5) * 3,
            vx:
              -Math.cos(rad) * (Math.random() * 3 + 1.5) +
              (Math.random() - 0.5) * 0.8,
            vy:
              -Math.sin(rad) * (Math.random() * 3 + 1.5) +
              (Math.random() - 0.5) * 0.8,
            size: Math.random() * 4 + 2,
            alpha: 0.95,
            color:
              Math.random() > 0.35
                ? '#3b82f6'
                : Math.random() > 0.5
                ? '#60a5fa'
                : '#ffffff',
          });
        };

        spawnEngine(leftEngineX, leftEngineY);
        spawnEngine(rightEngineX, rightEngineY);
      }

      // Draw plasma exhaust & laser bolts on Canvas
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(dpr, dpr);

        // Render & Update Laser Bolts
        for (let i = laserBolts.length - 1; i >= 0; i--) {
          const bolt = laserBolts[i];
          bolt.x += bolt.vx;
          bolt.y += bolt.vy;
          bolt.alpha -= 0.04;

          if (
            bolt.alpha <= 0 ||
            bolt.x < 0 ||
            bolt.x > window.innerWidth ||
            bolt.y < 0 ||
            bolt.y > window.innerHeight
          ) {
            laserBolts.splice(i, 1);
            continue;
          }

          const tailX =
            bolt.x - (bolt.vx / Math.hypot(bolt.vx, bolt.vy)) * bolt.length;
          const tailY =
            bolt.y - (bolt.vy / Math.hypot(bolt.vx, bolt.vy)) * bolt.length;

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(bolt.x, bolt.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${bolt.alpha})`;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#3b82f6';
          ctx.stroke();

          // Laser Core
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(bolt.x, bolt.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Render & Update Plasma Exhaust Particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.042;
          p.size *= 0.94;

          if (p.alpha <= 0 || p.size <= 0.4) {
            particles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 9;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        ctx.restore();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="cursor-trail-canvas"
        aria-hidden="true"
      />
      <div ref={shipRef} className="spaceship-cursor" aria-hidden="true">
        {/* High-Tech 3D Cyber Interceptor Spaceship */}
        <svg
          viewBox="0 0 48 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="spaceship-svg"
        >
          <defs>
            <radialGradient id="plasmaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hullMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="45%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="wingPlates" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="cockpitVisor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>

          {/* Dual Thruster Flame Jets (Left & Right) */}
          <g className="engine-flames">
            <polygon
              points="16,42 18,52 14,48"
              fill="url(#plasmaGlow)"
              className="flame-left"
            />
            <polygon
              points="32,42 30,52 34,48"
              fill="url(#plasmaGlow)"
              className="flame-right"
            />
            <ellipse
              cx="16"
              cy="43"
              rx="2.5"
              ry="5"
              fill="#3b82f6"
              opacity="0.9"
            />
            <ellipse
              cx="32"
              cy="43"
              rx="2.5"
              ry="5"
              fill="#3b82f6"
              opacity="0.9"
            />
          </g>

          {/* Main Swept-Wing Geometry */}
          <polygon
            points="24,2 4,36 12,40 18,35 24,28 30,35 36,40 44,36"
            fill="url(#hullMain)"
            stroke="#3b82f6"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Wing Armor Panels */}
          <polygon
            points="14,26 4,36 11,39 17,32"
            fill="url(#wingPlates)"
            stroke="#3b82f6"
            strokeWidth="0.8"
            opacity="0.9"
          />
          <polygon
            points="34,26 44,36 37,39 31,32"
            fill="url(#wingPlates)"
            stroke="#3b82f6"
            strokeWidth="0.8"
            opacity="0.9"
          />

          {/* Fuselage Spine & Cockpit Housing */}
          <polygon
            points="24,2 17,22 19,41 24,43 29,41 31,22"
            fill="#0b1120"
            stroke="#60a5fa"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />

          {/* High-Tech Wing Cannons */}
          <rect
            x="3.5"
            y="30"
            width="2"
            height="9"
            rx="1"
            fill="#3b82f6"
            stroke="#60a5fa"
            strokeWidth="0.5"
          />
          <rect
            x="42.5"
            y="30"
            width="2"
            height="9"
            rx="1"
            fill="#3b82f6"
            stroke="#60a5fa"
            strokeWidth="0.5"
          />

          {/* Glowing Wingtip Cannons */}
          <circle cx="4.5" cy="30" r="1.5" fill="#ffffff" className="cannon-glow" />
          <circle cx="43.5" cy="30" r="1.5" fill="#ffffff" className="cannon-glow" />

          {/* Cockpit Canopy HUD Visor */}
          <polygon
            points="24,8 20,20 24,24 28,20"
            fill="url(#cockpitVisor)"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Stealth Neon Spine Tracer */}
          <line
            x1="24"
            y1="4"
            x2="24"
            y2="40"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="3 1.5"
          />
        </svg>

        {/* Tactical Hover Reticle */}
        <div className="spaceship-reticle" />
      </div>
    </>
  );
};
