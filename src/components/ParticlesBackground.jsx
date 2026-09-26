import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.2 + 0.8,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.5 + 0.3,
          alphaChange: (Math.random() - 0.5) * 0.005,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#050A15'; // bg-deep
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 168, 255, ${p.alpha})`; // glow color
        ctx.fill();

        // Move
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += p.alphaChange;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Reset alpha oscillation
        if (p.alpha > 0.7 || p.alpha < 0.1) p.alphaChange *= -1;
      });

      // Draw a few glowing circles (larger, very faint)
      ctx.beginPath();
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 120, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.03)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(canvas.width * 0.2, canvas.height * 0.7, 150, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(29, 78, 216, 0.03)';
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default ParticlesBackground;
















