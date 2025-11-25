/**
 * Componente ScrollToTop (Botão Voltar ao Topo)
 *
 * Botão flutuante que aparece após rolar a página e permite retornar ao topo.
 * Visível apenas quando o usuário rolou mais de 300px.
 *
 * Estados:
 * - isVisible: Controla visibilidade do botão (true quando scroll > 300px)
 *
 * Funcionalidades:
 * - Aparece/desaparece automaticamente baseado no scroll
 * - Animações suaves de entrada/saída (Framer Motion)
 * - Scroll suave até o topo da página
 * - Hover e tap effects para melhor feedback visual
 * - Acessibilidade com aria-label
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Monitora scroll para mostrar/ocultar o botão
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Rola suavemente até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;