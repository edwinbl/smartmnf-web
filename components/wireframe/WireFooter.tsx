"use client";

import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import logoSrc from "@/assets/cii-smart-mfg-logo.png";

const socials = [
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "YouTube", href: "#", Icon: Youtube },
];

// const cols = [
//   { title: "About", links: ["About CII", "Smart Manufacturing", "Leadership", "Press"] },
//   { title: "Get started", links: ["Readiness Assessment", "Solutions", "Programmes & Training", "Events"] },
//   { title: "Resources", links: ["Case studies", "Reports", "Playbooks", "FAQs"] },
//   { title: "Contact", links: ["Contact CII", "Support", "Partnerships", "Careers"] },
// ];

const cols = [
  {
    title: "About",
    links: [
      { label: "About", url: "/about" },
      { label: "Readiness Assessment", url: "/readiness-assessment" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All Solutions", url: "/solutions" },
      { label: "Case Studies", url: "/case-studies" },
      { label: "Reports & Publications", url: "/reports" },
      { label: "E-Directory", url: "/directories" },
    ],
  },
  {
    title: "Programmes & Training",
    links: [
      { label: "All Programmes", url: "/programmes" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "All Events", url: "/events" },
    ],
  },
];

export const WireFooter = () => {
  return (
    <footer className="text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div
        className="h-1 tricolor-stripe w-full"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--saffron)) 0% 33%, #fff 33% 66%, hsl(var(--india-green)) 66% 100%)",
        }}
      />
      <div className="container-cii py-14">
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1 sm:col-span-2 col-span-2">
            <Link href="/" className="inline-flex items-center" aria-label="CII Smart Manufacturing Platform â Home">
              <img
                src={logoSrc}
                alt="CII Smart Manufacturing Platform"
                loading="lazy"
                decoding="async"
                className="h-11 md:h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 lg:max-w-[240px] sm:max-w-[50%] w-full">
              Helping Indian MSMEs assess, learn and adopt smart manufacturing â convened by the Confederation of Indian
              Industry.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] uppercase tracking-[0.14em] font-bold text-white mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.url}
                      onClick={(e) => {
                        if (l.url.startsWith("#") && l.url.length > 1) {
                          e.preventDefault();
                          document
                            .getElementById(l.url.slice(1))
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                          history.replaceState(null, "", l.url);
                        }
                      }}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-white/60">
          <span>Â© {new Date().getFullYear()} Confederation of Indian Industry. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
