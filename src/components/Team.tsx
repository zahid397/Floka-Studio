import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Plus } from "lucide-react";
import { toast } from "sonner";

const designTeam = [
  { name: "Almond D. Nelsi", role: "HEAD OF IDEA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80" },
  { name: "Carlos E. Ashcroft", role: "CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80" },
  { name: "Leonardo F. Ashton", role: "UX DESIGNER", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80" },
  { name: "Nicolas K. Ellington", role: "FOUNDER", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=80" },
];

const devTeam = [
  { name: "Sarah M. Parker", role: "LEAD DEVELOPER", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80" },
  { name: "James T. Wright", role: "FULL-STACK DEV", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80" },
  { name: "Emily R. Santos", role: "FRONTEND DEV", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80" },
  { name: "Marcus L. Chen", role: "BACKEND DEV", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&q=80" },
];

const tabs = ["DESIGN TEAM", "DEVELOPMENT TEAM"] as const;

export default function Team() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("DESIGN TEAM");
  const team = activeTab === "DESIGN TEAM" ? designTeam : devTeam;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSocial = () => {
    window.open("https://www.linkedin.com/in/md-zahid-hasan-7b15ba20b", "_blank");
  };

  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">OUR AVENGERS</p>
          <div className="flex gap-6 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`text-sm tracking-wider transition-colors ${
                  activeTab === t
                    ? "text-foreground underline underline-offset-4 font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8">
            What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
          </p>

          <button onClick={() => scrollTo("contact")} className="flex items-center gap-4 group mb-12">
            <motion.span
              className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Plus size={18} className="text-background" />
            </motion.span>
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground">JOIN WITH US</span>
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4 }}
              >
                <div className="rounded-2xl h-72 md:h-80 w-full overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-base font-bold font-dm mt-4">{member.name}</h3>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mt-1">{member.role}</p>
                <div className="flex gap-3 mt-3">
                  {[
                    { Icon: Facebook, name: "Facebook" },
                    { Icon: Twitter, name: "Twitter" },
                    { Icon: Linkedin, name: "LinkedIn" },
                  ].map(({ Icon, name }) => (
                    <button
                      key={name}
                      onClick={() => handleSocial()}
                      className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
