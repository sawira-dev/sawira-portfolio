import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">SM</a>
        <div className="social-icons">
          <a href="mailto:sawira.manzoor@example.com"><FiMail /></a>
          <a href="https://linkedin.com/in/sawiramanzoor" target="_blank" rel="noreferrer"><FiLinkedin /></a>
          <a href="https://github.com/sawiramanzoor" target="_blank" rel="noreferrer"><FiGithub /></a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Sawira Manzoor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;