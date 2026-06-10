import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  {
    q: "How does the assessment work?",
    a: "Our readiness assessment is a guided digital questionnaire that evaluates your operations across people, processes and technology. You receive a benchmarked report and a tailored next-step roadmap.",
  },
  {
    q: "Who can join the platform?",
    a: "Manufacturers of every size â from MSMEs to large enterprises â along with academic institutions, solution providers and ecosystem partners are welcome.",
  },
  {
    q: "Is the platform free to use?",
    a: "Core resources, assessments and community access are free. Some training programmes and advanced consulting engagements may have fees, clearly indicated upfront.",
  },
  {
    q: "How do I become a partner?",
    a: "Select 'Partnership & Collaboration' in the contact form above. Our ecosystem team will set up a discovery call to explore alignment and next steps.",
  },
  {
    q: "How does ecosystem matchmaking work?",
    a: "Based on your maturity, sector and goals we suggest relevant programmes, peer enterprises, technology partners and demo centres so you can move forward with confidence.",
  },
];

export const ContactFAQ = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
            Common questions
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Quick answers to the things people most often ask before reaching out.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="cii-card divide-y" style={{ borderColor: "hsl(var(--neutral-150))" }}>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0 px-6">
                <AccordionTrigger className="text-left font-display font-bold text-[hsl(var(--navy-900))] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--neutral-700))] leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
