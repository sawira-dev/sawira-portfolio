import React from "react";
import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from "react-icons/fi";

const SOCIALS = [
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:sawkhan842@gmail.com",
    external: false,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sawira-manzoor-300557327",
    external: true,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/sawira-dev",
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr">
      <div className="ftr-glow" aria-hidden="true" />

      <div className="ftr-container">
        {/* Top row — logo + socials */}
        <div className="ftr-top">
          {/* Logo */}
          <a href="#home" className="ftr-logo" aria-label="Back to top">
            <span className="ftr-logo-mark">
              <span className="ftr-logo-s">S</span>
              <span className="ftr-logo-m">M</span>
            </span>
            <span className="ftr-logo-text">Sawira Manzoor</span>
          </a>

          {/* Social icons */}
          <div className="ftr-socials">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="ftr-social"
                  aria-label={social.label}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer" : undefined}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="ftr-divider" aria-hidden="true" />

        {/* Bottom row — copyright + back-to-top */}
        <div className="ftr-bottom">
          <p className="ftr-copy">
            © {year} <strong>Sawira Manzoor</strong>. All rights reserved.
          </p>

          <a href="#home" className="ftr-back-top" aria-label="Back to top">
            Back to top <FiArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}