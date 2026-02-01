import type { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface JourneyPhase {
  phase: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
  color: string;
}

interface JourneyTimelineProps {
  journey: JourneyPhase[];
}

const JourneyTimeline = forwardRef<HTMLDivElement, JourneyTimelineProps>(
  ({ journey }, ref) => {
    return (
      <section ref={ref} className="py-32 px-6 relative diagonal-stripes">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-4 fade-up">
            The Journey
          </h2>
          <p className="font-mono text-text-secondary text-lg mb-20 fade-up">
            From terminal games to full-stack systems
          </p>

          <div className="relative">
            {/* Central Spine Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } fade-up stagger-item`}
                  >
                    {/* Icon on Spine */}
                    <div className="absolute left-4 md:left-1/2 w-12 h-12 -ml-6 flex items-center justify-center rounded-full bg-bg-card border-2 border-primary z-10 transform md:-translate-x-0 translate-x-[-50%]">
                      <Icon size={20} className="text-primary" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                    >
                      <div className="bg-bg-card border border-primary/30 rounded-lg p-6 hover-lift relative group">
                        <div
                          className={`absolute top-6 w-4 h-4 bg-bg-card border-t border-r border-primary/30 rotate-45 transform 
                           ${isEven ? "right-[-9px] md:right-[-9px] border-l-0 border-b-0" : "left-[-9px] md:left-[-9px] border-r-0 border-t-0 border-b border-l"}
                           hidden md:block transition-colors group-hover:border-primary`}
                        ></div>

                        <h3
                          className={`font-display text-2xl mb-2 ${item.color === "secondary" ? "text-secondary" : "text-text-primary"}`}
                        >
                          {item.phase}
                        </h3>
                        <p className="font-body text-text-secondary mb-4 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <div
                          className={`flex gap-2 flex-wrap ${isEven ? "md:justify-end" : ""}`}
                        >
                          {item.tech.map((t, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 bg-${item.color === "secondary" ? "secondary" : "primary"}/10 border border-${item.color === "secondary" ? "secondary" : "primary"}/30 rounded text-${item.color === "secondary" ? "secondary" : "primary"} font-mono text-xs`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-1/2" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

JourneyTimeline.displayName = "JourneyTimeline";

export default JourneyTimeline;
