import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="px-3 py-3 fixed bg-gradient-to-r from-[#fff352] via-[#d9ff9f] to-[#5ce1e6] w-screen z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        </Link>
        <div className="flex items-center gap-2 lg:order-2">
          <Link
            to="/aboutus"
            className="text-[0.8rem] font-bold hover:text-gray-300 transition-colors duration-300 text-gray-500"
          >
            關於我們
          </Link>
          <Link
            to="/storyans"
            className="text-[0.8rem] font-bold hover:text-gray-300 transition-colors duration-300 text-gray-500"
          >
            關卡詳解
          </Link>
        </div>
      </div>
    </nav>
  );
};
