const Header = () => {
  const dotPattern = {
    backgroundImage:
      "radial-gradient(rgba(0,0,0,0.1) 0.8px, transparent 0.8px)",
    backgroundSize: "16px 16px",
  };

  const darkDotPattern = {
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)",
    backgroundSize: "16px 16px",
  };

  return (
    <div className="">
      <div className="min-h-58 w-full flex justify-center items-center mt-[58px] bg-white dark:bg-[#09090b] transition-colors relative overflow-hidden">
        <div style={dotPattern} className="absolute inset-0 dark:hidden" />
        <div
          style={darkDotPattern}
          className="absolute inset-0 hidden dark:block"
        />
        <h1 className="text-9xl font-jura font-extralight text-black dark:text-white relative z-10">
          AG
        </h1>
      </div>
    </div>
  );
};

export default Header;
