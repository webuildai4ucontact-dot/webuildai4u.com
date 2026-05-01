import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export function TermsPage({ onBack, lang }: { onBack: () => void, lang: 'en' | 'pt' }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-[#030612] text-white font-sans relative overflow-x-hidden selection:bg-[#22d3ee] selection:text-black">
      <div className="fixed inset-0 pointer-events-none z-[100] grain"></div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-[100] bg-[#030612]/90 backdrop-blur-xl border-b border-[#4c1d95]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={onBack} className="flex flex-col items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer">
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
          </button>
          
          <button onClick={onBack} className="flex items-center gap-2 text-[12px] font-[700] text-[#22d3ee] uppercase tracking-[0.2em] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> {isEn ? "Back" : "Voltar"}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-[#22d3ee]" />
            <h1 className="text-[32px] md:text-[48px] font-black tracking-tight text-white">{isEn ? "Terms & Conditions" : "Termos e Condições de Utilização"}</h1>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#4c1d95] to-transparent mb-8"></div>
          
          <p className="text-[#cbd5e1] text-[14px] mb-12 opacity-80 tracking-widest uppercase">
            {isEn ? "Effective from: 01/05/2026" : "Versão em vigor a partir de: 01/05/2026"}
          </p>

          <div className="space-y-12 text-[#cbd5e1] text-[15px] leading-relaxed font-light">
            
            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "1. Introduction" : "1. Introdução"}</h2>
              <p className="mb-4">{isEn ? "Welcome to WeBuildAI4u. These Terms and Conditions regulate the access and use of the services provided by WeBuildAI4u, hereinafter referred to as the \"project\"." : "Bem-vindo(a) à WeBuildAI4u. Os presentes Termos e Condições regulam o acesso e a utilização dos serviços fornecidos pela WeBuildAI4u, doravante designada \"projeto\"."}</p>
              <p>{isEn ? "By using the services, the user declares to have read, understood and fully accepted these Terms and Conditions. If you do not agree with any of the provisions herein, you must immediately cease using the services." : "Ao utilizar os serviços, o utilizador declara ter lido, compreendido e aceite integralmente estes Termos e Condições. Caso não concorde com alguma das disposições aqui previstas, deverá cessar imediatamente a utilização dos serviços."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "2. Project Identification" : "2. Identificação do Projeto"}</h2>
              <div className="bg-[#100726]/50 border border-[#4c1d95]/50 p-6 rounded-lg space-y-4">
                <p><strong className="text-[#22d3ee] mr-2">{isEn ? "Legal Name:" : "Nome legal:"}</strong> WeBuildAI4u</p>
                <p><strong className="text-[#22d3ee] mr-2">{isEn ? "Virtual Headquarters:" : "Sede virtual:"}</strong> {isEn ? "Lisbon, Portugal" : "Lisboa, Portugal"}</p>
                <p><strong className="text-[#22d3ee] mr-2">{isEn ? "Contact Email:" : "Email de contacto:"}</strong> webuildai4u.contact@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "3. Definitions" : "3. Definições"}</h2>
              <p className="mb-6">{isEn ? "For the purposes of these Terms and Conditions, the terms below have the following meaning:" : "Para efeitos dos presentes Termos e Condições, os termos abaixo têm o seguinte significado:"}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-(--md-grid-cols-terms) gap-4 border-t border-[#4c1d95]/30 pt-4">
                <div className="font-bold text-white">"Serviços"</div>
                <div>{isEn ? "Artificial intelligence, automation, software development and consulting solutions provided by WeBuildAI4u." : "Soluções de inteligência artificial, automatização, desenvolvimento de software e consultoria prestados pela WeBuildAI4u."}</div>
                
                <div className="font-bold text-white col-span-1 border-t border-[#4c1d95]/30 pt-4 mt-2">"Utilizador" / "Cliente"</div>
                <div className="col-span-1 border-t border-[#4c1d95]/30 pt-4 mt-2">{isEn ? "Any entity, natural or legal, that accesses or uses WeBuildAI4u's services." : "Qualquer entidade, singular ou coletiva, que aceda ou utilize os serviços da WeBuildAI4u."}</div>
                
                <div className="font-bold text-white col-span-1 border-t border-[#4c1d95]/30 pt-4 mt-2">"Conteúdo"</div>
                <div className="col-span-1 border-t border-[#4c1d95]/30 pt-4 mt-2">{isEn ? "Data, texts, files or any information provided by the user within the scope of the services provided." : "Dados, textos, ficheiros ou qualquer informação fornecida pelo utilizador no âmbito da prestação dos serviços."}</div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "4. Object" : "4. Objeto"}</h2>
              <p>{isEn ? "WeBuildAI4u provides personalized technological services, including, among others, the development of artificial intelligence solutions, website creation, and process automation." : "A WeBuildAI4u presta serviços tecnológicos personalizados, incluindo, entre outros, o desenvolvimento de soluções de inteligência artificial, criação de websites e automatização de processos."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "5. Acceptable Use" : "5. Utilização Aceitável"}</h2>
              <p className="mb-4">{isEn ? "The user undertakes not to use the services for any of the following purposes:" : "O utilizador compromete-se a não utilizar os serviços para quaisquer dos seguintes fins:"}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-[#cbd5e1]/80">
                <li>{isEn ? "Illegal, fraudulent activities or those contrary to public order." : "Atividades ilegais, fraudulentas ou contrárias à ordem pública"}</li>
                <li>{isEn ? "Development of harmful, discriminatory or abusive systems." : "Desenvolvimento de sistemas prejudiciais, discriminatórios ou abusivos"}</li>
                <li>{isEn ? "Violation of intellectual property rights or other rights of third parties." : "Violação de direitos de propriedade intelectual ou outros direitos de terceiros"}</li>
                <li>{isEn ? "Distribution of malware, viruses or any other malicious content." : "Distribuição de malware, vírus ou qualquer outro conteúdo malicioso"}</li>
              </ul>
              <p>{isEn ? "Failure to comply with any of the obligations set forth in this clause may result in immediate suspension or termination of the services, without the right to a refund, as well as the payment of compensation to those affected." : "A violação de qualquer das obrigações previstas nesta cláusula pode resultar na suspensão ou cessação imediata dos serviços, sem direito a reembolso, bem como ao pagamento de indeminizações aos afetados."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "6. Artificial Intelligence Services" : "6. Serviços de Inteligência Artificial"}</h2>
              <p className="mb-4">{isEn ? "The services may involve the creation of websites, automated systems and artificial intelligence models that generate results based on data provided by the client." : "Os serviços podem envolver criação de websites, sistemas automatizados e modelos de inteligência artificial que geram resultados com base em dados fornecidos pelo cliente."}</p>
              <p className="mb-4">{isEn ? "WeBuildAI4u does not guarantee, expressly or implicitly:" : "A WeBuildAI4u não garante, de forma expressa ou implícita:"}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-[#cbd5e1]/80">
                <li>{isEn ? "The total precision or accuracy of the generated results." : "A precisão total ou exatidão dos resultados gerados"}</li>
                <li>{isEn ? "The absence of bias in the models used." : "A ausência de enviesamento nos modelos utilizados"}</li>
                <li>{isEn ? "The suitability of the results for a specific purpose." : "A adequação dos resultados a um propósito específico"}</li>
              </ul>
              <p>{isEn ? "The client is solely responsible for validating all outputs generated before any use in critical contexts or decision-making." : "O cliente é o único responsável por validar todos os outputs gerados antes de qualquer utilização em contextos críticos ou de tomada de decisão."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "7. Client Data" : "7. Dados do Cliente"}</h2>
              <p className="mb-4">{isEn ? "The client guarantees that they hold all legal rights over the data provided to the Project within the scope of service provision." : "O cliente garante que detém todos os direitos legais sobre os dados fornecidos ao Projeto no âmbito da prestação dos serviços."}</p>
              <p className="mb-4">{isEn ? "WeBuildAI4u is not responsible for any misuse of data that is the responsibility of the client." : "A WeBuildAI4u não se responsabiliza por qualquer uso indevido de dados da responsabilidade do cliente."}</p>
              <p>{isEn ? "All data provided by the client will not be shared without their prior consent. They will be kept until the end of the service provision, and subsequently deleted." : "Todos os dados fornecidos pelo cliente não serão partilhados sem consentimento prévio do mesmo. Serão guardados até ao termo da prestação de serviços, sendo posteriormente eliminados."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "8. Confidentiality" : "8. Confidencialidade"}</h2>
              <p>{isEn ? "Both parties undertake to maintain strict confidentiality regarding all information exchanged within the scope of the contractual relationship, and may not disclose it to third parties without prior written consent of the other party." : "Ambas as partes se comprometem a manter estrita confidencialidade sobre todas as informações trocadas no âmbito da relação contratual, não podendo divulgá-las a terceiros sem consentimento prévio e escrito da outra parte."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "9. Intellectual Property" : "9. Propriedade Intelectual"}</h2>
              <p className="mb-4">{isEn ? "Unless otherwise agreed, all intellectual property rights related to systems, solutions, code and models developed by WeBuildAI4u remain its property." : "Salvo acordo em contrário, todos os direitos de propriedade intelectual relativos aos sistemas, soluções, código e modelos desenvolvidos pela WeBuildAI4u permanecem propriedade da mesma."}</p>
              <p className="mb-4">{isEn ? "WeBuildAI4u grants the client a non-exclusive, limited and non-transferable license to use the developed solution exclusively for the agreed purposes." : "A WeBuildAI4u concede ao cliente uma licença de utilização não exclusiva, limitada e intransmissível, para utilizar a solução desenvolvida exclusivamente para os fins acordados."}</p>
              <p className="mb-4">{isEn ? "This non-exclusive license implies that WeBuildAI4u reserves the right to reuse, adapt, modify and implement, totally or partially, the same components, methodologies or solutions in future projects, including for other clients, without the need for additional authorization from the client." : "Esta licença não exclusiva implica que a WeBuildAI4u mantém o direito de reutilizar, adaptar, modificar e implementar, total ou parcialmente, os mesmos componentes, metodologias ou soluções em projetos futuros, incluindo para outros clientes, sem necessidade de autorização adicional do cliente."}</p>
              <p>{isEn ? "The client may not, without prior written consent, copy, sublicense, sell or make available to third parties the developed solution outside the agreed scope." : "O cliente não poderá, sem consentimento prévio por escrito, copiar, sublicenciar, vender ou disponibilizar a terceiros a solução desenvolvida fora do âmbito acordado."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "10. Payments" : "10. Pagamentos"}</h2>
              <p className="mb-4">{isEn ? "Services are paid according to the proposal agreed via email." : "Os serviços são pagos conforme proposta acordada através de email."}</p>
              <p className="mb-4">{isEn ? "For the first clients of this Project, payment will be made as follows: the amount payable will only be transacted after the client's approval, with products being made available following this act." : "No caso dos primeiros clientes deste Projeto, o pagamento será feito deste modo: o valor a pagar será transacionado apenas após a aprovação do cliente, sendo a disponibilização dos produtos ao mesmo posterior a este ato."}</p>
              <p className="mb-4">{isEn ? "For future clients, payment must strictly be made as follows: 50% of the agreed amount will be transacted prior to the full availability of the product to the client. The remainder will be paid after this latter event." : "No caso de clientes futuros, o pagamento terá de ser feito obrigatoriamente do seguinte modo: 50% do valor acordado será transacionado previamente à disponibilização completa do produto ao cliente. O restante será pago após este último acontecimento."}</p>
              <p>{isEn ? "Any failure in the first payment (50%) may result in the suspension of services. Any failure in payment of the remaining amount may result not only in the cancellation of the product and future services but also in compensations up to 100% of the full service value, depending on the situation." : "Qualquer falha no primeiro pagamento (50%) pode resultar na suspensão dos serviços. Qualquer falha no pagamento do restante montante pode resultar não só no cancelamento do produto e de futuros serviços, como também em compensações até 100% do valor completo do serviço, mediante a situação."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "11. Deadlines and Deliveries" : "11. Prazos e Entregas"}</h2>
              <p className="mb-4">{isEn ? "Deadlines are estimates and may vary depending on complexity. The client will be informed prior to the start of work of the estimated time for completion." : "Os prazos são estimativas e podem variar conforme complexidade. O cliente será informado previamente ao início dos trabalhos da estimativa de tempo que os mesmos levam a ser concluídos."}</p>
              <p className="mb-4">{isEn ? "In the event of an excessive delay exceeding twice the estimate, a percentage up to 10% will be deducted from the final amount to be paid by the client." : "Em caso de um atraso excessivo que perdure o dobro do estimado, será descontado ao valor final a pagar pelo cliente uma percentagem até 10%."}</p>
              <p>{isEn ? "Regarding payment by the client, it must be made within 5 days. If ignored, the situation outlined in Chapter 10 of this document will be enforced." : "Já no que toca ao pagamento pelo cliente, o mesmo tem o prazo de 5 dias para o efetuar. Caso não o faça, irá ser posta em prática a situação descrita no capítulo 10 deste documento."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "12. Limitation of Liability" : "12. Limitação de Responsabilidade"}</h2>
              <p className="mb-4">{isEn ? "WeBuildAI4u shall not be liable for any damages resulting from the use of services, namely:" : "A WeBuildAI4u não será responsável por quaisquer danos resultantes da utilização dos serviços, nomeadamente:"}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-[#cbd5e1]/80">
                <li>{isEn ? "Indirect, consequential or emerging damages" : "Danos indiretos, consequenciais ou emergentes"}</li>
                <li>{isEn ? "Loss of profits, revenue or data" : "Perda de lucros, receitas ou dados"}</li>
                <li>{isEn ? "Decisions made based on outputs generated by the systems" : "Decisões tomadas com base nos outputs gerados pelos sistemas"}</li>
              </ul>
              <p>{isEn ? "The total maximum liability of the Project towards the client is limited to the total amount actually paid by the client for the services in question." : "A responsabilidade total máxima do Projeto perante o cliente fica limitada ao valor total efetivamente pago pelo cliente pelos serviços em causa."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "13. Termination" : "13. Rescisão"}</h2>
              <p className="mb-4">{isEn ? "Either party may terminate the contract using prior notice of at least 5 days." : "Qualquer parte pode terminar o contrato mediante aviso prévio de pelo menos 5 dias"}</p>
              <p>{isEn ? "In the event of termination, the client shall settle all amounts due until the date of cessation of services, such as the initial payment explicitly stated in Chapter 10." : "Em caso de rescisão, o cliente deverá liquidar todos os valores devidos até à data de cessação dos serviços, como o primeiro pagamento explícito no capítulo 10."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "14. Data Protection (GDPR)" : "14. Proteção de Dados (RGPD)"}</h2>
              <p className="mb-6">{isEn ? "The website provided by WeBuildAI4u does not collect any personal data, being purely informational. The only data obtained by the Project members is that made available by the client via email, so that product development can proceed." : "O website disponibilizado pela WeBuildAI4u não recolhe quaisquer dados pessoais, sendo meramente informativo. Os únicos dados obtidos pelos membros do Projeto são aqueles disponibilizados pelo cliente via email, para que seja possível proceder ao desenvolvimento do produto."}</p>
              
              <h3 className="text-[17px] font-bold text-white mb-2">{isEn ? "14.1. Cookies Policy" : "14.1. Política de cookies"}</h3>
              <p>{isEn ? "The WeBuildAI4u website does not use any type of cookies, thus guaranteeing a more transparent browsing experience respectful of user privacy, without collecting personal data for tracking or analysis purposes." : "O website da WeBuildAI4u não utiliza qualquer tipo de cookies, garantindo assim uma experiência de navegação mais transparente e respeitadora da privacidade dos utilizadores, sem recolha de dados pessoais para fins de rastreamento ou análise."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "15. Changes to Terms" : "15. Alterações aos Termos"}</h2>
              <p>{isEn ? "WeBuildAI4u may change these terms at any time, with the changes published on the site. Clients using the services at those times will also be notified via email." : "A WeBuildAI4u pode alterar estes termos a qualquer momento, sendo as alterações publicadas no site. Os clientes a usufruir dos serviços nesses momentos serão também avisados por email."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "16. Applicable Law and Jurisdiction" : "16. Lei Aplicável e Foro Competente"}</h2>
              <p className="mb-4">{isEn ? "These Terms and Conditions are governed and interpreted in accordance with Portuguese law." : "Os presentes Termos e Condições são regidos e interpretados de acordo com a legislação portuguesa."}</p>
              <p>{isEn ? "In case of dispute, the parties elect the court of the district of Lisbon as competent, with express waiver of any other." : "Em caso de litígio, as partes elegem como competente o tribunal da comarca de Lisboa, com expressa renúncia a qualquer outro."}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-white mb-4 uppercase tracking-widest">{isEn ? "17. Contact" : "17. Contacto"}</h2>
              <p className="mb-4">{isEn ? "For any questions regarding these Terms and Conditions, the user may contact WeBuildAI4u through the following:" : "Para quaisquer questões relativas aos presentes Termos e Condições, o utilizador pode contactar a WeBuildAI4u através do seguinte meio:"}</p>
              <div className="bg-[#100726]/50 border border-[#4c1d95]/50 p-6 rounded-lg inline-block">
                <p><strong className="text-[#22d3ee] mr-2">Email:</strong> <a href="mailto:webuildai4u.contact@gmail.com" className="hover:text-white transition-colors">webuildai4u.contact@gmail.com</a></p>
              </div>
            </section>
            
          </div>
        </motion.div>
      </main>

      <footer className="py-12 border-t border-[#4c1d95]/30 bg-[#09041a] relative z-10 w-full mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#cbd5e1]/40 text-[11px] font-medium tracking-widest uppercase mb-4">
            © {new Date().getFullYear()} WeBuildAI4u. {isEn ? "EST." : "FUND."} 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}
