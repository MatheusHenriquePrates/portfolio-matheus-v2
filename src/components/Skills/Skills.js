/**
 * Componente Skills (Certificações e Habilidades)
 *
 * Seção que exibe certificações profissionais, habilidades técnicas e cursos.
 * Inclui carrossel de certificações e visualização em modal de imagens.
 *
 * Estados:
 * - currentCert: Índice da certificação atualmente exibida
 * - showImageModal: Controla exibição do modal de imagem em tela cheia
 *
 * Funcionalidades:
 * - Carrossel de certificações com navegação
 * - Visualização em tela cheia de certificados (modal)
 * - Exibição de habilidades técnicas organizadas por categoria
 * - Lista de cursos adicionais
 * - Animações de entrada com Framer Motion
 * - Contador de certificações
 * - Links para credenciais quando disponíveis
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaChevronRight, FaTimes } from 'react-icons/fa';
import { certifications, skills, additionalCourses } from '../../data/certificationsData';
import './Skills.css';

const Skills = () => {
  const [currentCert, setCurrentCert] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  // Avança para próxima certificação
  const nextCert = () => {
    if (currentCert < certifications.length - 1) {
      setCurrentCert(prev => prev + 1);
    }
  };

  // Volta para certificação anterior
  const prevCert = () => {
    if (currentCert > 0) {
      setCurrentCert(prev => prev - 1);
    }
  };

  // Abre modal de imagem em tela cheia e bloqueia scroll
  const openImageModal = () => {
    setShowImageModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Fecha modal e restaura scroll da página
  const closeImageModal = () => {
    setShowImageModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        {/* Certificações */}
        <motion.div
          className="certifications-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            Certificações e Cursos
          </h2>

          <div className="cert-display">
            <div className="cert-card">
              <div className="cert-image-container" onClick={openImageModal}>
                <div className="cert-placeholder">
                  <img 
                    src={certifications[currentCert].image} 
                    alt={certifications[currentCert].title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <FaAward />
                </div>
              </div>

              <div className="cert-info">
                <span className="cert-issuer">{certifications[currentCert].issuer}</span>
                <h3 className="cert-title">{certifications[currentCert].title}</h3>
                <p className="cert-date">{certifications[currentCert].date}</p>
                <p className="cert-description">{certifications[currentCert].description}</p>

                <div className="cert-skills">
                  {certifications[currentCert].skills.map((skill, index) => (
                    <span key={index} className="cert-skill-badge">{skill}</span>
                  ))}
                </div>

                {certifications[currentCert].credentialId && (
                  <p className="cert-credential">
                    <strong>ID:</strong> {certifications[currentCert].credentialId}
                  </p>
                )}
              </div>
            </div>

            {/* Navegação */}
            <div className="cert-navigation">
              <button
                className="cert-nav-btn"
                onClick={prevCert}
                disabled={currentCert === 0}
              >
                ‹ Anterior
              </button>
              <span className="cert-counter">
                {currentCert + 1} / {certifications.length}
              </span>
              <button
                className="cert-nav-btn"
                onClick={nextCert}
                disabled={currentCert === certifications.length - 1}
              >
                Próximo ›
              </button>
            </div>
          </div>
        </motion.div>

        {/* Divisor */}
        <div className="section-divider"></div>

        {/* Habilidades Técnicas */}
        <motion.div
          className="skills-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            Habilidades Técnicas
          </h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="skill-category-title">
                  <FaChevronRight />
                  {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                </h3>
                <div className="skill-items">
                  {items.map((skill, idx) => (
                    <span key={idx} className="skill-item">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cursos Adicionais */}
        <motion.div
          className="additional-courses"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="additional-title">Outros Cursos e Formações</h3>
          <p className="additional-list">
            {additionalCourses.join(' • ')}
          </p>
        </motion.div>
      </div>

      {/* Modal de Imagem em Tela Cheia */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <button className="image-modal-close" onClick={closeImageModal}>
              <FaTimes />
            </button>
            <motion.img
              src={certifications[currentCert].image}
              alt={certifications[currentCert].title}
              className="image-modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;