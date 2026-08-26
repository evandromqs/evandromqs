import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 26);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x050508, 0);
    container.appendChild(renderer.domElement);

    // --- 1. Fixed 3D Undulating Digital Surface at Footer Base ---
    const gridWidth = 110;
    const gridDepth = 110;
    const gridSegments = 50;
    const gridGeometry = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridSegments,
      gridSegments
    );
    gridGeometry.rotateX(-Math.PI / 2);

    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });

    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    // Fixed firmly at the footer base level in 3D world space
    gridMesh.position.set(0, -32, 0);
    scene.add(gridMesh);

    const posAttr = gridGeometry.attributes.position;
    const initialPositions = new Float32Array(posAttr.array.length);
    initialPositions.set(posAttr.array);

    // --- 2. Floating Cyber Polyhedra Distributed Vertically ---
    interface FloatingMesh {
      group: THREE.Group;
      rotSpeed: { x: number; y: number; z: number };
      basePos: { x: number; y: number; z: number };
      floatSpeed: number;
      floatOffset: number;
    }

    const floatingObjects: FloatingMesh[] = [];

    const createCyberShape = (
      geometry: THREE.BufferGeometry,
      edgeColor: number,
      pos: [number, number, number],
      rotSpeed: { x: number; y: number; z: number },
      floatSpeed: number,
      floatOffset: number
    ) => {
      const group = new THREE.Group();

      // Translucent Dark Core
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x080816,
        transparent: true,
        opacity: 0.8,
      });
      const coreMesh = new THREE.Mesh(geometry, coreMat);
      group.add(coreMesh);

      // Glowing Neon Wireframe Edges
      const edges = new THREE.EdgesGeometry(geometry);
      const edgeMat = new THREE.LineBasicMaterial({
        color: edgeColor,
        transparent: true,
        opacity: 0.75,
      });
      const edgeLines = new THREE.LineSegments(edges, edgeMat);
      group.add(edgeLines);

      group.position.set(...pos);
      scene.add(group);

      floatingObjects.push({
        group,
        rotSpeed,
        basePos: { x: pos[0], y: pos[1], z: pos[2] },
        floatSpeed,
        floatOffset,
      });

      return group;
    };

    // --- ZONE 1: Hero Section (High Altitude, Y ~ 0 to 6) ---
    createCyberShape(
      new THREE.IcosahedronGeometry(1.6, 0),
      0x00d4ff,
      [-10, 4, -4],
      { x: 0.005, y: 0.008, z: 0.003 },
      0.8,
      0
    );

    createCyberShape(
      new THREE.OctahedronGeometry(2.0, 0),
      0x4d9fff,
      [11, 3, -6],
      { x: -0.006, y: 0.007, z: 0.004 },
      0.7,
      1.5
    );

    createCyberShape(
      new THREE.TetrahedronGeometry(1.5, 0),
      0x00d4ff,
      [-4, 7, -10],
      { x: -0.004, y: 0.009, z: 0.005 },
      0.85,
      2.1
    );

    // --- ZONE 2: Sobre & Trajetória (Middle Descent, Y ~ -9 to -16) ---
    createCyberShape(
      new THREE.DodecahedronGeometry(1.5, 0),
      0x00ff88,
      [-12, -9, -6],
      { x: 0.007, y: -0.006, z: 0.005 },
      0.9,
      3.0
    );

    createCyberShape(
      new THREE.TorusGeometry(1.8, 0.45, 16, 32),
      0x00d4ff,
      [12, -11, -5],
      { x: 0.006, y: 0.008, z: -0.004 },
      0.65,
      4.2
    );

    createCyberShape(
      new THREE.IcosahedronGeometry(1.4, 0),
      0x6be3ff,
      [-5, -14, -9],
      { x: 0.005, y: -0.007, z: 0.004 },
      0.8,
      1.2
    );

    // --- ZONE 3: Produtos & Soluções (Approaching Surface, Y ~ -19 to -25) ---
    createCyberShape(
      new THREE.OctahedronGeometry(2.1, 0),
      0x00d4ff,
      [-13, -19, -5],
      { x: 0.008, y: 0.006, z: 0.003 },
      0.75,
      2.5
    );

    createCyberShape(
      new THREE.TorusGeometry(2.1, 0.4, 16, 32),
      0x4d9fff,
      [13, -21, -5],
      { x: -0.005, y: 0.009, z: 0.006 },
      0.7,
      3.8
    );

    createCyberShape(
      new THREE.DodecahedronGeometry(1.7, 0),
      0x00ff88,
      [-11, -25, -6],
      { x: 0.006, y: -0.007, z: 0.005 },
      0.85,
      0.7
    );

    createCyberShape(
      new THREE.IcosahedronGeometry(1.8, 0),
      0x6be3ff,
      [11, -26, -7],
      { x: -0.007, y: 0.006, z: -0.005 },
      0.8,
      4.9
    );

    // --- ZONE 4: Footer Base (Arriving at 3D Surface, Y ~ -28 to -31) ---
    createCyberShape(
      new THREE.OctahedronGeometry(2.2, 0),
      0x4d9fff,
      [-11, -28, -5],
      { x: 0.006, y: 0.007, z: -0.005 },
      0.75,
      2.8
    );

    createCyberShape(
      new THREE.DodecahedronGeometry(2.0, 0),
      0x00ff88,
      [11, -28, -6],
      { x: -0.006, y: 0.008, z: 0.004 },
      0.8,
      5.2
    );

    createCyberShape(
      new THREE.TorusGeometry(2.2, 0.35, 16, 32),
      0x6be3ff,
      [12, -30, -7],
      { x: 0.008, y: -0.005, z: 0.007 },
      0.55,
      1.5
    );

    createCyberShape(
      new THREE.TetrahedronGeometry(1.8, 0),
      0x00d4ff,
      [-12, -30, -7],
      { x: 0.007, y: -0.005, z: 0.006 },
      0.7,
      1.1
    );

    // --- 3. 3D Particle Constellation ---
    const particleCount = 1000;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 65;
      particlePositions[idx + 1] = Math.random() * -38 + 6;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 40 - 5;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004 + 0.002,
        z: (Math.random() - 0.5) * 0.004,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.14,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // --- 4. Interactive Tracking ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let currentScrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // --- 5. Animation Render Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Dynamically calculate scroll progress
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const targetScrollProgress = Math.min(
        Math.max(window.scrollY / maxScroll, 0),
        1
      );

      // Smooth interpolation for mouse and scroll
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      currentScrollProgress +=
        (targetScrollProgress - currentScrollProgress) * 0.07;

      // CAMERA DESCENT & APPROACH EFFECT:
      // At Top (scrollProgress = 0): Camera is high up at y = 2, z = 26 (surface is far down in perspective)
      // At Footer (scrollProgress = 1): Camera descends to y = -26, z = 14 (approaching the fixed 3D surface)
      const targetCamY = 2 - currentScrollProgress * 28;
      const targetCamZ = 26 - currentScrollProgress * 12;

      camera.position.x = mouse.x * 2.2;
      camera.position.y = targetCamY + mouse.y * 1.4;
      camera.position.z = targetCamZ;

      // Look point tilts smoothly towards the upcoming / landing surface
      const lookY = targetCamY - 4 - (1 - currentScrollProgress) * 4;
      camera.lookAt(mouse.x * 1.0, lookY, 0);

      // Dynamic surface opacity increases smoothly as user approaches the footer
      gridMaterial.opacity = 0.05 + currentScrollProgress * 0.12;

      // Undulate 3D Surface at the footer
      const positions = gridGeometry.attributes.position.array as Float32Array;
      const waveAmplitude = 0.6 + currentScrollProgress * 0.4;
      for (let i = 0; i < posAttr.count; i++) {
        const x = initialPositions[i * 3];
        const z = initialPositions[i * 3 + 2];
        const wave =
          Math.sin(x * 0.14 + elapsedTime * 1.2) *
          Math.cos(z * 0.14 + elapsedTime * 0.9) *
          waveAmplitude;
        positions[i * 3 + 1] = wave;
      }
      gridGeometry.attributes.position.needsUpdate = true;

      // Rotate and Float All Cyber Polyhedra
      floatingObjects.forEach((obj) => {
        obj.group.rotation.x += obj.rotSpeed.x;
        obj.group.rotation.y += obj.rotSpeed.y;
        obj.group.rotation.z += obj.rotSpeed.z;

        const floatY =
          Math.sin(elapsedTime * obj.floatSpeed + obj.floatOffset) * 0.4;
        obj.group.position.y = obj.basePos.y + floatY;
        obj.group.position.x = obj.basePos.x + mouse.x * 0.6;
      });

      // Twinkle & Drift Particles
      const pPositions = particleGeometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        pPositions[idx] += particleVelocities[i].x;
        pPositions[idx + 1] += particleVelocities[i].y;
        pPositions[idx + 2] += particleVelocities[i].z;

        // Wrap around bounds
        if (pPositions[idx + 1] > 8) pPositions[idx + 1] = -34;
        if (pPositions[idx + 1] < -34) pPositions[idx + 1] = 8;
        if (pPositions[idx] > 34) pPositions[idx] = -34;
        if (pPositions[idx] < -34) pPositions[idx] = 34;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      gridGeometry.dispose();
      gridMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      floatingObjects.forEach((obj) => {
        obj.group.traverse((child) => {
          if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      });

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="background-3d-canvas" aria-hidden="true" />;
};
