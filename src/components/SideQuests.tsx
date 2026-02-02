import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

interface SideQuest {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
}

interface SideQuestsProps {
  sideQuests: SideQuest[];
}

export default function SideQuests({ sideQuests }: SideQuestsProps) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-bg-dark via-bg-card/30 to-bg-dark" />
      <div className="absolute inset-0 diagonal-stripes" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-6 fade-up">
            <Sparkles size={16} className="text-secondary" />
            <span className="font-mono text-sm text-secondary">
              Beyond the Main Path
            </span>
          </div>

          <h2
            className="font-display text-5xl md:text-7xl mb-4 fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="gradient-text-secondary">Side Quests</span>
          </h2>
          <p
            className="font-mono text-text-secondary text-lg fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            Exploring curiosity and passion projects
          </p>
        </div>

        {/* Quest Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {sideQuests.map((quest, idx) => {
            const Icon = quest.icon;
            return (
              <article key={idx} className="quest-card stagger-item">
                {/* Icon container */}
                <div className="quest-icon">
                  <Icon size={36} className="text-secondary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-4 group-hover:text-secondary transition-colors">
                  {quest.title}
                </h3>

                <p className="font-body text-text-secondary mb-6 leading-relaxed">
                  {quest.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {quest.tech.map((tech, i) => (
                    <span key={i} className="tech-badge tech-badge-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M100 0 L100 100 L0 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-secondary"
                    />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
