/**
 * Ponto de entrada da aplicação React
 *
 * Responsável por inicializar a aplicação e renderizar o componente principal
 * no elemento root do DOM. Utiliza React 18 com createRoot para melhor performance.
 *
 * React.StrictMode: Ativa verificações adicionais e avisos em desenvolvimento
 * para identificar potenciais problemas no código.
 *
 * reportWebVitals: Função opcional para medição de performance da aplicação.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
