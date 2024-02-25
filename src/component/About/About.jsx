import React from 'react'

import "./About.css"
import Image from "../../assest/avatar-2.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am lord pretty, web developer from lagos, Nigeria. I have rich experience in web site design and building and customization, also I am good at WordPress.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skill grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Development </h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skill__bar">
                <span className="skill__percentage development"> </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> UI/UX design</h3>
                <span className="skills__number">10%</span>
              </div>
              <div className="skill__bar">
                <span className="skill__percentage ui__design"> </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skill__bar">
                <span className="skill__percentage photography"> </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">NODE JS</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skill__bar">
                <span className="skill__percentage node"> </span>
              </div>
            </div>


          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
    
  )
}

export default About