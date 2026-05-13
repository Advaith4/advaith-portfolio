import { motion } from "framer-motion";
import { Trophy, Award, FileText, GraduationCap } from "lucide-react";

const story = [
  {
    year: "2027",
    title: "Sri Ramakrishna Engineering College",
    sub: "B.E. Computer Science · 8.49 CGPA",
    Icon: GraduationCap,
    type: "education",
  },
  {
    year: "2025",
    title: "L&T — Kudankulam Nuclear Power Plant",
    sub: "Information Systems Associate Intern · enterprise IT, networking, cybersecurity",
    Icon: Award,
    type: "internship",
  },
  {
    year: "2025",
    title: "Machine Learning Intern — NxtLogic",
    sub: "Data analysis on student dropout trends · classification & regression models",
    Icon: Award,
    type: "internship",
  },
  {
    year: "2026",
    title: "1st Prize · StartupTN & HackHere Hackathon",
    sub: "Won first place building an AI-powered forensic investigation platform.",
    Icon: Trophy,
    type: "achievement",
  },
  {
    year: "2025",
    title: "1st Prize · L&T EduTech 24-hr Hackathon",
    sub: "Beat 200+ teams with a multi-agent AI career platform.",
    Icon: Trophy,
    type: "achievement",
  },
  {
    year: "2025",
    title: "1st Prize · BITS Pilani Hyderabad · 20-hr Hackathon",
    sub: "Built and shipped a working AI product end-to-end overnight.",
    Icon: Trophy,
    type: "achievement",
  },
  {
    year: "2025",
    title: "1st Prize · Paper Presentation · Rathinam Tech Fest",
    sub: "Presented research on AI-driven mental health detection.",
    Icon: Award,
    type: "achievement",
  },
  {
    year: "—",
    title: "Patent Filed · Postpartum Depression Detection",
    sub: "Presented at NIT Goa (IEEE).",
    Icon: FileText,
    type: "achievement",
  },
];

export const Story = () => {
  return (
    <section id="story" className="relative overflow-hidden px-6 py-32 md:px-16">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            — the story so far —
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Curiosity, <span className="text-gradient">compounded</span>.
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-warm to-transparent md:left-1/2" />

          <div className="space-y-12">
            {story.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`relative pl-20 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                  i % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* dot */}
                <div className="absolute left-8 top-6 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-primary">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  </div>
                </div>

                <div className={`md:col-span-1 ${i % 2 === 0 ? "" : "md:order-2"}`}>
                  <div className={`rounded-2xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur transition-all hover:border-primary/50 hover:shadow-glow ${i % 2 !== 0 ? "md:ml-12" : "md:mr-12"}`}>
                    <div className="mb-4 flex items-center gap-3 md:justify-end">
                      <item.Icon className="h-6 w-6 text-primary" />
                      <span className="font-mono text-xs uppercase tracking-wider text-warm">{item.type}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-2xl font-bold leading-snug">{item.title}</h3>
                    <p className="mt-3 text-base sm:text-lg md:text-base text-muted-foreground leading-relaxed">{item.sub}</p>
                  </div>
                </div>

                <div className={`hidden md:block md:col-span-1 ${i % 2 === 0 ? "md:order-2" : ""}`}>
                  <div className={`font-display text-6xl font-bold text-primary/20 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {[
            { role: "Vice President", org: "RAISE Club", note: "Organised the Innovation Premier League hackathon (100+ teams) and an Intra-College Project Expo." },
            { role: "Joint Secretary", org: "CSI Club", note: "Technical events planning & execution." },
            { role: "Treasurer", org: "C3 Coding Club", note: "Weekly Logic Wars organizer." },
          ].map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-gradient-card p-5 sm:p-6"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-warm">{r.org}</div>
              <div className="mt-3 font-display text-2xl sm:text-3xl font-bold">{r.role}</div>
              <div className="mt-3 text-sm sm:text-base text-muted-foreground">{r.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
