import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Herosction = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row sm:scale-110 sm:mt-10">
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-white text-2xl lg:text-3xl">
          結合AI視覺藝術與AR<br></br>互動歷史實境解謎教育遊戲
        </h3>
        <a href="https://seeking-the-echoes-online.vercel.app/" target="_blank">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-[#fff352] via-[#d9ff9f] to-[#5ce1e6] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-full text-lg sm:text-xl px-10 py-2.5 text-center me-2 mb-2 mt-10 cursor-pointer"
          >
            馬上遊玩
          </button>
        </a>
      </div>
      <motion.img
        src="/hero.png"
        alt="hero"
        className="mt-15 w-100 sm:w-120"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
