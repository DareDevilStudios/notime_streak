import React from "react";

export default function StreakNoMarker({value}) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 border-2 p-2 rounded-lg">
      <div class="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-green-100"></div>
      <h1>Day : {value}</h1>
    </div>
  );
}
