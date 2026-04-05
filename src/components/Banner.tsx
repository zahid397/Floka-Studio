import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function Banner() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const magnetic = useMagnetic(0.4);

  const letters = "Let's talk".split("");

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-dark relative overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[120px] opacity-[0.06]"
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            background: `radial-gradient(circle, rgba(255,255,255,0.15), transparent)`,
            left: `${15 + i * 25}%`,
            top: `${5 + i * 20}%`,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 18 + i * 6, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
        }}
      />
      {/* Noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
        <filter id="bannerNoise">
          <feTurbulence baseFrequency="0.65" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bannerNoise)" />
      </svg>

      {/* Floating particles */}
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Letter-by-letter "Let's talk" */}
        <h2 className="text-[clamp(48px,12vw,140px)] font-bold font-dm text-white leading-none tracking-tight flex flex-wrap">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[clamp(48px,12vw,140px)] font-bold font-dm text-[#333] leading-none"
        >
          now
        </motion.p>

        {/* Rotating CTA circle with magnetic + glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 inline-block"
        >
          <div ref={magnetic.ref} style={magnetic.style}>
            <button onClick={() => scrollTo("contact")} className="relative w-36 h-36 group">
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <defs>
                  <path id="bannerCircle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text className="fill-white text-[13px] tracking-[0.2em] uppercase font-dm">
                  <textPath href="#bannerCircle">GET IN TOUCH · GET IN TOUCH · GET IN TOUCH · </textPath>
                </text>
              </motion.svg>
              <span className="absolute inset-0 flex items-center justify-center">
                <ArrowRight size={24} className="text-white group-hover:scale-125 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Portfolio card with team photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 w-full max-w-md"
        >
          <div className="h-48 rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop&q=80"
              alt="Floka team"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-6xl font-bold font-dm text-white/20">F</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
