import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Flame, Heart, Sparkles, Shield, type LucideIcon } from "lucide-react";

type Project = {
  num: string;
  Icon: LucideIcon;
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  highlights?: string[];
  repoUrl?: string;
  accent: "primary" | "warm";
};

const projects: Project[] = [
  {
    num: "01",
    Icon: Shield,
    title: "AIVENTRA / ForensiAI",
    tag: "AI Forensic Investigation Platform",
    desc: "An end-to-end AI-powered forensic investigation platform combining LLMs, CrewAI multi-agent systems, FastAPI, and React to automate forensic analysis, evidence correlation, and criminal case workflows.",
    stack: ["React", "FastAPI", "CrewAI", "LLMs", "SQLAlchemy"],
    highlights: ["Automated forensic report generation", "Timeline reconstruction", "Multi-agent evidence correlation"],
    repoUrl: "https://github.com/ByteNinjaOfficial/AIVENTRA.git",
    accent: "primary",
  },
  {
    num: "02",
    Icon: Flame,
    title: "Streaker AI",
    tag: "Intelligent DSA Learning Platform",
    desc: "A MERN-based DSA learning platform focused on helping users retain patterns through active recall, approach-first problem solving, and guided practice instead of only tracking solved problems.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: ["Recall-based learning", "Approach-first solving", "Guided DSA practice"],
    repoUrl: "https://github.com/Advaith4/Streaker.AI.git",
    accent: "warm",
  },
  {
    num: "03",
    Icon: Sparkles,
    title: "JobifyAI",
    tag: "Multi-Agent Career Assistant",
    desc: "An AI-powered career assistant orchestrating multiple CrewAI agents to analyze resumes, match jobs, rewrite impact-driven bullet points, and coach candidates with personalized behavioral & technical interview questions.",
    stack: ["CrewAI", "Groq", "LLMs", "Full-Stack"],
    repoUrl: "https://github.com/Advaith4/JOBIFY-TEST-CRM.git",
    accent: "primary",
  },
  {
    num: "04",
    Icon: Heart,
    title: "PsyCare",
    tag: "Psychiatrist Consultation Portal",
    desc: "Fine-tuned MISTRAL-7B for empathetic mental health counseling. Built an embedding-based psychiatrist recommendation engine with risk-level analysis, appointment booking, and secure payments.",
    stack: ["MISTRAL-7B", "Fine-Tuning", "Embeddings", "Full-Stack"],
    repoUrl: "https://github.com/Advaith4/PSYCARE.git",
    accent: "warm",
  },
  {
    num: "05",
    Icon: Brain,
    title: "Postpartum Depression Detection",
    tag: "ML + Chatbot Assistance - Patent Filed",
    desc: "An AI-driven system predicting early signs of postpartum depression using multiple ML models, paired with a context-aware chatbot. Won 2nd Prize at Rathinam Tech Fest, presented at NIT Goa (IEEE).",
    stack: ["Machine Learning", "NLP", "Chatbot", "Patent"],
    accent: "primary",
  },
];

const ProjectContent = ({ project }: { project: Project }) => (
  <>
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    </div>

    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
      <div className="flex items-start gap-4">
        <div className="font-mono text-sm text-muted-foreground">{project.num}</div>
        <div className={`grid h-14 w-14 place-items-center rounded-2xl ${project.accent === "warm" ? "bg-warm/10 text-warm" : "bg-primary/10 text-primary"}`}>
          <project.Icon className="h-7 w-7" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h3>
          <p className={`mt-1 font-mono text-sm ${project.accent === "warm" ? "text-warm" : "text-primary"}`}>
            {project.tag}
          </p>
        </div>
        <p className="max-w-2xl leading-relaxed text-muted-foreground md:text-lg">
          {project.desc}
        </p>
        {project.highlights && (
          <div className="grid gap-2 pt-1 text-sm text-foreground/80 sm:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="border-l border-primary/40 pl-3 leading-snug"
              >
                {highlight}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className={`grid h-14 w-14 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 ${project.repoUrl ? "group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground" : "opacity-40"}`}>
        <ArrowUpRight className={`h-6 w-6 transition-transform duration-500 ${project.repoUrl ? "group-hover:-rotate-45" : ""}`} />
      </div>
    </div>
  </>
);

export const Projects = () => {
  const cardClass =
    "group relative block overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-12";

  return (
    <section id="work" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              selected work
            </div>
            <h2 className="font-display text-5xl font-bold tracking-tighter md:text-7xl">
              Things I've <span className="text-gradient">built</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each project a chapter in learning how AI can quietly improve human lives.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) =>
            p.repoUrl ? (
              <motion.a
                key={p.title}
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} GitHub repository`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cardClass}
              >
                <ProjectContent project={p} />
              </motion.a>
            ) : (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cardClass}
              >
                <ProjectContent project={p} />
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
};
