import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        opacity: 1,
        backgroundImage: "radial-gradient(#161616 0.8px, #09090b 0.8px)",
        backgroundSize: "16px 16px",
      }}
      className="min-h-52 w-full flex justify-center items-center mt-[58px] text-white"
    >
      <h1 className="text-9xl font-doto font-extralight">AG</h1>
    </div>
  );
};

export default Header;
