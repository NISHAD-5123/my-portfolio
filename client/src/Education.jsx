import React from "react";
const Education = () => {
  return (
    <>
    <h1 className="text-red-500 text-3xl font-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" id="Education">Educational Details</h1>
    <hr className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-t-4 border-red-500" />
    <div className="">
    <div class="text-black max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ol class="relative border-s border-black-200 dark:border-black-700 my-16">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-400 dark:bg-green-400"></div>
          <h3 class="text-lg font-semibold text-white-900 dark:text-black">
            MCT'S Rajiv Gnadhi Institute of Technology, Mumbai
          </h3>
          <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">
            Dec 2021 - Ongoing
          </time>
          <p class="mb-4 text-base font-normal text-white-500 dark:text-white-400">
            Grade - 9.26 cgpa
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-400 dark:bg-green-400"></div>
          
          <h3 class="text-lg font-semibold text-white-900 dark:text-black">
            12TH Science
          </h3>
          <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">
            Jun 2019 - Aug 2021
          </time>
          
          <p class="text-base font-normal text-white-500 dark:text-white-400">
            Grade - 86.33%
          </p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-400 dark:bg-green-400"></div>
          <h3 class="text-lg font-semibold text-white-900 dark:text-black">
           10TH 
          </h3>
          <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">
            Jul 2018 - Mar 2019
          </time>
          <p class="text-base font-normal text-white-500 dark:text-white-400">
            Grade - 88.60%
          </p>
        </li>
      </ol>
      </div>
      </div>
    </>
  );
};

export default Education;
