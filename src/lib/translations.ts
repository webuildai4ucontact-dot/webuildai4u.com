import { Monitor, Search, Target, Cpu, RefreshCw, ShieldCheck, Zap } from 'lucide-react';

export const translations = {
  en: {
    nav: { about: "About", services: "Services", process: "Process", cases: "Results", pricing: "Pricing", contact: "Contact", lang: "PT" },
    hero: {
      badge: "High-Performance Assets",
      titlePre: "A Website is Not Decoration. ",
      titleHighlight: "It's Your Competitive Weapon.",
      desc: "Stop losing clients to outdated sites or the lack of them. We build ultra-secure digital fortresses to take your business to another level through smart automation.",
      cta: "Secure Your Weapon",
      stat1: "67% users judge you in <3s",
      stat2: "40% lost conversions",
      stat3: "8-12% Conversion Rate"
    },
    about: {
      title: "About Us",
      p1: "We don't build common software. We believe that all companies, regardless of their size, deserve access to intelligent tools. We combine website creation with artificial intelligence-based automation to developed digital solutions tailored to the needs of each client. Our mission is to transform complex processes into simple and efficient systems.",
      p2: "In a constantly evolving market, automation is the competitive advantage that separates companies that grow from those that fail. WeBuildAI4U exists to put this advantage at the service of your business through high-performance websites and intelligent systems that operate continuously and autonomously. We build for the future. <b class='text-[#4338ca]'>We don't sell layouts, we sell market dominance through technical excellence.</b>"
    },
    servicesTitle: "Services",
    services: [
      { title: "High-Performance Web Development", icon: Monitor, desc: "We develop custom digital platforms optimized for speed, user experience, and conversion. Every project is built to consistently and measurably transform visitors into customers." },
      { title: "Security & Reliability", icon: ShieldCheck, desc: "We ensure secure and stable digital infrastructures with SSL Certificate, 99.9% uptime, and continuous protection of your company's data and digital reputation." },
      { title: "Intelligent Automation", icon: Zap, desc: "We implement AI-based automation systems that reduce manual intervention, optimize operational processes, and allow your company to scale without proportionally increasing resources." }
    ],
    processTitle: "The Deployment Flow",
    process: [
      { title: "Diagnosis & Analysis", icon: Search, desc: "Mapping processes and inefficiencies to define strategic goals and build a solid foundation." },
      { title: "Elite Development", icon: Target, desc: "Crafting custom digital architectures focused on high performance, security, and scalability." },
      { title: "Integration & AI", icon: Cpu, desc: "Injecting AI and automating workflows with your current tools for a seamless transition." },
      { title: "ROI Optimization", icon: RefreshCw, desc: "Data-driven monitoring to ensure continuous improvement and maximum investment return." }
    ],
    ctaFinal: {
      title: "Ready to stop decorating and start dominating?",
      button: "Initiate Deployment"
    },
    contact: {
      title: "Strategic Briefing",
      message: "Ready to deploy your next digital asset? Connect with our operations center.",
      locationInfo: "Ops Center",
      scopeInfo: "Scale",
      portugal: "Lisbon",
      europe: "Global"
    },
    footer: {
      est: "EST."
    }
  },
  pt: {
    nav: { about: "Sobre", services: "Serviços", process: "Processo", cases: "Resultados", pricing: "Preços", contact: "Contacto", lang: "EN" },
    hero: {
      badge: "Ativos de Alta Performance",
      titlePre: "Um Website Não é Decoração. ",
      titleHighlight: "É a Sua Arma Competitiva.",
      desc: "Pare de perder clientes por sites desatualizados ou por falta deles. Construímos fortalezas digitais ultra-seguras para levar o seu negócio a outro nível através de automatização inteligente.",
      cta: "Garanta a sua Arma",
      stat1: "67% julgam em <3s",
      stat2: "40% conversões perdidas",
      stat3: "8-12% Taxa de Conversão"
    },
    about: {
      title: "Sobre Nós",
      p1: "Não construímos softwares comuns. Acreditamos que todas as empresas, independentemente da sua dimensão, merecem acesso a ferramentas inteligentes. Combinamos criação de sites com automatização baseada em inteligência artificial para desenvolver soluções digitais adaptadas às necessidades de cada cliente. A nossa missão é transformar processos complexos em sistemas simples e eficientes.",
      p2: "Num mercado em constante evolução, a automatização é a vantagem competitiva que separa as empresas que crescem das que fracassam. A WeBuildAI4U existe para colocar essa vantagem ao serviço do seu negócio através de websites de alta performance e sistemas inteligentes que operam de forma contínua e autónoma. Construímos para o futuro. <b class='text-[#4338ca]'>Não vendemos layouts, vendemos domínio de mercado através de excelência técnica.</b>"
    },
    servicesTitle: "Serviços",
    services: [
      { title: "Desenvolvimento Web de Alta Performance", icon: Monitor, desc: "Desenvolvemos plataformas digitais personalizadas, otimizadas para velocidade, experiência do utilizador e conversão. Cada projeto é construído com o objetivo de transformar visitantes em clientes de forma consistente e mensurável." },
      { title: "Segurança e Fiabilidade", icon: ShieldCheck, desc: "Garantimos infraestruturas digitais seguras e estáveis, com Certificado SSL, disponibilidade de 99,9% e proteção contínua dos dados e da reputação digital da sua empresa." },
      { title: "Automatização Inteligente", icon: Zap, desc: "Implementamos sistemas de automatização baseados em inteligência artificial que reduzem a intervenção manual, otimizam processos operacionais e permitem que a sua empresa escale sem aumentar proporcionalmente os recursos." }
    ],
    processTitle: "Fluxo de Implementação",
    process: [
      { title: "Diagnóstico e Análise", icon: Search, desc: "Mapeamos processos e ineficiências para traçar objetivos estratégicos e criar uma base sólida." },
      { title: "Desenvolvimento Elite", icon: Target, desc: "Criamos arquiteturas digitais personalizadas com foco em performance, segurança e escala." },
      { title: "Integração e IA", icon: Cpu, desc: "Injetamos IA e automatizamos fluxos com as suas ferramentas atuais para uma transição fluida." },
      { title: "Otimização de ROI", icon: RefreshCw, desc: "Monitorizamos o desempenho para garantir evolução constante e ROI máximo." }
    ],
    ctaFinal: {
      title: "Pronto para parar de decorar e começar a dominar?",
      button: "Iniciar Implementação"
    },
    contact: {
      title: "Contacte-nos",
      message: "Pronto para implementar o seu próximo ativo digital? Ligue-se ao nosso centro de operações.",
      locationInfo: "Centro de Ops",
      scopeInfo: "Escala",
      portugal: "Lisboa",
      europe: "Global"
    },
    footer: {
      est: "FUND."
    }
  }
} as const;
