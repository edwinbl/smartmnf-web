import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULTS = {
  title: "CII Smart Manufacturing Platform â India's Industry 4.0 Gateway",
  description:
    "CII Smart Manufacturing helps Indian MSMEs assess, learn and adopt Industry 4.0 â readiness assessments, case studies, training and partner ecosystem.",
  keywords:
    "CII, Smart Manufacturing, Industry 4.0, MSME India, Manufacturing Readiness, Digital Transformation, Smart Factory, IoT, AI Manufacturing",
  image: "https://www.smartmfgindia.com/img/Logo-final.png",
  url: "https://smartmfgindia.lovable.app/",
};

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  jsonLd,
}: SEOProps) => {
  const t = title ? `${title} | CII Smart Manufacturing` : DEFAULTS.title;
  const d = description ?? DEFAULTS.description;
  const k = keywords ?? DEFAULTS.keywords;
  const img = image ?? DEFAULTS.image;
  const u = url ?? (typeof window !== "undefined" ? window.location.href : DEFAULTS.url);

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta name="keywords" content={k} />
      <link rel="canonical" href={u} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={u} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
