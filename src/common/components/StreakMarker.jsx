import React from "react";

export default function StreakMarker({value}) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 border-2 p-2 rounded-lg">
      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h1>Day : {value}</h1>
    </div>
  );
}
