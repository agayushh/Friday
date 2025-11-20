const Footer = () => {
  return (
    <div className="mb-1">
      <div className=" flex justify-center items-center p-4 ">
        <p className="font-jura mt-10 text-gray-500 dark:text-gray-400">
          Inspired by{" "}
          <a className="underline" href="https://tailwindcss.com/">
            tailwindcss.com
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href="https://chanhdai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ncdai
          </a>{" "}
          <br />
          <span className="text-center flex gap-1 justify-center">
            Built by{" "}
            <a
              className="underline"
              href="https://x.com/pydottsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayush
            </a>
          </span>
        </p>
      </div>
      <div className="absolute w-screen left-0 border-t"></div>
    </div>
  );
};

export default Footer;
