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
      <section ref={ref} className="py-32 px-6 bg-[#0A192F] relative">
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
                <article
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
                </article>
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
                <article
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
