import React, { useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Layers,
  Terminal,
  Rocket,
  Gamepad2,
  Heart,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate GSAP-like animations with CSS and intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document
      .querySelectorAll(".fade-up, .fade-left, .fade-right, .stagger-item")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  const projects = {
    django: [
      {
        title: "E-Commerce Platform API",
        description:
          "Full-featured REST API with authentication, product management, cart system, and order processing",
        tech: ["Django", "DRF", "PostgreSQL", "JWT"],
        github: "#",
        live: "#",
      },
      {
        title: "Project Manager API",
        description:
          "Collaborative project management system with task tracking, team coordination, and deadline management",
        tech: ["Django", "DRF", "WebSockets", "Redis"],
        github: "#",
        live: "#",
      },
      {
        title: "Fitness Tracker API",
        description:
          "Health and wellness tracking with workout logging, progress analytics, and goal setting",
        tech: ["Django", "DRF", "Pandas", "Charts"],
        github: "#",
        live: "#",
      },
    ],
    react: [
      {
        title: "Music Player",
        description:
          "Feature-rich audio player with playlist management, visualization, and responsive controls",
        tech: ["React", "TypeScript", "Web Audio API", "Tailwind"],
        github: "#",
        live: "#",
      },
      {
        title: "Markdown Live Editor",
        description:
          "Real-time markdown editor with syntax highlighting, preview pane, and export functionality",
        tech: ["React", "TypeScript", "Marked.js", "Tailwind"],
        github: "#",
        live: "#",
      },
      {
        title: "Apex Landing Page",
        description:
          "Modern, animated landing page with smooth scroll effects and interactive elements",
        tech: ["React", "TypeScript", "GSAP", "Tailwind"],
        github: "#",
        live: "#",
      },
    ],
  };

  const sideQuests = [
    {
      title: "Tic-Tac-Toe & Ludo (C)",
      description:
        "Terminal and SDL2-based games with AI opponents and multiplayer modes",
      icon: Gamepad2,
      tech: ["C", "SDL2", "Game Logic"],
    },
    {
      title: "WellnessWear Startup",
      description:
        "Safety wearable + mobile platform for high-risk environments with AI integration",
      icon: Heart,
      tech: ["IoT", "Mobile", "AI", "Social Impact"],
    },
  ];

  const skills = {
    languages: ["C", "Python", "JavaScript", "TypeScript"],
    frontend: ["React", "HTML/CSS", "Tailwind", "GSAP"],
    backend: ["Django", "DRF", "REST APIs", "Authentication"],
    data: ["Pandas", "Regression Models", "Data Analysis"],
    other: ["Git", "SDL2", "Scientific Computing"],
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .font-display {
          font-family: 'Righteous', cursive;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .font-body {
          font-family: 'Space Mono', monospace;
        }

        /* Gradient mesh background */
        .hero-gradient {
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(100, 255, 218, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 70%);
        }

        /* Noise texture overlay */
        .noise-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        /* Glitch effect for title */
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          animation: glitch-1 2.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.8;
        }

        .glitch::after {
          animation: glitch-2 2.5s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.8;
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }

        /* Fade animations */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .stagger-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translate(0) !important;
        }

        .stagger-item:nth-child(1) { transition-delay: 0.1s; }
        .stagger-item:nth-child(2) { transition-delay: 0.2s; }
        .stagger-item:nth-child(3) { transition-delay: 0.3s; }
        .stagger-item:nth-child(4) { transition-delay: 0.4s; }
        .stagger-item:nth-child(5) { transition-delay: 0.5s; }
        .stagger-item:nth-child(6) { transition-delay: 0.6s; }

        /* Neon glow effect */
        .neon-glow {
          text-shadow: 
            0 0 10px rgba(100, 255, 218, 0.5),
            0 0 20px rgba(100, 255, 218, 0.3),
            0 0 30px rgba(100, 255, 218, 0.2);
        }

        .neon-border {
          border: 2px solid rgba(100, 255, 218, 0.3);
          box-shadow: 
            0 0 20px rgba(100, 255, 218, 0.2),
            inset 0 0 20px rgba(100, 255, 218, 0.1);
        }

        /* Diagonal stripe pattern */
        .diagonal-stripes {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(100, 255, 218, 0.03) 10px,
            rgba(100, 255, 218, 0.03) 20px
          );
        }

        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(100, 255, 218, 0.2);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0A192F;
        }

        ::-webkit-scrollbar-thumb {
          background: #64FFDA;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #FF6B9D;
        }

        /* Pulse animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(100, 255, 218, 0.3); }
          50% { box-shadow: 0 0 40px rgba(100, 255, 218, 0.6); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A192F]/80 border-b border-[#64FFDA]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-2xl text-[#64FFDA] neon-glow">
            R.DEV
          </div>
          <div className="flex gap-8 font-mono text-sm">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="hover:text-[#64FFDA] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(timelineRef)}
              className="hover:text-[#64FFDA] transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="hover:text-[#64FFDA] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="hover:text-[#64FFDA] transition-colors"
            >
              Skills
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
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
            Building{" "}
            <span className="text-[#64FFDA]">real, usable systems</span> from C
            games to Django APIs. A disciplined learner combining{" "}
            <span className="text-[#FF6B9D]">analytical rigor</span> with
            <span className="text-[#64FFDA]"> practical engineering</span>.
          </p>
          <div
            className="flex gap-6 justify-center items-center fade-up"
            style={{ transitionDelay: "0.8s" }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] font-mono rounded-lg hover:bg-[#64FFDA]/10 transition-all neon-border hover-lift"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="#"
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

      {/* Journey Timeline */}
      <section
        ref={timelineRef}
        className="py-32 px-6 relative diagonal-stripes"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-6xl text-[#64FFDA] mb-4 fade-up">
            The Journey
          </h2>
          <p className="font-mono text-[#8892B0] text-lg mb-20 fade-up">
            From terminal games to full-stack systems
          </p>

          <div className="space-y-20">
            {/* Phase 1: C Programming */}
            <div className="flex gap-12 items-start fade-left">
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
                  <span className="text-[#64FFDA]">C programming</span>,
                  building terminal games like Tic-Tac-Toe and Ludo. Learned
                  data structures, memory management, and the fundamentals of{" "}
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
            </div>

            {/* Phase 2: Backend Development */}
            <div className="flex gap-12 items-start flex-row-reverse fade-right">
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
            </div>

            {/* Phase 3: Frontend Excellence */}
            <div className="flex gap-12 items-start fade-left">
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
                  . Created interactive music players, live editors, and
                  animated landing pages with{" "}
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
            </div>

            {/* Phase 4: Full-Stack Vision */}
            <div className="flex gap-12 items-start flex-row-reverse fade-right">
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
                  <span className="text-[#FF6B9D]">full-stack development</span>
                  , data science, and entrepreneurial thinking. Building{" "}
                  <span className="text-[#64FFDA]">WellnessWear</span> and
                  aiming to create{" "}
                  <span className="text-[#FF6B9D]">
                    impactful tech solutions
                  </span>{" "}
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-32 px-6 bg-[#0A192F] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-6xl text-[#64FFDA] mb-4 fade-up">
            Featured Projects
          </h2>
          <p className="font-mono text-[#8892B0] text-lg mb-20 fade-up">
            Building real, usable systems
          </p>

          {/* Django Projects */}
          <div className="mb-24">
            <h3 className="font-display text-4xl text-[#FF6B9D] mb-12 flex items-center gap-4 fade-left">
              <Database size={36} />
              Backend Systems
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.django.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] rounded-lg overflow-hidden border border-[#64FFDA]/20 hover-lift stagger-item"
                >
                  <div className="h-3 bg-gradient-to-r from-[#64FFDA] to-[#FF6B9D]"></div>
                  <div className="p-6">
                    <h4 className="font-display text-2xl text-[#CCD6F6] mb-3">
                      {project.title}
                    </h4>
                    <p className="font-body text-[#8892B0] mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded text-[#64FFDA] font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors font-mono text-sm"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-[#8892B0] hover:text-[#FF6B9D] transition-colors font-mono text-sm"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* React Projects */}
          <div>
            <h3 className="font-display text-4xl text-[#64FFDA] mb-12 flex items-center gap-4 fade-left">
              <Code2 size={36} />
              Frontend Applications
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.react.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] rounded-lg overflow-hidden border border-[#FF6B9D]/20 hover-lift stagger-item"
                >
                  <div className="h-3 bg-gradient-to-r from-[#FF6B9D] to-[#64FFDA]"></div>
                  <div className="p-6">
                    <h4 className="font-display text-2xl text-[#CCD6F6] mb-3">
                      {project.title}
                    </h4>
                    <p className="font-body text-[#8892B0] mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 rounded text-[#FF6B9D] font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors font-mono text-sm"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-[#8892B0] hover:text-[#FF6B9D] transition-colors font-mono text-sm"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Side Quests */}
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
                <div
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Constellation */}
      <section
        ref={skillsRef}
        className="py-32 px-6 bg-[#0A192F] relative overflow-hidden"
      >
        {/* Constellation lines background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <line
              x1="10%"
              y1="20%"
              x2="30%"
              y2="40%"
              stroke="#64FFDA"
              strokeWidth="1"
            />
            <line
              x1="30%"
              y1="40%"
              x2="50%"
              y2="35%"
              stroke="#64FFDA"
              strokeWidth="1"
            />
            <line
              x1="50%"
              y1="35%"
              x2="70%"
              y2="50%"
              stroke="#64FFDA"
              strokeWidth="1"
            />
            <line
              x1="70%"
              y1="50%"
              x2="85%"
              y2="30%"
              stroke="#64FFDA"
              strokeWidth="1"
            />
            <line
              x1="20%"
              y1="60%"
              x2="40%"
              y2="75%"
              stroke="#FF6B9D"
              strokeWidth="1"
            />
            <line
              x1="40%"
              y1="75%"
              x2="60%"
              y2="70%"
              stroke="#FF6B9D"
              strokeWidth="1"
            />
            <line
              x1="60%"
              y1="70%"
              x2="80%"
              y2="80%"
              stroke="#FF6B9D"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-6xl text-[#64FFDA] mb-4 fade-up">
            Skills Constellation
          </h2>
          <p className="font-mono text-[#8892B0] text-lg mb-20 fade-up">
            Connected knowledge across the stack
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-up stagger-item">
              <h3 className="font-display text-2xl text-[#64FFDA] mb-6 flex items-center gap-3">
                <Layers size={28} />
                Languages
              </h3>
              <div className="space-y-3">
                {skills.languages.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] border border-[#64FFDA]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#64FFDA] hover:bg-[#64FFDA]/5 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up stagger-item">
              <h3 className="font-display text-2xl text-[#FF6B9D] mb-6 flex items-center gap-3">
                <Code2 size={28} />
                Frontend
              </h3>
              <div className="space-y-3">
                {skills.frontend.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] border border-[#FF6B9D]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/5 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up stagger-item">
              <h3 className="font-display text-2xl text-[#64FFDA] mb-6 flex items-center gap-3">
                <Database size={28} />
                Backend
              </h3>
              <div className="space-y-3">
                {skills.backend.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] border border-[#64FFDA]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#64FFDA] hover:bg-[#64FFDA]/5 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up stagger-item">
              <h3 className="font-display text-2xl text-[#FF6B9D] mb-6 flex items-center gap-3">
                <Terminal size={28} />
                Data & Analysis
              </h3>
              <div className="space-y-3">
                {skills.data.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] border border-[#FF6B9D]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/5 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up stagger-item md:col-span-2 lg:col-span-1">
              <h3 className="font-display text-2xl text-[#64FFDA] mb-6 flex items-center gap-3">
                <Rocket size={28} />
                Tools & More
              </h3>
              <div className="space-y-3">
                {skills.other.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] border border-[#64FFDA]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#64FFDA] hover:bg-[#64FFDA]/5 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0A192F] to-[#112240] relative overflow-hidden hero-gradient">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-6xl text-[#64FFDA] mb-6 neon-glow fade-up">
            Let's Build Something
          </h2>
          <p
            className="font-body text-xl text-[#8892B0] mb-12 leading-relaxed fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            I'm currently looking for opportunities to collaborate on{" "}
            <span className="text-[#FF6B9D]">impactful projects</span> and learn
            from experienced developers. Whether it's full-stack development,
            data science, or something entirely new—
            <span className="text-[#64FFDA]"> let's connect</span>.
          </p>

          <div
            className="flex gap-6 justify-center mb-16 fade-up"
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href="mailto:ryan@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#0A192F] font-mono font-bold rounded-lg hover:bg-[#FF6B9D] hover:scale-105 transition-all pulse-glow"
            >
              <Mail size={24} />
              ryan@example.com
            </a>
          </div>

          <div
            className="flex gap-8 justify-center fade-up"
            style={{ transitionDelay: "0.6s" }}
          >
            <a
              href="#"
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors hover:scale-110 transform"
            >
              <Github size={32} />
            </a>
            <a
              href="#"
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors hover:scale-110 transform"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0A192F] border-t border-[#64FFDA]/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-[#8892B0] text-sm">
            Built with <span className="text-[#FF6B9D]">React</span>,{" "}
            <span className="text-[#64FFDA]">TypeScript</span>, and{" "}
            <span className="text-[#FF6B9D]">Tailwind CSS</span>
          </p>
          <p className="font-mono text-[#8892B0] text-sm mt-2">
            © 2026 Ryan. Designed with discipline and vision.
          </p>
        </div>
      </footer>
    </div>
  );
}
