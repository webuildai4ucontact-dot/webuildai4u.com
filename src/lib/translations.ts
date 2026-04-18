import { Lightbulb, Settings, Users, Search, Target, Cpu, RefreshCw, ShoppingCart, Briefcase, Rocket } from 'lucide-react';

export const translations = {
  en: {
    nav: { about: "About", services: "Services", process: "Process", cases: "Use Cases", contact: "Contact", lang: "PT" },
    form: { success: "Message sent! We will contact you soon.", error: "There was an error. Please try again." },
    hero: {
      badge: "Intelligent Solutions",
      titlePre: "We Transform Artificial Intelligence into ",
      titleHighlight: "Real Results.",
      desc: "We help companies integrate AI practically, strategically, and profitably.",
      cta: "Schedule Consulting",
    },
    about: {
      title: "About WeBuildAI",
      p1: "At WeBuildAI4u we believe that all companies, regardless of their size, deserve access to intelligent tools. Our mission is to help companies implement AI in their processes, automate repetitive tasks, and create custom smart systems.",
      p2: "We focus on increasing your productivity and reducing costs, always using simple language and avoiding excessive technical terms. <b class='text-[#4338ca]'>In a constantly evolving market, automation is the competitive advantage that separates growing companies from those that fail. We build for the future.</b>"
    },
    servicesTitle: "Our Services",
    services: [
      { title: "Strategic AI Consulting", icon: Lightbulb, desc: "Business and technology alignment to find the best AI opportunities for your company." },
      { title: "AI Process Automation", icon: Settings, desc: "End-to-end automation of repetitive tasks to drastically reduce operational time." },
      { title: "Team Training & Enablement", icon: Users, desc: "Preparing your employees to work side-by-side with AI, ensuring a smooth adoption and maximum use of the tools." }
    ],
    processTitle: "How It Works",
    process: [
      { title: "Business Diagnosis", icon: Search, desc: "We analyze your current workflows to understand your specific bottlenecks." },
      { title: "Strategy Definition", icon: Target, desc: "We define the path through which AI will bring the greatest success to your company." },
      { title: "Technical Implementation", icon: Cpu, desc: "Our engineers build, integrate, and test the custom automated solutions." },
      { title: "Continuous Optimization", icon: RefreshCw, desc: "We monitor performance, refine models, and guarantee sustainable growth." }
    ],
    casesTitle: "Use Cases",
    cases: [
      { area: "E-Commerce", icon: ShoppingCart, desc: "Increased conversion rates and customer retention through personalized predictive recommendations." },
      { area: "Service Companies", icon: Briefcase, desc: "Reduced operational time by 40% through deep process automation and smart scheduling." },
      { area: "Fast-Growth Startups", icon: Rocket, desc: "Deployed scalable AI integrations in customer support, delivering instant multi-language assistance." }
    ],
    ctaFinal: {
      title: "Ready to take your business to the next level with AI?",
      button: "Get Started Now"
    },
    contact: {
      title: "Initiate Integration",
      name: "Full Name",
      company: "Company Name",
      email: "Business Email",
      message: "How can we help you scale?",
      send: "Send Request",
      locationInfo: "Location",
      scopeInfo: "Scope",
      portugal: "Portugal",
      europe: "Europe"
    },
    footer: {
      est: "EST."
    }
  },
  pt: {
    nav: { about: "Sobre", services: "Serviços", process: "Processo", cases: "Casos", contact: "Contacto", lang: "EN" },
    form: { success: "Mensagem enviada! Entraremos em contacto em breve.", error: "Ocorreu um erro. Por favor tente novamente." },
    hero: {
      badge: "Soluções Inteligentes",
      titlePre: "Transformamos Inteligência Artificial em ",
      titleHighlight: "Resultados Reais.",
      desc: "Ajudamos empresas a integrar IA de forma prática, estratégica e lucrativa.",
      cta: "Agendar Consultoria",
    },
    about: {
      title: "Sobre a WeBuildAI",
      p1: "Na WeBuildAI4u acreditamos que todas as empresas, independentemente da sua dimensão, merecem acesso a ferramentas inteligentes. A nossa missão é ajudar empresas a implementar IA nos seus processos, automatizar tarefas repetitivas e criar sistemas inteligentes personalizados.",
      p2: "Focamo-nos em aumentar a produtividade e reduzir custos, sempre com uma linguagem simples e sem termos técnicos excessivos. <b class='text-[#4338ca]'>Num mercado em constante evolução, a automatização é a vantagem competitiva que separa as empresas que crescem das que fracassam. Nós construímos para o futuro.</b>"
    },
    servicesTitle: "Serviços",
    services: [
      { title: "Consultoria Estratégica em IA", icon: Lightbulb, desc: "Alinhamento entre tecnologia e o seu negócio para mapear as melhores oportunidades." },
      { title: "Automatização de Processos com IA", icon: Settings, desc: "Eliminação de tarefas manuais repetitivas para otimizar o tempo da sua equipa." },
      { title: "Formação e Capacitação de Equipas", icon: Users, desc: "Preparação dos seus colaboradores para trabalhar lado a lado com a IA, garantindo uma adoção suave e máximo aproveitamento das ferramentas." }
    ],
    processTitle: "Como Funciona",
    process: [
      { title: "Diagnóstico do Negócio", icon: Search, desc: "Analisamos a estrutura atual e mapeamos os obstáculos operacionais." },
      { title: "Definição da Estratégia", icon: Target, desc: "Definimos o caminho através do qual a IA trará maior sucesso à sua empresa." },
      { title: "Implementação Técnica", icon: Cpu, desc: "A nossa equipa desenvolve e implementa os sistemas e fluxos automatizados." },
      { title: "Otimização Contínua", icon: RefreshCw, desc: "Monitorizamos os resultados e refinamos a IA para desempenho máximo." }
    ],
    casesTitle: "Casos de Uso",
    cases: [
      { area: "E-commerce", icon: ShoppingCart, desc: "Aumento de conversão e ticket médio através de recomendações preditivas precisas." },
      { area: "Empresa de Serviços", icon: Briefcase, desc: "Redução de 40% do tempo operacional com a automatização de tarefas e agendamento inteligente." },
      { area: "Startup Tecnológica", icon: Rocket, desc: "Integração de IA escalável no atendimento ao cliente, com suporte a múltiplos idiomas." }
    ],
    ctaFinal: {
      title: "Pronto para levar o seu negócio ao próximo nível com IA?",
      button: "Começar Agora"
    },
    contact: {
      title: "Fale Connosco",
      name: "Nome Completo",
      company: "Empresa",
      email: "E-mail",
      message: "Como podemos ajudar?",
      send: "Enviar Mensagem",
      locationInfo: "Localização",
      scopeInfo: "Alcance",
      portugal: "Portugal",
      europe: "Europa"
    },
    footer: {
      est: "FUND."
    }
  }
} as const;
