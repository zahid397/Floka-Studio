import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, ExternalLink, Github } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const projects = [
  {
    title: "HOSTFLOW",
    year: "2026",
    client: "Zahid Hasan",
    category: "Property Management",
    description: "Airbnb Property Management Assistant — a full-stack TypeScript application for managing vacation rental properties with AI-powered automation.",
    github: "https://github.com/zahid397/HostFlow-Airbnb-Property-Management-Assistant",
    tech: ["TypeScript", "React", "AI"],
  },
  {
    title: "AGROLINK",
    year: "2026",
    client: "Zahid Hasan",
    category: "AgriTech / E-Commerce",
    description: "Farm-direct marketplace connecting farmers directly with consumers, eliminating middlemen for fresh produce delivery.",
    github: "https://github.com/zahid397/agrolink-farm-direct",
    tech: ["TypeScript", "React", "Supabase"],
  },
  {
    title: "EDUSMART AI",
    year: "2026",
    client: "Zahid Hasan",
    category: "AI / Education",
    description: "AI-powered education chatbot supporting Bangla language with offline capabilities, built with OpenAI, HuggingFace, and Gradio.",
    github: "https://github.com/zahid397/EduSmart_AI",
    tech: ["Python", "AI", "HuggingFace"],
  },
  {
    title: "COMMANDHQ AI",
    year: "2026",
    client: "Zahid Hasan",
    category: "AI / Productivity",
    description: "AI command headquarters — an intelligent task orchestration and automation platform powered by cutting-edge AI models.",
    github: "https://github.com/zahid397/commandhq-ai",
    tech: ["TypeScript", "AI", "Automation"],
  },
  {
    title: "ALPHA AI TRADER",
    year: "2026",
    client: "Zahid Hasan",
    category: "FinTech / AI",
    description: "AI-powered trading bot and market analysis platform using machine learning for intelligent investment decisions.",
    github: "https://github.com/zahid397/alpha-ai-trader",
    tech: ["JavaScript", "AI", "Trading"],
  },
  {
    title: "EXOAI",
    year: "2026",
    client: "Zahid Hasan",
    category: "Space / Machine Learning",
    description: "AI-powered Exoplanet Classifier using NASA Kepler Dataset — detecting planets beyond our solar system with ML.",
    github: "https://github.com/zahid397/ExoAI",
    tech: ["Python", "NASA", "ML"],
  },
];

const categoryColors: Record<string, string> = {
  "Property Management": "bg-blue-500/20 text-blue-300",
  "AgriTech / E-Commerce": "bg-green-500/20 text-green-300",
  "AI / Education": "bg-purple-500/20 text-purple-300",
  "AI / Productivity": "bg-orange-500/20 text-orange-300",
  "FinTech / AI": "bg-yellow-500/20 text-yellow-300",
  "Space / Machine Learning": "bg-cyan-500/20 text-cyan-300",
};

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <ParallaxSection offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">PORTFOLIO</p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold font-dm leading-tight">
              Real projects, real impact<br />— built by Zahid Hasan.
            </h2>
          </motion.div>
        </ParallaxSection>

        <div className="space-y-4">
          {displayed.map((p, i) => (
            <ParallaxSection key={p.title} offset={i % 2 === 0 ? 15 : -15}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-colors group cursor-pointer bg-muted/30"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                whileHover={{ y: -3 }}
              >
                {/* Project header bar */}
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-base md:text-lg font-bold font-dm tracking-wider text-foreground">
                          {p.title}
                        </h3>
                        <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${categoryColors[p.category] || "bg-muted text-muted-foreground"}`}>
                          {p.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">{p.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{p.year}</span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] tracking-wider uppercase border border-border rounded-full px-3 py-1 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable details */}
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <div className="p-5 md:p-6 space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                      <div className="flex items-center gap-4">
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={14} /> VIEW ON GITHUB
                        </motion.a>
                        <span className="text-xs text-muted-foreground">by {p.client}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-4 group">
            <motion.span
              className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Plus size={18} className="text-background" />
            </motion.span>
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
              {showAll ? "SHOW LESS" : "MORE WORKS"}
            </span>
          </button>

          <motion.a
            href="https://github.com/zahid397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: 4 }}
          >
            <Github size={16} /> View all projects on GitHub <ExternalLink size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
