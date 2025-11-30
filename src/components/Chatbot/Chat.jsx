import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef(null);

  // Gera ou recupera sessionId
  useEffect(() => {
    let storedSessionId = localStorage.getItem('chatSessionId');
    if (!storedSessionId) {
      storedSessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatSessionId', storedSessionId);
    }
    setSessionId(storedSessionId);
  }, []);

  // Auto-scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://portfolio-chatbot-n8n.onrender.com/webhook/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          sessionId: sessionId
        })
      });

      if (!response.ok) throw new Error('Erro na resposta');

      let aiResponse = await response.text();
      // Remove o "=" do início se existir
      aiResponse = aiResponse.replace(/^=/, '').trim();

      const assistantMessage = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button 
        className={`chat-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        💬
      </button>

      {/* Janela do chat */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">MP</div>
              <div>
                <h3>Matheus Prates</h3>
                <span className="chat-status">● Online</span>
              </div>
            </div>
            <button 
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar chat"
            >
              ✕
            </button>
          </div>

          {/* Mensagens */}
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-welcome">
                <h4>👋 Olá! Sou o assistente virtual do Matheus.</h4>
                <p>Pergunte sobre projetos, habilidades ou experiência profissional!</p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`chat-message ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="chat-message assistant-message">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <textarea
              className="chat-input"
              placeholder="Digite sua mensagem..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rows="1"
              disabled={isLoading}
            />
            <button 
              className="chat-send-button"
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;