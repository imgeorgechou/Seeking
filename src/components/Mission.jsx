import React from "react";
import { useState } from "react";

export const Mission = ({ data }) => {
  const [explainOpen, setExplainOpen] = useState(false);
  const [backgroundOpen, setBackgroundOpen] = useState(false);
  return (
    <div className="m-10">
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-white">
        {data.title}
        <span className="text-gray-200 text-[15px] mx-3">{data.subtitle}</span>
      </h5>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 shadow-xl">
        <img className="rounded-t-lg" src={data.img} alt="民雄車站" />
        <div className="p-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.des}
          </p>
          <div className="flex justify-evenly">
            <button
              onClick={() => setExplainOpen(true)}
              className="inline-flex items-center px-3 py-2 text-[16px] font-medium text-center text-white bg-primary rounded-xl hover:scale-110 focus:ring-4 transition-all duration-300 cursor-pointer"
            >
              關卡解說
            </button>
            <button
              onClick={() => setBackgroundOpen(true)}
              className="inline-flex items-center px-3 py-2 text-[16px] font-medium text-center text-white bg-primary rounded-xl hover:scale-110 focus:ring-4 transition-all duration-300 cursor-pointer"
            >
              任務背景
            </button>
          </div>
        </div>
      </div>
      {explainOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                關卡解說
              </h3>
              <button
                onClick={() => setExplainOpen(false)}
                className="text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 ">{data.explain}</p>
          </div>
        </div>
      )}

      {backgroundOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 ">任務背景</h3>
              <button
                onClick={() => setBackgroundOpen(false)}
                className="text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 leading-relaxed ">{data.background}</p>
          </div>
        </div>
      )}
    </div>
  );
};
