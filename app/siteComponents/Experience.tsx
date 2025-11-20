import { EXP_LIST } from "../config/experience";
import ExperienceClient from "./ExperienceClient";

export default function Experience() {
  return (
    <div id="experience" className="mt-10 pl-3">
      <div className="text-2xl pt-2 font-jura text-gray-600 dark:text-gray-400 tracking-wide">
        EXPERIENCE
      </div>
      <div className="left-0 border-t w-screen absolute"></div>
      <ExperienceClient experiences={EXP_LIST} />
    </div>
  );
}
