import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MouseCursor from "./components/MouseCursor";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy load heavy pages for better code splitting
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const SitemapHTML = lazy(() => import("./pages/SitemapHTML"));
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
            <Route 
              path="/services/:id" 
              element={
                <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                  <ServiceDetail />
                </Suspense>
              } 
            />
            <Route 
              path="/projects/:id" 
              element={
                <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                  <ProjectDetail />
                </Suspense>
              } 
            />
            <Route 
              path="/terms" 
              element={
                <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                  <Terms />
                </Suspense>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                  <Privacy />
                </Suspense>
              } 
            />
            <Route 
              path="/sitemap" 
              element={
                <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                  <SitemapHTML />
                </Suspense>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
