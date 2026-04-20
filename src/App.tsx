/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Cpu, Globe, Mail, Zap, Target, Search, RefreshCw, 
  MapPin, Menu, X, ArrowUp, Monitor, CheckCircle2, ShieldCheck,
  Settings, Layout
} from 'lucide-react';
import { translations } from './lib/translations';

export default function App() {
  const [lang, setLang] = useState<'en'|'pt'>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#030612] text-white font-sans relative overflow-x-hidden selection:bg-[#22d3ee] selection:text-black">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow {
          to { stroke-dashoffset: -20; }
        }
        .anim-line {
          animation: flow 1s linear infinite;
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
        }
      `}} />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] grain"></div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-[100] bg-[#030612]/90 backdrop-blur-xl border-b border-[#4c1d95]/30 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex flex-col items-center justify-center group">
            {/* Logo */}
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-0.5 group-hover:rotate-[15deg] transition-transform duration-500">
              <circle cx="50" cy="20" r="5" stroke="#22d3ee" strokeWidth="3" fill="none" />
              <circle cx="20" cy="50" r="5" stroke="#22d3ee" strokeWidth="3" fill="none" />
              <circle cx="80" cy="50" r="5" stroke="#a855f7" strokeWidth="3" fill="none" />
              <circle cx="50" cy="80" r="5" stroke="#a855f7" strokeWidth="3" fill="none" />
              <path d="M46 24 L24 46" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M54 24 L76 46" stroke="#a855f7" strokeWidth="1.5" />
              <path d="M24 54 L46 76" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M76 54 L54 76" stroke="#a855f7" strokeWidth="1.5" />
              <path d="M30 50 L70 50" stroke="#4c1d95" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="50" cy="4" r="2" fill="#22d3ee" />
              <circle cx="50" cy="96" r="2" fill="#a855f7" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-[8px] text-[#cbd5e1] tracking-[0.2em] leading-none mb-[1px]">WE</span>
              <span className="text-[14px] font-[900] text-[#22d3ee] tracking-[0.14em] leading-none" style={{ textShadow: '0 0 15px rgba(34,211,238,0.5)' }}>BUILD</span>
              <span className="text-[8px] text-[#cbd5e1] tracking-[0.3em] leading-none mt-[2px]">AI 4 U</span>
            </div>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex gap-8 text-[12px] font-[700] text-[#cbd5e1] uppercase tracking-[0.2em]">
              <a href="#about" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#22d3ee] hover:after:w-full after:transition-all">{t.nav.about}</a>
              <a href="#services" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#22d3ee] hover:after:w-full after:transition-all">{t.nav.services}</a>
              <a href="#process" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#22d3ee] hover:after:w-full after:transition-all">{t.nav.process}</a>
              <a href="#contact" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#22d3ee] hover:after:w-full after:transition-all">{t.nav.contact}</a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#100726]/30 p-1 rounded-full border border-white/5 relative overflow-hidden">
                <button 
                  onClick={() => setLang('pt')}
                  className={`relative z-10 px-4 py-1.5 rounded-full text-[10px] font-[900] tracking-widest transition-all duration-500 ${lang === 'pt' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                >
                  {lang === 'pt' && (
                    <motion.div 
                      layoutId="langPill" 
                      className="absolute inset-0 border-[1.5px] border-[#22c55e] rounded-full z-[-1] shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  PT
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`relative z-10 px-4 py-1.5 rounded-full text-[10px] font-[900] tracking-widest transition-all duration-500 ${lang === 'en' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                >
                  {lang === 'en' && (
                    <motion.div 
                      layoutId="langPill" 
                      className="absolute inset-0 border-[1.5px] border-[#22c55e] rounded-full z-[-1] shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  EN
                </button>
              </div>

              <button 
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[70px] bg-[#030612] z-[90] flex flex-col p-10 space-y-8 lg:hidden"
            >
              {[
                { name: t.nav.about, href: '#about' },
                { name: t.nav.services, href: '#services' },
                { name: t.nav.process, href: '#process' },
                { name: t.nav.contact, href: '#contact' }
              ].map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#22d3ee] tracking-wider transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative min-h-[90vh] flex flex-col justify-center items-center text-center">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(76,29,149,0.3)_0%,transparent_70%)] z-0 pointer-events-none blur-[60px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%)] z-0 pointer-events-none blur-[40px]"></div>

        <motion.div className="relative z-10 max-w-[1100px] flex flex-col items-center" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[12px] font-bold uppercase tracking-widest text-[#22d3ee] mb-[32px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {t.hero.badge}
          </motion.div>
          <motion.h1 key={lang} variants={fadeIn} className="text-[44px] sm:text-[64px] lg:text-[86px] leading-[1.0] font-[900] mb-[24px] tracking-[-0.04em] text-white">
            {t.hero.titlePre} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">{t.hero.titleHighlight}</span>
          </motion.h1>
          <motion.p key={lang + 'desc'} variants={fadeIn} className="text-[19px] lg:text-[23px] text-[#cbd5e1] mb-[48px] max-w-[850px] leading-[1.6] font-[300]">
            {t.hero.desc}
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-16">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#6d28d9] text-white font-[800] text-[16px] rounded-lg border border-[#a855f7] shadow-[0_0_40px_rgba(109,40,217,0.5)] transition-all hover:scale-105 uppercase tracking-widest">
              {t.hero.cta} <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-white/10 pt-12">
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#22d3ee]"></div>
                <span className="text-[13px] font-[700] uppercase tracking-widest text-[#cbd5e1]">{stat}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-[#09041a] border-y border-[#4c1d95]/30 relative scroll-mt-20">
         <div className="absolute bottom-[-100px] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,211,238,0.06)_0%,transparent_70%)] z-0 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="order-2 lg:order-1">
               <motion.h2 variants={fadeIn} className="text-[#22d3ee] font-bold text-[14px] lg:text-[16px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.7)]"></div>
                  {t.about.title}
               </motion.h2>
               <motion.p variants={fadeIn} className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#f8fafc] leading-[1.7] mb-8 font-[400]" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
               <motion.p variants={fadeIn} className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#cbd5e1] leading-[1.7] font-[400]" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
            </motion.div>

             {/* Workflow Graphic */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-1 lg:order-2 relative w-full h-[400px] lg:h-[550px] bg-[#0c051f] rounded-2xl border border-[#4c1d95]/50 shadow-[0_0_60px_rgba(76,29,149,0.15)] overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#4c1d951a_1px,transparent_1px),linear-gradient(to_bottom,#4c1d951a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-50"></div>
               <div className="absolute top-[20%] left-[20%] w-[180px] h-[180px] bg-[#22d3ee]/10 rounded-full blur-[90px] animate-pulse"></div>
               <div className="absolute bottom-[20%] right-[20%] w-[180px] h-[180px] bg-[#a855f7]/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

               {/* Central Brain/Core logo */}
               <div className="absolute z-20 bg-[#060212] border border-[#a855f7] shadow-[0_0_40px_rgba(168,85,247,0.4)] rounded-xl flex flex-col items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-[#22d3ee] w-[110px] h-[110px]">
                 <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="20" r="5" stroke="#22d3ee" strokeWidth="4" fill="none" />
                    <circle cx="20" cy="50" r="5" stroke="#22d3ee" strokeWidth="4" fill="none" />
                    <circle cx="80" cy="50" r="5" stroke="#a855f7" strokeWidth="4" fill="none" />
                    <circle cx="50" cy="80" r="5" stroke="#a855f7" strokeWidth="4" fill="none" />
                    <path d="M46 24 L24 46" stroke="#22d3ee" strokeWidth="2" />
                    <path d="M54 24 L76 46" stroke="#a855f7" strokeWidth="2" />
                    <path d="M24 54 L46 76" stroke="#22d3ee" strokeWidth="2" />
                    <path d="M76 54 L54 76" stroke="#a855f7" strokeWidth="2" />
                    <path d="M30 50 L70 50" stroke="#4c1d95" strokeWidth="2" strokeDasharray="4 4" />
                 </svg>
                 <span className="text-[9px] font-bold text-[#22d3ee] tracking-[0.2em] mt-1 uppercase">Core</span>
               </div>

               {/* SVG Connecting Lines Workflow logic */}
               <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 15% 50% L 35% 50%" stroke="#4c1d95" strokeWidth="2" fill="none" strokeDasharray="6 6" className="anim-line" />
                  <path d="M 65% 50% C 75% 50%, 75% 25%, 85% 25%" stroke="#a855f7" strokeWidth="2" fill="none" />
                  <path d="M 65% 50% C 75% 50%, 75% 50%, 85% 50%" stroke="#4c1d95" strokeWidth="2" fill="none" strokeDasharray="6 6" className="anim-line" />
                  <path d="M 65% 50% C 75% 50%, 75% 75%, 85% 75%" stroke="#22d3ee" strokeWidth="2" fill="none" />
               </svg>

               {/* Nodes */}
               <div className="absolute left-[8%] lg:left-[10%] top-1/2 -translate-y-1/2 z-20 w-[60px] h-[60px] bg-[#0a041f] border border-[#22d3ee] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                 <Zap className="w-6 h-6 text-[#22d3ee]" />
               </div>
               <div className="absolute right-[8%] lg:right-[10%] top-[25%] -translate-y-1/2 z-20 w-[50px] h-[50px] bg-[#0a041f] border border-[#a855f7] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                 <Monitor className="w-5 h-5 text-[#a855f7]" />
               </div>
               <div className="absolute right-[8%] lg:right-[10%] top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] bg-[#0a041f] border border-[#4c1d95] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(76,29,149,0.3)]">
                 <Settings className="w-5 h-5 text-[#a855f7]" />
               </div>
               <div className="absolute right-[8%] lg:right-[10%] top-[75%] -translate-y-1/2 z-20 w-[50px] h-[50px] bg-[#0a041f] border border-[#22d3ee] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                 <Layout className="w-5 h-5 text-[#22d3ee]" />
               </div>
            </motion.div>
         </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 relative scroll-mt-20">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-[28px] sm:text-[36px] font-[800] mb-12 text-center text-white tracking-tight">
          {t.servicesTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {t.services.map((svc, i) => (
            <motion.div 
              key={i + lang} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              className={`bg-[#0c051f]/80 backdrop-blur-sm p-[32px] rounded-xl border border-[#4c1d95]/40 hover:border-[#22d3ee]/60 hover:bg-[#0c051f] transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)] group relative overflow-hidden ${i === 3 ? 'lg:col-span-1 lg:ml-auto' : ''} ${i === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex items-center gap-[16px] mb-[24px] relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0c051f] to-[#030612] border border-[#6d28d9]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#22d3ee] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500">
                  <svc.icon className="w-7 h-7 text-[#22d3ee]" />
                </div>
              </div>
              <h3 className="text-[20px] text-white tracking-widest font-black mb-4 uppercase">{svc.title}</h3>
              <p className="text-[15px] text-[#cbd5e1] leading-[1.8] opacity-80 relative z-10 font-[300] tracking-wide">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="process" className="py-24 lg:py-32 bg-[#09041a] border-y border-[#4c1d95]/30 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-[28px] sm:text-[36px] font-[800] mb-20 text-center text-white tracking-tight">
            {t.processTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#4c1d95] via-[#a855f7] to-[#22d3ee] opacity-50 z-0"></div>

            {t.process.map((step, i) => (
              <motion.div 
                key={i + step.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } }
                }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-[#0c051f] border border-[#a855f7]/40 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)] group-hover:scale-110 group-hover:border-[#22d3ee] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500">
                   <step.icon className="w-8 h-8 text-[#22d3ee]" />
                </div>
                <h3 className="text-[17px] font-[700] text-white mb-3">{step.title}</h3>
                <p className="text-[14px] text-[#cbd5e1] leading-[1.6]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack / Trusted Tech Section */}
      <section className="py-20 border-t border-white/5 bg-[#030612]/50">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {['React', 'TypeScript', 'Node.js', 'Firebase', 'Vite', 'Tailwind', 'Python', 'OpenAI'].map((tech) => (
               <span key={tech} className="text-[12px] font-black uppercase tracking-[0.4em] text-white hover:text-[#22d3ee] cursor-default">{tech}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-gradient-to-br from-[#1c0b3b] to-[#0c051f] border border-[#a855f7]/50 rounded-3xl p-12 lg:p-20 shadow-[0_20px_60px_rgba(109,40,217,0.3)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_50%)]"></div>
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-white mb-8 relative z-10 max-w-2xl mx-auto">{t.ctaFinal.title}</h2>
            <a href="#contact" className="relative z-10 inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#22d3ee] text-[#030612] font-[800] text-[16px] rounded-lg transition-all hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.5)] uppercase tracking-widest">
              {t.ctaFinal.button} <ArrowRight className="w-5 h-5 ml-1" />
            </a>
         </motion.div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="pt-24 bg-[#09041a] border-t border-[#4c1d95]/40 scroll-mt-20 relative">
        <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(76,29,149,0.08)_0%,transparent_70%)] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center space-y-12">
               <div>
                  <h2 className="text-[40px] md:text-[56px] font-[900] text-white mb-6 tracking-tight">{t.contact.title}</h2>
                  <p className="text-[#cbd5e1] text-[18px] md:text-[20px] leading-[1.6] max-w-2xl mx-auto">{t.contact.message}</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <div className="flex flex-col items-center gap-4 bg-[#0c051f]/50 p-8 rounded-2xl border border-[#4c1d95]/30">
                     <div className="w-16 h-16 bg-[#0c051f] border border-[#4c1d95]/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(76,29,149,0.3)]">
                        <Mail className="w-7 h-7 text-[#22d3ee]" />
                     </div>
                     <div className="text-center">
                        <div className="text-[12px] text-[#22d3ee] uppercase tracking-[0.2em] font-black mb-1">Email</div>
                        <div className="text-[17px] font-[700] text-white">webuildai4u.contacts@gmail.com</div>
                     </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 bg-[#0c051f]/50 p-8 rounded-2xl border border-[#4c1d95]/30">
                     <div className="w-16 h-16 bg-[#0c051f] border border-[#4c1d95]/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(76,29,149,0.3)]">
                        <MapPin className="w-7 h-7 text-[#a855f7]" />
                     </div>
                     <div className="text-center">
                        <div className="text-[12px] text-[#a855f7] uppercase tracking-[0.2em] font-black mb-1">{t.contact.locationInfo}</div>
                        <div className="text-[17px] font-[700] text-white">{t.contact.portugal}</div>
                     </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 bg-[#0c051f]/50 p-8 rounded-2xl border border-[#4c1d95]/30">
                     <div className="w-16 h-16 bg-[#0c051f] border border-[#4c1d95]/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(76,29,149,0.3)]">
                        <Globe className="w-7 h-7 text-[#22d3ee]" />
                     </div>
                     <div className="text-center">
                        <div className="text-[12px] text-[#22d3ee] uppercase tracking-[0.2em] font-black mb-1">{t.contact.scopeInfo}</div>
                        <div className="text-[17px] font-[700] text-white">{t.contact.europe}</div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#4c1d95]/30 py-12 bg-[#030612] relative z-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                 <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="50" cy="20" r="5" stroke="#22d3ee" strokeWidth="3" fill="none" />
                   <circle cx="20" cy="50" r="5" stroke="#22d3ee" strokeWidth="3" fill="none" />
                   <circle cx="80" cy="50" r="5" stroke="#a855f7" strokeWidth="3" fill="none" />
                   <circle cx="50" cy="80" r="5" stroke="#a855f7" strokeWidth="3" fill="none" />
                   <path d="M46 24 L24 46" stroke="#22d3ee" strokeWidth="1.5" />
                   <path d="M54 24 L76 46" stroke="#a855f7" strokeWidth="1.5" />
                   <path d="M24 54 L46 76" stroke="#22d3ee" strokeWidth="1.5" />
                   <path d="M76 54 L54 76" stroke="#a855f7" strokeWidth="1.5" />
                   <path d="M30 50 L70 50" stroke="#4c1d95" strokeWidth="1.5" strokeDasharray="4 4" />
                   <circle cx="50" cy="4" r="2" fill="#22d3ee" />
                   <circle cx="50" cy="96" r="2" fill="#a855f7" />
                 </svg>
                 <span className="text-[18px] font-black tracking-tighter">WeBuildAI4u</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#cbd5e1]/40 tracking-widest font-bold uppercase">
                <ShieldCheck className="w-3 h-3 text-[#22d3ee]" />
                Zero-Trust Encrypted Environment
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <p className="text-[#cbd5e1]/40 text-[11px] font-medium tracking-widest uppercase">
                © {new Date().getFullYear()} WeBuildAI4u. {t.footer.est} 2024.
              </p>
              <div className="flex gap-6 text-[10px] text-[#cbd5e1]/30 font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-[#22d3ee] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#22d3ee] transition-colors">Terms</a>
                <a href="#" className="hover:text-[#22d3ee] transition-colors">Security</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#22d3ee] text-black rounded-full shadow-lg shadow-[#22d3ee]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
}
