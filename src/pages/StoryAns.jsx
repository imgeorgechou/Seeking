import React from "react";
import { Mission } from "../components/Mission";
const MissionData = [
  {
    id: 1,
    title: "民雄車站",
    subtitle: "迷路了該往哪走?",
    img: "https://www.bioarch.com.tw/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fbio-architecture-formosana.appspot.com%2Fo%2Funit-ocawppQrVPxlE9AIqDPb%252F0510-B%252FIMG_1481.webp%3Falt%3Dmedia%26token%3Db3d30cb5-927e-4cfe-981a-862c7b74dd26&w=5120&q=75",
    des: "小男孩啜泣著，說自己找不到回家的路，你雖然覺得有些麻煩，但又不忍心把他獨自留在這裡。",
    explain: "這個關卡，需要你打開AR相機掃描公車站站牌喔。",
    background:
      "民雄車站最早在 1903 年落成，當時稱為「打貓驛」，是當地重要的交通樞紐。拿時候因為汽車與道路沒有完全普及，鐵路是運送人員、貨物的主要方式，許多居民都需要來這搭車、寄送農產或工業品，也讓民雄車站前聚集了許多貨運行與旅社。車站歷經三次改建，現在我們看見的是第三代車站。看看旁邊的樓梯很有趣，他的斜度刻意做成 23.5 度，是對應通過嘉義的北回歸線喔。雖然過去民雄車站前有過繁榮時代，但隨1970年代國道一號和各路段陸續開通，旅社與貨運行陸續歇業，民雄車站的運輸角色也逐漸淡出。",
  },
  {
    id: 2,
    title: "鵝肉一條街",
    subtitle: "鵝肉街巡禮",
    img: "https://media.zenfs.com/ko/chinatimes.com.tw/56e859585ef50b78767a0ac618fa04cc",
    des: "來到熱鬧的鵝肉一條街，四周飄散著香氣。仔細尋找線索，帶著小男孩找到回家的路！",
    explain:
      "在此關卡，你需要觀察鵝肉一條街上的鵝肉店招牌們，解開謎語。謎語的設計，與招牌上的字數、電話數字、筆畫有相關。",
    background:
      "後來，車站前逐漸聚集鵝肉店家。如果你細看鵝肉一條街的某些建築，仍可從窗戶格局與立面設計中，察覺過往旅店的空間痕跡。民雄鵝肉多以鹽水鵝料理為主，常見的烹煮方式有兩種：蒸炊與悶煮。蒸炊鵝肉口感緊實富有彈性，悶煮則使肉質更加柔嫩。每家店家在鹽水湯汁與沾醬的製法上各有巧思，形成各具特色的風味表現。這條僅約 300 公尺的街道，至今仍在假日吸引大量遊客專程前來品嚐，也成為民雄飲食文化最具代表性的象徵之一。",
  },
];

export const StoryAns = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold">各關說明</h1>
      <p className="text-gray-300 m-3">了解關卡設計的背後故事</p>
      <p className="text-red-400 text-[14px] mx-20 text-center">
        ！若您尚未遊玩過本遊戲，我們建議您遊玩後再回來查看，以免暴雷、影響體驗！
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MissionData.map((mission) => (
          <Mission key={mission.id} data={mission} />
        ))}
      </div>
    </div>
  );
};
