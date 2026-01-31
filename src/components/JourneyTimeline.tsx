import { Terminal, Database, Code2, Rocket } from "lucide-react";
import { forwardRef } from "react";

const JourneyTimeline = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="py-32 px-6 relative diagonal-stripes">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-6xl text-[#64FFDA] mb-4 fade-up">
          The Journey
        </h2>
        <p className="font-mono text-[#8892B0] text-lg mb-20 fade-up">
          From terminal games to full-stack systems
        </p>

        <div className="space-y-20">
          {/* Phase 1: C Programming */}
          <article className="flex gap-12 items-start fade-left">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#64FFDA]/20 border-2 border-[#64FFDA] flex items-center justify-center neon-border">
                <Terminal size={32} className="text-[#64FFDA]" />
              </div>
            </div>
            <div className="flex-1 bg-[#112240] border border-[#64FFDA]/30 rounded-lg p-8 hover-lift">
              <h3 className="font-display text-3xl text-[#CCD6F6] mb-3">
                Phase 1: The Foundation
              </h3>
              <p className="font-body text-[#8892B0] mb-4">
                Started with{" "}
                <span className="text-[#64FFDA]">C programming</span>, building
                terminal games like Tic-Tac-Toe and Ludo. Learned data
                structures, memory management, and the fundamentals of{" "}
                <span className="text-[#FF6B9D]">systems thinking</span>.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  C
                </span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  SDL2
                </span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  Game Logic
                </span>
              </div>
            </div>
          </article>

          {/* Phase 2: Backend Development */}
          <article className="flex gap-12 items-start flex-row-reverse fade-right">
            <div className="flex-shrink-0">
              <div
                className="w-20 h-20 rounded-full bg-[#FF6B9D]/20 border-2 border-[#FF6B9D] flex items-center justify-center"
                style={{ boxShadow: "0 0 20px rgba(255, 107, 157, 0.3)" }}
              >
                <Database size={32} className="text-[#FF6B9D]" />
              </div>
            </div>
            <div className="flex-1 bg-[#112240] border border-[#FF6B9D]/30 rounded-lg p-8 hover-lift">
              <h3 className="font-display text-3xl text-[#CCD6F6] mb-3">
                Phase 2: Backend Mastery
              </h3>
              <p className="font-body text-[#8892B0] mb-4">
                Dove into{" "}
                <span className="text-[#FF6B9D]">Django and REST APIs</span>,
                creating production-ready systems. Built e-commerce platforms,
                project managers, and fitness trackers—learning{" "}
                <span className="text-[#64FFDA]">
                  architecture and scalability
                </span>
                .
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  DRF
                </span>
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  Authentication
                </span>
              </div>
            </div>
          </article>

          {/* Phase 3: Frontend Excellence */}
          <article className="flex gap-12 items-start fade-left">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#64FFDA]/20 border-2 border-[#64FFDA] flex items-center justify-center neon-border">
                <Code2 size={32} className="text-[#64FFDA]" />
              </div>
            </div>
            <div className="flex-1 bg-[#112240] border border-[#64FFDA]/30 rounded-lg p-8 hover-lift">
              <h3 className="font-display text-3xl text-[#CCD6F6] mb-3">
                Phase 3: Frontend Polish
              </h3>
              <p className="font-body text-[#8892B0] mb-4">
                Mastered{" "}
                <span className="text-[#64FFDA]">
                  React, TypeScript, and modern UI frameworks
                </span>
                . Created interactive music players, live editors, and animated
                landing pages with{" "}
                <span className="text-[#FF6B9D]">attention to UX</span>.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-sm">
                  GSAP
                </span>
              </div>
            </div>
          </article>

          {/* Phase 4: Full-Stack Vision */}
          <article className="flex gap-12 items-start flex-row-reverse fade-right">
            <div className="flex-shrink-0">
              <div
                className="w-20 h-20 rounded-full bg-[#FF6B9D]/20 border-2 border-[#FF6B9D] flex items-center justify-center"
                style={{ boxShadow: "0 0 20px rgba(255, 107, 157, 0.3)" }}
              >
                <Rocket size={32} className="text-[#FF6B9D]" />
              </div>
            </div>
            <div className="flex-1 bg-[#112240] border border-[#FF6B9D]/30 rounded-lg p-8 hover-lift">
              <h3 className="font-display text-3xl text-[#CCD6F6] mb-3">
                Phase 4: The Vision
              </h3>
              <p className="font-body text-[#8892B0] mb-4">
                Now combining everything—
                <span className="text-[#FF6B9D]">full-stack development</span>,
                data science, and entrepreneurial thinking. Building{" "}
                <span className="text-[#64FFDA]">WellnessWear</span> and aiming
                to create{" "}
                <span className="text-[#FF6B9D]">impactful tech solutions</span>{" "}
                by 2026.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  Full-Stack
                </span>
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  ML/AI
                </span>
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  Leadership
                </span>
                <span className="px-3 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-sm">
                  Social Impact
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
});

JourneyTimeline.displayName = "JourneyTimeline";

export default JourneyTimeline;
