export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-[#0A192F] border-t border-[#64FFDA]/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-mono text-[#8892B0] text-sm">
          Built with <span className="text-[#FF6B9D]">React</span>,{" "}
          <span className="text-[#64FFDA]">TypeScript</span>, and{" "}
          <span className="text-[#FF6B9D]">Tailwind CSS</span>
        </p>
        <p className="font-mono text-[#8892B0] text-sm mt-2">
          © {currentYear} Ryan. Designed with discipline and vision.
        </p>
      </div>
    </footer>
  );
}
