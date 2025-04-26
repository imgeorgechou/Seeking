import React from "react";

export const Festival = () => {
  return (
    <div className="sm:flex sm:items-center sm:px-30">
      <div className="flex flex-col lg:flex-row justify-center items-center mt-20 ">
        <div className="flex items-center justify-center">
          <div className="transparent-card flex flex-col justify-between w-[90%] ">
            <h3 className="text-4xl ">民雄大士爺祭</h3>
            <p className="text-xl  mb-10">
              我們以民雄在地著名的大士爺祭為主題，設計故事主軸，推廣民雄在地文化特色，讓玩家了解當地歷史。
              <br />
              <br />
              「讓遊戲與地方相遇」
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:mb-15">
          <img
            src="/festival.jpeg"
            alt="大士爺祭"
            className="rounded-4xl w-[90%] mt-10 "
          />
          <p className="text-gray-400 mt-10 ">大士爺廟方製紙糊「大士爺」神像</p>
        </div>
      </div>
    </div>
  );
};
