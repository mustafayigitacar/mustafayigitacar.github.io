import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-socials">
        <a href="https://github.com/mustafayigitacar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/mustafayigitacar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:mustafayigitacr@gmail.com"><FaEnvelope /></a>
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Mustafa Yiğit Acar. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
);

export default Footer; 