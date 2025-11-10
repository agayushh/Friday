import { ChevronDown } from "lucide-react";
import { EXP_LIST } from "../config/experience";

export default function Experience() {
  return (
    <div className="mt-10 pl-3">
      <div className="text-2xl pt-2">EXPERIENCE</div>
      <div className="left-0 border-t w-screen absolute"></div>
      <div className="space-y-4">
        {EXP_LIST.map((exp) => {
          return (
            <div className="border-b pb-2 left-0">
              <div key={exp.Index} className="flex justify-between">
                <div>
                  <div>{exp.Position}</div>
                  <div>{exp.Company}</div>
                </div>
                <div className="w-30 flex flex-col items-end pr-2 pt-2">
                  <div className="w-38">
                    {exp.StartDate} - {exp.EndDate}
                  </div>
                  <div>{exp.WorkLocation}</div>
                  <span className="left-0">
                    <ChevronDown />
                  </span>
                </div>
              </div>
              <div>
                {exp.task.map((kaam) => {
                  return (
                    <div>
                      <ul>
                        <li>{kaam}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
