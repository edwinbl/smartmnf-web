"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// TODO(migration): map [BrowserRouter, Route, Routes, usePathname] to the App Router file structure
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA, trackPageView } from "@/lib/analytics";
import { PageSkeleton } from "@/components/skeletons/PageSkeleton";
import { CookieConsent } from "@/components/common/CookieConsent";
import { ChunkErrorBoundary } from "@/components/common/ChunkErrorBoundary";
import { routeLoaders, prefetchOnIdle } from "@/lib/routePrefetch";

const Index = lazy(routeLoaders["/"]);
const About = lazy(routeLoaders["/about"]);
const Contact = lazy(routeLoaders["/contact"]);
const ReportsIndex = lazy(routeLoaders["/reports"]);
const ReportDetail = lazy(routeLoaders["/reports/:slug"]);
const EventsIndex = lazy(routeLoaders["/events"]);
const EventDetail = lazy(routeLoaders["/events/:slug"]);
const ProgrammesIndex = lazy(routeLoaders["/programmes"]);
const ProgrammeDetail = lazy(routeLoaders["/programmes/:slug"]);
const NotFound = lazy(routeLoaders["Manual"]);
const Terms = lazy(routeLoaders["/terms"]);
const Privacy = lazy(routeLoaders["/privacy"]);
const Accessibility = lazy(routeLoaders["/accessibility"]);
const Cookies = lazy(routeLoaders["/cookies"]);
const ReadinessAssessment = lazy(routeLoaders["/readiness-assessment"]);
const AssessmentDetail = lazy(routeLoaders["/readiness-assessment/:slug"]);
const CaseStudiesIndex = lazy(routeLoaders["/case-studies"]);
const CaseStudyDetail = lazy(routeLoaders["/case-studies/:slug"]);
const SolutionsIndex = lazy(routeLoaders["/solutions"]);
const SolutionDetail = lazy(routeLoaders["/solutions/:slug"]);
const Directories = lazy(routeLoaders["/directories"]);

const queryClient = new QueryClient();

const RouteTracker = () => {
  const location = usePathname();
  useEffect(() => {
    initGA();
  }, []);
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);
  return null;
};

const IdlePrefetch = () => {
  useEffect(() => {
    // Warm the most commonly visited routes once the app is interactive.
    prefetchOnIdle([
      "/solutions",
      "/programmes",
      "/reports",
      "/events",
      "/about",
      "/contact",
    ]);
  }, []);
  return null;
};

const withSuspense = (node: React.ReactNode, variant: "list" | "detail" | "form" | "default" = "default") => (
  <Suspense fallback={<PageSkeleton variant={variant} />}>{node}</Suspense>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <IdlePrefetch />
          <ChunkErrorBoundary>
            <Routes>
              // TODO(migration): move route "/" to app///page.tsx
<Route path="/" element={withSuspense(<Index />)} />
              // TODO(migration): move route "/about" to app//about/page.tsx
<Route path="/about" element={withSuspense(<About />, "detail")} />
              // TODO(migration): move route "/contact" to app//contact/page.tsx
<Route path="/contact" element={withSuspense(<Contact />, "form")} />
              // TODO(migration): move route "/reports" to app//reports/page.tsx
<Route path="/reports" element={withSuspense(<ReportsIndex />, "list")} />
              // TODO(migration): move route "/reports/:slug" to app//reports/:slug/page.tsx
<Route path="/reports/:slug" element={withSuspense(<ReportDetail />, "detail")} />
              // TODO(migration): move route "/events" to app//events/page.tsx
<Route path="/events" element={withSuspense(<EventsIndex />, "list")} />
              // TODO(migration): move route "/events/:slug" to app//events/:slug/page.tsx
<Route path="/events/:slug" element={withSuspense(<EventDetail />, "detail")} />
              // TODO(migration): move route "/programmes" to app//programmes/page.tsx
<Route path="/programmes" element={withSuspense(<ProgrammesIndex />, "list")} />
              // TODO(migration): move route "/programmes/:slug" to app//programmes/:slug/page.tsx
<Route path="/programmes/:slug" element={withSuspense(<ProgrammeDetail />, "detail")} />
              // TODO(migration): move route "/terms" to app//terms/page.tsx
<Route path="/terms" element={withSuspense(<Terms />, "detail")} />
              // TODO(migration): move route "/privacy" to app//privacy/page.tsx
<Route path="/privacy" element={withSuspense(<Privacy />, "detail")} />
              // TODO(migration): move route "/accessibility" to app//accessibility/page.tsx
<Route path="/accessibility" element={withSuspense(<Accessibility />, "detail")} />
              // TODO(migration): move route "/cookies" to app//cookies/page.tsx
<Route path="/cookies" element={withSuspense(<Cookies />, "detail")} />
              // TODO(migration): move route "/readiness-assessment" to app//readiness-assessment/page.tsx
<Route path="/readiness-assessment" element={withSuspense(<ReadinessAssessment />, "detail")} />
              // TODO(migration): move route "/readiness-assessment/:slug" to app//readiness-assessment/:slug/page.tsx
<Route path="/readiness-assessment/:slug" element={withSuspense(<AssessmentDetail />, "detail")} />
              // TODO(migration): move route "/case-studies" to app//case-studies/page.tsx
<Route path="/case-studies" element={withSuspense(<CaseStudiesIndex />, "list")} />
              // TODO(migration): move route "/case-studies/:slug" to app//case-studies/:slug/page.tsx
<Route path="/case-studies/:slug" element={withSuspense(<CaseStudyDetail />, "detail")} />
              // TODO(migration): move route "/solutions" to app//solutions/page.tsx
<Route path="/solutions" element={withSuspense(<SolutionsIndex />, "list")} />
              // TODO(migration): move route "/solutions/:slug" to app//solutions/:slug/page.tsx
<Route path="/solutions/:slug" element={withSuspense(<SolutionDetail />, "detail")} />
              // TODO(migration): move route "/directories" to app//directories/page.tsx
<Route path="/directories" element={withSuspense(<Directories />, "detail")} />
              {/Manual ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "Manual" ROUTE Manual/}
              // TODO(migration): move route "Manual" to app/Manual/page.tsx
<Route path="Manual" element={withSuspense(<NotFound />)} />
            </Routes>
          </ChunkErrorBoundary>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
