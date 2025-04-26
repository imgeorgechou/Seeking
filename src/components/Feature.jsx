import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCircleUser,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

export const Feature = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-20 gap-10">
      <h3 className="text-5xl my-5 mb-10 lg:text-7xl ">
        踏尋在地 <br />
        認識在地
      </h3>
      <div className="flex flex-col gap-8 items-center justify-center ">
        <div className="transparent-card flex flex-col justify-start w-[90%] h-50 lg:-mr-50">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="2x"
            className="self-start text-3xl"
          />
          <h3 className="text-2xl my-3">使用者體驗優良</h3>
          <p className="text-m mb-10">
            我們設計了注重使用者體驗的遊戲介面，讓你遊玩更順利。
          </p>
        </div>
        <div className="transparent-card flex flex-col justify-start w-[90%] h-55 ">
          <FontAwesomeIcon icon={faCamera} size="2x" className="self-start " />
          <h3 className="text-2xl my-3">AR效果，加強解謎元素</h3>
          <p className="text-m mb-10">
            我們使用了AR（擴增實境）技術，讓玩家掃描真實世界的物件，找到線索並解開謎題
          </p>
        </div>
        <div className="transparent-card flex flex-col justify-start w-[90%] h-50 lg:-mr-30">
          <FontAwesomeIcon
            icon={faPuzzlePiece}
            size="2x"
            className="self-start text-3xl"
          />
          <h3 className="text-2xl my-3">謎題多樣，歡迎挑戰</h3>
          <p className="text-m mb-10">我們設計了不同種的謎題，保證你不無聊！</p>
        </div>
      </div>
    </div>
  );
};
