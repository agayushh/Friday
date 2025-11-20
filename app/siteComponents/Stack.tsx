import Image from "next/image";
import { TECH_STACK } from "../config/techStack";
import { SimpleTooltip } from "@/components/ui/tooltip";

export default function Stack() {
  return (
    <div className="mt-10">
      <div className="text-2xl pl-3 tracking-wide font-jura text-gray-600 dark:text-gray-400">
        STACK
      </div>
      <div className="border-t absolute w-screen left-0"></div>
      <div className=" mt-5 mb-4 grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-12 gap-4 m-1">
        {TECH_STACK.map((stk) => {
          return (
            <SimpleTooltip key={stk.title} content={stk.title}>
              <div className="h-10 w-10 mx-1">
                <a href={stk.href}>
                  {typeof stk.icon === "string" ? (
                    <Image
                      src={stk.icon}
                      alt={stk.title}
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  ) : (
                    <stk.icon className="h-10 w-10" />
                  )}
                </a>
              </div>
            </SimpleTooltip>
          );
        })}
      </div>
      <div className="border-t absolute w-screen left-0"></div>
    </div>
  );
}
