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

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] overflow-x-hidden pt-16">
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        timelineRef={timelineRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />

      <HeroSection ref={heroRef} />
      <JourneyTimeline ref={timelineRef} journey={journey} />
      <FeaturedProjects ref={projectsRef} projects={projects} />
      <SideQuests sideQuests={sideQuests} />
      <SkillsConstellation ref={skillsRef} skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
}
