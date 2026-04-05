import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const LINKEDIN = "https://www.linkedin.com/in/md-zahid-hasan-7b15ba20b";

const navLinks = [
  { label: "About Us", target: "about" },
  { label: "Services", target: "services" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Get In Touch", target: "contact" },
  { label: "Our Team", target: "team" },
];

const socialIcons = [
  { Icon: Facebook, url: LINKEDIN },
  { Icon: Twitter, url: LINKEDIN },
  { Icon: Linkedin, url: LINKEDIN },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email });
      if (error) {
        if (error.code === "23505") {
          toast.info("You're already subscribed!");
        } else {
          throw error;
        }
      } else {
        toast.success("Subscribed successfully!");
        setEmail("");
      }
    } catch {
      toast.error("Failed to subscribe");
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <span className="absolute top-0 left-0 text-[clamp(80px,15vw,200px)] font-bold font-dm text-white/[0.03] leading-none pointer-events-none select-none">
        Floka
      </span>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16">
        {/* Navigation links — all scroll to sections */}
        <div className="space-y-4">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <motion.button
                onClick={() => scrollTo(link.target)}
                className="text-2xl md:text-3xl font-light text-white hover:text-[#888] transition-colors"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-8">
          <p className="text-[#888] text-sm leading-relaxed max-w-md">
            At Floka, we believe design should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
          </p>

          {/* Newsletter */}
          <form onSubmit={handleNewsletter} className="flex border-b border-dark-border pb-2 max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder:text-[#555] focus:outline-none"
            />
            <motion.button
              type="submit"
              className="text-xs tracking-wider text-white hover:text-[#888] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SUBSCRIBE
            </motion.button>
          </form>

          {/* Contact info */}
          <div className="space-y-2 text-sm text-[#888]">
            <a href="mailto:info@floka-design.com" className="block hover:text-white transition-colors">
              info@floka-design.com
            </a>
            <a href="tel:+12345678900" className="block hover:text-white transition-colors">
              +123 (456 789 00)
            </a>
            <p>12/A, Booston Tower, NYC</p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialIcons.map(({ Icon, url }, i) => (
              <motion.button
                key={i}
                onClick={() => window.open(url, "_blank")}
                className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center text-[#888] hover:bg-white hover:text-dark hover:border-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col sm:flex-row justify-between gap-4">
        <span className="text-xs tracking-[0.3em] uppercase text-[#444]">HAPPY USERS</span>
        <span className="text-xs tracking-[0.3em] uppercase text-[#444]">©2025 FLOKA™ STUDIO — Zahid Hasan</span>
      </div>
    </footer>
  );
}
