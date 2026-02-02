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
            {/* Central Spine Line - Gradient Pulse */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-1 bg-bg-card border-x border-primary/10">
              <div className="w-full h-full bg-linear-to-b from-primary/0 via-primary/50 to-primary/0 animate-pulse" />
            </div>

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
                    } fade-up stagger-item group`}
                  >
                    {/* Connector Line (Horizontal) */}
                    <div
                      className={`hidden md:block absolute top-[28px] h-[2px] w-[50px] bg-linear-to-r from-primary/0 via-primary/30 to-primary/50 ${isEven ? "left-1/2" : "right-1/2"}`}
                    />

                    {/* Icon Node on Spine */}
                    <div
                      className={`timeline-node absolute left-6 md:left-1/2 -translate-x-1/2 
                        ${isPrimary ? "" : "secondary"}
                        z-10 bg-bg-dark border-4 border-bg-dark outline outline-2 outline-primary/30
                      `}
                    >
                      <Icon
                        size={24}
                        className={`${
                          isPrimary ? "text-primary" : "text-secondary"
                        } transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
                      />
                      {/* Pulse Ring */}
                      <div
                        className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isPrimary ? "bg-primary" : "bg-secondary"}`}
                      />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`md:w-1/2 pl-20 md:pl-0 ${
                        isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <div
                        className={`glass-card rounded-2xl p-6 md:p-8 hover-lift relative overflow-hidden transition-all duration-500
                        ${isPrimary ? "hover:shadow-[0_0_30px_rgba(100,255,218,0.1)]" : "hover:shadow-[0_0_30px_rgba(255,107,157,0.1)]"}
                        border border-white/5
                        `}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Hover glow effect */}
                        <div
                          className={`absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent to-white opacity-40 group-hover:animate-shine`}
                        />

                        {/* Phase number - Stylish large background text */}
                        <div
                          className={`absolute -top-6 -right-4 text-9xl font-display opacity-5 select-none pointer-events-none ${
                            isPrimary ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {index + 1}
                        </div>

                        {/* Gradient accent line */}
                        <div
                          className={`absolute top-0 left-0 bottom-0 w-1 ${
                            isPrimary
                              ? "bg-linear-to-b from-primary via-primary-light to-primary"
                              : "bg-linear-to-b from-secondary via-accent-purple to-secondary"
                          }`}
                        />

                        <h3
                          className={`font-display text-2xl md:text-3xl mb-3 mt-2 ${
                            isPrimary
                              ? "text-text-primary group-hover:text-primary transition-colors"
                              : "gradient-text-secondary group-hover:text-secondary transition-colors"
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

            {/* Bottom Fade of Line */}
            <div className="absolute bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-4 h-32 bg-linear-to-t from-bg-dark to-transparent z-20"></div>
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
