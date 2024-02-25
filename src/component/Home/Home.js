import React from "react";
import "./Home.css";
import Me from "../../assest/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";

import ScrollDown from './ScrollDown';
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} className="home__img" alt=""/>
        <h1 className="home__name">Johnson Abiola</h1>
        <span className="home__education">I am a front-End devloper</span>
        <HeaderSocials/>
          <a href="#contact" className="btn">Hire ME</a> 

        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  );
};

export default Home;
