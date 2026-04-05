import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Plus, Loader2, Check, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useMagnetic } from "@/hooks/useMagnetic";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "$1000 - $5000", service: "CONSULTANCY", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const magnetic = useMagnetic();

  const updateField = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    console.log("=== FORM SUBMIT START ===");
    console.log("Form data:", JSON.stringify(form));

    try {
      // LAYER 1: Formspree — sends email directly to inbox
      const formspreeRes = await fetch("https://formspree.io/f/maqldojp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          budget: form.budget,
          service: form.service,
          message: form.message,
          _subject: `New Contact from ${form.name}`,
          _replyto: form.email,
        }),
      });

      const formspreeData = await formspreeRes.json();
      console.log("Formspree status:", formspreeRes.status);
      console.log("Formspree response:", formspreeData);

      if (!formspreeRes.ok) {
        throw new Error(formspreeData?.errors?.[0]?.message || "Formspree failed");
      }

      // LAYER 2: Supabase — save to database as backup
      try {
        await supabase.from("contact_submissions").insert([{
          name: form.name,
          email: form.email,
          budget: form.budget || "Not specified",
          service: form.service || "Not specified",
          message: form.message,
        }]);
      } catch (dbError) {
        console.warn("Supabase save failed (non-critical):", dbError);
      }

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", budget: "$1000 - $5000", service: "CONSULTANCY", message: "" });
      }, 5000);
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMsg(error.message || "Failed to send message");
    }
  };

  return (
    <section id="contact" className="bg-dark">
      <div className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] text-[#666] uppercase mb-4">GET IN TOUCH</p>
            <h2 className="text-[clamp(24px,4vw,48px)] font-bold font-dm text-white leading-tight max-w-2xl">
              Tell us about your project —whether it's a website, SEO, or marketing.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
              <MessageCircle size={20} className="text-[#666] mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] text-[#666] uppercase mb-1">TALK TO US</p>
                <p className="text-white/80 text-sm">Work and general inquiries</p>
                <a href="tel:+12345678900" className="text-white text-sm hover:text-white/70 transition-colors">+123 456 789 00</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-4">
              <MapPin size={20} className="text-[#666] mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] text-[#666] uppercase mb-1">POST ADDRESS</p>
                <p className="text-white/80 text-sm">541 Melville Ave, Palo Alto,<br />CA 94301, United States</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto bg-background rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold font-dm text-foreground mb-8">Have a project in mind?</h3>

          {status === "success" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm">We'll reply within 24 hours.</p>
              <p className="text-muted-foreground/60 text-xs mt-2">Check spam/junk folder too.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-red-600 text-sm font-medium">❌ {errorMsg || "Failed to send. Try again."}</p>
                  <p className="text-red-400 text-xs mt-1">
                    Or email directly:
                    <a href="mailto:hello@floka-design.com" className="underline ml-1">hello@floka-design.com</a>
                  </p>
                </motion.div>
              )}

              <input name="name" type="text" placeholder="YOUR NAME" value={form.name} onChange={e => updateField("name", e.target.value)} required
                className="w-full border-b border-border pb-4 bg-transparent text-xs tracking-[0.2em] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
              <input name="email" type="email" placeholder="BUSINESS EMAIL" value={form.email} onChange={e => updateField("email", e.target.value)} required
                className="w-full border-b border-border pb-4 bg-transparent text-xs tracking-[0.2em] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-[0.2em] text-muted-foreground block mb-2">BUDGET</label>
                  <select name="budget" value={form.budget} onChange={e => updateField("budget", e.target.value)}
                    className="w-full border border-border rounded-lg px-4 py-3 bg-transparent text-sm text-foreground focus:outline-none focus:border-foreground transition-colors">
                    <option>$1000 - $5000</option>
                    <option>$5000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] text-muted-foreground block mb-2">SERVICE</label>
                  <select name="service" value={form.service} onChange={e => updateField("service", e.target.value)}
                    className="w-full border border-border rounded-lg px-4 py-3 bg-transparent text-sm text-foreground focus:outline-none focus:border-foreground transition-colors">
                    <option>CONSULTANCY</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Branding</option>
                    <option>SEO</option>
                  </select>
                </div>
              </div>

              <textarea name="message" placeholder="MESSAGE" value={form.message} onChange={e => updateField("message", e.target.value)} required rows={4}
                className="w-full border-b border-border pb-4 bg-transparent text-xs tracking-[0.2em] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none" />

              <div ref={magnetic.ref} style={magnetic.style} className="inline-block">
                <button type="submit" disabled={status === "loading"} className="flex items-center gap-4 group">
                  <motion.span
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${status === "loading" ? "opacity-60" : "bg-foreground"}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {status === "loading" ? (
                      <Loader2 size={18} className="text-background animate-spin" />
                    ) : (
                      <Plus size={18} className="text-background" />
                    )}
                  </motion.span>
                  <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
                    {status === "loading" ? "SENDING..." : "LET'S TALK"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
