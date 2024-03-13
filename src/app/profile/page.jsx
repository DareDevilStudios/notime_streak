import Points_steper from "@/common/components/Points_steper";
import StreakPattern from "@/common/components/StreakPattern";
import React from "react";

export default function page() {

  const levels = [
    { title: "Novice", completed: false, points: 100 },
    { title: "Apprentice", completed: false, points: 300 },
    { title: "Debugger", completed: false, points: 500 },
    { title: "Coder", completed: false, points: 700 },
    { title: "Scripter", completed: false, points: 900 },
    { title: "Wizard", completed: false, points: 1100 },
    { title: "Engineer", completed: false, points: 1300 },
    { title: "Architect", completed: false, points: 1500 },
    { title: "Master", completed: false, points: 1700 },
    { title: "Guru", completed: false, points: 1900 },
  ];

  return (
    <div>
      <section class="flex font-medium items-center justify-center lg:px-12">
        <section class="w-full rounded-2xl px-8 py-6 shadow-lg">
          <h1 className="text-2xl underline decoration-sky-500 underline-offset-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-max">
            My profile
          </h1>
          <div class="mt-6 w-fit">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-32 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">
              Jonathan Smith
            </h2>
          </div>
          <p class="text-emerald-400 font-semibold mt-2.5">
            Full-Stack Developer
          </p>

          {/* <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
          </div>
          <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
          </div> */}
          <div className="bg-gray-900 rounded-xl shadow mt-6 flex lg:flex-row flex-col justify-center">
            <div className="stat border-r-2">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total streak days</div>
              <div className="stat-value text-primary my-2">0</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>

            <div className="stat border-r-2">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Development Level </div>
              <div className="stat-value text-secondary my-2">Master</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>

            <div className="stat border-r-2">
              <div className="stat-value">86%</div>
              <div className="stat-title">Completed</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div className="stat">
              <div className="stat-title">Points Earned</div>
              <div className="stat-value text-primary my-2">100</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>
            
          </div>
          <StreakPattern />
          <Points_steper levels={levels} />
        </section>
      </section>
    </div>
  );
}
