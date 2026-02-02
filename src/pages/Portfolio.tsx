import { useEffect, useRef } from "react";
import "./Portfolio.css";
import { projects, sideQuests, skills, journey } from "../data";

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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Check for IntersectionObserver support
    if (!("IntersectionObserver" in window)) {
      // Fallback: show all elements immediately
      document
        .querySelectorAll(
          ".fade-up, .fade-left, .fade-right, .fade-scale, .stagger-item",
        )
        .forEach((el) => {
          el.classList.add("animate-in");
        });
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Observe all animated elements
    setTimeout(() => {
      document
        .querySelectorAll(
          ".fade-up, .fade-left, .fade-right, .fade-scale, .stagger-item",
        )
        .forEach((el) => {
          observer.observe(el);
        });
    }, 100); // Slight delay to ensure DOM is ready

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary overflow-x-hidden selection:bg-primary/30 selection:text-white w-full">
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        timelineRef={timelineRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />

      <main className="flex flex-col w-full">
        <HeroSection ref={heroRef} />

        {/* Spacer removed, controlled by padding in components */}

        <JourneyTimeline ref={timelineRef} journey={journey} />
        <FeaturedProjects ref={projectsRef} projects={projects} />
        <SideQuests sideQuests={sideQuests} />
        <SkillsConstellation ref={skillsRef} skills={skills} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
