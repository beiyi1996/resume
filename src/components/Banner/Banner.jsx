import React from 'react'
import github from '../../images/github.svg'
import githubHover from '../../images/github-logo.svg'
import Winni from '../../images/Winni.png'
import './banner.scss'

export default function Banner() {
  return (
    <section className="banner">
      <div className="info">
        <h1>黃汶鈞 Winni Huang</h1>
        <h3>前端工程師</h3>
        <div className="linkDiv">
          <a href="https://github.com/beiyi1996" className="icon">
            <img src={github} alt="github" />
            <img src={githubHover} alt="github-brown" />
          </a>
          <a href="mailto:usj0326@gmail.com">usj0326@gmail.com</a>
          <a href="tel:0955822647">0955822647</a>
        </div>
      </div>
      <div className="image">
        <img src={Winni} alt="Winni Huang" />
      </div>
    </section>
  )
}

export { Banner }
