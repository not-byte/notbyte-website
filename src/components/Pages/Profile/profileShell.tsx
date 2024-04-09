/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const ProfileShell = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center ">
      <div className="max-w-md w-full  rounded-lg shadow-md p-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 100 15.292M15 19a9 9 0 10-6 0M6.457 17.042C5.732 15.973 5.25 14.547 5.25 13A6.75 6.75 0 1118.75 13c0 1.547-.482 2.973-1.207 4.042"
          />
        </svg>
        <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">
          Profile Not Found
        </h2>
        <p className="mb-8 text-lg dark:text-gray-300">
          We're sorry, but the profile you're looking for doesn't exist or may
          have been removed.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-colors text-white rounded-md shadow hover:bg-darkModeColors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};
