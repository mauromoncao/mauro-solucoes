import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import SEOHead from "../components/SEOHead";
import {
  Shield, Building2, Users, Gavel, FileText, Star,
  ArrowRight, CheckCircle, Phone, MessageCircle,
  Scale, TrendingUp, BookOpen, Award, Clock, ChevronRight,
  Brain, Sparkles, Zap,
} from "lucide-react";

const GOLD  = "#E8B84B";
const NAVY  = "#19385C";
const DARK  = "#07182e";
const WA    = "5586994820054";
const WA_MSG = encodeURIComponent("Olá! Vim pelo site de Soluções Jurídicas e gostaria de falar com um advogado.");

/* ─────────────────────────────────────────
   SOLUÇÕES JURÍDICAS (sem DrBen — tem seção própria)
───────────────────────────────────────── */
const SOLUCOES = [
  {
    id: 1,
    slug: "/planejamento-tributario",
    icon: Shield,
    categoria: "Tributário",
    titulo: "Planejamento Tributário",
    descricao: "Reduza a carga tributária da sua empresa de forma legal e estratégica. Análise completa do regime tributário ideal e reestruturação fiscal.",
    beneficios: ["Economia de até 40% em impostos", "Regime tributário ideal", "Segurança jurídica plena"],
    imagem: "/lp-planejamento-tributario-hero.jpg",
    destaque: true,
    badge: "Mais Procurado",
  },
  {
    id: 2,
    slug: "/recuperacao-tributaria",
    icon: TrendingUp,
    categoria: "Tributário",
    titulo: "Recuperação Tributária",
    descricao: "Identifique e recupere créditos tributários pagos a maior nos últimos 5 anos. Análise de viabilidade sem custo inicial.",
    beneficios: ["Recuperação de créditos", "Análise sem custo", "Resultados em 60–90 dias"],
    imagem: "/lp-recuperacao-tributaria-hero.jpg",
    destaque: true,
    badge: "Alto Retorno",
  },
  {
    id: 3,
    slug: "/transacao-tributaria",
    icon: Scale,
    categoria: "Tributário",
    titulo: "Transação Tributária",
    descricao: "Negocie e regularize dívidas tributárias com descontos de até 65% por meio do programa de transação da Receita Federal e PGFN.",
    beneficios: ["Descontos de até 65%", "Regularização imediata", "Parcelamento especial"],
    imagem: "/lp-transacao-tributaria-hero.jpg",
    destaque: false,
    badge: null,
  },
  {
    id: 4,
    slug: "/defesa-fiscal",
    icon: Gavel,
    categoria: "Tributário",
    titulo: "Defesa Fiscal",
    descricao: "Contestação técnica de autuações fiscais e embargos à execução. Atuação estratégica para anular ou reduzir autos de infração.",
    beneficios: ["Contestação de autuações", "Redução de multas", "Defesa em todas as instâncias"],
    imagem: "/lp-defesa-fiscal-hero.jpg",
    destaque: false,
    badge: null,
  },
  {
    id: 5,
    slug: "/clinicas-lucro-presumido",
    icon: Star,
    categoria: "Tributário",
    titulo: "Clínicas no Lucro Presumido",
    descricao: "Tese tributária exclusiva para clínicas médicas e de saúde no Lucro Presumido. Recupere valores pagos indevidamente ao Fisco.",
    beneficios: ["Tese jurídica exclusiva", "Para clínicas e hospitais", "Valores retroativos"],
    imagem: "/lp-clinicas-lucro-presumido-hero.jpg",
    destaque: true,
    badge: "Nicho Exclusivo",
  },
  {
    id: 6,
    slug: "/irpf-autismo",
    icon: FileText,
    categoria: "Tributário / IRPF",
    titulo: "IRPF — Isenção Autismo",
    descricao: "Isenção do Imposto de Renda para portadores de autismo e doenças graves. Recupere os valores pagos indevidamente dos últimos 5 anos.",
    beneficios: ["Isenção total do IRPF", "Restituição 5 anos", "Sem necessidade de internação"],
    imagem: "/lp-irpf-autismo-hero.jpg",
    destaque: false,
    badge: null,
  },
  {
    id: 7,
    slug: "/recuperacao-previdenciaria",
    icon: Users,
    categoria: "Previdenciário",
    titulo: "Recuperação Previdenciária",
    descricao: "Revisão de benefícios do INSS com múltiplos vínculos. Aumento da aposentadoria considerando todos os períodos contribuídos.",
    beneficios: ["Revisão de aposentadoria", "Múltiplos vínculos", "Aumento retroativo"],
    imagem: "/lp-recuperacao-previdenciaria-hero.jpg",
    destaque: false,
    badge: null,
  },
  {
    id: 8,
    slug: "/direito-previdenciario",
    icon: Award,
    categoria: "Previdenciário",
    titulo: "Direito Previdenciário",
    descricao: "Aposentadorias, pensões e benefícios do INSS. Análise especializada para garantir o melhor benefício ao qual você tem direito.",
    beneficios: ["Aposentadoria por invalidez", "BPC/LOAS", "Pensão por morte"],
    imagem: "/lp-direito-previdenciario-hero.jpg",
    destaque: false,
    badge: null,
  },
  {
    id: 9,
    slug: "/direito-bancario",
    icon: Building2,
    categoria: "Bancário",
    titulo: "Direito Bancário",
    descricao: "Revisão de contratos bancários com juros abusivos, negativação indevida e cobranças irregulares. Proteja seu patrimônio.",
    beneficios: ["Revisão de contratos", "Redução de juros", "Indenização por danos"],
    imagem: "/lp-direito-bancario-hero.jpg",
    destaque: false,
    badge: null,
  },
  {
    id: 10,
    slug: "/institucional",
    icon: BookOpen,
    categoria: "Consultivo",
    titulo: "Consultoria Jurídica Empresarial",
    descricao: "Assessoria jurídica completa para empresas. Contratos, compliance, reestruturação societária e gestão de riscos jurídicos.",
    beneficios: ["Contratos empresariais", "Compliance", "Reestruturação societária"],
    imagem: "/lp-institucional-hero.jpg",
    destaque: false,
    badge: null,
  },
];

/* ─────────────────────────────────────────
   CARD DE SOLUÇÃO COM IMAGEM
───────────────────────────────────────── */
function SolucaoCard({ s }: { s: typeof SOLUCOES[0] }) {
  const Icon = s.icon;
  return (
    <Link
      href={s.slug}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Badge */}
      {s.badge && (
        <div
          className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
          style={{ background: GOLD, color: NAVY }}
        >
          {s.badge}
        </div>
      )}

      {/* Imagem de capa */}
      <div className="relative h-44 overflow-hidden">
        {s.imagem ? (
          <img
            src={s.imagem}
            alt={s.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${DARK}, ${NAVY})` }}
          >
            <Icon className="w-12 h-12 opacity-20 text-white" />
          </div>
        )}
        {/* Overlay gradiente */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(7,24,46,0.7) 0%, transparent 60%)" }}
        />
        {/* Categoria sobre imagem */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `${GOLD}`, }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color: NAVY }} />
          </div>
          <span className="text-white text-xs font-bold uppercase tracking-wider opacity-90">
            {s.categoria}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-serif font-bold text-lg leading-snug mb-2 group-hover:text-[#E8B84B] transition-colors"
          style={{ color: NAVY }}
        >
          {s.titulo}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {s.descricao}
        </p>

        {/* Benefícios */}
        <ul className="space-y-1.5 mb-5">
          {s.beneficios.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
              {b}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#E8B84B]/30 transition-colors">
          <span className="text-sm font-bold" style={{ color: NAVY }}>Ver solução completa</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ background: GOLD }}
          >
            <ArrowRight className="w-4 h-4" style={{ color: NAVY }} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────
   LANDING PAGE ÂNCORA
───────────────────────────────────────── */
export default function LandingPage() {
  const destaques = SOLUCOES.filter((s) => s.destaque);
  const demais    = SOLUCOES.filter((s) => !s.destaque);

  return (
    <SiteLayout>
      <SEOHead
        title="Soluções Jurídicas — Mauro Monção Advogados Associados"
        description="Conheça todas as soluções jurídicas do escritório Mauro Monção: Planejamento Tributário, Recuperação de Créditos, Defesa Fiscal, Direito Previdenciário, Bancário e muito mais."
        canonical="https://solucoesjuridicas.mauromoncao.adv.br"
        keywords="soluções jurídicas, planejamento tributário, recuperação tributária, defesa fiscal, direito previdenciário"
      />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${NAVY} 60%, #1e4a78 100%)`,
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8">
            <a href="https://mauromoncao.adv.br" className="hover:text-white/80 transition-colors">Início</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Soluções Jurídicas</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Esquerda */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
                style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}50`, color: GOLD }}
              >
                <Scale className="w-3.5 h-3.5" />
                Escritório Mauro Monção
              </div>

              <h1
                className="font-serif font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Soluções Jurídicas
                <br />
                <em className="not-italic" style={{ color: GOLD }}>sob medida</em>{" "}
                para você
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                Mais de 15 anos de experiência em Direito Tributário, Previdenciário,
                Bancário e Empresarial nos estados do Ceará, Piauí e Maranhão.
              </p>

              <div className="flex flex-wrap gap-8 mb-10">
                {[
                  { v: "15+", l: "anos de experiência" },
                  { v: "10",  l: "soluções jurídicas" },
                  { v: "3",   l: "estados atendidos" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col">
                    <strong className="text-2xl font-bold font-serif" style={{ color: GOLD }}>{s.v}</strong>
                    <span className="text-xs text-white/55 mt-0.5">{s.l}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WA}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm transition-all hover:brightness-110"
                  style={{ background: "#25D366", color: "#fff" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp 24h
                </a>
                <a
                  href="tel:+558699519-8919"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm border border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  (86) 99519-8919
                </a>
              </div>
            </div>

            {/* Direita — cards mini destaques */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {destaques.slice(0, 4).map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{ minHeight: 140 }}
                  >
                    {s.imagem && (
                      <img
                        src={s.imagem}
                        alt={s.titulo}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(135deg, rgba(7,24,46,0.85), rgba(25,56,92,0.75))" }}
                    />
                    <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                      <Icon className="w-6 h-6 mb-2" style={{ color: GOLD }} />
                      <p className="text-white font-semibold text-sm leading-snug group-hover:text-[#E8B84B] transition-colors">
                        {s.titulo}
                      </p>
                      {s.badge && (
                        <span
                          className="mt-1.5 inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
                          style={{ background: `${GOLD}30`, color: GOLD, border: `1px solid ${GOLD}50` }}
                        >
                          {s.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DESTAQUES
      ══════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>
              <span className="w-6 h-px" style={{ background: GOLD }} />
              Soluções em Destaque
              <span className="w-6 h-px" style={{ background: GOLD }} />
            </div>
            <h2 className="font-serif font-bold text-3xl" style={{ color: NAVY }}>As mais procuradas</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              Soluções com maior impacto financeiro e mais demanda entre nossos clientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destaques.map((s) => <SolucaoCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TODAS AS SOLUÇÕES
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>
              <span className="w-6 h-px" style={{ background: GOLD }} />
              Portfólio Completo
              <span className="w-6 h-px" style={{ background: GOLD }} />
            </div>
            <h2 className="font-serif font-bold text-3xl" style={{ color: NAVY }}>Todas as soluções</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demais.map((s) => <SolucaoCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DR. BEN — SEÇÃO EXCLUSIVA DESTACADA
      ══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(135deg, ${DARK}, ${NAVY})` }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Foto Dr. Ben */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-full blur-3xl opacity-25 pointer-events-none"
                  style={{ background: GOLD }}
                />
                <div
                  className="relative rounded-full overflow-hidden shadow-2xl"
                  style={{ width: 300, height: 300, border: `4px solid ${GOLD}` }}
                >
                  <img
                    src="/dr-ben.jpg"
                    alt="Dr. Ben — Assistente Jurídico Digital"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Status badge */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{ background: `linear-gradient(135deg, ${DARK}, ${NAVY})`, border: `1px solid ${GOLD}50`, color: "white" }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                  Online agora · Resposta imediata
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
                style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}40`, color: GOLD }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Inovação · IA Jurídica
              </div>

              <h2
                className="font-serif font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Conheça o{" "}
                <em className="not-italic" style={{ color: GOLD }}>Dr. Ben</em>
                <br />
                Seu Assistente Jurídico Virtual
              </h2>

              <p className="text-white/70 leading-relaxed mb-6 text-base">
                Dr. Ben é o assistente jurídico digital do escritório Mauro Monção Advogados Associados,
                concebido para oferecer uma experiência de atendimento contemporânea, inteligente
                e altamente qualificada. Disponível 24 horas, organiza o primeiro contato e conduz
                o visitante às soluções jurídicas mais adequadas.
              </p>

              {/* Diferenciais */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Clock,    text: "24h disponível" },
                  { icon: Brain,    text: "IA treinada em Direito BR" },
                  { icon: Shield,   text: "Sigilo total · LGPD" },
                  { icon: Zap,      text: "Resposta em segundos" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${GOLD}20` }}
                  >
                    <Icon className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                    <span className="text-white/80 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("Olá, Dr. Ben! Preciso de uma orientação jurídica.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg"
                  style={{ background: GOLD, color: NAVY }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Iniciar Atendimento com Dr. Ben
                </a>
                <Link
                  href="/assistente-juridico"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm border-2 hover:bg-white/5 transition-all"
                  style={{ borderColor: `${GOLD}50`, color: GOLD }}
                >
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          POR QUE MAURO MONÇÃO
      ══════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-3xl" style={{ color: NAVY }}>
              Por que escolher o escritório{" "}
              <em className="not-italic" style={{ color: GOLD }}>Mauro Monção?</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award,        titulo: "15+ anos de experiência", desc: "Atuação consolidada em Direito Tributário, Previdenciário e Empresarial" },
              { icon: Scale,        titulo: "3 estados atendidos",      desc: "Ceará, Piauí e Maranhão — atendimento presencial e online" },
              { icon: Clock,        titulo: "Atendimento 24h",         desc: "WhatsApp e assistente jurídico IA disponíveis a qualquer momento" },
              { icon: CheckCircle,  titulo: "Resultados comprovados",   desc: "Centenas de casos resolvidos com economia real para nossos clientes" },
            ].map(({ icon: Icon, titulo, desc }) => (
              <div
                key={titulo}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${DARK}, ${NAVY})` }}
                >
                  <Icon className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: NAVY }}>{titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: `linear-gradient(135deg, ${DARK}, ${NAVY})`, border: `1px solid ${GOLD}30` }}
          >
            {/* Foto Dr. Mauro */}
            <div
              className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 shadow-xl"
              style={{ border: `3px solid ${GOLD}` }}
            >
              <img src="/dr-mauro.jpg" alt="Dr. Mauro Monção" className="w-full h-full object-cover object-top" />
            </div>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40` }}
            >
              Análise Gratuita
            </div>
            <h2
              className="font-serif font-bold text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Fale com um especialista agora
            </h2>
            <p className="text-white/65 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Análise gratuita do seu caso. Descubra qual solução jurídica se aplica à sua
              situação e quanto você pode economizar ou recuperar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${WA}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:brightness-110"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp 24h
              </a>
              <a
                href="tel:+558699519-8919"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                (86) 99519-8919
              </a>
            </div>
            <p className="text-white/30 text-xs mt-6">
              contato@mauromoncao.adv.br · Parnaíba – PI · OAB/PI · CE · MA
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
