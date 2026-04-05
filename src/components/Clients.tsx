import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Logoipsum", color: "#4a90d9", shape: "diamond" },
  { name: "LOGOIPSUM", color: "#4ec44e", shape: "bolt" },
  { name: "Logoipsum", color: "#9b59b6", shape: "butterfly" },
  { name: "Logoipsum", color: "#4a90d9", shape: "circle" },
  { name: "logo ipsum", color: "#8b6914", shape: "bear" },
  { name: "Logoipsum", color: "#e67e22", shape: "arrow" },
];

const shapes: Record<string, JSX.Element> = {
  diamond: <svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="2" transform="rotate(45 10 10)" fill="currentColor" /></svg>,
  bolt: <svg width="20" height="20" viewBox="0 0 20 20"><path d="M11 1L4 12h5l-1 7 7-11h-5l1-7z" fill="currentColor" /></svg>,
  butterfly: <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="7" cy="8" r="4" fill="currentColor" /><circle cx="13" cy="8" r="4" fill="currentColor" /><circle cx="10" cy="14" r="2" fill="currentColor" /></svg>,
  circle: <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7" fill="currentColor" /></svg>,
  bear: <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="6" cy="5" r="3" fill="currentColor" /><circle cx="14" cy="5" r="3" fill="currentColor" /><circle cx="10" cy="12" r="6" fill="currentColor" /></svg>,
  arrow: <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 2l8 16H2z" fill="currentColor" /></svg>,
};

function ClientsComponent() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          {clients.map((c, i) => (
            <motion.div
              key={`${c.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 text-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span style={{ color: c.color }}>{shapes[c.shape]}</span>
              <span className="text-sm font-semibold font-dm">{c.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2">NEXT CAN BE YOU.</p>
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-bold underline text-foreground hover:text-muted-foreground transition-colors text-left"
          >
            LET'S TALK
          </button>
        </div>
      </div>

      {/* Team photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 overflow-hidden rounded-2xl"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop&q=80"
          alt="Our creative team"
          loading="lazy"
          className="w-full h-48 md:h-64 object-cover"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </section>
  );
}

export default React.memo(ClientsComponent);
