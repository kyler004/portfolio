import { Layers, Code2, Database, Terminal, Rocket, Zap } from "lucide-react";
import { forwardRef } from "react";

interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  data: string[];
  other: string[];
}

interface SkillsConstellationProps {
  skills: Skills;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  variant?: "primary" | "secondary";
  delay?: number;
}

const SkillCategory = ({
  title,
  icon,
  skills,
  variant = "primary",
  delay = 0,
}: SkillCategoryProps) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`skill-category ${variant} fade-up stagger-item`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3
        className={`font-display text-xl md:text-2xl mb-6 flex items-center gap-3 ${
          isPrimary ? "text-primary" : "text-secondary"
        }`}
      >
        <div
          className={`p-2 rounded-lg ${
            isPrimary
              ? "bg-primary/10 border border-primary/20"
              : "bg-secondary/10 border border-secondary/20"
          }`}
        >
          {icon}
        </div>
        {title}
      </h3>

      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`skill-item ${isPrimary ? "" : "secondary"}`}
            style={{
              borderColor: isPrimary
                ? "rgba(100, 255, 218, 0.15)"
                : "rgba(255, 107, 157, 0.15)",
            }}
          >
            <div className="flex items-center gap-3">
              <Zap
                size={14}
                className={isPrimary ? "text-primary/50" : "text-secondary/50"}
              />
              <span>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsConstellation = forwardRef<
  HTMLDivElement,
  SkillsConstellationProps
>(({ skills }, ref) => {
  return (
    <section
      ref={ref}
      className="py-40 px-6 md:px-12 bg-bg-dark relative overflow-hidden"
    >
      {/* Constellation Background */}
      <div className="skills-constellation-bg" aria-hidden="true">
        <svg className="w-full h-full">
          {/* Primary constellation lines */}
          <g stroke="var(--color-primary)" strokeWidth="1" opacity="0.15">
            <line x1="10%" y1="20%" x2="30%" y2="35%" />
            <line x1="30%" y1="35%" x2="45%" y2="25%" />
            <line x1="45%" y1="25%" x2="65%" y2="40%" />
            <line x1="65%" y1="40%" x2="85%" y2="30%" />
            <line x1="20%" y1="50%" x2="40%" y2="60%" />
            <line x1="40%" y1="60%" x2="55%" y2="55%" />
          </g>
          {/* Secondary constellation lines */}
          <g stroke="var(--color-secondary)" strokeWidth="1" opacity="0.12">
            <line x1="15%" y1="65%" x2="35%" y2="75%" />
            <line x1="35%" y1="75%" x2="55%" y2="70%" />
            <line x1="55%" y1="70%" x2="75%" y2="80%" />
            <line x1="75%" y1="80%" x2="90%" y2="70%" />
          </g>
          {/* Star nodes */}
          <g fill="var(--color-primary)" opacity="0.3">
            <circle cx="10%" cy="20%" r="3" />
            <circle cx="30%" cy="35%" r="4" />
            <circle cx="45%" cy="25%" r="3" />
            <circle cx="65%" cy="40%" r="5" />
            <circle cx="85%" cy="30%" r="3" />
          </g>
          <g fill="var(--color-secondary)" opacity="0.25">
            <circle cx="15%" cy="65%" r="3" />
            <circle cx="35%" cy="75%" r="4" />
            <circle cx="55%" cy="70%" r="3" />
            <circle cx="75%" cy="80%" r="4" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl mb-4 fade-up">
            <span className="gradient-text">Skills Constellation</span>
          </h2>
          <p
            className="font-mono text-text-secondary text-lg fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            Connected knowledge across the stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SkillCategory
            title="Languages"
            icon={<Layers size={20} className="text-primary" />}
            skills={skills.languages}
            variant="primary"
            delay={0.1}
          />

          <SkillCategory
            title="Frontend"
            icon={<Code2 size={20} className="text-secondary" />}
            skills={skills.frontend}
            variant="secondary"
            delay={0.2}
          />

          <SkillCategory
            title="Backend"
            icon={<Database size={20} className="text-primary" />}
            skills={skills.backend}
            variant="primary"
            delay={0.3}
          />

          <SkillCategory
            title="Data & Analysis"
            icon={<Terminal size={20} className="text-secondary" />}
            skills={skills.data}
            variant="secondary"
            delay={0.4}
          />

          <SkillCategory
            title="Tools & More"
            icon={<Rocket size={20} className="text-primary" />}
            skills={skills.other}
            variant="primary"
            delay={0.5}
          />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
});

SkillsConstellation.displayName = "SkillsConstellation";

export default SkillsConstellation;
