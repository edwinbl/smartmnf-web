import type { ProgrammeItem } from "@/data/programmes";

type Batch = NonNullable<ProgrammeItem["batches"]>[number];

// RFC 5545 text escaping for TEXT fields.
const escapeText = (s: string) =>
  s
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

// Fold lines to â¤75 octets per RFC 5545.
const foldLine = (line: string) => {
  if (line.length <= 75) return line;
  const out: string[] = [];
  let i = 0;
  while (i < line.length) {
    const chunk = line.slice(i, i + (i === 0 ? 75 : 74));
    out.push(i === 0 ? chunk : " " + chunk);
    i += i === 0 ? 75 : 74;
  }
  return out.join("\r\n");
};

const fmtDate = (d: Date) =>
  d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

const parseDurationHours = (d: string): number => {
  // Best-effort: "2 days" â 48, "8 hours" â 8, "3 weeks" â 504. Default 1h.
  const m = d.match(/(\d+(?:\.\d+)?)\s*(hour|day|week)/i);
  if (!m) return 1;
  const n = parseFloat(m[1]);
  const unit = m[2].toLowerCase();
  if (unit.startsWith("week")) return n * 7 * 24;
  if (unit.startsWith("day")) return n * 24;
  return n;
};

export const buildIcs = (programme: ProgrammeItem, batch?: Batch): string => {
  const start = new Date(programme.isoDate);
  const hours = parseDurationHours(programme.duration);
  const end = new Date(start.getTime() + hours * 3600 * 1000);

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CII Smart Mfg//Programmes//EN",
    "BEGIN:VEVENT",
    `UID:${programme.slug}${batch ? "-" + batch.id : ""}@smartmfgindia`,
    `DTSTAMP:${fmtDate(new Date())}`,
    `DTSTART:${fmtDate(start)}`,
    `DTEND:${fmtDate(end)}`,
    `SUMMARY:${escapeText(programme.title)}`,
    `DESCRIPTION:${escapeText(programme.summary)}`,
    batch?.location ? `LOCATION:${escapeText(batch.location)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  return lines.map(foldLine).join("\r\n");
};

export const downloadIcs = (programme: ProgrammeItem, batch?: Batch) => {
  const ics = buildIcs(programme, batch);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${programme.slug}${batch ? "-" + batch.id : ""}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
