import React from "react";

export const Promote = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex items-center ">
        <h3 className="text-3xl text-center px-5 lg:text-6xl">
          好評不斷！邀請您免費體驗
        </h3>
      </div>
      <div className="mt-5 flex flex-col items-center">
        <a href="https://seeking-the-echoes-online.vercel.app/" target="_blank">
          <button
            type="button"
            class="text-gray-900 bg-gradient-to-r from-[#fff352] via-[#d9ff9f] to-[#5ce1e6] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-full text-lg px-25 lg:px-100 py-2.5 text-center me-2 mb-2 mt-10 cursor-pointer"
          >
            等不及探索了？
          </button>
        </a>
      </div>
    </div>
  );
};
