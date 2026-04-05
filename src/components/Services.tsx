import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ExternalLink, Github } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { toast } from "sonner";

const services = [
  {
    title: "AI & Machine Learning Solutions",
    desc: "From intelligent chatbots to exoplanet classifiers — we build AI-powered tools that solve real problems using OpenAI, HuggingFace, and custom ML models.",
    tags: ["AI", "PYTHON", "ML", "AUTOMATION"],
    projects: [
      { name: "EduSmart AI", url: "https://github.com/zahid397/EduSmart_AI" },
      { name: "ExoAI", url: "https://github.com/zahid397/ExoAI" },
      { name: "CommandHQ AI", url: "https://github.com/zahid397/commandhq-ai" },
    ],
  },
  {
    title: "Full-Stack Web Development",
    desc: "Modern, fast, scalable web applications built with React, TypeScript, and cloud-native backends. From SaaS dashboards to e-commerce platforms.",
    tags: ["REACT", "TYPESCRIPT", "SUPABASE", "FULLSTACK"],
    projects: [
      { name: "HostFlow", url: "https://github.com/zahid397/HostFlow-Airbnb-Property-Management-Assistant" },
      { name: "AgroLink", url: "https://github.com/zahid397/agrolink-farm-direct" },
      { name: "CacheCraft", url: "https://github.com/zahid397/cachecraft" },
    ],
  },
  {
    title: "FinTech & Trading Systems",
    desc: "AI-powered trading bots, market analysis platforms, and financial technology solutions for intelligent investment decisions.",
    tags: ["FINTECH", "TRADING", "JAVASCRIPT", "AI"],
    projects: [
      { name: "Alpha AI Trader", url: "https://github.com/zahid397/alpha-ai-trader" },
      { name: "SwarmDeal", url: "https://github.com/zahid397/SwarmDeal" },
      { name: "Molttip Economy", url: "https://github.com/zahid397/molttip-economy" },
    ],
  },
  {
    title: "Enterprise & Automation Tools",
    desc: "Warehouse orchestration, employee management, and task automation systems designed for enterprise-scale operations.",
    tags: ["ENTERPRISE", "C#", "AUTOMATION", "MANAGEMENT"],
    projects: [
      { name: "Warehouse Orchestrator AI", url: "https://github.com/zahid397/warehouse-orchestrator-ai" },
      { name: "Employee Registry", url: "https://github.com/zahid397/employee-family-registry-system" },
      { name: "AI Task Orchestrator", url: "https://github.com/zahid397/ai-task-orchestrator" },
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const magnetic = useMagnetic();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
      toast.info("Filter cleared");
    } else {
      setActiveTag(tag);
      toast.success(`Showing ${tag} expertise`);
    }
  };

  const filteredServices = activeTag
    ? services.filter((s) => s.tags.includes(activeTag))
    : services;

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[clamp(40px,7vw,80px)] font-bold font-dm leading-none">
            Company <span className="text-[#444]">expertise</span>
          </h2>
          {activeTag && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-[#888] mt-4"
            >
              Filtering by: <span className="text-white font-medium">{activeTag}</span>
              <button onClick={() => setActiveTag(null)} className="ml-2 underline text-[#666] hover:text-white transition-colors">
                Clear
              </button>
            </motion.p>
          )}
        </motion.div>

        <div className="space-y-0">
          {filteredServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-dark-border"
              layout
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center gap-4 text-left group"
              >
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 border border-[#444] rounded-full flex items-center justify-center shrink-0"
                >
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </motion.span>
                <span className="text-lg md:text-2xl font-medium font-dm text-white group-hover:text-white/80 transition-colors">
                  {s.title}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-14">
                      <p className="text-[#888] text-base leading-relaxed mb-4 max-w-xl">{s.desc}</p>

                      {/* Clickable filter tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {s.tags.map((t) => (
                          <motion.button
                            key={t}
                            onClick={(e) => { e.stopPropagation(); handleTagClick(t); }}
                            className={`border rounded-full px-4 py-1.5 text-xs tracking-widest uppercase transition-all ${
                              activeTag === t
                                ? "bg-white text-dark border-white"
                                : "border-[#444] text-white hover:bg-white/10"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {t}
                          </motion.button>
                        ))}
                      </div>

                      {/* Related projects from GitHub */}
                      <div className="space-y-2">
                        <p className="text-xs tracking-widest text-[#666] uppercase mb-2">Related Projects</p>
                        {s.projects.map((proj) => (
                          <motion.a
                            key={proj.name}
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors group/proj"
                            whileHover={{ x: 6 }}
                          >
                            <Github size={14} className="text-[#666] group-hover/proj:text-white transition-colors" />
                            <span className="text-sm text-[#aaa] group-hover/proj:text-white transition-colors">{proj.name}</span>
                            <ExternalLink size={10} className="text-[#444] opacity-0 group-hover/proj:opacity-100 transition-opacity ml-auto" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-dark-border" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <div ref={magnetic.ref} style={magnetic.style}>
            <button onClick={() => scrollTo("contact")} className="flex items-center gap-4 group">
              <motion.span
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={18} className="text-dark" />
              </motion.span>
              <span className="text-sm font-semibold tracking-[0.2em] text-white">HIRE US TODAY</span>
            </button>
          </div>

          <motion.a
            href="https://github.com/zahid397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#666] hover:text-white transition-colors"
            whileHover={{ x: 4 }}
          >
            <Github size={16} /> All repositories <ExternalLink size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
