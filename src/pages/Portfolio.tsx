import { useEffect, useRef } from "react";
import { Gamepad2, Heart } from "lucide-react";
import "./Portfolio.css";

import {
  Navbar,
  HeroSection,
  JourneyTimeline,
  FeaturedProjects,
  SideQuests,
  SkillsConstellation,
  Contact,
  Footer,
} from "../components";

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for IntersectionObserver support
    if (!("IntersectionObserver" in window)) {
      // Fallback: show all elements immediately
      document
        .querySelectorAll(".fade-up, .fade-left, .fade-right, .stagger-item")
        .forEach((el) => {
          el.classList.add("animate-in");
        });
      return;
    }

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
        github: "#", // TODO: Add actual GitHub URL
        live: "#", // TODO: Add actual live URL
      },
      {
        title: "Project Manager API",
        description:
          "Collaborative project management system with task tracking, team coordination, and deadline management",
        tech: ["Django", "DRF", "WebSockets", "Redis"],
        github: "#", // TODO: Add actual GitHub URL
        live: "#", // TODO: Add actual live URL
      },
      {
        title: "Fitness Tracker API",
        description:
          "Health and wellness tracking with workout logging, progress analytics, and goal setting",
        tech: ["Django", "DRF", "Pandas", "Charts"],
        github: "#", // TODO: Add actual GitHub URL
        live: "#", // TODO: Add actual live URL
      },
    ],
    react: [
      {
        title: "Music Player",
        description:
          "Feature-rich audio player with playlist management, visualization, and responsive controls",
        tech: ["React", "TypeScript", "Web Audio API", "Tailwind"],
        github: "#", // TODO: Add actual GitHub URL
        live: "#", // TODO: Add actual live URL
      },
      {
        title: "Markdown Live Editor",
        description:
          "Real-time markdown editor with syntax highlighting, preview pane, and export functionality",
        tech: ["React", "TypeScript", "Marked.js", "Tailwind"],
        github: "#", // TODO: Add actual GitHub URL
        live: "#", // TODO: Add actual live URL
      },
      {
        title: "Apex Landing Page",
        description:
          "Modern, animated landing page with smooth scroll effects and interactive elements",
        tech: ["React", "TypeScript", "GSAP", "Tailwind"],
        github: "#", // TODO: Add actual GitHub URL
        live: "#", // TODO: Add actual live URL
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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] overflow-x-hidden">
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        timelineRef={timelineRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />

      <HeroSection ref={heroRef} />
      <JourneyTimeline ref={timelineRef} />
      <FeaturedProjects ref={projectsRef} projects={projects} />
      <SideQuests sideQuests={sideQuests} />
      <SkillsConstellation ref={skillsRef} skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
}
