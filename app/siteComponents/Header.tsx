const Header = () => {
  const dotPattern = {
    backgroundImage:
      "radial-gradient(rgba(0,0,0,0.05) 0.8px, transparent 0.8px)",
    backgroundSize: "16px 16px",
  };

  const darkDotPattern = {
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)",
    backgroundSize: "16px 16px",
  };

  return (
    <div className="">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes customSlideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .anim-slide-up-a {
          animation: customSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .anim-slide-up-g {
          animation: customSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards;
          opacity: 0;
        }
        .glow-hover {
          transition: text-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glow-hover:hover {
          text-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
        }
        .dark .glow-hover:hover {
          text-shadow: 0 0 25px rgba(255, 255, 255, 0.35), 0 0 50px rgba(255, 255, 255, 0.15);
        }
      `}} />
      <div className="min-h-58 w-full flex justify-center items-center mt-[58px] bg-white dark:bg-[#09090b] transition-colors relative overflow-hidden">
        <div style={dotPattern} className="absolute inset-0 dark:hidden" />
        <div
          style={darkDotPattern}
          className="absolute inset-0 hidden dark:block"
        />
        <div
          role="img"
          aria-label="Initials Logo: AG"
          className="text-9xl font-jura font-extralight text-black dark:text-white relative z-10 cursor-pointer select-none flex items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.97] hover:tracking-[0.15em] tracking-normal glow-hover"
        >
          <span className="anim-slide-up-a inline-block">A</span>
          <span className="anim-slide-up-g inline-block">G</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
