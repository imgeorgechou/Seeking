import React from "react";

export const Character = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 md:flex-row md:gap-10 lg:gap-20">
      <div className="flex items-center w-60 md:w-80 lg:w-96">
        <img src="/character.png" alt="小男孩" />
      </div>
      <div className="mt-10 px-5 md:mt-0 md:px-8 lg:px-10">
        <h3 className="text-white text-4xl md:text-5xl px-2 ">迷路的小男孩</h3>
        <h3 className="text-white text-2xl mt-3 px-2  ">你會去幫助他嗎？</h3>
        <p className="text-amber-50 text-1xl mt-5 px-2 ">
          嗚......我找不到回家的路......找不到......
        </p>
        <p className="text-amber-50 text-1xl px-2 ">
          我討厭爸爸媽媽！他們為什麼要丟下我......嗚......
        </p>
      </div>
    </div>
  );
};
