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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-w-[1200px] mx-auto ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-8 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <span className="font-display text-3xl gradient-text-primary text-glow-primary">
            R.DEV
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 font-mono text-base">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.ref, item.id)}
              className={`relative px-6 py-3 rounded-xl transition-all duration-300 group overflow-hidden font-medium ${
                activeSection === item.id
                  ? "text-primary bg-primary/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/5"
              }`}
            >
              {/* Background hover effect */}
              <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></span>

              {/* Text */}
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-primary to-secondary transition-all duration-300 rounded-full ${
                  activeSection === item.id ? "w-10" : "w-0 group-hover:w-6"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-base font-semibold
                     bg-linear-to-r from-primary/15 to-secondary/15 
                     border-2 border-primary/40 text-primary
                     hover:from-primary/25 hover:to-secondary/25 hover:border-primary/60
                     hover:shadow-xl hover:shadow-primary/25 hover:scale-105
                     transition-all duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
