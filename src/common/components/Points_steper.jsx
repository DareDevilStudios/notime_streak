import React from "react";

export default function Points_steper({ levels }) {
  return (
    <div>
      <h1 className="text-lg mb-5">Achievements</h1>
      <div class="flex flex-wrap w-full items-center gap-5">
        {levels.map((level, index) => {
          return (
            <div
              class={`h-full p-4 border rounded-lg ${
                level.completed
                  ? "bg-green-600 border-green-300   "
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <div class="flex flex-col gap-5 items-center justify-between">
                <div className="flex gap-5 items-center">
                  <h3 class="font-bold text-white">{level.title}</h3>
                  {level.completed && (
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  )}
                </div>
                <h3 class="text-white text-xs">
                  Earned at points : {level.points}
                </h3>
              </div>
            </div>
          );
        })}
        {/* <div
          class="h-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
          role="alert"
        >
          <div class="flex items-center justify-between gap-4">
            <h3 class="font-medium">Starter</h3>
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </div>
        </div>

        <div class="h-full p-4 border rounded-lg bg-gray-800 border-gray-700 text-gray-400">
          <div class="flex items-center justify-between">
            <h3 class="font-medium">4. Review</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}
