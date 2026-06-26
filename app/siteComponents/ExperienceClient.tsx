"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExperienceType {
  Index: number;
  Position: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  WorkLocation: string;
  task: string[];
}

export default function ExperienceClient({ experiences }: { experiences: ExperienceType[] }) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-1">
      {experiences.map((exp, index) => {
        const isExpanded = expandedItems.has(index);
        return (
          <div key={exp.Index} className="border-b pb-2 mt-1 left-0">
            <div className="flex justify-between">
              <div>
                <div className="text-lg font-maven text-black dark:text-white">{exp.Company}</div>
                <div className="text-sm font-jura text-gray-600 dark:text-gray-400">
                  {exp.Position}
                </div>
              </div>
              <div className="w-30 flex flex-col items-end pt-1">
                <div className="w-38 pl-2 font-maven text-sm text-black dark:text-white">
                  {exp.StartDate} - {exp.EndDate}
                </div>
                <div className="flex space-x-1">
                  <div className="text-sm font-jura text-gray-600 dark:text-gray-400">
                    {exp.WorkLocation}
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="left-0 cursor-pointer hover:opacity-70 transition-all"
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    <ChevronDown
                      className={`transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="list-disc list-inside">
                {exp.task.map((kaam: string, taskIndex: number) => {
                  return (
                    <li key={taskIndex} className="font-maven text-black dark:text-white">
                      {kaam}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
