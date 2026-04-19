import { Monitor, Settings, Lightbulb, Search, Target, Cpu, RefreshCw, ShieldCheck, Briefcase, Rocket, Layout, Zap, CheckCircle2 } from 'lucide-react';

export const translations = {
  en: {
    nav: { about: "About", services: "Services", process: "Process", cases: "Results", pricing: "Pricing", contact: "Contact", lang: "PT" },
    hero: {
      badge: "High-Performance Assets",
      titlePre: "A Website is Not Decoration. ",
      titleHighlight: "It's Your Competitive Weapon.",
      desc: "Stop losing conversions to mediocrity. We build ultra-secure, high-speed digital fortresses that transform 2% interest into 8%+ ROI through smart automation.",
      cta: "Secure Your Weapon",
      stat1: "67% users judge you in <3s",
      stat2: "40% lost conversions",
      stat3: "8-12% Conversion Rate"
    },
    about: {
      title: "The WeBuildAI4u Paradigm",
      p1: "We don't build standard software. We architect high-performance digital engines. In a market full of noise, companies that fail are those with 'decoration' sites. Companies that win possess scalable, high-speed weapons.",
      p2: "Our core is Web Engineering. Our differentiator is Zero-Trust Security. Our turbocharge is AI Automation. <b class='text-[#4338ca]'>We don't sell layouts; we sell market dominance through technical excellence.</b>"
    },
    servicesTitle: "Core Infrastructure",
    services: [
      { title: "High-Conversion Web Dev", icon: Monitor, desc: "Ultra-fast, bespoke engineering focused on speed, conversion (8%+ target), and elite design." },
      { title: "Zero-Trust Security", icon: ShieldCheck, desc: "Military-grade infrastructure with 99.9% uptime and encrypted brand governance." },
      { title: "AI Turbo-Automation", icon: Zap, desc: "Scaling systems to handle heavy lifting, lead qualification, and automated workflows." }
    ],
    processTitle: "The Deployment Flow",
    process: [
      { title: "ROI Diagnosis", icon: Search, desc: "We map conversion leaks and define where your digital weapon needs sharpening." },
      { title: "Elite Engineering", icon: Target, desc: "Full-stack development of your redundant, high-speed digital architecture." },
      { title: "Systems Integration", icon: Cpu, desc: "Injecting custom AI and automation layers for synchronous operational scaling." },
      { title: "Continuous Dominance", icon: RefreshCw, desc: "Resilience management and data-driven optimization to ensure peak ROI." }
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
      desc: "Pare de perder conversões por mediocridade. Construímos fortalezas digitais ultra-seguras que transformam 2% de interesse em 8%+ ROI através de automação inteligente.",
      cta: "Garanta a sua Arma",
      stat1: "67% julgam em <3s",
      stat2: "40% conversões perdidas",
      stat3: "8-12% Taxa de Conversão"
    },
    about: {
      title: "O Paradigma WeBuildAI4u",
      p1: "Não construímos software comum. Arquitetamos motores digitais de alta performance. Num mercado cheio de ruído, as empresas que fracassam têm sites 'decorativos'. As que vencem possuem armas escaláveis e velozes.",
      p2: "O nosso core é Engenharia Web. O nosso diferencial é Segurança Zero-Trust. A nossa turbocarga é Automação com IA. <b class='text-[#4338ca]'>Não vendemos layouts; vendemos domínio de mercado através de excelência técnica.</b>"
    },
    servicesTitle: "Infraestrutura Core",
    services: [
      { title: "Web Dev de Alta Conversão", icon: Monitor, desc: "Engenharia personalizada focada em velocidade, conversão (alvo 8%+) e design de elite." },
      { title: "Segurança Zero-Trust", icon: ShieldCheck, desc: "Infraestrutura de nível militar com 99.9% uptime e governança de marca encriptada." },
      { title: "Turbo-Automação com IA", icon: Zap, desc: "Escalabilidade de sistemas para lidar com processos pesados e qualificação de leads automática." }
    ],
    processTitle: "Fluxo de Implementação",
    process: [
      { title: "Diagnóstico de ROI", icon: Search, desc: "Mapeamos fugas de conversão e definimos onde a sua arma digital precisa de ser afiada." },
      { title: "Engenharia de Elite", icon: Target, desc: "Desenvolvimento full-stack da sua arquitetura digital redundante e ultra-rápida." },
      { title: "Integração de Sistemas", icon: Cpu, desc: "Injeção de camadas de IA e automação para escalabilidade operacional síncrona." },
      { title: "Domínio Contínuo", icon: RefreshCw, desc: "Gestão de resiliência e otimização baseada em dados para garantir o ROI máximo." }
    ],
    ctaFinal: {
      title: "Pronto para parar de decorar e começar a dominar?",
      button: "Iniciar Implementação"
    },
    contact: {
      title: "Briefing Estratégico",
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
