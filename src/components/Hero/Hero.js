/**
 * Componente Hero (Seção Inicial)
 *
 * Seção principal de apresentação com efeito de digitação animado.
 * Exibe o nome, especialidades e descrição profissional com animações suaves.
 *
 * Estados:
 * - currentExpertiseIndex: Índice da especialidade atual sendo exibida
 * - displayText: Texto sendo exibido na animação de digitação
 * - isDeleting: Controla se está digitando ou apagando
 * - typingSpeed: Velocidade da animação (150ms digitando, 100ms apagando)
 *
 * Funcionalidades:
 * - Animação de digitação tipo "typewriter" das especialidades
 * - Alternância automática entre diferentes especialidades
 * - Indicador de scroll animado
 * - Animações de entrada com Framer Motion
 * - Scroll suave para a próxima seção ao clicar no indicador
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalData';
import './Hero.css';

const Hero = () => {
  const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = personalInfo.expertise[currentExpertiseIndex];

    // Lógica de animação de digitação e exclusão de texto
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pausa de 2 segundos antes de começar a apagar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          // Avança para a próxima especialidade
          setIsDeleting(false);
          setCurrentExpertiseIndex((prev) => (prev + 1) % personalInfo.expertise.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentExpertiseIndex, typingSpeed]);

  // Rola suavemente para a próxima seção (altura da viewport)
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Efeito de grid de fundo */}
        <div className="hero-grid"></div>
        
        {/* Conteúdo principal */}
        <div className="hero-content">
          {/* Nome em destaque */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Subtítulo com digitação */}
          <motion.div
            className="hero-subtitle-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="hero-subtitle">
              Eu Sou Um: <span className="hero-typing-text">{displayText}</span>
              <span className="hero-cursor">|</span>
            </p>
          </motion.div>

          {/* Descrição */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Transformando a robustez da infraestrutura em soluções de software e<br />
            automação escaláveis, com expertise em <span className="highlight">AWS</span>, <span className="highlight">Azure</span>, <span className="highlight">OCI</span> e <span className="highlight">React</span>.
          </motion.p>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          onClick={scrollToNextSection}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p className="scroll-text">Role para explorar</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;