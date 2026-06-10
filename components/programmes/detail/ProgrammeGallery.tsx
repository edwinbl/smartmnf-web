import { Play } from "lucide-react";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
}

export const ProgrammeGallery = ({ programme }: Props) => {
  if (!programme.gallery?.length) return null;

  return (
    <section>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
        Photo gallery
      </h2>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
        Moments from the {programme.title} sessions.
      </p>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
        {programme.gallery.map((item, i) => (
          <figure key={i} className="cii-card overflow-hidden group">
            <div className="relative aspect-[4/3] bg-[hsl(var(--neutral-100))]">
              {item.type === "video" ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--navy-600))]"
                  aria-label={`Play video: ${item.caption ?? programme.title} (opens in new tab)`}
                >
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div aria-hidden className="w-full h-full bg-[hsl(var(--neutral-100))]" />
                  )}
                  <span aria-hidden className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/40 transition">
                    <span className="h-12 w-12 rounded-full bg-white/95 grid place-items-center text-[hsl(var(--navy-900))]">
                      <Play className="h-5 w-5 ml-0.5" />
                    </span>
                  </span>
                </a>
              ) : (
                <img
                  src={item.url}
                  alt={item.caption ?? `Programme moment ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            {item.caption && (
              <figcaption className="px-3 py-2 text-xs text-[hsl(var(--neutral-700))]">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};
