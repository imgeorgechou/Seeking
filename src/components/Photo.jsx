import React from "react";

export const Photo = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:flex-row md:gap-10 lg:gap-20">
      <div className="flex items-center w-70 sm:w-120">
        <img src="/photo.png" alt="實際遊玩照片" className="rounded-lg" />
      </div>
      <div className="mt-10 flex flex-col items-center md:mt-0 sm:items-start">
        <h3 className="text-white text-4xl text-center px-5 sm:text-start ">
          參展<br></br>2025草草戲劇節【以上與未滿】
        </h3>
        <img
          src="chao.jpg"
          alt="草草戲劇節"
          className="w-50 mt-5 rounded-3xl sm:ml-4"
        />
        <p className="text-gray-400 mt-3 sm:ml-60 ">特別感謝：草草戲劇節</p>
      </div>
    </div>
  );
};
