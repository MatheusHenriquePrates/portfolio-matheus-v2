/**
 * Componente About (Sobre Mim)
 *
 * Seção que apresenta a biografia pessoal e a jornada profissional.
 * Inclui carrossel interativo de experiências profissionais com animações.
 *
 * Estados:
 * - currentExperience: Índice da experiência atualmente exibida
 * - direction: Direção da animação (1 = próximo, -1 = anterior)
 *
 * Funcionalidades:
 * - Exibição da biografia em múltiplos parágrafos
 * - Carrossel de experiências profissionais
 * - Navegação por setas ou dots indicadores
 * - Animações de entrada/saída com Framer Motion
 * - Barra de progresso visual
 * - Exibição de skills, período, empresa e impacto de cada experiência
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaBriefcase, FaCalendar } from 'react-icons/fa';
import { personalInfo } from '../../data/personalData';
import { experiences } from '../../data/experienceData';
import './About.css';

const About = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [direction, setDirection] = useState(1);

  // Avança para a próxima experiência
  const nextExperience = () => {
    if (currentExperience < experiences.length - 1) {
      setDirection(1);
      setCurrentExperience(prev => prev + 1);
    }
  };

  // Volta para a experiência anterior
  const prevExperience = () => {
    if (currentExperience > 0) {
      setDirection(-1);
      setCurrentExperience(prev => prev - 1);
    }
  };

  // Variantes de animação para transição entre experiências
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Seção Sobre Mim */}
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            Sobre Mim
          </h2>

          <div className="about-content">
            {personalInfo.about.map((paragraph, index) => (
              <motion.p
                key={index}
                className="about-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Divisor */}
        <div className="section-divider"></div>

        {/* Seção Jornada Profissional */}
        <motion.div
          className="journey-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            Minha Jornada Profissional
          </h2>

          <div className="journey-timeline">
            {/* Indicador de progresso */}
            <div className="journey-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${((currentExperience + 1) / experiences.length) * 100}%` 
                  }}
                ></div>
              </div>
              <p className="progress-text">
                {currentExperience + 1} de {experiences.length}
              </p>
            </div>

            {/* Card de experiência com animação */}
            <div className="experience-card-container">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentExperience}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="experience-card"
                >
                  {/* Header do card */}
                  <div className="experience-header">
                    <div className="experience-icon">
                      <FaBriefcase />
                    </div>
                    <div className="experience-title-section">
                      <h3 className="experience-role">
                        {experiences[currentExperience].role}
                      </h3>
                      <p className="experience-company">
                        {experiences[currentExperience].company} • {experiences[currentExperience].location}
                      </p>
                    </div>
                  </div>

                  {/* Período */}
                  <div className="experience-period">
                    <FaCalendar />
                    <span>{experiences[currentExperience].period}</span>
                  </div>

                  {/* Descrição */}
                  <p className="experience-description">
                    {experiences[currentExperience].description}
                  </p>

                  {/* Skills */}
                  <div className="experience-skills">
                    {experiences[currentExperience].skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Impacto */}
                  <div className="experience-impact">
                    <h4 className="impact-title">O que aprendi:</h4>
                    <p className="impact-text">
                      {experiences[currentExperience].impact}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navegação */}
            <div className="journey-navigation">
              <button
                className="nav-button nav-prev"
                onClick={prevExperience}
                disabled={currentExperience === 0}
              >
                <FaArrowLeft />
                <span>Anterior</span>
              </button>

              <div className="nav-dots">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === currentExperience ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(index > currentExperience ? 1 : -1);
                      setCurrentExperience(index);
                    }}
                  />
                ))}
              </div>

              <button
                className="nav-button nav-next"
                onClick={nextExperience}
                disabled={currentExperience === experiences.length - 1}
              >
                <span>Próxima</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;