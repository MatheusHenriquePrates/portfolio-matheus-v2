/**
 * Componente principal da aplicação
 *
 * Este componente é o ponto de entrada da aplicação e gerencia a estrutura
 * completa do portfólio. Renderiza todas as seções principais em ordem sequencial.
 *
 * Estrutura da aplicação:
 * - Navbar: Barra de navegação fixa com links para as seções
 * - Hero: Seção inicial com apresentação e animação de digitação
 * - About: Biografia e jornada profissional
 * - Projects: Portfólio de projetos desenvolvidos
 * - Skills: Certificações e habilidades técnicas
 * - Footer: Informações de contato e links para redes sociais
 * - ScrollToTop: Botão flutuante para retornar ao topo da página
 */

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;