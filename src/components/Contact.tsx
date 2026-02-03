import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";

interface ContactProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export default function Contact({
  email = "ryan@example.com",
  githubUrl = "#",
  linkedinUrl = "#",
}: ContactProps) {
  return (
    <section
      id="contact"
      className="py-40 relative overflow-hidden hero-gradient w-full"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Full width container */}
      <div className="w-full h-full relative z-10 px-6 md:px-12 flex flex-col items-center justify-center">
        {/* Glass container - now wider */}
        <div className="contact-container w-full max-w-5xl text-center backdrop-blur-xl bg-bg-card/40 border border-primary/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          {/* Header badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8 fade-up mx-auto">
            <MessageCircle size={16} className="text-primary" />
            <span className="font-mono text-sm text-primary">
              Open to Opportunities
            </span>
          </div>

          {/* Title */}
          <div
            className="mb-8 fade-up mx-auto"
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl">
              <span className="gradient-text">Let's Build</span>
            </h2>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-2">
              <span className="text-text-primary">Something Great</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex justify-center w-full">
            <p
              className="font-body text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto fade-up text-center"
              style={{ transitionDelay: "0.2s" }}
            >
              I'm currently looking for opportunities to collaborate on{" "}
              <span className="text-secondary font-medium">
                impactful projects
              </span>{" "}
              and learn from experienced developers. Whether it's full-stack
              development, data science, or something entirely new—
              <span className="text-primary font-medium">let's connect</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className="flex justify-center mb-16 fade-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <a
              href={`mailto:${email}`}
              className="btn-primary pulse-glow group flex items-center gap-4 text-xl px-12 py-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <Mail
                size={28}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>{email}</span>
              <Send
                size={24}
                className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-8 justify-center fade-up items-center"
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href={githubUrl}
              className="social-icon group w-16 h-16"
              aria-label="GitHub Profile"
            >
              <Github
                size={32}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href={linkedinUrl}
              className="social-icon group w-16 h-16"
              aria-label="LinkedIn Profile"
            >
              <Linkedin
                size={32}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="absolute top-10 left-10 w-8 h-8 border border-primary/30 rounded-full animate-bounce delay-100 opacity-50" />
          <div className="absolute bottom-10 right-10 w-12 h-12 border border-secondary/30 rounded-full animate-bounce delay-700 opacity-50" />
        </div>
      </div>
    </section>
  );
}
