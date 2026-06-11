// Centralised lazy-import factories for every route.
// Using `lazy()` over the same factory reference guarantees React reuses
// the in-flight promise we kick off via `prefetchRoute()` on hover/focus.

export const routeLoaders = {
  "/": () => import("@/pages/Index"),
  "/about": () => import("@/pages/About"),
  "/contact": () => import("@/pages/Contact"),
  "/reports": () => import("@/pages/ReportsIndex"),
  "/reports/:slug": () => import("@/pages/ReportDetail"),
  "/events": () => import("@/pages/EventsIndex"),
  "/events/:slug": () => import("@/pages/EventDetail"),
  "/programmes": () => import("@/pages/ProgrammesIndex"),
  "/programmes/:slug": () => import("@/pages/ProgrammeDetail"),
  "/terms": () => import("@/pages/Terms"),
  "/privacy": () => import("@/pages/Privacy"),
  "/accessibility": () => import("@/pages/Accessibility"),
  "/cookies": () => import("@/pages/Cookies"),
  "/readiness-assessment": () => import("@/pages/ReadinessAssessment"),
  "/readiness-assessment/:slug": () => import("@/pages/AssessmentDetail"),
  "/case-studies": () => import("@/pages/CaseStudiesIndex"),
  "/case-studies/:slug": () => import("@/pages/CaseStudyDetail"),
  "/solutions": () => import("@/pages/SolutionsIndex"),
  "/solutions/:slug": () => import("@/pages/SolutionDetail"),
  "/directories": () => import("@/pages/Directories"),
  "Manual": () => import("@/pages/NotFound"),
} as const;

export type RoutePath = keyof typeof routeLoaders;

// Match a concrete URL path to one of our route keys (parameterised or exact).
function resolveKey(path: string): RoutePath | null {
  if (path in routeLoaders) return path as RoutePath;
  // Strip query/hash if any
  const clean = path.split("?")[0].split("#")[0];
  if (clean in routeLoaders) return clean as RoutePath;
  // Match parameterised routes: /reports/foo -> /reports/:slug
  for (const key of Object.keys(routeLoaders) as RoutePath[]) {
    if (!key.includes(":")) continue;
    const pattern = new RegExp(
      "^" + key.replace(/:[^/]+/g, "[^/]+") + "$",
    );
    if (pattern.test(clean)) return key;
  }
  return null;
}

const warmed = new Set<RoutePath>();

export function prefetchRoute(pathOrKey: string): void {
  const key = resolveKey(pathOrKey);
  if (!key || warmed.has(key)) return;
  warmed.add(key);
  // Fire and forget â failures here are non-fatal; the real navigation
  // will surface any issue through the lazy boundary.
  routeLoaders[key]().catch(() => warmed.delete(key));
}

export function prefetchOnIdle(paths: string[]): void {
  const run = () => paths.forEach(prefetchRoute);
  if (typeof window === "undefined") return;
  const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => void })
    .requestIdleCallback;
  if (ric) ric(run);
  else setTimeout(run, 1500);
}
