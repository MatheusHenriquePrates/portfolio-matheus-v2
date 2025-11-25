/**
 * Componente Projects (Projetos)
 *
 * Exibe portfólio de projetos em carrossel responsivo com modais detalhados.
 * Utiliza Swiper para navegação entre projetos e galeria de imagens.
 *
 * Estados:
 * - selectedProject: Projeto atualmente selecionado no modal
 * - currentImageIndex: Índice da imagem atual no carrossel do modal
 *
 * Funcionalidades:
 * - Carrossel de projetos responsivo (Swiper)
 * - Cards de projetos com thumbnail, categoria e tecnologias
 * - Modal com detalhes completos do projeto
 * - Carrossel de imagens dentro do modal
 * - Links para GitHub (frontend/backend) e demo live
 * - Descrição detalhada, funcionalidades e desafios
 * - Navegação por setas e indicadores
 * - Autoplay no carrossel principal
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaReact } from 'react-icons/fa';
import { projects } from '../../data/projectsData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Abre modal de detalhes do projeto e bloqueia scroll da página
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  // Fecha modal e restaura scroll da página
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Avança para próxima imagem no carrossel do modal
  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  // Volta para imagem anterior no carrossel do modal
  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-line"></span>
            Projetos em Destaque
          </h2>
          <p className="section-subtitle">
            Explore alguns dos meus projetos mais recentes e relevantes
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="project-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-thumbnail">
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                    />
                  ) : (
                    <div className="project-thumbnail-placeholder">
                      <FaReact />
                    </div>
                  )}
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>

                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <button 
                    className="project-details-btn"
                    onClick={() => openModal(project)}
                  >
                    Ver detalhes
                    <FaChevronRight />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal de Detalhes com Carrossel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Carrossel de Imagens */}
              <div className="modal-image-carousel">
                <button className="modal-close-top" onClick={closeModal}>
                  <FaTimes />
                </button>
                
                {selectedProject.images[currentImageIndex] ? (
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                    className="modal-carousel-image"
                  />
                ) : (
                  <div className="modal-image-placeholder">
                    <FaReact style={{ fontSize: '5rem', color: 'rgba(255, 255, 255, 0.3)' }} />
                    <p>Imagem não disponível</p>
                  </div>
                )}

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="carousel-btn carousel-btn-prev"
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="carousel-btn carousel-btn-next"
                      onClick={nextImage}
                      disabled={currentImageIndex === selectedProject.images.length - 1}
                    >
                      <FaChevronRight />
                    </button>

                    <div className="carousel-indicators">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Conteúdo do Projeto */}
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-date">{selectedProject.date}</p>
                </div>

                <div className="modal-section">
                  <h3>Sobre o Projeto</h3>
                  <p>{selectedProject.detailedDescription}</p>
                </div>

                <div className="modal-section">
                  <h3>Tecnologias Utilizadas</h3>
                  <div className="modal-tech">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Principais Funcionalidades</h3>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Desafios e Aprendizados</h3>
                  <p>{selectedProject.challenges}</p>
                </div>

                <div className="modal-links">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {selectedProject.githubFrontend && (
                    <a href={selectedProject.githubFrontend} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaGithub /> Frontend
                    </a>
                  )}
                  {selectedProject.githubBackend && (
                    <a href={selectedProject.githubBackend} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaGithub /> Backend
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link modal-link-primary">
                      <FaExternalLinkAlt /> Ver Projeto Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;