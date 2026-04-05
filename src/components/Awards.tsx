import React from "react";
import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

const awards = [
  { title: "BEST DESIGNER AWARDS", org: "AWWWARDS", year: "2025", url: "https://www.awwwards.com" },
  { title: "PEAKY UI DESIGNER", org: "GOOGLE", year: "2024", url: "https://design.google" },
  { title: "GREAT IN UX", org: "APPLE", year: "2023", url: "https://developer.apple.com/design/" },
  { title: "BEST WEBSITE PICK", org: "MICROSOFT", year: "2022", url: "https://www.microsoft.com/design" },
  { title: "NELSON UI & UX DESIGNER", org: "SAMSUNG", year: "2021", url: "https://design.samsung.com" },
];

function AwardsComponent() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background relative">
      {/* Rotating badge */}
      <div className="absolute right-8 top-16 w-24 h-24 md:w-32 md:h-32 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <defs>
            <path id="awardCircle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
          </defs>
          <text className="fill-foreground text-[14px] tracking-[0.15em] uppercase font-dm">
            <textPath href="#awardCircle">PLAYFUL · LUXURIOUS · OR MORE · WANT IT · </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <Trophy size={20} className="text-foreground" />
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(24px,4vw,48px)] font-bold font-dm leading-tight max-w-3xl mb-16"
        >
          Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
        </motion.p>

        {/* Team bridge photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop&q=80"
            alt="Creative team working together"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover"
          />
        </motion.div>

        <div>
          {awards.map((a, i) => (
            <motion.a
              key={a.title + a.year}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-t border-border py-5 flex justify-between items-center group hover:bg-muted/50 px-2 -mx-2 rounded transition-colors cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <span className="text-xs md:text-sm tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-2">
                {a.title}
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs md:text-sm tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block">
                {a.org}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {a.year}
              </span>
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

export default React.memo(AwardsComponent);
