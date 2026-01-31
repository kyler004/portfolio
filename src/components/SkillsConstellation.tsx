import { Layers, Code2, Database, Terminal, Rocket } from "lucide-react";
import { forwardRef } from "react";

interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  data: string[];
  other: string[];
}

interface SkillsConstellationProps {
  skills: Skills;
}

const SkillsConstellation = forwardRef<
  HTMLDivElement,
  SkillsConstellationProps
>(({ skills }, ref) => {
  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-[#0A192F] relative overflow-hidden"
    >
      {/* Constellation lines background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full">
          <line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="40%"
            stroke="#64FFDA"
            strokeWidth="1"
          />
          <line
            x1="30%"
            y1="40%"
            x2="50%"
            y2="35%"
            stroke="#64FFDA"
            strokeWidth="1"
          />
          <line
            x1="50%"
            y1="35%"
            x2="70%"
            y2="50%"
            stroke="#64FFDA"
            strokeWidth="1"
          />
          <line
            x1="70%"
            y1="50%"
            x2="85%"
            y2="30%"
            stroke="#64FFDA"
            strokeWidth="1"
          />
          <line
            x1="20%"
            y1="60%"
            x2="40%"
            y2="75%"
            stroke="#FF6B9D"
            strokeWidth="1"
          />
          <line
            x1="40%"
            y1="75%"
            x2="60%"
            y2="70%"
            stroke="#FF6B9D"
            strokeWidth="1"
          />
          <line
            x1="60%"
            y1="70%"
            x2="80%"
            y2="80%"
            stroke="#FF6B9D"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-display text-6xl text-[#64FFDA] mb-4 fade-up">
          Skills Constellation
        </h2>
        <p className="font-mono text-[#8892B0] text-lg mb-20 fade-up">
          Connected knowledge across the stack
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="fade-up stagger-item">
            <h3 className="font-display text-2xl text-[#64FFDA] mb-6 flex items-center gap-3">
              <Layers size={28} />
              Languages
            </h3>
            <div className="space-y-3">
              {skills.languages.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] border border-[#64FFDA]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#64FFDA] hover:bg-[#64FFDA]/5 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-item">
            <h3 className="font-display text-2xl text-[#FF6B9D] mb-6 flex items-center gap-3">
              <Code2 size={28} />
              Frontend
            </h3>
            <div className="space-y-3">
              {skills.frontend.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] border border-[#FF6B9D]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/5 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-item">
            <h3 className="font-display text-2xl text-[#64FFDA] mb-6 flex items-center gap-3">
              <Database size={28} />
              Backend
            </h3>
            <div className="space-y-3">
              {skills.backend.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] border border-[#64FFDA]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#64FFDA] hover:bg-[#64FFDA]/5 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-item">
            <h3 className="font-display text-2xl text-[#FF6B9D] mb-6 flex items-center gap-3">
              <Terminal size={28} />
              Data & Analysis
            </h3>
            <div className="space-y-3">
              {skills.data.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] border border-[#FF6B9D]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/5 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-item md:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl text-[#64FFDA] mb-6 flex items-center gap-3">
              <Rocket size={28} />
              Tools & More
            </h3>
            <div className="space-y-3">
              {skills.other.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#112240] border border-[#64FFDA]/20 rounded px-4 py-3 font-mono text-[#CCD6F6] hover:border-[#64FFDA] hover:bg-[#64FFDA]/5 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsConstellation.displayName = "SkillsConstellation";

export default SkillsConstellation;
