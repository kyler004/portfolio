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
      <section
        ref={ref}
        className="py-32 px-6 relative diagonal-stripes overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-mesh opacity-50" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl mb-4 fade-up">
              <span className="gradient-text-primary">The Journey</span>
            </h2>
            <p
              className="font-mono text-text-secondary text-lg fade-up"
              style={{ transitionDelay: "0.1s" }}
            >
              From terminal games to full-stack systems
            </p>
          </div>

          <div className="relative">
            {/* Central Spine Line */}
            <div className="timeline-spine absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-20">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                const isPrimary = item.color === "primary";

                return (
                  <article
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } fade-up stagger-item`}
                  >
                    {/* Icon Node on Spine */}
                    <div
                      className={`timeline-node absolute left-6 md:left-1/2 -translate-x-1/2 ${
                        isPrimary ? "" : "secondary"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          isPrimary ? "text-primary" : "text-secondary"
                        }
                      />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`md:w-1/2 pl-20 md:pl-0 ${
                        isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <div
                        className={`glass-card rounded-xl p-6 md:p-8 hover-lift group relative overflow-hidden ${
                          isPrimary ? "hover-glow" : ""
                        }`}
                        style={{
                          borderColor: isPrimary
                            ? "rgba(100, 255, 218, 0.2)"
                            : "rgba(255, 107, 157, 0.2)",
                        }}
                      >
                        {/* Gradient accent line */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 ${
                            isPrimary
                              ? "bg-gradient-to-r from-primary via-primary-light to-primary"
                              : "bg-gradient-to-r from-secondary via-accent-purple to-secondary"
                          }`}
                        />

                        {/* Phase number */}
                        <div
                          className={`absolute top-4 ${isEven ? "md:right-4 left-4 md:left-auto" : "left-4"} 
                          font-mono text-xs ${isPrimary ? "text-primary/40" : "text-secondary/40"}`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <h3
                          className={`font-display text-2xl md:text-3xl mb-3 mt-4 ${
                            isPrimary
                              ? "text-text-primary"
                              : "gradient-text-secondary"
                          }`}
                        >
                          {item.phase}
                        </h3>

                        <p className="font-body text-text-secondary mb-6 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>

                        <div
                          className={`flex gap-2 flex-wrap ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          {item.tech.map((t, i) => (
                            <span
                              key={i}
                              className={`tech-badge ${
                                isPrimary ? "" : "tech-badge-secondary"
                              }`}
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

        {/* Section divider */}
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>
    );
  },
);

JourneyTimeline.displayName = "JourneyTimeline";

export default JourneyTimeline;
