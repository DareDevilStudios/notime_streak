import React from "react";
import StreakMarker from "./StreakMarker";
import StreakNoMarker from "./StreakNoMarker";

export default function StreakPattern() {
  // set an array having 30 elements with 0 and 1 as values spread randomly
  const streak = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 2)
  );
  // console.log(streak)

  return (
    <div>
      <div class="flex flex-col my-10">
        <h1 className="mb-5">Streak pattern</h1>
        <div class="rounded-2xl p-5 py-3 pt-5" id="widget">
          {/* <div class="w-full border-t"></div> */}
          <div class="grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-2 gap-3">
            {streak.map((s, i) => {
              if (s === 1) {
                return <StreakMarker value={i + 1} />;
              } else {
                return <StreakNoMarker value={i + 1} />;
              }
            })}
          </div>
            {/* <div class="mt-6 flex justify-between border-t border-gray-100 p-2">
              {streak.map((s, i) => {
                if ((i + 1) % 10 === 0) {
                  let text;
                  if (i < 10) {
                    text = "Novice";
                  } else if (i < 20) {
                    text = "Amateur";
                  } else {
                    text = "Pro";
                  }
                  return (
                    <div>
                      <div class="font-semibold text-gray-700">{text}</div>
                      <div class="text-xs text-gray-400">Streak Level</div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div> */}
          {/* <div class="mt-6 flex justify-between border-t border-gray-100 p-2">
            <div>
              <div class="font-semibold text-gray-700">356</div>
              <div class="text-xs text-gray-400">Tweets posted</div>
            </div>
            <div>
              <div class="font-semibold text-gray-700">36</div>
              <div class="text-xs text-gray-400">Comments</div>
            </div>
            <div>
              <div class="font-semibold text-gray-700">1256</div>
              <div class="text-xs text-gray-400">Liked posts</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
