import Image from "next/image";
import { TECH_STACK } from "../config/techStack";
import { SimpleTooltip } from "@/components/ui/tooltip";

export default function Stack() {
  return (
    <section className="mt-10" aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="text-2xl pl-3 tracking-wide font-jura text-gray-600 dark:text-gray-400">
        STACK
      </h2>
      <div className="border-t absolute w-screen left-0" aria-hidden="true"></div>
      <div className=" mt-5 mb-4 grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-12 gap-4 m-1">
        {TECH_STACK.map((stk) => {
          return (
            <SimpleTooltip key={stk.title} content={stk.title}>
              <div className="h-10 w-10 mx-1">
                <a 
                  href={stk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn more about ${stk.title}`}
                >
                  {typeof stk.icon === "string" ? (
                    <Image
                      src={stk.icon}
                      alt={`${stk.title} logo`}
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  ) : (
                    <stk.icon className="h-10 w-10" aria-hidden="true" />
                  )}
                </a>
              </div>
            </SimpleTooltip>
          );
        })}
      </div>
      <div className="border-t absolute w-screen left-0" aria-hidden="true"></div>
    </section>
  );
}
