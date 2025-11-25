/**
 * Componente Footer (Rodapé)
 *
 * Rodapé da aplicação com informações de contato, redes sociais e navegação.
 * Exibe copyright dinâmico com ano atual.
 *
 * Funcionalidades:
 * - Informações de contato (email, telefone, localização)
 * - Links para redes sociais (GitHub, LinkedIn)
 * - Navegação rápida para seções do site
 * - Copyright dinâmico com ano atual
 * - Links com ícones para melhor UX
 */

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Informações de Contato */}
        <div className="footer-section">
          <h3 className="footer-title">Contato</h3>
          <div className="footer-links">
            <a href="mailto:mathues12398henrique@gmail.com" className="footer-link">
              <FaEnvelope />
              mathues12398henrique@gmail.com
            </a>
            <a href="tel:+5562994876721" className="footer-link">
              <FaPhone />
              +55 (62) 9 9487-6721
            </a>
            <div className="footer-link">
              <FaMapMarkerAlt />
              Goiânia, Goiás - Brasil
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h3 className="footer-title">Redes Sociais</h3>
          <div className="footer-social">
            <a 
              href="https://github.com/MatheusHenriquePrates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/matheus-henrique-prates-586328234/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Navegação Rápida */}
        <div className="footer-section">
          <h3 className="footer-title">Navegação</h3>
          <div className="footer-links">
            <a href="#about" className="footer-link">Sobre Mim</a>
            <a href="#projects" className="footer-link">Projetos</a>
            <a href="#skills" className="footer-link">Certificações</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Matheus Henrique Prates. Todos os direitos reservados.</p>
        <p className="footer-made">Desenvolvido com React, Framer Motion e ☕</p>
      </div>
    </footer>
  );
};

export default Footer;