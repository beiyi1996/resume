import React from "react";
import { Title } from "./contents";

const workExperiences = [
  {
    period: "Sep 2021 - May 2024",
    position: "前端工程師",
    companyName: "KKday / rezio",
    description: "",
    duty: [
      {
        title: "重構訂閱方案功能邏輯",
        description:
          "使用 Jotai 儲存資料狀態，透過 i18next Trans 顯示各方案的服務內容，讓畫面與後端資料之間有簡易的防腐層，並加上 unit test 驗證功能的完整性",
      },
      {
        title: "開發媒體庫與圖片共用元件",
        description:
          "使用 TypeScript 開發圖片拖曳上傳與排序，並藉由 SRP 原則設計圖片元件中每個模組",
      },
      {
        title: "開發公告通知功能",
        description:
          "使用 Session Storage 儲存公告內容，搭配 Cookie 紀錄顯示狀態，以及客製化在各頁面的按鈕位置，同時提升使用者體驗及縮短系統與供應商同步緊急訊息的時間差",
      },
      {
        title: "開發預約行程上下架功能",
        description:
          "使用 react-hook-form 的 useFormContext 管理父與子層之間的資料狀態，將多筆預約資料暫存至 mobx 中，並統一發送 API 到後端。因應供應商管理「季節性商品、早鳥票、限時販售」等行程",
      },
    ],
    project: {
      title: "rezio｜專為旅遊業者打造的預訂系統",
      link: "https://rezio.io/zh-TW",
    },
  },
  {
    period: "Apr 2021 - Jun 2021",
    position: "前端工程師",
    companyName: "安譜人工智能音樂",
    description: "",
    duty: [
      {
        title: "2 個月完成重構音樂廣播平台",
        description:
          "使用 Adobe XD 製作 UI 改版的 prototype，並透過 Next.js 與 useReducer hook 搭配 MUI 重構 BGM 音樂廣播平台",
      },
    ],
    project: {
      title: "BGMRadio",
      link: "https://www.bgmradio.com/",
    },
  },
  {
    period: "Mar 2020 - Mar 2021",
    position: "前端工程師",
    companyName: "易勝資訊",
    description: "委外事業處, 駐點於 資訊工業策進會",
    duty: [
      {
        title: "從 0 到 1 製作林口數據平台",
        description:
          "研究線上的 opendata 網站與參考 Pinterest 設計畫面，從設計到開發獨立完成專案。",
      },
      {
        title: "通過無障礙網路空間 AA 等級評測",
        description:
          "無障礙網路空間 App 檢測達 AA 等級，打造一個全民溝通更便利的無障礙環境。",
      },
      {
        title: "林口新創園區-戰情室專案",
        description: "維護 Vue 搭配 Chart.js 製作的空氣品質與園區電力頁面",
      },
    ],
    project: {
      title: "startupterrace_prototype",
      link: "https://xd.adobe.com/view/676270f8-e519-467c-9e23-edff490f33fd-3231/?fullscreen&hints=off",
    },
  },
  {
    period: "Sep 2018 - Mar 2020",
    position: "前端工程師",
    companyName: "雄獅資訊",
    description: "",
    duty: [
      { title: "負責票券館別搜尋面板維護與優化", description: "" },
      { title: "與後端和 PM 討論需求內容及實作細節", description: "" },
      { title: "支援 雄獅旅遊網首頁模組維護", description: "" },
    ],
    project: {
      title: "票券當地遊",
      link: "https://activity.liontravel.com/category/zh-tw/index?fr=cg451mega",
    },
  },
  {
    period: "Jun 2018 - Aug 2018",
    position: "工程師（實習生）",
    companyName: "沛米科技",
    description: "",
    duty: [
      { title: "負責對話流程UI刻板", description: "" },
      { title: "操作互動行為", description: "" },
    ],
    project: { title: "Bot Designer", link: "https://youtu.be/ktGWSHyvY5c" },
  },
];

export default function Experience() {
  return (
    <div className="sm:border-r-none p-10 border-custom">
      <Title content="Work Experience" />
      {workExperiences.map(
        (
          { position, companyName, description, period, duty, project },
          index,
        ) => {
          return (
            <div key={index} className="border-b pb-4 pt-8 text-left">
              <div className="text-left font-bold">
                <p className="dark:text-orange-400">
                  {position}, {companyName}
                  {description ? `- ${description}` : ""}
                </p>
                <span className="text-gray-400">{period}</span>
              </div>
              <ul className="list-disc pl-4 pt-4">
                {duty.map(({ title, description }) => (
                  <li key={title} className="mb-2">
                    {title}
                    <p className="mt-1 text-gray-400 dark:text-stone-300">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 dark:text-stone-300">
                專案連結：
                <a href={project?.link} className="btn-custom">
                  {project?.title}
                </a>
              </p>
            </div>
          );
        },
      )}
    </div>
  );
}
