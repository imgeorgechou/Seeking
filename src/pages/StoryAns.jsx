import React from "react";
import { Mission } from "../components/Mission";
export const StoryAns = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold">各關說明</h1>
      <p className="text-gray-300 m-3">了解關卡設計的背後故事</p>
      <p className="text-red-400 text-[14px] mx-20 text-center">
        ！若您尚未遊玩過本遊戲，我們建議您遊玩後再回來查看，以免暴雷、影響體驗！
      </p>
      <Mission />
    </div>
  );
};
