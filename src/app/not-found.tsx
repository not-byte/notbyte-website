import React from "react";
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-screen flex gap-4 flex-col justify-center items-center text-white">
      <h1 className="text-8xl font-bold animate-pulse">404</h1>
      <p className="text-2xl">Oops! Page not found.</p>
      <p className="text-sm md:text-md text-gray-400">
              The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <a className="text-lg space-y-4 bg-colors hover:brightness-75 text-white pl-10 pr-16 py-2 transition-[filter] duration-300 corner-br">
            Come back
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
