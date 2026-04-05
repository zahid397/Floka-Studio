import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logoLetters = ["F", "l", "o", "k", "a", "."];

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center flex-col"
        >
          <div className="flex">
            {logoLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-5xl md:text-7xl font-bold font-dm text-white"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white/40 text-xs tracking-[0.4em] uppercase mt-3"
          >
            STUDIO
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="h-px w-32 bg-white/20 mt-6 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
