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
    <section className="py-32 px-6 bg-gradient-to-b from-[#0A192F] to-[#112240] diagonal-stripes">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-6xl text-[#FF6B9D] mb-4 fade-up">
          Side Quests
        </h2>
        <p className="font-mono text-[#8892B0] text-lg mb-20 fade-up">
          Exploring beyond the main path
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {sideQuests.map((quest, idx) => {
            const Icon = quest.icon;
            return (
              <article
                key={idx}
                className="bg-[#0A192F] border-2 border-[#FF6B9D]/30 rounded-xl p-8 hover-lift stagger-item"
              >
                <Icon size={48} className="text-[#FF6B9D] mb-6" />
                <h3 className="font-display text-3xl text-[#CCD6F6] mb-4">
                  {quest.title}
                </h3>
                <p className="font-body text-[#8892B0] mb-6 leading-relaxed">
                  {quest.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {quest.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm"
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
