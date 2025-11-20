import { achieve_list } from "../config/achievement";

const Achievements = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-jura tracking-wide text-gray-600 dark:text-gray-400 pl-2">
          {" "}
          ACHIEVEMENTS
        </p>

        <div>
          {achieve_list.map((achieve, index) => (
            <div
              key={index}
              className="border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 py-3 sm:py-2"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="flex-shrink-0">
                  <achieve.icon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 ml-2" />
                </span>
                
                <p className="font-jura text-xs sm:text-sm flex-1 sm:w-auto sm:max-w-[500px] text-gray-800 dark:text-gray-200">
                  {achieve.title}
                </p>
              </div>
              <p className="font-maven text-xs sm:text-sm ml-9 sm:ml-0 sm:mr-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mb-4">
                {achieve.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
