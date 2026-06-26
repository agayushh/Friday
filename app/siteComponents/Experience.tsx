import { EXP_LIST } from "../config/experience";
import ExperienceClient from "./ExperienceClient";

export default function Experience() {
  return (
    <section id="experience" className="mt-10 pl-3" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-2xl pt-2 font-jura text-gray-600 dark:text-gray-400 tracking-wide">
        EXPERIENCE
      </h2>
      <ExperienceClient experiences={EXP_LIST} />
    </section>
  );
}
