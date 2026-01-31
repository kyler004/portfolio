import { Github, Mail, ChevronDown } from "lucide-react";
import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center hero-gradient noise-overlay overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-64 h-64 border-2 border-[#64FFDA]/20 rotate-45 float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-40 right-40 w-48 h-48 border-2 border-[#FF6B9D]/20 rotate-12 float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-32 h-32 border-2 border-[#8892B0]/20 -rotate-12 float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="font-mono text-[#64FFDA] text-lg mb-6 fade-up">
          Hello, I'm
        </div>
        <h1
          className="font-display text-8xl mb-6 glitch neon-glow fade-up"
          data-text="RYAN"
          style={{ transitionDelay: "0.2s" }}
        >
          RYAN
        </h1>
        <h2
          className="font-body text-3xl text-[#8892B0] mb-8 fade-up"
          style={{ transitionDelay: "0.4s" }}
        >
          Full-Stack Developer in the Making
        </h2>
        <p
          className="font-body text-xl text-[#8892B0] max-w-3xl mx-auto mb-12 leading-relaxed fade-up"
          style={{ transitionDelay: "0.6s" }}
        >
          Building <span className="text-[#64FFDA]">real, usable systems</span>{" "}
          from C games to Django APIs. A disciplined learner combining{" "}
          <span className="text-[#FF6B9D]">analytical rigor</span> with
          <span className="text-[#64FFDA]"> practical engineering</span>.
        </p>
        <div
          className="flex gap-6 justify-center items-center fade-up"
          style={{ transitionDelay: "0.8s" }}
        >
          <a
            href="#" // TODO: Add actual GitHub URL
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] font-mono rounded-lg hover:bg-[#64FFDA]/10 transition-all neon-border hover-lift"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="#" // TODO: Add actual contact link
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#64FFDA] text-[#0A192F] font-mono font-bold rounded-lg hover:bg-[#FF6B9D] hover:scale-105 transition-all pulse-glow"
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </div>
        <div className="mt-20 fade-up" style={{ transitionDelay: "1s" }}>
          <ChevronDown
            size={40}
            className="mx-auto text-[#64FFDA] animate-bounce"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
