import React, { useState } from 'react'
import clsx from 'clsx'
import essences from '../../images/essences.jpeg'
import liontravel from '../../images/liontravel.png'
import pyramius from '../../images/pyramius.jpeg'
import dataStartupterrace from '../../images/data_startupterrace.png'
import liontravelActivity from '../../images/liontravel_activity.jpg'
import bookingSystem from '../../images/bookig_system.png'
import botDesigner from '../../images/bot_designer.jpg'
import linebot from '../../images/linebot.png'
import './contents.scss'

const skillTabs = ['Front-end', 'Dev Tools', 'UI / UX', 'Back-end']

const skills = [
  {
    category: 'Front-end',
    panel: [
      {
        key: 'BASIC',
        value: ['HTML5, CSS, JavaScript, RWD'],
      },
      {
        key: 'JS FRAMEWORK',
        value: ['ReactJS, Redux, VueJS, jQuery'],
      },
      {
        key: 'CSS FRAMEWORK',
        value: ['Sass, Material-UI, Bootstrap, JSS'],
      },
    ],
  },
  {
    category: 'Dev Tools',
    panel: [
      {
        key: 'Npm',
        value: [],
      },
      {
        key: 'Webpack',
        value: [],
      },
      {
        key: 'Eslint',
        value: [],
      },
      {
        key: 'git',
        value: [],
      },
      {
        key: 'Storybook',
        value: [],
      },
    ],
  },
  {
    category: 'UI / UX',
    panel: [
      {
        key: 'Adobe',
        value: [],
      },
      {
        key: 'Zeplin',
        value: [],
      },
      {
        key: 'Figma',
        value: [],
      },
    ],
  },
  {
    category: 'Back-end',
    panel: [
      {
        key: 'Nodejs',
        value: [],
      },
      {
        key: 'MongoDB',
        value: [],
      },
    ],
  },
]

const workexperiences = [
  {
    period: 'Mar 2020 - Mar 2021',
    imgsrc: essences,
    position: '前端工程師',
    companyName: '易勝資訊',
    description: '委外事業處, 駐點於 資訊工業策進會',
    duty: [
      '負責網站需求分析',
      '程式設計與撰寫',
      '規劃執行前端架構及模組之設計',
      '進行網頁之測試與修改',
      '設計頁面及製作 prototype',
      '優化使用者體驗',
      '與後端討論 API 規格及串接',
      '文件撰寫',
    ],
  },
  {
    period: 'Sep 2018 - Mar 2020',
    imgsrc: liontravel,
    position: '前端工程師',
    companyName: '雄獅資訊',
    description: '',
    duty: ['負責票券館別搜尋面板維護與優化', '與後端和 PM 討論需求內容及實作細節', '支援 雄獅旅遊網首頁模組維護'],
  },
  {
    period: 'Jun 2018 - Aug 2018',
    imgsrc: pyramius,
    position: '前端工程師（實習生）',
    companyName: '沛米科技',
    description: '',
    duty: ['負責對話流程UI刻板', '操作互動行為'],
  },
]

const projects = [
  {
    imgsrc: dataStartupterrace,
    title: '林口數據平台',
    href: 'https://data.startupterrace.tw/?page=1',
    tags: ['ReactJS', 'React-router', 'Material-UI', 'Gitlab', 'NGINX', 'Adobe XD', 'Zeplin'],
  },
  {
    imgsrc: liontravelActivity,
    title: '雄獅旅遊網 - 票券當地遊',
    href: 'https://activity.liontravel.com/category/zh-tw/index',
    tags: ['jQuery', 'EJS', 'ReactJS', 'Webpack'],
  },
  {
    imgsrc: bookingSystem,
    title: '餐廳訂位系統',
    href: 'https://bookingsystemclient.herokuapp.com/',
    tags: ['ReactJS', 'React-router', 'Material-UI', 'Nodejs', 'express', 'MongoDB', 'heroku'],
  },
  {
    imgsrc: botDesigner,
    title: 'Bot Designer',
    href: 'https://youtu.be/ktGWSHyvY5c',
    tags: ['jQuery', 'Bootstrap', 'SASS', 'SweetAlert', 'Figma', 'VSTS'],
  },
  {
    imgsrc: linebot,
    title: 'Line Bot 客服機器人 @smm1422h',
    href: 'https://page.line.me/smm1422h',
    tags: ['C#', 'Language Understanding (LUIS)', 'Line developers'],
  },
]

export default function Contents() {
  const [selectedSkills, setSelectedSkills] = useState('Front-end')

  return (
    <section className="contents">
      <p className="aboutme">
        我畢業於中華大學餐旅管理學系,
        <br />
        在高中時有稍微接觸過程式語言 (Visual Basic 6.0), 那是我第一次接觸程式, 並萌生了對它的興趣 !
        <br />
        <br />
        大四下學期注意到 Build School 跨域黑客軟體開發培訓, 我決定參加課程, 將程式作為第二專長。
        <br />
        在培訓的尾聲, 我參加了企業專題製作, 與夥伴協同開發 Bot Designer 專案, 也順利找到了第一份工作。
        <br />
        <br />
        透過寫程式讓我發現, 自己對於未知的事物充滿好奇心與想像; 面對問題有努力不懈的精神 !
        <br />
        Happy Coding !
      </p>
      <div className="skills">
        <p className="title">Skills</p>
        <div className="tabPanels">
          <div className="tabs">
            <ul>
              {skillTabs.map((skilltab, idx) => (
                <li
                  key={idx}
                  className={clsx('tab', { focus: selectedSkills === skilltab })}
                  onClick={() => setSelectedSkills(skilltab)}
                >
                  {skilltab}
                </li>
              ))}
            </ul>
          </div>
          <div className="panels">
            {skills.map(
              (skillpanel, idx) =>
                selectedSkills === skillpanel.category && (
                  <div key={idx}>
                    {skillpanel.panel.map((panel, idx) => (
                      <div key={idx}>
                        <p>- {panel.key}</p>
                        {panel.value.length > 0 && <span>{panel.value}</span>}
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="experiences">
        <p className="title">Work Experience</p>
        {workexperiences.map((experience, idx) => (
          <div className="experienceItem" key={idx}>
            <div className="period">
              <p>{experience.period}</p>
            </div>
            <div className="logo">
              <img src={experience.imgsrc} alt={experience.companyName} />
            </div>
            <div className="duty">
              <h4 className="position">{experience.position}</h4>
              <span className="companyName">{experience.companyName}</span>
              {!!experience.description && <span className="description">{experience.description}</span>}
              <ol>
                {experience.duty.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="titleBackground">
        <div>
          <p className="title">Projects</p>
        </div>
      </div>
      <div className="projects">
        <div className="projectItems">
          {projects.map((project, idx) => (
            <div className="itemDiv" key={idx}>
              <a className="item" href={project.href} title={project.title} target="__blank">
                <span className="projectName">{project.title}</span>
                <img src={project.imgsrc} alt={project.title} />
              </a>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Contents }
