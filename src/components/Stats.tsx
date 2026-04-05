import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const projects = useCountUp(2, 2000, inView);
  const rating = useCountUp(4, 2000, inView);
  const magnetic = useMagnetic();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-dark-card text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <p className="text-[#888] text-sm mb-2">Successful projects completed</p>
          <p className="text-6xl md:text-7xl font-bold font-dm text-white">{projects}k+</p>

          {/* Dark card with work images */}
          <div className="bg-dark-subtle rounded-2xl p-6 mt-6">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=120&h=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=80&fit=crop&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Project work"
                  loading="lazy"
                  className="w-20 h-14 rounded-xl border-2 border-dark-subtle object-cover"
                  style={{ transform: `rotate(${(i - 1) * 5}deg)` }}
                />
              ))}
            </div>
            <p className="text-white/80 text-sm mt-4 leading-relaxed">
              More than 2k+ projects completed — each crafted to deliver real-world results for ambitious brands.
            </p>
          </div>

          {/* Rating */}
          <div className="mt-8">
            <div className="flex gap-1 mb-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <p className="text-5xl font-bold font-dm text-white">{rating}.9/5</p>
            <p className="text-[#888] text-sm mt-2 max-w-sm">
              We offer end-to-end creative solutions that make brands unforgettable.
            </p>
          </div>

          <div ref={magnetic.ref} style={magnetic.style} className="mt-8 inline-block">
            <button onClick={() => scrollTo("contact")} className="flex items-center gap-4 group">
              <motion.span
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={18} className="text-dark" />
              </motion.span>
              <span className="text-sm font-semibold tracking-[0.2em] text-white">HIRE US NOW</span>
            </button>
          </div>
        </div>

        {/* Right card */}
        <div>
          <div className="rounded-2xl h-80 w-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop&q=80"
              alt="City skyline — worldwide base"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/60 text-sm mb-1">Worldwide base around the world</p>
              <p className="text-4xl font-bold font-dm text-white text-right">5+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 flex justify-between items-center">
        <span className="text-xs tracking-[0.3em] uppercase text-[#555]">HAPPY USERS</span>
        <span className="text-xs tracking-[0.3em] uppercase text-[#555]">©2025 CASE-THEMES™ STUDIO</span>
      </div>
    </section>
  );
}
