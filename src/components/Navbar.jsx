import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",       href: "#home",       num: "01" },
  { label: "About",      href: "#about",      num: "02" },
  { label: "Skills",     href: "#skills",     num: "03" },
  { label: "Experience", href: "#experience", num: "04" },
  { label: "Projects",   href: "#projects",   num: "05" },
  { label: "Services",   href: "#services",   num: "06" },
  { label: "Education",  href: "#education",  num: "07" },
  { label: "Contact",    href: "#contact",    num: "08" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* ── Solidify navbar on scroll ─────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Highlight active section on scroll ────── */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Close on escape key ───────────────────── */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* ── Lock body scroll when drawer is open ──── */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((o) => !o);

  return (
    <>
      <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav" aria-label="Primary">
          {/* Left: SM Monogram */}
          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
            aria-label="Sawira Manzoor — home"
          >
            <span className="logo-cluster" aria-hidden="true">
              <span className="logo-ambient" />
              <span className="logo-monogram">
                <span className="mono-letter">S</span>
                <span className="mono-letter accent">M</span>
              </span>
            </span>
          </a>

          {/* Right cluster */}
          <div className="nav-right">
            {/* Desktop links */}
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active === link.href.slice(1) ? "active" : ""}
                  >
                    <span className="nav-num">{link.num}</span>
                    <span className="nav-label">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop résumé button */}
            <a
              href="/resume.pdf"
              download
              className="nav-cta"
              onClick={closeMenu}
            >
              <Download size={15} />
              <span>Résumé</span>
            </a>

            {/* Burger toggle */}
            <button
              type="button"
              className="nav-burger"
              onClick={toggleMenu}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer — OUTSIDE the header */}
      <aside
        id="mobile-menu"
        className={`nav-mobile ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        {/* Close button INSIDE the drawer */}
        <button
          type="button"
          className="nav-mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <ul className="nav-mobile-links">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ "--i": i }}
              className={active === link.href.slice(1) ? "active" : ""}
            >
              <a href={link.href} onClick={closeMenu}>
                <span className="nav-num">{link.num}</span>
                <span className="nav-label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="nav-mobile-cta"
          onClick={closeMenu}
        >
          <Download size={16} /> Download Résumé
        </a>
      </aside>

      {/* Backdrop */}
      <div
        className={`nav-backdrop ${open ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}