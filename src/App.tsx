import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { CookieBanner } from "./components/CookieBanner";
import LandingPage from "./pages/LandingPage";

// Soluções — carregadas de forma lazy
const PlanejamentoTributario    = lazy(() => import("./pages/solucoes/PlanejamentoTributario"));
const RecuperacaoTributaria      = lazy(() => import("./pages/solucoes/RecuperacaoTributaria"));
const TransacaoTributaria        = lazy(() => import("./pages/solucoes/TransacaoTributaria"));
const DefesaFiscal               = lazy(() => import("./pages/solucoes/DefesaFiscal"));
const RecuperacaoPrevidenciaria  = lazy(() => import("./pages/solucoes/RecuperacaoPrevidenciaria"));
const DireitoPrevidenciario      = lazy(() => import("./pages/solucoes/DireitoPrevidenciario"));
const DireitoBancario            = lazy(() => import("./pages/solucoes/DireitoBancario"));
const IrpfAutismo                = lazy(() => import("./pages/solucoes/IrpfAutismo"));
const ClinicasLucroPresumido     = lazy(() => import("./pages/solucoes/ClinicasLucroPresumido"));
const Institucional              = lazy(() => import("./pages/solucoes/Institucional"));
const DrBen                      = lazy(() => import("./pages/solucoes/DrBen"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07182e]">
      <div
        className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
        style={{ borderColor: "#E8B84B transparent transparent transparent" }}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {/* Landing Page âncora */}
          <Route path="/" component={LandingPage} />

          {/* Soluções Jurídicas */}
          <Route path="/planejamento-tributario"    component={PlanejamentoTributario} />
          <Route path="/recuperacao-tributaria"     component={RecuperacaoTributaria} />
          <Route path="/transacao-tributaria"       component={TransacaoTributaria} />
          <Route path="/defesa-fiscal"              component={DefesaFiscal} />
          <Route path="/recuperacao-previdenciaria" component={RecuperacaoPrevidenciaria} />
          <Route path="/direito-previdenciario"     component={DireitoPrevidenciario} />
          <Route path="/direito-bancario"           component={DireitoBancario} />
          <Route path="/irpf-autismo"               component={IrpfAutismo} />
          <Route path="/clinicas-lucro-presumido"   component={ClinicasLucroPresumido} />
          <Route path="/institucional"              component={Institucional} />
          <Route path="/assistente-juridico"        component={DrBen} />

          {/* Fallback → Landing Page */}
          <Route component={LandingPage} />
        </Switch>
      </Suspense>
      <CookieBanner />
    </>
  );
}
