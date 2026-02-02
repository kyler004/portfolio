import { useState, useEffect } from "react";

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  heroRef: React.RefObject<HTMLDivElement | null>;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

export default function Navbar({
  scrollToSection,
  heroRef,
  timelineRef,
  projectsRef,
  skillsRef,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", ref: heroRef, id: "home" },
    { label: "Journey", ref: timelineRef, id: "journey" },
    { label: "Projects", ref: projectsRef, id: "projects" },
    { label: "Skills", ref: skillsRef, id: "skills" },
  ];

  const handleNavClick = (
    ref: React.RefObject<HTMLDivElement | null>,
    id: string,
  ) => {
    setActiveSection(id);
    scrollToSection(ref);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <span className="font-display text-2xl gradient-text-primary text-glow-primary">
            R.DEV
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-2 font-mono text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.ref, item.id)}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {/* Background hover effect */}
              <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>

              {/* Text */}
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                  activeSection === item.id ? "w-8" : "w-0 group-hover:w-4"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-medium
                     bg-gradient-to-r from-primary/10 to-secondary/10 
                     border border-primary/30 text-primary
                     hover:from-primary/20 hover:to-secondary/20 hover:border-primary/50
                     hover:shadow-lg hover:shadow-primary/20
                     transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
