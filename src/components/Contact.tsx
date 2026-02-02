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
      className="py-32 px-6 relative overflow-hidden hero-gradient"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Glass container */}
        <div className="contact-container text-center">
          {/* Header badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8 fade-up">
            <MessageCircle size={16} className="text-primary" />
            <span className="font-mono text-sm text-primary">
              Open to Opportunities
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-display text-4xl md:text-6xl mb-6 fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="gradient-text">Let's Build Something</span>
          </h2>

          {/* Description */}
          <p
            className="font-body text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto fade-up"
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

          {/* CTA Button */}
          <div
            className="flex justify-center mb-16 fade-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <a
              href={`mailto:${email}`}
              className="btn-primary pulse-glow group flex items-center gap-3 text-lg px-10 py-5"
            >
              <Mail
                size={24}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>{email}</span>
              <Send
                size={18}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-6 justify-center fade-up"
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href={githubUrl}
              className="social-icon group"
              aria-label="GitHub Profile"
            >
              <Github
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href={linkedinUrl}
              className="social-icon group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-secondary/20 rounded-br-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
