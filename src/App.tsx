import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MouseCursor from "./components/MouseCursor";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import SitemapHTML from "./pages/SitemapHTML";
import NotFound from "./pages/NotFound";
import './styles/custom.css';
import './styles/responsive.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from './components/GoogleAnalytics';
import AhrefsAnalytics from './components/AhrefsAnalytics';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <SpeedInsights />
      <Analytics />
      <GoogleAnalytics />
      <AhrefsAnalytics />

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MouseCursor />
          <div className="background-blob"></div>
          <div className="background-blob"></div>
          <div className="background-blob"></div>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<SitemapHTML />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
