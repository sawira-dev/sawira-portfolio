import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Code2,
  Network,
  Rocket,
  Briefcase,
  Monitor,
  Globe,
  Layers,
  Mic,
  GitBranch,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Dynamic dot-web background
   ───────────────────────────────────────────── */
function DotWeb() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0, height = 0;
    let dpr = window.devicePixelRatio || 1;
    let dots = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = 0;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots();
    }

    function initDots() {
      const count = Math.max(60, Math.floor((width * height) / 9000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 0.5 + 0.4,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      const maxDist = Math.min(width, height) * 0.11;

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        const dxm = a.x - mouse.x;
        const dym = a.y - mouse.y;
        const dm2 = dxm * dxm + dym * dym;
        if (dm2 < 100 * 100) {
          const f = (100 - Math.sqrt(dm2)) / 100;
          a.x += (dxm / Math.sqrt(dm2 || 1)) * f * 0.5;
          a.y += (dym / Math.sqrt(dm2 || 1)) * f * 0.5;
        }

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(d2) / maxDist;
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha * 0.22})`;
            ctx.lineWidth = 0.45;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dmouse2 = dxm * dxm + dym * dym;
        if (dmouse2 < 150 * 150) {
          const alpha = 1 - Math.sqrt(dmouse2) / 150;
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.4})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const a of dots) {
        ctx.fillStyle = "rgba(147, 197, 253, 0.75)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    if (!prefersReduced) {
      tick();
    } else {
      tick();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas className="dot-web" ref={canvasRef} aria-hidden="true" />;
}

/* ─────────────────────────────────────────────
   Typewriter Full Name
   - types letter by letter
   - stays visible 6 seconds
   - deletes letter by letter
   - pauses 1s, then loops
   ───────────────────────────────────────────── */
function TypewriterName() {
  const FULL_NAME = "Sawira Manzoor";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayText(FULL_NAME);
      return;
    }

    let timeout;

    if (!isDeleting && charIndex < FULL_NAME.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(FULL_NAME.substring(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 120);                          // ← typing speed (slower = more dramatic)
    } else if (!isDeleting && charIndex === FULL_NAME.length) {
      // Name is fully typed — HOLD for 6 seconds
      timeout = setTimeout(() => setIsDeleting(true), 15000);   // ← 6s hold
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(FULL_NAME.substring(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 55);
    } else if (isDeleting && charIndex === 0) {
      // Fully erased — pause 1s before retyping
      timeout = setTimeout(() => setIsDeleting(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  const firstWordLength = "Sawira".length;
  const part1 = displayText.slice(0, firstWordLength);
  const part2 = displayText.slice(firstWordLength);

  return (
    <h1 className="hero-name" aria-label="Sawira Manzoor">
      <span aria-hidden="true">
        <span className="name-plain">{part1}</span>
        <span className="name-accent">{part2}</span>
        <span className="type-cursor" />
      </span>
    </h1>
  );
}

/* ─────────────────────────────────────────────
   Rotating Role Text
   Cycles: Software Engineer → Full-Stack Developer → .NET Developer
   Types → holds 2s → deletes → next
   ───────────────────────────────────────────── */
function RotatingRole() {
  const ROLES = [
    "Software Engineer",
    "Full-Stack Developer",
    ".NET Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayText(ROLES[0]);
      return;
    }

    let timeout;
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 65);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Hold for 2 seconds before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <p className="hero-role">
      <Sparkles size={13} />
      <span>{displayText}</span>
      <span className="type-cursor small" />
    </p>
  );
}

/* ─────────────────────────────────────────────
   Moving Marquee Ticker
   Scrolling tags of what Sawira does
   ───────────────────────────────────────────── */
function Marquee() {
  const TAGS = [
    { icon: Code2,     label: "Web Development" },
    { icon: Globe,     label: "Full-Stack Development" },
    { icon: Monitor,   label: "Desktop Application Development" },
    { icon: Mic,       label: "VoIP Software" },
    { icon: Network,   label: "Networking & UDP" },
    { icon: Layers,    label: "SaaS Platforms" },
    { icon: Rocket,    label: "React Frontends" },
    { icon: Code2,     label: "C# / .NET Systems" },
    { icon: Briefcase, label: "REST API Integration" },
    { icon: GitBranch, label: "Real-Time Communication" },
  ];

  // Duplicate the list so the marquee loops seamlessly
  const loopTags = [...TAGS, ...TAGS];

  return (
    <div className="marquee" aria-label="Skills and technologies">
      <div className="marquee-track">
        {loopTags.map((tag, i) => {
          const Icon = tag.icon;
          return (
            <span className="marquee-item" key={i}>
              <Icon size={14} />
              {tag.label}
              <span className="marquee-dot">◆</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Right-side visual: code card
   ───────────────────────────────────────────── */
function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card-head">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="file">~/sawira/portfolio.tsx</span>
      </div>
      <pre className="code-body">
{`const engineer = {
  name: "Sawira Manzoor",
  role: "Software Engineer",
  stack: ["React", "C#", ".NET"],
  focus: [
    "Real-time systems",
    "VoIP & networking",
    "SaaS platforms",
  ],
  shipping: true,
};`}
      </pre>
      <div className="code-card-foot">
        <span><Code2 size={14} /> 12 files</span>
        <span className="status"><i /> Live</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero section
   ───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero" id="home">
      <DotWeb />

      <div className="hero-glow-a" aria-hidden="true" />
      <div className="hero-glow-b" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="pulse-dot" />
            Available for opportunities
          </div>

          <p className="hero-kicker">
            <Sparkles size={12} /> Based in Pakistan · Available worldwide
          </p>

          <TypewriterName />

          <RotatingRole />

          <p className="hero-tagline">
            I build <em>software</em> that ships to production —
            <strong> React frontends</strong>, <strong>C#/.NET systems</strong>, and
            <strong> real-time networking</strong> applications.
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              Explore my work <ArrowDown size={16} />
            </a>
            <a href="mailto:sawkhan842@gmail.com" className="btn btn-ghost">
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>6+</strong>
              <span>PROJECTS<br />SHIPPED</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>1.5+</strong>
              <span>YEARS<br />EXPERIENCE</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>8+</strong>
              <span>TECH<br />STACK</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>∞</strong>
              <span>CURIOSITY<br />BY DEFAULT</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <div className="hv-glow" aria-hidden="true" />
          <CodeCard />
          <div className="hv-chip hv-chip-1">
            <span className="pulse-dot" /> BUILD PASSING
          </div>
          <div className="hv-chip hv-chip-2">
            1.5+ YRS<br /><b>SHIPPING</b>
          </div>
          <div className="hv-chip hv-chip-3">
            <Sparkles size={12} /> FULL-STACK
          </div>
        </div>
      </div>

      {/* MOVING MARQUEE — full width at the bottom of the hero */}
      <Marquee />

      <div className="hero-scroll">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}