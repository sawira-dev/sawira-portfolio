import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import "./Hero.css";

/* ─────────────────────────────────────────────
   Animated background visual — glowing grid + nodes
   ───────────────────────────────────────────── */
function HeroVisual() {
  const nodes = [
    [15, 26], [34, 13], [55, 20], [79, 12], [91, 36],
    [75, 48], [91, 70], [67, 84], [45, 72], [26, 88],
    [9, 68],  [29, 51], [52, 45], [66, 64],
  ];
  const links = [
    [0, 1], [0, 11], [1, 2], [1, 11], [2, 3], [2, 12],
    [3, 4], [3, 5], [4, 5], [4, 6], [5, 12], [5, 13],
    [6, 7], [6, 13], [7, 8], [7, 13], [8, 9], [8, 11],
    [8, 12], [8, 13], [9, 10], [9, 11], [10, 0], [10, 11],
    [11, 12], [12, 13],
  ];

  return (
    <div className="hero-visual-inner" aria-hidden="true">
      {/* Soft glow behind everything */}
      <div className="hv-glow" />

      {/* Rotating rings */}
      <div className="hv-rings">
        <i /><i /><i />
      </div>

      {/* Node network */}
      <svg className="hv-network" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="hv-node">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </radialGradient>
        </defs>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            style={{ animationDelay: `${i * -0.14}s` }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x} cy={y}
            r={i === 12 ? 2.4 : 1}
            style={{ animationDelay: `${i * -0.2}s` }}
          />
        ))}
      </svg>

      {/* Center monogram */}
      <div className="hv-core">
        <span>SM</span>
        <small>DEV</small>
      </div>

      {/* Floating chips */}
      <div className="hv-chip hv-chip-1">
        <span className="dot" /> BUILD PASSING
      </div>
      <div className="hv-chip hv-chip-2">
        1.5+ YRS<br /><b>SHIPPING</b>
      </div>
      <div className="hv-chip hv-chip-3">
        <Sparkles size={12} /> FULL-STACK
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
      {/* Animated background grid */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        {/* LEFT — copy */}
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="dot" />
            Available for opportunities
          </div>

          <p className="hero-kicker">Software Engineer · Pakistan</p>

          <h1 className="hero-title">
            Building <em>software</em>
            <br />
            that <span>ships</span> to production.
          </h1>

          <p className="hero-lede">
            I'm <strong>Sawira Manzoor</strong> — a software engineer crafting
            React frontends, C#/.NET systems, and real-time networking
            applications that turn complex problems into reliable products.
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              Explore my work <ArrowDown size={16} />
            </a>
            <a href="mailto:sawkhan842@gmail.com" className="btn btn-ghost">
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <div><strong>1.5+</strong><span>YEARS<br />EXPERIENCE</span></div>
            <div><strong>∞</strong><span>CURIOSITY<br />BY DEFAULT</span></div>
          </div>
        </div>

        {/* RIGHT — visual */}
        <div className="hero-visual">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}