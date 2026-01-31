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
  return (
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
  );
}
