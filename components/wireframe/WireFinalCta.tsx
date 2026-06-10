"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { WireSection } from "./WireSection";
import { ArrowRight, Mail, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company name is required").max(150),
  sector: z.enum(["msme", "user"], { errorMap: () => ({ message: "Please select a sector" }) }),
  phone: z
    .string()
    .trim()
    .min(7, "Invalid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormState = {
  name: string;
  email: string;
  company: string;
  sector: "" | "msme" | "user";
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  sector: "",
  phone: "",
  message: "",
};

export const WireFinalCta = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulate submit (no backend wired)
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast({
      title: "Message sent",
      description: "Thank you! Our team will get back to you shortly.",
    });
    setForm(initialForm);
    setOpen(false);
  };

  return (
    <WireSection id="contact" alt>
      <div className="text-center max-w-3xl mx-auto">
        <div className="section-eyebrow mb-3">Get in touch</div>
        <h2 className="font-display font-bold text-[32px] md:text-[44px] leading-tight tracking-tight text-navy-800">
          Not sure where to begin?
        </h2>
        <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))]">
          CII can help you find the right starting point for your smart manufacturing journey.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button type="button" onClick={() => setOpen(true)} className="btn-primary">
            Contact CII <ArrowRight className="!h-4 !w-4" />
          </button>
          <Link href="/readiness-assessment" className="btn-outline">
            <Mail className="!h-4 !w-4" /> Start with the assessment
          </Link>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-navy-800">Contact Us</DialogTitle>
            <DialogDescription>
              Fill in your details and our team will reach out to you.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="mt-2 space-y-4 text-left" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="cf-name">Name</Label>
                <Input
                  id="cf-name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  maxLength={100}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-email">Email</Label>
                <Input
                  id="cf-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@company.com"
                  maxLength={255}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-company">Company Name</Label>
                <Input
                  id="cf-company"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Company name"
                  maxLength={150}
                />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-sector">Sector</Label>
                <Select
                  value={form.sector}
                  onValueChange={(v) => update("sector", v as FormState["sector"])}
                >
                  <SelectTrigger id="cf-sector">
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="msme">MSME</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sector && <p className="text-xs text-destructive">{errors.sector}</p>}
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="cf-phone">Phone Number</Label>
                <Input
                  id="cf-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  maxLength={20}
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="cf-message">Message</Label>
                <Textarea
                  id="cf-message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="How can we help?"
                  rows={4}
                  maxLength={1000}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                <Send className="!h-4 !w-4" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </WireSection>
  );
};
