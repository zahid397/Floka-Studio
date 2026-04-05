import { motion } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const letterAnim = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const flokaLetters = "Floka.".split("");

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          alt="Modern creative office"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      {/* Floating particles canvas */}
      <FloatingParticles />

      {/* Noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[2]">
        <filter id="heroNoise">
          <feTurbulence baseFrequency="0.65" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroNoise)" />
      </svg>

      {/* Floating geometric shapes */}
      {[
        { size: 60, x: "75%", y: "20%", delay: 0 },
        { size: 40, x: "85%", y: "45%", delay: 2 },
        { size: 30, x: "15%", y: "60%", delay: 4 },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/10 rounded-full z-[2] pointer-events-none"
          style={{ width: shape.size, height: shape.size, left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", delay: shape.delay }}
        />
      ))}

      {/* Top-left brand — letter by letter */}
      <div className="absolute top-28 left-6 md:left-12 lg:left-20 z-10">
        <h1 className="text-white font-dm font-bold text-[clamp(48px,8vw,80px)] leading-none tracking-tight flex">
          {flokaLetters.map((char, i) => (
            <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={letterAnim}>
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/50 text-2xl md:text-3xl font-light mt-1"
        >
          Studio
        </motion.p>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-8 md:pb-12">
        {/* White card */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-md flex items-center gap-5"
        >
          <div className="w-28 h-36 md:w-36 md:h-44 rounded-2xl overflow-hidden shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80"
              alt="Almond D. Nelsi — Head of Idea"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-1">HEAD OF IDEA</p>
            <p className="text-xl font-bold font-dm text-gray-900">Almond D. Nelsi</p>
            <motion.button
              onClick={() => scrollTo("contact")}
              className="mt-4 flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={16} className="text-white" />
              </motion.span>
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-900">LET'S TALK</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Subtitle */}
        <div className="mt-8 max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-white text-base md:text-lg font-medium"
          >
            No cookie-cutter websites. No fluff.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-white/60 text-sm md:text-base mt-2"
          >
            Just real tools and smart strategies to grow your business and elevate your brand.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="text-white/40" />
      </motion.div>
    </section>
  );
}
