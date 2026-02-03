import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-bg-dark border-t border-primary/10 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo or Brand */}
          <div className="font-display text-2xl gradient-text opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            R.DEV
          </div>

          <p className="font-mono text-text-secondary text-sm max-w-md leading-relaxed">
            Built with <span className="text-secondary">React</span>,{" "}
            <span className="text-primary">TypeScript</span>, and{" "}
            <span className="text-secondary">Tailwind CSS</span>.
            <br />
            Crafted with{" "}
            <Heart
              size={12}
              className="inline text-accent-purple mx-1 fill-accent-purple"
            />{" "}
            for the web.
          </p>

          <div className="h-px w-24 bg-linear-to-r from-transparent via-text-muted to-transparent my-2" />

          <p className="font-mono text-text-muted text-xs">
            © {currentYear} Ryan. Designed with discipline and vision.
          </p>
        </div>
      </div>
    </footer>
  );
}
