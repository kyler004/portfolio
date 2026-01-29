export const style = `
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .font-display {
          font-family: 'Righteous', cursive;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .font-body {
          font-family: 'Space Mono', monospace;
        }

        /* Gradient mesh background */
        .hero-gradient {
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(100, 255, 218, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 70%);
        }

        /* Noise texture overlay */
        .noise-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        /* Glitch effect for title */
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          animation: glitch-1 2.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.8;
        }

        .glitch::after {
          animation: glitch-2 2.5s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.8;
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }

        /* Fade animations */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .stagger-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translate(0) !important;
        }

        .stagger-item:nth-child(1) { transition-delay: 0.1s; }
        .stagger-item:nth-child(2) { transition-delay: 0.2s; }
        .stagger-item:nth-child(3) { transition-delay: 0.3s; }
        .stagger-item:nth-child(4) { transition-delay: 0.4s; }
        .stagger-item:nth-child(5) { transition-delay: 0.5s; }
        .stagger-item:nth-child(6) { transition-delay: 0.6s; }

        /* Neon glow effect */
        .neon-glow {
          text-shadow: 
            0 0 10px rgba(100, 255, 218, 0.5),
            0 0 20px rgba(100, 255, 218, 0.3),
            0 0 30px rgba(100, 255, 218, 0.2);
        }

        .neon-border {
          border: 2px solid rgba(100, 255, 218, 0.3);
          box-shadow: 
            0 0 20px rgba(100, 255, 218, 0.2),
            inset 0 0 20px rgba(100, 255, 218, 0.1);
        }

        /* Diagonal stripe pattern */
        .diagonal-stripes {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(100, 255, 218, 0.03) 10px,
            rgba(100, 255, 218, 0.03) 20px
          );
        }

        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(100, 255, 218, 0.2);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0A192F;
        }

        ::-webkit-scrollbar-thumb {
          background: #64FFDA;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #FF6B9D;
        }

        /* Pulse animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(100, 255, 218, 0.3); }
          50% { box-shadow: 0 0 40px rgba(100, 255, 218, 0.6); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `;