import React from "react";

export default function page() {
  return (
    <div class="flex justify-center items-center w-full bg-black">
      <div class="relative sm:p-4 w-full max-w-2xl h-full md:h-auto">
        <div class="relative p-4 rounded-lg shadow bg-black sm:p-5">
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-white">Welcome Streaker</h3>
          </div>
          <form method="POST" action="#">
            <div class="flex gap-4 mb-4 flex-col">
              {/* task part */}
              <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                >
                  Task and Desciption ( 5 points )
                </label>

                <div className="">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name of task you have done
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="task name"
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    for="brand"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Provide a brief description about it
                  </label>
                  <textarea
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Description"
                    required=""
                  />
                </div>
              </div>
              {/* task part */}

              {/* github part */}
              <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                >
                  Add the task link ( 5 points )
                </label>

                <div className="">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Github / Figma / Google docs link
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="google.com"
                    required=""
                  />
                </div>
              </div>
              {/* task part */}

              {/* Linkedin part */}
              <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                >
                  Have you posted it on linkedin ? ( 5 points )
                </label>

                <div className="">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Linkedin Link
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="linkedin.com"
                    required=""
                  />
                </div>
              </div>
              {/* task part */}

              {/* Linkedin part */}
              <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                >
                  Have you Learned some thing new. then write a blog about it ( 5 points )
                </label>

                <div className="">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Blog link ( you can write blogs in medium, hashnode, dev.to etc.)
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="link here"
                    required=""
                  />
                </div>
              </div>
              {/* task part */}
            </div>
            <button
              type="submit"
              class="text-white border-2 px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
