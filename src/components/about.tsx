import React from "react";
import { Title } from "./contents";

export default function AboutMe() {
  return (
    <div className="border-t-none border-b-none p-10 border-custom">
      <Title content="About Me" />
      <p className="pt-10 text-left">
        我是一位來自台灣的前端工程師，擁有 5 年的專業開發經驗，曾經使用 React
        Native 搭配 Expo 開發 SaaS 後台系統，以及使用 Next.js
        開發預訂網站等經驗。在這些項目中，我負責優化圖片元件的使用方式以提升用戶體驗以及重構方案訂閱模組，並加上測試來保障程式碼品質。重構後的程式碼獲得了同事的一致好評，他們認為程式碼清晰且易於擴充和修改，不用擔心改
        A 壞 B 的問題。
        <br />
        <br />
        在技術專長方面，我熟悉 React、TypeScript
        等前端技術，並且具有跨平台開發的經驗。除了技術實踐，我還積極學習和應用新的技術趨勢，例如
        Server Components 和 Edge Rendering。
        <br />
        <br />
        在團隊合作中，我注重有效的溝通和協調，能夠迅速理解並回應團隊成員的需求和意見。曾多次協助團隊成員解決技術難題，促進項目順利進行。
        <br />
        <br />
        我喜歡寫程式，享受解決問題的過程。通過不斷的學習和實踐，我不僅提升了技術能力，還培養了迎接挑戰和解決問題的毅力。我樂於分享知識，與團隊成員共同成長，共同創造優秀的作品。
        <br />
        <br />
        歡迎透過 email 聯絡我，一起探討技術和開發的美妙世界。Happy Coding！
      </p>
    </div>
  );
}
