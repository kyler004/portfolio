import { Mail, Github, Linkedin } from "lucide-react";

interface ContactProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export default function Contact({
  email = "ryan@example.com", // TODO: Replace with actual email
  githubUrl = "#", // TODO: Replace with actual GitHub URL
  linkedinUrl = "#", // TODO: Replace with actual LinkedIn URL
}: ContactProps) {
  return (
    <section className="py-32 px-6 bg-linear-to-b from-[#0A192F] to-[#112240] relative overflow-hidden hero-gradient">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl text-[#64FFDA] mb-6 neon-glow fade-up">
          Let's Build Something
        </h2>
        <p
          className="font-body text-xl text-[#8892B0] mb-12 leading-relaxed fade-up"
          style={{ transitionDelay: "0.2s" }}
        >
          I'm currently looking for opportunities to collaborate on{" "}
          <span className="text-[#FF6B9D]">impactful projects</span> and learn
          from experienced developers. Whether it's full-stack development, data
          science, or something entirely new—
          <span className="text-[#64FFDA]"> let's connect</span>.
        </p>

        <div
          className="flex gap-6 justify-center mb-16 fade-up"
          style={{ transitionDelay: "0.4s" }}
        >
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#0A192F] font-mono font-bold rounded-lg hover:bg-[#FF6B9D] hover:scale-105 transition-all pulse-glow"
          >
            <Mail size={24} />
            {email}
          </a>
        </div>

        <div
          className="flex gap-8 justify-center fade-up"
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href={githubUrl}
            className="text-[#8892B0] hover:text-[#64FFDA] transition-colors hover:scale-110 transform"
            aria-label="GitHub Profile"
          >
            <Github size={32} />
          </a>
          <a
            href={linkedinUrl}
            className="text-[#8892B0] hover:text-[#64FFDA] transition-colors hover:scale-110 transform"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
