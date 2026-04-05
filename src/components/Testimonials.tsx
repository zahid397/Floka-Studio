import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
];

const testimonials = [
  {
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
    rating: 5,
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&q=80",
  },
  {
    name: "Carlos E. Ashcroft",
    role: "CEO",
    rating: 5,
    text: "10/10 would recommend. The team delivered beyond our expectations and the attention to detail was remarkable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80",
  },
  {
    name: "Emily R. Santos",
    role: "Product Manager",
    rating: 5,
    text: "Their creative approach transformed our brand identity. The results speak for themselves — engagement up 300%.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">USER FEEDBACKS</p>
          <div className="relative">
            <h2 className="text-[clamp(28px,5vw,56px)] font-bold font-dm leading-tight max-w-3xl">
              Accelerating growth, and unlocking new potential.
            </h2>
            <div className="flex -space-x-2 mt-4">
              {avatarImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="User"
                  loading="lazy"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-[clamp(28px,5vw,56px)] font-bold font-dm leading-tight mt-4">
              Let's build your brand —together.
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold font-dm text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              "{t.text}"
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          <motion.button
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={16} />
          </motion.button>
          <motion.button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
