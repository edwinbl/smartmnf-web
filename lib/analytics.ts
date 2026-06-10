// Google Analytics 4 helper
// Set your GA4 Measurement ID here (or via NEXT_PUBLIC_GA_MEASUREMENT_ID env var)
export const GA_MEASUREMENT_ID =
  (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string | undefined) || "G-XXXXXXXXXX";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

export const initGA = () => {
  if (initialized) return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    // Not configured; skip in dev / when no ID provided.
    if (import.meta.env.DEV) {
      console.info("[GA] Skipped: no NEXT_PUBLIC_GA_MEASUREMENT_ID set");
    }
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  initialized = true;
};

export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
};

export const trackEvent = (
  name: string,
  params: Record<string, unknown> = {}
) => {
  if (!window.gtag) return;
  window.gtag("event", name, params);
};
