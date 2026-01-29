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

export const projects = {
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

export const sideQuests = [
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

export const skills = {
  languages: ["C", "Python", "JavaScript", "TypeScript"],
  frontend: ["React", "HTML/CSS", "Tailwind", "GSAP"],
  backend: ["Django", "DRF", "REST APIs", "Authentication"],
  data: ["Pandas", "Regression Models", "Data Analysis"],
  other: ["Git", "SDL2", "Scientific Computing"],
};
