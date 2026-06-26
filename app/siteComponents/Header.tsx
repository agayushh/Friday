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
        @keyframes elegantReveal {
          from {
            transform: translateY(20px);
            opacity: 0;
            filter: blur(4px);
          }
          to {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
          }
        }
        .anim-reveal-a {
          animation: elegantReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .anim-reveal-g {
          animation: elegantReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
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
          className="text-9xl font-jura font-extralight text-black dark:text-white relative z-10 cursor-pointer select-none flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:opacity-90 tracking-normal"
        >
          <span className="anim-reveal-a inline-block">A</span>
          <span className="anim-reveal-g inline-block">G</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
