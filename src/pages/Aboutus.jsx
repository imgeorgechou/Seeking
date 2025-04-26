import React from "react";
import { motion } from "framer-motion";

export const Aboutus = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/about.jpg"
          alt="團體照"
          className="mb-10 w-70 rounded-3xl sm:w-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <h3 className="text-4xl text-center px-5 sm:text-5xl">關於我們</h3>
      </motion.div>

      <motion.div
        className="mt-5 flex flex-col items-center gap-2 px-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-xl text-center px-5 sm:text-2xl">
          我們是《尋找回聲 Seeking the Echoes》的開發團隊
        </h3>

        <p className="text-20 text-center px-5 sm:text-xl">
          陳鴻溢、黃榆荏、周致祥、李亞峰
        </p>
        <p className="text-20 text-center px-5 sm:text-xl sm:w-[60%]">
          我們攜手 #打貓街訪文化協會、中正傳播系主任 管中祥老師主持的
          #重構大學路計畫
          ，開發一款結合「民雄大士爺文化」為主題的AR實境解謎遊戲！
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.img
          src="/poster.jpg"
          alt="海報"
          className="mt-10 w-70 rounded-xl sm:w-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        <motion.h3
          className="text-20 text-center px-10 sm:text-2xl mt-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          這是一款結合擴增實境（AR） ， 以及AI藝術生成技術的互動歷史教育遊戲。
        </motion.h3>

        <motion.p
          className="text-20 text-center px-10 sm:text-xl mt-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          以嘉義民雄為起點， 構築一座跨越時空的文化橋廊，
          讓玩家在虛實交錯的世界中， 親身探尋往事，尋找地方記憶。
        </motion.p>

        <motion.p
          className="text-20 text-center px-10 sm:text-xl mt-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          我們期盼打造一套創新、 且可延展的地方歷史的傳播與保存模式，
          讓文化在數位浪潮中綻放新生， 讓每一個足跡，都成為傳承的迴響。
        </motion.p>

        <motion.h3
          className="text-20 text-gray-500 text-center px-10 sm:text-xl mt-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          #本專案為中正大學資管系畢業專題
        </motion.h3>

        <motion.h3
          className="text-20 text-gray-500 text-center px-10 sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          並同步參與中正大學傳播系畢業製作展
        </motion.h3>
      </motion.div>
    </div>
  );
};
