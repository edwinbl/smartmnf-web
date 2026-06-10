import {
  Gauge, LayoutGrid, MessageSquare, GraduationCap,
  BookOpen, Handshake, Award, BarChart3, ArrowUpRight,
} from "lucide-react";

const tiles = [
  { Icon: Gauge, title: "Maturity Assessment", body: "Benchmark your readiness in minutes.", span: "lg:col-span-2 lg:row-span-2", accent: true },
  { Icon: LayoutGrid, title: "Solutions Hub", body: "Vetted Industry 4.0 solutions.", span: "" },
  { Icon: MessageSquare, title: "Expert Guidance", body: "Talk to seasoned advisors.", span: "" },
  { Icon: GraduationCap, title: "Programmes", body: "Capability building at scale.", span: "lg:col-span-2" },
  { Icon: BookOpen, title: "Ecosystem Directory", body: "Discover the right partners.", span: "" },
  { Icon: Handshake, title: "Matchmaking", body: "Right fit, faster.", span: "" },
  { Icon: Award, title: "Recognition", body: "Showcase your progress.", span: "" },
  { Icon: BarChart3, title: "Insights Dashboard", body: "Track impact, decide with data.", span: "" },
];

export const AboutCapabilities = () => {
  return (
    <section className="py-20 lg:py-28 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Platform Capabilities</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Everything you need to transform â in one place.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {tiles.map(({ Icon, title, body, span, accent }) => (
            <div
              key={title}
              className={`group relative cii-card p-6 overflow-hidden flex flex-col justify-between ${span} ${
                accent ? "text-white" : ""
              }`}
              style={
                accent
                  ? {
                      background:
                        "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-700)))",
                      borderColor: "hsl(var(--navy-700))",
                    }
                  : undefined
              }
            >
              <div
                className={`h-11 w-11 grid place-items-center rounded-md ${
                  accent ? "bg-white/10 text-white" : "bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className={`font-display font-bold text-lg ${accent ? "text-white" : "text-navy-900"}`}>{title}</h3>
                <p className={`mt-1 text-sm ${accent ? "text-white/70" : "text-[hsl(var(--neutral-500))]"}`}>{body}</p>
              </div>
              <ArrowUpRight
                className={`absolute top-5 right-5 h-4 w-4 transition-all opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 ${
                  accent ? "text-white" : "text-navy-800"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
