const Footer = () => {
  return (
    <div className="mb-1">
      <div className=" flex justify-center items-center p-4 ">
        <div className="font-jura mt-10 text-gray-500 dark:text-gray-400 text-center space-y-1">
          <p className="text-center flex gap-1 justify-center items-center">
            Built by{" "}
            <a
              className="underline"
              href="https://x.com/pydottsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayush
            </a>
            {" "}·{" "}
            <a
              className="underline"
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitemap
            </a>
          </p>
          <p>© 2026 Ayush. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute w-screen left-1/2 -translate-x-1/2 border-t"></div>
    </div>
  );
};

export default Footer;
