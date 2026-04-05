import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import ParallaxSection from "./ParallaxSection";
import { toast } from "sonner";

const skills = [
  { label: "Solutions", pct: 100 },
  { label: "UI/UX", pct: 90 },
  { label: "Explore", pct: 72 },
];

const LINKEDIN = "https://www.linkedin.com/in/md-zahid-hasan-7b15ba20b";
const socials = [
  { name: "DRIBBBLE", url: LINKEDIN },
  { name: "BEHANCE", url: LINKEDIN },
  { name: "LINKEDIN", url: LINKEDIN },
  { name: "X", url: LINKEDIN },
  { name: "XING", url: LINKEDIN },
];

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80",
];

const wordReveal = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const years = useCountUp(25, 2000, inView);

  const headingWords = "Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.".split(" ");

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background relative">
      {/* Rotating badge */}
      <div className="absolute right-8 top-20 w-28 h-28 md:w-36 md:h-36 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <defs>
            <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
          </defs>
          <text className="fill-foreground text-[14px] tracking-[0.15em] uppercase font-dm">
            <textPath href="#circlePath">PLAYFUL · LUXURIOUS · OR MORE · WANT IT TO SOUND · </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold font-dm text-foreground">F</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm mb-6"
        >
          We design every project with long-term success in mind.
        </motion.p>

        {/* Word-by-word reveal heading */}
        <ParallaxSection offset={20}>
          <h2 className="text-[clamp(28px,5vw,56px)] font-bold font-dm leading-tight max-w-3xl flex flex-wrap gap-x-[0.3em]">
            {headingWords.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={wordReveal}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </ParallaxSection>

        {/* Stats */}
        <div ref={ref} className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          <ParallaxSection offset={15}>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-7xl md:text-8xl font-bold font-dm text-foreground">{years}</span>
              <p className="text-muted-foreground text-sm mt-2">Years of experience</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-base mt-8 max-w-md"
            >
              Explore how we transform ideas into extraordinary digital experiences.
            </motion.p>

            {/* Overlapping avatars with real images */}
            <div className="flex items-center mt-6 gap-3">
              <div className="flex -space-x-3">
                {avatarImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy user"
                    loading="lazy"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">1200+ happy users review</span>
            </div>

            {/* Social links — working */}
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-1">Follow us</p>
              <p className="text-lg font-bold font-dm mb-4">For check updates</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {socials.map((s, i) => (
                  <span key={s.name}>
                    <button
                      onClick={() => window.open(s.url, "_blank")}
                      className="tracking-wider uppercase hover:text-foreground transition-colors"
                    >
                      {s.name}
                    </button>
                    {i < socials.length - 1 && <span className="ml-2">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          </ParallaxSection>

          {/* Skills bars */}
          <ParallaxSection offset={25}>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">{skill.label}</span>
                  <span className="text-muted-foreground">{skill.pct}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, type: "spring", stiffness: 50 }}
                    className={`h-full rounded-full ${skill.label === "UI/UX" ? "bg-foreground" : "bg-muted-foreground/40"}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
}
