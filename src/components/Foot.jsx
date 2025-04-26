import React from "react";
export const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center mb-5">
        <p className="text-center text-gray-400 text-m">協辦單位</p>
        <img src="footer.png" alt="" className="w-[80%] sm:w-[30%]" />
      </div>
      <footer className="bg-white rounded-lg shadow-sm">
        <div className="w-full p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 Seeking the Echoes™ . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.instagram.com/imgeorgechou/"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                有想法？聯絡我們！
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
