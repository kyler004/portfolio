import { Github, Mail, ChevronDown, Sparkles } from "lucide-react";
import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center hero-gradient noise-overlay overflow-hidden"
    >
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating square */}
        <div
          className="floating-shape shape-primary absolute top-[15%] left-[10%] w-72 h-72 rotate-45 float"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />

        {/* Medium diamond */}
        <div
          className="floating-shape shape-secondary absolute bottom-[25%] right-[15%] w-48 h-48 rotate-12 float-slow"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Small accent shape */}
        <div
          className="floating-shape shape-accent absolute top-[40%] right-[8%] w-32 h-32 -rotate-12 float-fast"
          style={{ animationDelay: "3s" }}
        />

        {/* Extra decorative shapes */}
        <div
          className="floating-shape shape-primary absolute bottom-[15%] left-[20%] w-24 h-24 rotate-[30deg] float"
          style={{ animationDelay: "2s", animationDuration: "7s" }}
        />
        <div
          className="floating-shape shape-secondary absolute top-[25%] right-[30%] w-16 h-16 rotate-[60deg] float-slow"
          style={{ animationDelay: "4s" }}
        />

        {/* Particle dots */}
        <div
          className="particle-dot top-[20%] left-[40%]"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="particle-dot top-[60%] left-[15%]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="particle-dot top-[30%] right-[25%]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="particle-dot bottom-[20%] right-[35%]"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Intro badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8 fade-up">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="font-mono text-sm text-primary">Hello, I'm</span>
        </div>

        {/* Name with glitch effect */}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-9xl mb-6 glitch fade-up"
          data-text="RYAN"
          style={{ transitionDelay: "0.2s" }}
        >
          <span className="gradient-text">RYAN</span>
        </h1>

        {/* Subtitle */}
        <h2
          className="font-body text-xl sm:text-2xl md:text-3xl text-text-secondary mb-8 fade-up"
          style={{ transitionDelay: "0.4s" }}
        >
          Full-Stack Developer{" "}
          <span className="text-primary">in the Making</span>
        </h2>

        {/* Description */}
        <p
          className="font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed fade-up px-4"
          style={{ transitionDelay: "0.6s" }}
        >
          Building{" "}
          <span className="text-primary font-medium">real, usable systems</span>{" "}
          from C games to Django APIs. A disciplined learner combining{" "}
          <span className="text-secondary font-medium">analytical rigor</span>{" "}
          with{" "}
          <span className="text-accent-purple font-medium">
            practical engineering
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center fade-up"
          style={{ transitionDelay: "0.8s" }}
        >
          <a href="#" className="btn-outline group">
            <Github
              size={20}
              className="transition-transform group-hover:scale-110"
            />
            <span>GitHub</span>
          </a>
          <a href="#contact" className="btn-primary pulse-glow group">
            <Mail
              size={20}
              className="transition-transform group-hover:scale-110"
            />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 fade-up" style={{ transitionDelay: "1s" }}>
          <div className="relative inline-flex flex-col items-center group cursor-pointer">
            <span className="text-text-muted text-xs font-mono mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2 group-hover:border-primary/60 transition-colors">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none" />
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
