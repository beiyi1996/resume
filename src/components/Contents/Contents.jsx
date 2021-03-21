import React, { useState } from 'react'
import clsx from 'clsx'
import essences from '../../images/essences.jpeg'
import liontravel from '../../images/liontravel.png'
import pyramius from '../../images/pyramius.jpeg'
import dataStartupterrace from '../../images/data_startupterrace.png'
import liontravelActivity from '../../images/liontravel_activity.jpg'
import bookingSystem from '../../images/bookig_system.jpg'
import botDesigner from '../../images/bot_designer.jpg'
import linebot from '../../images/linebot.png'
import './contents.scss'

const workexperiences = [
  {
    period: 'Mar 2020 - Mar 2021',
    imgsrc: essences,
    position: '前端工程師',
    companyName: '易勝資訊股份有限公司',
    duty: [
      '負責網站需求分析',
      '程式設計與撰寫',
      '規劃執行前端架構及模組之設計',
      '進行網頁之測試與修改',
      '設計頁面及製作 prototype',
      '研究使用者體驗',
      '與後端討論 API 規格及串接',
      '文件撰寫',
    ],
  },
  {
    period: 'Sep 2018 - Mar 2020',
    imgsrc: liontravel,
    position: '前端工程師',
    companyName: '雄獅資訊股份有限公司',
    duty: ['負責票券館別搜尋面板維護與優化', '與後端和 PM 討論需求內容及實作細節', '支援 F2E 共通組'],
  },
  {
    period: 'Jun 2018 - Aug 2018',
    imgsrc: pyramius,
    position: '前端工程師（實習生）',
    companyName: '沛米科技股份有限公司',
    duty: ['負責對話流程UI刻板', '操作互動行為'],
  },
]

const projects = [
  {
    imgsrc: dataStartupterrace,
    title: '林口數據平台',
    href: 'https://data.startupterrace.tw/?page=1',
  },
  {
    imgsrc: liontravelActivity,
    title: '雄獅旅遊網 - 票券當地遊',
    href: 'https://activity.liontravel.com/category/zh-tw/index',
  },
  {
    imgsrc: bookingSystem,
    title: '餐廳訂位系統',
    href: 'https://bookingsystemclient.herokuapp.com/',
  },
  {
    imgsrc: botDesigner,
    title: 'Bot Designer',
    href: 'https://youtu.be/ktGWSHyvY5c',
  },
  {
    imgsrc: linebot,
    title: 'Line Bot 客服機器人 @smm1422h',
    href: '/#',
  },
]

export default function Contents() {
  const [selectedSkills, setSelectedSkills] = useState('frontend')

  return (
    <section className="contents">
      <p className="aboutme">
        喜歡使用官方文件搭配網路文章的方法，不斷進行嘗試直到將問題解決。
        <br />
        這將使我擁有無比的成就感，同時將新吸收的知識與身邊的人分享。
      </p>
      <div className="skills">
        <p className="title">Skills</p>
        <div className="tabPanels">
          <div className="tabs">
            <ul>
              <li
                className={clsx('tab', { focus: selectedSkills === 'frontend' })}
                onClick={() => setSelectedSkills('frontend')}
              >
                Front-end
              </li>
              <li
                className={clsx('tab', { focus: selectedSkills === 'devTools' })}
                onClick={() => setSelectedSkills('devTools')}
              >
                Dev Tools
              </li>
              <li
                className={clsx('tab', { focus: selectedSkills === 'uiux' })}
                onClick={() => setSelectedSkills('uiux')}
              >
                UI / UX
              </li>
              <li
                className={clsx('tab', { focus: selectedSkills === 'backend' })}
                onClick={() => setSelectedSkills('backend')}
              >
                Back-end
              </li>
            </ul>
          </div>
          <div className="panels">
            {selectedSkills === 'frontend' && (
              <>
                <p>- BASIC :</p>
                <span>HTML5, CSS, JavaScript, RWD</span>
                <p>- JS FRAMEWORK :</p>
                <span>React, Redux, Vue, jQuery</span>
                <p>- CSS FRAMEWORK :</p>
                <span>Sass, Material-UI, Bootstrap, JSS</span>
              </>
            )}
            {selectedSkills === 'devTools' && (
              <>
                <p>Npm</p>
                <p>Webpack</p>
                <p>Eslint</p>
                <p>git</p>
                <p>Storybook</p>
              </>
            )}
            {selectedSkills === 'uiux' && (
              <>
                <p>Adobe XD</p>
                <p>Zeplin</p>
                <p>Figma</p>
              </>
            )}
            {selectedSkills === 'backend' && (
              <>
                <p>Nodejs</p>
                <p>MongoDB</p>
              </>
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
            <a className="item" href={project.href} title={project.title} key={idx}>
              <span className="projectName">{project.title}</span>
              <img src={project.imgsrc} alt={project.title} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Contents }
