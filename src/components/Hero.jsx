import { ArrowDown, ArrowUpRight, Code2, Network, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────
   Animated Hero Visual — network orb + chips
   ───────────────────────────────────────────── */
function HeroVisual() {
  // 14 nodes positioned around the orb (percentages)
  const nodes = [
    [15, 26], [34, 13], [55, 20], [79, 12], [91, 36],
    [75, 48], [91, 70], [67, 84], [45, 72], [26, 88],
    [9, 68],  [29, 51], [52, 45], [66, 64],
  ];

  // Which nodes connect to which
  const links = [
    [0, 1], [0, 11], [1, 2], [1, 11], [2, 3], [2, 12],
    [3, 4], [3, 5], [4, 5], [4, 6], [5, 12], [5, 13],
    [6, 7], [6, 13], [7, 8], [7, 13], [8, 9], [8, 11],
    [8, 12], [8, 13], [9, 10], [9, 11], [10, 0], [10, 11],
    [11, 12], [12, 13],
  ];

  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-rings">
        <i /><i /><i />
      </div>

      <svg className="network" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="nodeGlow">
            <stop stopColor="#6ee7b7" />
            <stop offset="1" stopColor="#589ff2" />
          </radialGradient>
        </defs>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            style={{ animationDelay: `${i * -0.17}s` }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x} cy={y}
            r={i === 12 ? 2.6 : 1.15}
            style={{ animationDelay: `${i * -0.22}s` }}
          />
        ))}
      </svg>

      <div className="orb-core">
        <Code2 size={34} />
        <span>REACT · .NET</span>
      </div>

      <div className="float-chip chip-one">
        <span className="pulse" />
        BUILD PASSING
      </div>

      <div className="float-chip chip-two">
        1.5+ YRS
        <br />
        <b>SHIPPING</b>
      </div>

      <div className="float-chip chip-three">
        <Network size={13} /> FULL-STACK READY
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero section
   ───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="availability">
          <span /> Ready to build what's next
        </div>

        <p className="kicker">
          SOFTWARE ENGINEER · PAKISTAN / WORLDWIDE
        </p>

        <h1>
          I build
          <span className="mobile-break"><br /></span> software
          <br />
          that <em>actually</em>
          <span className="desktop-the"> ships</span>
          <span className="mobile-the">ships </span>
          <br />
          to production.
        </h1>

        <p className="hero-lede">
          I'm <strong>Sawira Manzoor</strong> — a software engineer crafting
          React frontends, C#/.NET systems, and real-time networking
          applications that turn complex problems into reliable products.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore my work <ArrowDown size={17} />
          </a>
          <a className="button text-button" href="mailto:sawkhan842@gmail.com">
            Let's talk <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <HeroVisual />
      </div>

      <div className="hero-footer">
        <div>
          <strong>1.5+</strong>
          <span>YEARS OF<br />EXPERIENCE</span>
        </div>
        <div>
          <strong>∞</strong>
          <span>CURIOSITY<br />BY DEFAULT</span>
        </div>
        <p>
          Scroll to explore <ArrowDown size={14} />
        </p>
      </div>
    </section>
  );
}