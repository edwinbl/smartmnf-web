import { Mail, Phone, MessageCircle, LifeBuoy, HelpCircle } from "lucide-react";

const channels = [
  { Icon: Mail, label: "Email Support", value: "smartmfg@cii.in", action: "Send email", href: "mailto:smartmfg@cii.in" },
  { Icon: Phone, label: "Phone Support", value: "+91 11 4150 2301", action: "Call now", href: "tel:+911141502301" },
  { Icon: MessageCircle, label: "WhatsApp", value: "Quick chat support", action: "Open chat", href: "https://wa.me/911141502301" },
  { Icon: LifeBuoy, label: "Help Centre", value: "Guides & how-tos", action: "Visit centre", href: "#" },
  { Icon: HelpCircle, label: "FAQs", value: "Common questions", action: "Browse FAQs", href: "#faq" },
];

export const SupportChannels = () => {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Other Ways to Reach Us</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
            Support channels
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map(({ Icon, label, value, action, href }) => (
            <a key={label} href={href} className="cii-card p-5 flex flex-col gap-3 group">
              <div
                className="grid place-items-center h-10 w-10 rounded-md text-[hsl(var(--navy-700))] group-hover:text-white transition-colors"
                style={{ background: "hsl(var(--navy-050))" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-[hsl(var(--navy-900))]">{label}</div>
                <div className="text-xs text-[hsl(var(--neutral-500))] mt-0.5 break-words">{value}</div>
              </div>
              <span className="link-arrow text-xs mt-auto">{action} â</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
