import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  faqs: { q: string; a: string }[];
}

export const EventFAQ = ({ faqs }: Props) => (
  <section className="space-y-4">
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Frequently asked</h2>
    <Accordion type="single" collapsible className="cii-card divide-y divide-[hsl(var(--neutral-150))]">
      {faqs.map((f, i) => (
        <AccordionItem value={`item-${i}`} key={i} className="border-0 px-5">
          <AccordionTrigger className="text-left font-display font-semibold text-[hsl(var(--navy-900))]">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-[hsl(var(--neutral-700))]">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);
