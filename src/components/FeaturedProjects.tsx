import { Database, Code2, Github, ExternalLink } from "lucide-react";
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

const FeaturedProjects = forwardRef<HTMLDivElement, FeaturedProjectsProps>(
  ({ projects }, ref) => {
    return (
      <section ref={ref} className="py-32 px-6 bg-bg-dark relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-4 fade-up">
            Featured Projects
          </h2>
          <p className="font-mono text-text-secondary text-lg mb-20 fade-up">
            Building real, usable systems
          </p>

          {/* Django Projects */}
          <div className="mb-24">
            <h3 className="font-display text-4xl text-secondary mb-12 flex items-center gap-4 fade-left">
              <Database size={36} />
              Backend Systems
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.django.map((project, idx) => (
                <article
                  key={idx}
                  className="bg-bg-card rounded-lg overflow-hidden border border-primary/20 hover-lift stagger-item flex flex-col h-full"
                >
                  <div className="h-3 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-display text-2xl text-text-primary mb-3">
                      {project.title}
                    </h4>
                    <p className="font-body text-text-secondary mb-6 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-primary font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-mono text-sm"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-text-secondary hover:text-secondary transition-colors font-mono text-sm"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* React Projects */}
          <div>
            <h3 className="font-display text-4xl text-primary mb-12 flex items-center gap-4 fade-left">
              <Code2 size={36} />
              Frontend Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.react.map((project, idx) => (
                <article
                  key={idx}
                  className="bg-bg-card rounded-lg overflow-hidden border border-secondary/20 hover-lift stagger-item flex flex-col h-full"
                >
                  <div className="h-3 bg-gradient-to-r from-secondary to-primary"></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-display text-2xl text-text-primary mb-3">
                      {project.title}
                    </h4>
                    <p className="font-body text-text-secondary mb-6 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary/10 border border-secondary/30 rounded text-secondary font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-mono text-sm"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-text-secondary hover:text-secondary transition-colors font-mono text-sm"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

FeaturedProjects.displayName = "FeaturedProjects";

export default FeaturedProjects;
