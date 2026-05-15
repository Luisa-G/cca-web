import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import QuienesSomos from "@/pages/QuienesSomos";
import QueHacemos from "@/pages/QueHacemos";
import TomaAccion from "@/pages/TomaAccion";
import AprendeMas from "@/pages/AprendeMas";
import AvisoPrivacidad from "@/pages/AvisoPrivacidad";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/quienes-somos" component={QuienesSomos} />
        <Route path="/que-hacemos" component={QueHacemos} />
        <Route path="/toma-accion" component={TomaAccion} />
        <Route path="/aprende-mas" component={AprendeMas} />
        <Route path="/aviso-privacidad" component={AvisoPrivacidad} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;