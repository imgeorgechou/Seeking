import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5 dark:bg-gray-800 -mb-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/aboutus"
              className="text-[0.8rem] font-bold hover:text-gray-300 transition-colors duration-300"
            >
              關於我們
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
