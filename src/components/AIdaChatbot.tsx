import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User, Loader2, Sparkles, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIdaChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIdaChatbot({ isOpen, onClose, lang }: AIdaChatbotProps) {
  // Persist messages in localStorage so they don't lose progress if the page is closed/refreshed
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem('webuildai4u_aida_chat_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('webuildai4u_aida_chat_history', JSON.stringify(messages));
    } else {
      localStorage.removeItem('webuildai4u_aida_chat_history');
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome = lang === 'pt' 
        ? "Olá. Sou a AIDA, assistente virtual da WeBuildAI4U. Como posso ajudar com os vossos projetos de desenvolvimento web de alta performance e automatização inteligente hoje?"
        : "Hello. I am AIDA, virtual assistant for WeBuildAI4U. How may I assist you with your high-performance web development and intelligent automatization projects today?";
      setMessages([{ role: 'assistant', content: welcome }]);
    }
  }, [isOpen, lang, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerating]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const currentInput = input.trim();
    setInput('');

    const newMessages = [...messages, { role: 'user', content: currentInput }];
    setMessages(newMessages);
    setIsGenerating(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, lang })
      });

      if (!response.ok) {
        throw new Error('API server returned error');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (error: any) {
      console.error("Chat error:", error);
      const errorMsg = lang === 'pt'
        ? "Ocorreu um erro ao comunicar com a AIDA. Por favor, tente novamente."
        : "An error occurred while communicating with AIDA. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleResetHistory = () => {
    setShowConfirmReset(true);
  };

  const confirmResetAction = () => {
    setMessages([]);
    setShowConfirmReset(false);
  };

  const hasLeadQualifierInfo = (text: string) => {
    return text.toLowerCase().includes('webuildai4u.contact@gmail.com');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[190] cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-[#0c051f] border-l border-[#22d3ee]/30 z-[200] flex flex-col shadow-[0_0_50px_rgba(34,211,238,0.2)] overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#22d3ee]/20 bg-[#070314] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/40 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Bot className="w-5 h-5 text-[#22d3ee]" />
                </div>
                <div>
                  <h3 className="text-white font-[900] text-base tracking-wide uppercase">AIDA AI</h3>
                  <p className="text-[#22d3ee] text-[10px] font-bold tracking-widest uppercase">{lang === 'pt' ? 'ASSISTENTE VIRTUAL' : 'VIRTUAL ASSISTANT'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Reset Conversation Button styled with site tones */}
                <button 
                  onClick={handleResetHistory}
                  className="px-3.5 py-1.5 rounded-lg border border-[#6d28d9]/60 hover:border-[#22d3ee]/60 bg-[#6d28d9]/15 hover:bg-[#6d28d9]/35 text-slate-300 hover:text-[#22d3ee] transition-all text-[11px] font-black tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(109,40,217,0.15)]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'pt' ? 'Limpar Conversa' : 'Clear Chat'}</span>
                </button>
                
                <button 
                  onClick={onClose}
                  className="w-9 h-9 rounded-full border border-white/10 hover:border-[#22d3ee]/30 hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#22d3ee] transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[radial-gradient(ellipse_at_bottom,rgba(76,29,149,0.15)_0%,transparent_70%)]">
              {messages.map((m, index) => {
                const isAssistant = m.role === 'assistant';
                return (
                  <div key={index} className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
                    {isAssistant && (
                      <div className="w-8 h-8 rounded-full bg-[#6d28d9]/20 border border-[#6d28d9]/40 flex items-center justify-center shrink-0 mt-1">
                        <Bot className="w-4 h-4 text-[#a855f7]" />
                      </div>
                    )}
                    <div className="flex flex-col max-w-[80%]">
                      <div className={`p-4 rounded-xl text-sm leading-relaxed ${isAssistant ? 'bg-[#0f0729] border border-[#6d28d9]/20 text-slate-100 rounded-tl-none' : 'bg-[#6d28d9] text-white rounded-tr-none shadow-lg shadow-[#6d28d9]/20'}`}>
                        {m.content}
                      </div>
                      
                      {isAssistant && hasLeadQualifierInfo(m.content) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start gap-2 text-xs text-emerald-300"
                        >
                          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold uppercase tracking-wider mb-1">{lang === 'pt' ? 'Lead Qualificado!' : 'Lead Qualified!'}</p>
                            <p className="opacity-90">{lang === 'pt' ? 'Entre em contacto connosco por email para iniciar o seu projeto de automatização.' : 'Contact us via email to start your automatization project.'}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    {!isAssistant && (
                      <div className="w-8 h-8 rounded-full bg-[#22d3ee]/20 border border-[#22d3ee]/40 flex items-center justify-center shrink-0 mt-1">
                        <User className="w-4 h-4 text-[#22d3ee]" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isGenerating && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#6d28d9]/20 border border-[#6d28d9]/40 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-[#a855f7]" />
                  </div>
                  <div className="bg-[#0f0729] border border-[#6d28d9]/20 p-4 rounded-xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-[#22d3ee] animate-spin" />
                    <span className="text-xs text-[#22d3ee] tracking-widest font-black uppercase animate-pulse">
                      {lang === 'pt' ? 'AIDA está a responder...' : 'AIDA is replying...'}
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-4 border-t border-[#22d3ee]/20 bg-[#070314] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isGenerating}
                placeholder={lang === 'pt' ? 'Pergunte à AIDA...' : 'Ask AIDA...'}
                className="flex-1 px-4 py-3 bg-[#0a041a] border border-[#6d28d9]/30 rounded-lg text-sm text-white focus:outline-none focus:border-[#22d3ee] transition-all disabled:opacity-50 placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={isGenerating || !input.trim()}
                className="px-5 py-3 bg-[#6d28d9] border border-[#a855f7] rounded-lg text-white hover:bg-[#5b21b6] disabled:opacity-50 disabled:bg-slate-800 disabled:border-slate-700 transition-all flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Custom confirmation overlay for clearing history */}
            <AnimatePresence>
              {showConfirmReset && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#070314]/95 backdrop-blur-md z-[210] flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/40 flex items-center justify-center text-[#ef4444] mb-6 shadow-[0_0_25px_rgba(239,68,68,0.25)]">
                    <RotateCcw className="w-8 h-8" />
                  </div>
                  <h4 className="text-white font-[950] text-lg uppercase tracking-wider mb-2">
                    {lang === 'pt' ? 'Limpar Conversa?' : 'Clear Conversation?'}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xs mb-8 leading-relaxed">
                    {lang === 'pt' 
                      ? 'Isto irá apagar de forma permanente todo o histórico de chat com a assistente AIDA.' 
                      : 'This will permanently delete all your chat history with assistant AIDA.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[280px]">
                    <button
                      type="button"
                      onClick={confirmResetAction}
                      className="flex-1 py-3 px-4 bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-black text-[11px] uppercase tracking-widest rounded-lg transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer border-none shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                    >
                      {lang === 'pt' ? 'Sim, Limpar' : 'Yes, Clear'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowConfirmReset(false)}
                      className="flex-1 py-3 px-4 bg-[#6d28d9]/25 hover:bg-[#6d28d9]/45 text-slate-300 hover:text-white border border-[#6d28d9]/50 font-black text-[11px] uppercase tracking-widest rounded-lg transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                    >
                      {lang === 'pt' ? 'Cancelar' : 'Cancel'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
