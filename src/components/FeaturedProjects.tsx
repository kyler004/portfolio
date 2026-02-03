import {
  Database,
  Code2,
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { forwardRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

interface FeaturedProjectsProps {
  projects: {
    django: Project[];
    react: Project[];
  };
}

const ProjectCard = ({
  project,
  variant = "primary",
}: {
  project: Project;
  variant?: "primary" | "secondary";
}) => {
  const isPrimary = variant === "primary";

  return (
    <article className={`project-card ${variant} group flex flex-col h-full`}>
      {/* Animated gradient accent bar */}
      <div className="project-card-accent" />

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Title with hover effect */}
        <h4 className="font-display text-xl md:text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h4>

        {/* Description */}
        <p className="font-body text-text-secondary mb-6 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`tech-badge ${isPrimary ? "" : "tech-badge-secondary"}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-4 border-t border-white/5">
          <a
            href={project.github}
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-all duration-300 font-mono text-sm group/link"
          >
            <Github
              size={18}
              className="group-hover/link:scale-110 transition-transform"
            />
            <span>Code</span>
          </a>
          <a
            href={project.live}
            className={`flex items-center gap-2 transition-all duration-300 font-mono text-sm group/link ${
              isPrimary
                ? "text-text-secondary hover:text-secondary"
                : "text-text-secondary hover:text-primary"
            }`}
          >
            <ExternalLink
              size={18}
              className="group-hover/link:scale-110 transition-transform"
            />
            <span>Live</span>
            <ArrowUpRight
              size={14}
              className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

const FeaturedProjects = forwardRef<HTMLDivElement, FeaturedProjectsProps>(
  ({ projects }, ref) => {
    return (
      <section
        ref={ref}
        className="py-40 px-6 md:px-12 bg-bg-dark relative overflow-hidden"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-darker/50 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl mb-4 fade-up">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p
              className="font-mono text-text-secondary text-lg fade-up"
              style={{ transitionDelay: "0.1s" }}
            >
              Building real, usable systems
            </p>
          </div>

          {/* Backend Systems */}
          <div className="mb-24">
            <h3 className="font-display text-3xl md:text-4xl mb-12 flex items-center gap-4 fade-left">
              <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                <Database size={28} className="text-secondary" />
              </div>
              <span className="gradient-text-secondary">Backend Systems</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.django.map((project, idx) => (
                <div key={idx} className="stagger-item">
                  <ProjectCard project={project} variant="primary" />
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Applications */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-12 flex items-center gap-4 fade-left">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Code2 size={28} className="text-primary" />
              </div>
              <span className="gradient-text-primary">
                Frontend Applications
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.react.map((project, idx) => (
                <div key={idx} className="stagger-item">
                  <ProjectCard project={project} variant="secondary" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>
    );
  },
);

FeaturedProjects.displayName = "FeaturedProjects";

export default FeaturedProjects;
