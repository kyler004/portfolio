import type { LucideIcon } from "lucide-react";

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
    <section className="py-32 px-6 bg-linear-to-b from-bg-dark to-bg-card diagonal-stripes">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-secondary mb-4 fade-up">
          Side Quests
        </h2>
        <p className="font-mono text-text-secondary text-lg mb-20 fade-up">
          Exploring beyond the main path
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {sideQuests.map((quest, idx) => {
            const Icon = quest.icon;
            return (
              <article
                key={idx}
                className="bg-bg-dark border-2 border-secondary/30 rounded-xl p-8 hover-lift stagger-item"
              >
                <Icon size={48} className="text-secondary mb-6" />
                <h3 className="font-display text-3xl text-text-primary mb-4">
                  {quest.title}
                </h3>
                <p className="font-body text-text-secondary mb-6 leading-relaxed">
                  {quest.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {quest.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded text-secondary font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
