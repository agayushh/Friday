import { TECH_STACK } from "../config/techStack";

export default function Stack() {
  return (
    <div className="mt-10">
      <div className="text-2xl pl-3 tracking-wide font-jura text-muted-foreground ">STACK</div>
      <div className="border-t absolute w-screen left-0"></div>
      <div className=" mt-5 mb-4 grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-12 gap-4 m-1">
        {TECH_STACK.map((stk) => {
          return (
            <div key={stk.title} className="h-10 w-10 mx-1">
              <a href={stk.href}>
                {typeof stk.icon === "string" ? (
                  <img src={stk.icon} alt={stk.title} />
                ) : (
                  <stk.icon className="h-10 w-10" />
                )}
              </a>
            </div>
          );
        })}
      </div>
      <div className="border-t absolute w-screen left-0"></div>
    </div>
  );
}
