import React, { useEffect } from 'react';
import { ArrowLeft, Trash2, Cookie, Mail } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
  lang: 'en' | 'pt';
  setLang: (lang: 'en' | 'pt') => void;
}

export function TermsPage({ onBack, lang, setLang }: TermsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = lang === 'en';

  const sections = [
    {
      id: 's1',
      num: 1,
      titlePt: "Introdução",
      titleEn: "Introduction",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            Bem-vindo(a) à <b className="text-white font-semibold">WeBuildAI4u</b>. Os presentes Termos e Condições regulam o acesso e a utilização dos serviços fornecidos pela WeBuildAI4u, doravante designada <span className="text-[#22d3ee]">"projeto"</span>.
          </p>
          <p>
            Ao utilizar os nossos serviços, o utilizador declara ter lido, compreendido e aceite integralmente estes Termos e Condições. Caso não concorde com alguma das disposições aqui previstas, deverá cessar imediatamente a utilização dos serviços.
          </p>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            Welcome to <b className="text-white font-semibold">WeBuildAI4u</b>. These Terms and Conditions govern the access and use of the services provided by WeBuildAI4u, hereinafter referred to as the <span className="text-[#22d3ee]">"project"</span>.
          </p>
          <p>
            By using our services, the user declares that they have read, understood and fully accepted these Terms and Conditions. If you do not agree with any of the provisions herein, you must immediately cease using our services.
          </p>
        </div>
      )
    },
    {
      id: 's2',
      num: 2,
      titlePt: "Identificação do Projeto",
      titleEn: "Project Identification",
      renderPt: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl">
            <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Nome Legal</span>
            <p className="text-white text-base font-bold mt-1">WeBuildAI4u</p>
          </div>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl">
            <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Sede Virtual</span>
            <p className="text-white text-base font-bold mt-1">Lisboa, Portugal</p>
          </div>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl">
            <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Email de Contacto</span>
            <a href="mailto:webuildai4u.contact@gmail.com" className="block text-white hover:text-[#22d3ee] transition-colors text-base font-bold mt-1 break-all">
              webuildai4u.contact@gmail.com
            </a>
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl">
            <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Legal Name</span>
            <p className="text-white text-base font-bold mt-1">WeBuildAI4u</p>
          </div>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl">
            <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Virtual Location</span>
            <p className="text-white text-base font-bold mt-1">Lisbon, Portugal</p>
          </div>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl">
            <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Contact Email</span>
            <a href="mailto:webuildai4u.contact@gmail.com" className="block text-white hover:text-[#22d3ee] transition-colors text-base font-bold mt-1 break-all">
              webuildai4u.contact@gmail.com
            </a>
          </div>
        </div>
      )
    },
    {
      id: 's3',
      num: 3,
      titlePt: "Definições",
      titleEn: "Definitions",
      renderPt: () => (
        <div className="border border-white/10 overflow-hidden rounded-xl bg-[#100726]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-[#100726]/40 p-4">
            <div className="text-[#22d3ee] font-bold text-xs uppercase tracking-wider">Termo</div>
            <div className="col-span-2 text-slate-200 font-bold text-xs uppercase tracking-wider mt-2 md:mt-0">Significado</div>
          </div>
          <div className="divide-y divide-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
              <div className="font-bold text-white">"Serviços"</div>
              <div className="col-span-2 text-slate-200">Soluções de inteligência artificial, automatização, desenvolvimento de software e consultoria prestados pela WeBuildAI4u.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
              <div className="font-bold text-white">"Utilizador" / "Cliente"</div>
              <div className="col-span-2 text-slate-200">Qualquer entidade, singular ou coletiva, que aceda ou utilize os serviços da WeBuildAI4u.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
              <div className="font-bold text-white">"Conteúdo"</div>
              <div className="col-span-2 text-slate-200">Dados, textos, ficheiros ou qualquer informação fornecida pelo utilizador no âmbito da prestação dos serviços.</div>
            </div>
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="border border-white/10 overflow-hidden rounded-xl bg-[#100726]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-[#100726]/40 p-4">
            <div className="text-[#22d3ee] font-bold text-xs uppercase tracking-wider">Term</div>
            <div className="col-span-2 text-slate-200 font-bold text-xs uppercase tracking-wider mt-2 md:mt-0">Meaning</div>
          </div>
          <div className="divide-y divide-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
              <div className="font-bold text-white">"Services"</div>
              <div className="col-span-2 text-slate-200">Artificial intelligence, automation, software development and consulting solutions provided by WeBuildAI4u.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
              <div className="font-bold text-white">"User" / "Client"</div>
              <div className="col-span-2 text-slate-200">Any entity, individual or corporate, that accesses or uses the services of WeBuildAI4u.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
              <div className="font-bold text-white">"Content"</div>
              <div className="col-span-2 text-slate-200">Data, texts, files or any information provided by the user in the context of the services.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 's4',
      num: 4,
      titlePt: "Objeto",
      titleEn: "Object",
      renderPt: () => (
        <div>
          <p>
            A WeBuildAI4u presta serviços tecnológicos personalizados, incluindo, entre outros, o desenvolvimento de soluções de inteligência artificial, criação de websites de alta performance e automatização avançada de processos analíticos ou operacionais.
          </p>
        </div>
      ),
      renderEn: () => (
        <div>
          <p>
            WeBuildAI4u provides customized technology services, including, but not limited to, the development of artificial intelligence solutions, high-performance website creation, and advanced operational or analytical process automation.
          </p>
        </div>
      )
    },
    {
      id: 's5',
      num: 5,
      titlePt: "Utilização Aceitável",
      titleEn: "Acceptable Use",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            O utilizador compromete-se a não utilizar os serviços para quaisquer dos seguintes fins:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Atividades ilegais, fraudulentas ou contrárias à ordem pública.</li>
            <li>Desenvolvimento de sistemas prejudiciais, discriminatórios ou abusivos.</li>
            <li>Violação de direitos de propriedade intelectual ou outros direitos de terceiros.</li>
            <li>Distribuição de malware, vírus ou qualquer outro conteúdo malicioso.</li>
          </ul>
          <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 p-4 rounded-xl mt-4 text-sm text-red-300">
            ⚠️ <b>Aviso:</b> A violação de qualquer das obrigações previstas nesta cláusula pode resultar na suspensão ou cessação imediata dos serviços, sem qualquer direito a reembolso, bem como ao pagamento de indemnizações reguladas por lei às partes afetadas.
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            The user agrees not to use the services for any of the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Illegal, fraudulent activities or those contrary to public order.</li>
            <li>Development of harmful, discriminatory or abusive systems.</li>
            <li>Violation of intellectual property rights or other rights of third parties.</li>
            <li>Distribution of malware, viruses or any other malicious content.</li>
          </ul>
          <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 p-4 rounded-xl mt-4 text-sm text-red-300">
            ⚠️ <b>Notice:</b> Violation of any of the obligations set forth in this clause may result in immediate suspension or termination of our services, with no right to refund, as well as the payment of legally mandated compensation to the affected parties.
          </div>
        </div>
      )
    },
    {
      id: 's6',
      num: 6,
      titlePt: "Serviços de Inteligência Artificial",
      titleEn: "Artificial Intelligence Services",
      renderPt: () => (
        <div className="space-y-5">
          <p>
            Os nossos serviços envolvem a criação de websites modernos, sistemas altamente automatizados e modelos de inteligência artificial generativa que produzem resultados com base exclusiva nos dados estruturados fornecidos pelo próprio cliente.
          </p>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl space-y-4">
            <p className="text-white font-semibold">A WeBuildAI4u não garante, de forma expressa ou implícita:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Precisão absoluta:</strong> A exatidão impecável e instantânea dos resultados gerados autonomamente pelos modelos.</li>
              <li><strong className="text-white">Isenção de enviesamento:</strong> A ausência total de enviesamento inerente às fontes externas dos modelos base de inteligência artificial explorados.</li>
              <li><strong className="text-white">Propósito específico:</strong> A adequação mecânica dos resultados automáticos a um propósito específico ou crítico pretendido.</li>
            </ul>
          </div>
          <p className="italic border-l-2 border-[#22d3ee] pl-4">
            O cliente assume total e exclusivo encargo de auditar, aferir e validar criticamente todos os outputs gerados pelos sistemas inteligentes antes de qualquer utilização em contextos corporativos, legais ou na tomada de decisões sensíveis.
          </p>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-5">
          <p>
            Our services involve creating modern websites, automated systems, and generative artificial intelligence models that generate results based on data provided by the client.
          </p>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl space-y-4">
            <p className="text-white font-semibold">WeBuildAI4u does not guarantee, expressly or implicitly:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Absolute Accuracy:</strong> The perfect and immediate correctness of results autonomously generated by computational models.</li>
              <li><strong className="text-white">Absence of Bias:</strong> The complete absence of bias inherent to raw external sources of primary foundational models.</li>
              <li><strong className="text-white">Specific Purpose:</strong> The mechanical suitability of automatic outputs for any specific or critical purpose.</li>
            </ul>
          </div>
          <p className="italic border-l-2 border-[#22d3ee] pl-4">
            The client assumes complete and exclusive responsibility to review, audit, and validate all computational outputs generated before any deployment in commercial, legal, or high-risk decision processes.
          </p>
        </div>
      )
    },
    {
      id: 's7',
      num: 7,
      titlePt: "Dados do Cliente",
      titleEn: "Customer Data",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            O cliente garante formalmente que possui a legitimidade, propriedade ou licença sobre todos os dados introduzidos ou partilhados com o Projeto no decurso da vigência da prestação de serviços.
          </p>
          <p>
            A WeBuildAI4u isenta-se de qualquer responsabilidade civil ou criminal decorrente da utilização indevida ou ilegal de dados recolhidos, cuja custódia e licitude de armazenamento recaiam sob exclusiva responsabilidade do cliente.
          </p>
          <div className="bg-[#6d28d9]/10 border border-white/10 p-5 rounded-xl flex gap-4 mt-6">
            <Trash2 className="w-6 h-6 text-[#22d3ee] shrink-0 mt-1" />
            <div>
              <p className="text-white font-bold mb-1">Privacidade Garantida e Retenção Controlada</p>
              <p>Os dados facultados sob segredo profissional nunca serão partilhados sem a autorização prévia por escrito. Estes serão mantidos exclusivamente até à conclusão dos trabalhos e eliminados de modo seguro imediatamente após o fecho do projeto.</p>
            </div>
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            The client formally guarantees that they hold proper custody, ownership, or licensing rights for all data introduced or provided to the Project during the service period.
          </p>
          <p>
            WeBuildAI4u disclaims all liability resulting from any unauthorized, unlawful, or inappropriate use of data whose custody and processing legality rest solely with the client.
          </p>
          <div className="bg-[#6d28d9]/10 border border-white/10 p-5 rounded-xl flex gap-4 mt-6">
            <Trash2 className="w-6 h-6 text-[#22d3ee] shrink-0 mt-1" />
            <div>
              <p className="text-white font-bold mb-1">Guaranteed Privacy & Data Cleanup</p>
              <p>Under strict NDA rules, no client data will ever be shared without explicit prior written consent. Data will be preserved only until full delivery, and securely deleted from all systems upon final completion.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 's8',
      num: 8,
      titlePt: "Confidencialidade",
      titleEn: "Confidentiality",
      renderPt: () => (
        <div>
          <p>
            Ambas as partes comprometem-se a assegurar sigilo profissional absoluto e a manter estrita confidencialidade sobre todas as informações comerciais, códigos, base de dados e estratégias trocadas no decurso da relação contratual. Nenhuma informação poderá ser partilhada ou divulgada a terceiros sob qualquer pretexto, sem autorização prévia, expressa e escrita da parte contrante.
          </p>
        </div>
      ),
      renderEn: () => (
        <div>
          <p>
            Both parties commit to absolute professional secrecy and strict confidentiality under strict non-disclosure guidelines. No business strategy, commercial data, database schema, or code structure exchanged during this contract may be shared or exposed to third parties without prior written authorization.
          </p>
        </div>
      )
    },
    {
      id: 's9',
      num: 9,
      titlePt: "Propriedade Intelectual",
      titleEn: "Intellectual Property",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            Salvo estipulação legal ou escrita em contrário, toda a propriedade intelectual, sistemas, designs exclusivos, código adaptativo e modelos gerados no decurso do desenvolvimento pela WeBuildAI4u permanecem propriedade legal e exclusiva do projeto.
          </p>
          <p>
            A WeBuildAI4u outorga ao cliente uma <span className="text-white font-bold">licença de utilização não exclusiva, limitada e intransmissível</span> para exploração do software exclusivamente para os fins formalmente adjudicados.
          </p>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl space-y-3 mt-4 text-sm text-slate-350">
            <p className="text-white font-semibold">⚠️ <b>Termos Adicionais Importantes:</b></p>
            <p>
              • Esta licença implica que a WeBuildAI4u mantém e preserva o direito de reutilizar, otimizar, implementar ou alterar componentes genéricos de software, metodologias ou soluções de engenharia comuns em projetos futuros desenvolvidos para novos clientes, sem dependência de qualquer autorização por parte do cliente original.
            </p>
            <p>
              • O cliente não se encontra autorizado, sem consentimento formal prévio e por escrito, a copiar, sublicenciar, comercializar, descompilar ou disponibilizar a terceiros a solução fora do âmbito definido.
            </p>
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            Unless explicitly agreed otherwise in writing, all intellectual property rights, system architectures, customized interfaces, source code, and algorithms developed by WeBuildAI4u remain the exclusive property of the project.
          </p>
          <p>
            WeBuildAI4u grants the client a <span className="text-white font-bold">non-exclusive, limited, and non-transferable license</span> to run and utilize the application strictly for the agreed scope and operational purposes.
          </p>
          <div className="bg-[#100726]/40 border border-white/10 p-5 rounded-xl space-y-3 mt-4 text-sm text-slate-350">
            <p className="text-white font-semibold">⚠️ <b>Important Legal Clauses:</b></p>
            <p>
              • This non-exclusive licensing model allows WeBuildAI4u to reuse, modify, adapt, and deploy boilerplate elements, general libraries, generic modules, and structural logic in future engineering projects for other businesses, without requiring any authorization.
            </p>
            <p>
              • The client is strictly prohibited, without written consent, from copying, sublicensing, selling, decompiling, reverse-engineering, or sharing the custom build with third parties outside the agreed context.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 's10',
      num: 10,
      titlePt: "Pagamentos",
      titleEn: "Payments",
      renderPt: () => (
        <div className="space-y-5">
          <p>
            Os serviços são cobrados consoante proposta, termos anexos e valores estipulados via comunicação por email.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border border-white/10 bg-[#100726]/20 p-5 rounded-xl">
              <span className="text-[#22c55e] text-xs font-black uppercase tracking-wider block mb-2">Primeiros Clientes do Projeto</span>
              <p>O custo do investimento só é liquidado após a validação e aprovação do cliente. Os produtos e repositórios são entregues integralmente após este ato.</p>
            </div>
            <div className="border border-white/10 bg-[#100726]/20 p-5 rounded-xl">
              <span className="text-[#22d3ee] text-xs font-black uppercase tracking-wider block mb-2">Futuros Clientes Adjudicados</span>
              <p>O pagamento é efetuado em duas tranches de 50%: um valor de sinal (50%) obrigatório antes do início dos trabalhos e os restantes 50% no ato de entrega.</p>
            </div>
          </div>
          <div className="text-xs bg-[#ef4444]/5 p-4 rounded-lg mt-4 border border-[#ef4444]/20 leading-relaxed text-red-300">
            🚫 Qualquer falhas na tranche de sinal suspende as tarefas imediatamente. Incumprimento na liquidação do saldo final implica perda imediatas de licença de uso do software, cancelamento do suporte, remoção de integrações e indemnizações no total do orçamento estipulado.
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-5">
          <p>
            All engineering services are billed exclusively in accordance with specific proposals and commercial scopes agreed upon through official correspondence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border border-white/10 bg-[#100726]/20 p-5 rounded-xl">
              <span className="text-[#22c55e] text-xs font-black uppercase tracking-wider block mb-2">Early Customers (Promo)</span>
              <p>Billing transaction occurs only after formal approval and sign-off. Full delivery of systems and repositories will occur upon complete resolution of payment.</p>
            </div>
            <div className="border border-white/10 bg-[#100726]/20 p-5 rounded-xl">
              <span className="text-[#22d3ee] text-xs font-black uppercase tracking-wider block mb-2">Standard Customers</span>
              <p>A strict 50/50 plan applies. An initial 50% deposit is due before kickoff, and the final 50% remainder must be settled directly on delivery.</p>
            </div>
          </div>
          <div className="text-xs bg-[#ef4444]/5 p-4 rounded-lg mt-4 border border-[#ef4444]/20 leading-relaxed text-red-300">
            🚫 Failure to complete deposit triggers immediate project halt. Failure or late payments on delivery results in absolute forfeiture/revocation of software license, support termination, and potential legal claims.
          </div>
        </div>
      )
    },
    {
      id: 's11',
      num: 11,
      titlePt: "Prazos e Entregas",
      titleEn: "Deadlines & Deliveries",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            Os prazos fornecidos são estimativas de engenharia e baseiam-se na complexidade aparente. O cliente é advertido, antes de qualquer início prático, acerca de prazos prováveis de desenvolvimento.
          </p>
          <p>
            Por mútuo acordo de tolerância, se o atraso for imputável à WeBuildAI4u e exceder de forma injustificada o dobro de tempo estimado, será aplicado um desconto de compensação de até 10% do balanço final.
          </p>
          <p className="border-t border-white/10 pt-4 mt-4 font-normal">
            📆 O utilizador/cliente assume o <strong className="text-white">prazo limite de 5 dias úteis</strong> para liquidação de qualquer fatura em aberto. O não cumprimento despoleta as medidas cautelares dispostas na secção 10.
          </p>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            All delivery dates are objective estimates based on standard engineering capacity. Estimated time scales are explicitly communicated before project kick-off.
          </p>
          <p>
            Should WeBuildAI4u delay project completion beyond double the original estimation due to its sole, preventable negligence, a compensation discount of up to 10% on the closing invoice shall be computed.
          </p>
          <p className="border-t border-white/10 pt-4 mt-4 font-normal">
            📆 The client agrees to settle outstanding standard or closing invoices within <strong className="text-white">5 business days</strong>. Delayed resolution triggers immediate escalation as outlined in Section 10.
          </p>
        </div>
      )
    },
    {
      id: 's12',
      num: 12,
      titlePt: "Limitação de Responsabilidade",
      titleEn: "Limitation of Liability",
      renderPt: () => (
        <div className="space-y-4">
          <p className="font-bold text-white">
            A WeBuildAI4u isenta-se de qualquer indemnização ou responsabilidade de perdas quanto aos seguintes cenários:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Danos indiretos, incidentais, consequenciais ou lucros cessantes na atividade empresarial.</li>
            <li>Perda material ou quebra operacional de dados, software associados ou quebras de faturação.</li>
            <li>Decisões estratégicas ou corporativas tomadas com base em outputs produzidos por sistemas e IAs.</li>
          </ul>
          <div className="bg-[#100726]/30 border border-white/10 p-5 rounded-xl text-white font-medium mt-6">
            🛡️ A responsabilidade financeira global máxima acumulada e incontestável do Projeto perante o cliente limitar-se-á, ao abrigo de qualquer contrato, ao valor líquido efetivamente pago pelo cliente correspondente aos serviços causadores do litígio.
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p className="font-bold text-white">
            WeBuildAI4u is not liable for any consequential losses, claims, or negative business impacts arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indirect, incidental, exemplary, or minor damages/loss of business operations.</li>
            <li>Direct loss of corporate revenue, data leakage outside our systems, or hardware crashes.</li>
            <li>Business decisions implemented based on algorithm outputs or deep models predictions.</li>
          </ul>
          <div className="bg-[#100726]/30 border border-white/10 p-5 rounded-xl text-white font-medium mt-6">
            🛡️ Safe Harbor: The maximum cumulative liability of WeBuildAI4u under any circumstances is strictly capped at the exact net capital actually settled by the client for the specific service module giving rise to the legal dispute.
          </div>
        </div>
      )
    },
    {
      id: 's13',
      num: 13,
      titlePt: "Rescisão",
      titleEn: "Termination",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            Qualquer uma das partes contratantes reserva-se o direito unilateral de rescindir o acordo e os trabalhos, mediante o envio formal de um <strong className="text-white">aviso prévio e escrito de pelo menos 5 dias úteis</strong>.
          </p>
          <p>
            Verificando-se a rescisão voluntária, o cliente assume expressamente o encargo de liquidar as horas de engenharia aplicadas e serviços efetivamente prestados até ao momento da cessação dos desenvolvimentos, incluindo todos os valores acordados previstos na secção 10.
          </p>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            Either working party retains the unilateral right to cancel the agreement or ongoing execution by providing a formal, written <strong className="text-white">notice period of minimum 5 business days</strong>.
          </p>
          <p>
            Upon termination, the client shall settle and release all funds matching work metrics, development hours, and modules executed up to the physical date of termination, as set forth in Section 10.
          </p>
        </div>
      )
    },
    {
      id: 's14',
      num: 14,
      titlePt: "Proteção de Dados (RGPD)",
      titleEn: "Data Protection (GDPR)",
      renderPt: () => (
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10 space-y-3">
            <p>
              O website disponibilizado pela WeBuildAI4u <span className="text-[#22d3ee] font-bold">não recolhe quaisquer tipos de dados pessoais ou privados de utilizadores</span>, possuindo um propósito de divulgação puramente informativo.
            </p>
            <p>
              Os únicos dados obtidos pelos elementos técnicos do Projeto são aqueles estritamente partilhados pelo utilizador via email com vista ao planeamento do produto final pretendido.
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-white font-bold text-base mb-3">
              <Cookie className="w-5 h-5 text-[#a855f7]" />
              <h3>14.1. Política de cookies</h3>
            </div>
            <p>
              O website da WeBuildAI4u não rastreia nem armazena qualquer tipo de cookie de terceiros, garantindo de forma transparente uma navegação rápida, segura e respeitadora da privacidade dos dados dos seus visitantes, isenta de monitorizações analíticas ou de marketing.
            </p>
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10 space-y-3">
            <p>
              The website operated by WeBuildAI4u <span className="text-[#22d3ee] font-bold">does not collect, harvest, or aggregate direct personal data</span> from visitors. The system is designed strictly for informative public representation.
            </p>
            <p>
              The only information processed by the project associates is the specific commercial criteria exchanged voluntarily via email strictly to scope out target engineering requirements.
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-white font-bold text-base mb-3">
              <Cookie className="w-5 h-5 text-[#a855f7]" />
              <h3>14.1. Cookie Policy</h3>
            </div>
            <p>
              The WeBuildAI4u portal does not deploy, store, or inject third-party cookie tags into client browsers, transparently securing an anonymous, performant, and privacy-first user-experience, with no tracking pixels or marketing analytics.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 's15',
      num: 15,
      titlePt: "Alterações aos Termos",
      titleEn: "Changes to Terms",
      renderPt: () => (
        <div>
          <p>
            A WeBuildAI4u reserva-se a prerrogativa de atualizar os presentes termos a qualquer momento, visando o alinhamento com obrigações regulatórias. Todas as alterações serão publicadas atempadamente nesta página. Os clientes que gozem de serviços activos na data da modificação serão notificados por correio eletrónico.
          </p>
        </div>
      ),
      renderEn: () => (
        <div>
          <p>
            WeBuildAI4u limits and reserves the right to adapt and update these Terms at any time to preserve alignment with global cybersecurity and digital laws. Modified terms take immediate effect when published on this page. Active subscription clients will be alerted about the change via email.
          </p>
        </div>
      )
    },
    {
      id: 's16',
      num: 16,
      titlePt: "Lei Aplicável e Foro Competente",
      titleEn: "Applicable Law & Forum",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            Estes Termos e Condições são integralmente regidos, instruídos e interpretados de estrito acordo com as disposições legais e regulamentos vigentes na <strong className="text-white">Legislação Portuguesa</strong>.
          </p>
          <p>
            Em caso de divergência ou disputa irreconciliável resultante da utilização de serviços, as partes elegem, por definitivo e com recusa expressa a qualquer outro foro, o <strong className="text-[#22d3ee]">Tribunal da Comarca de Lisboa</strong> como único foro jurisdicional legalmente competente.
          </p>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            These Terms, along with any external scope of work agreements, are fundamentally governed and interpreted in complete compliance with <strong className="text-white">Portuguese National Law</strong>.
          </p>
          <p>
            In the event of an unresolved dispute, commercial friction, or claim arising from these services, both parties irrevocably submit to the exclusive jurisdiction of the <strong className="text-[#22d3ee]">District Court of Lisbon, Portugal</strong>, waiving any other forum.
          </p>
        </div>
      )
    },
    {
      id: 's17',
      num: 17,
      titlePt: "Contacto",
      titleEn: "Contact",
      renderPt: () => (
        <div className="space-y-4">
          <p>
            Para quaisquer esclarecimentos adicionais, dúvidas, suporte de licenciamento ou partilha de dados relacionados com estes Termos e Condições de Utilização, contacte a equipa da WeBuildAI4u:
          </p>
          <div className="inline-flex items-center gap-4 bg-[#100726]/60 border border-white/10 rounded-xl p-5">
            <Mail className="w-8 h-8 text-[#22d3ee] shrink-0" />
            <div>
              <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Email Principal</span>
              <a href="mailto:webuildai4u.contact@gmail.com" className="text-white hover:text-[#22d3ee] font-bold text-base transition-colors">
                webuildai4u.contact@gmail.com
              </a>
            </div>
          </div>
        </div>
      ),
      renderEn: () => (
        <div className="space-y-4">
          <p>
            For any queries, administrative claims, licensing questions, or processing data alerts concerning these Terms of Service, please contact WeBuildAI4u support directly:
          </p>
          <div className="inline-flex items-center gap-4 bg-[#100726]/60 border border-white/10 rounded-xl p-5">
            <Mail className="w-8 h-8 text-[#22d3ee] shrink-0" />
            <div>
              <span className="text-slate-200 text-xs uppercase tracking-wider block font-bold">Core Helpdesk</span>
              <a href="mailto:webuildai4u.contact@gmail.com" className="text-white hover:text-[#22d3ee] font-bold text-base transition-colors">
                webuildai4u.contact@gmail.com
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#030612] text-white font-sans relative overflow-x-hidden selection:bg-[#22d3ee] selection:text-black">
      
      {/* Simple Header */}
      <header className="border-b border-white/10 bg-[#030612] py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-200 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? "Back" : "Voltar"}</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1 text-xs font-bold rounded cursor-pointer ${lang === 'pt' ? 'bg-[#22d3ee] text-black' : 'text-slate-200 hover:text-white'}`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-bold rounded cursor-pointer ${lang === 'en' ? 'bg-[#22d3ee] text-black' : 'text-slate-200 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {isEn ? "Terms & Conditions" : "Termos e Condições"}
          </h1>
          <p className="text-slate-200 text-sm">
            {isEn 
              ? "Last updated: May 1, 2026" 
              : "Última atualização: 01 de Maio de 2026"}
          </p>
        </div>

        {/* Clauses List */}
        <div className="space-y-12">
          {sections.map((sec) => (
            <section key={sec.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                {sec.num}. {isEn ? sec.titleEn : sec.titlePt}
              </h2>
              <div className="text-slate-100 text-sm sm:text-base space-y-4 leading-relaxed font-[400]">
                {isEn ? sec.renderEn() : sec.renderPt()}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 bg-[#030612] py-8 px-6 mt-16 text-center text-slate-300 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} WeBuildAI4u</p>
          <button 
            onClick={onBack}
            className="text-slate-200 hover:text-[#22d3ee] transition-colors text-xs font-semibold cursor-pointer"
          >
            {isEn ? "Go to Main Website" : "Ir Para Site Principal"}
          </button>
        </div>
      </footer>
    </div>
  );
}
