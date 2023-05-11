import React from "react";
import "./hero.css";
import { AppWrap } from "../../Wrapper";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section>
      <div className="hero__container container grid" id="Home">
        <div className="hero__data flex">
          <div className="flex">
            <div className="canvas  ">
              <div className="canvas__dot" />
              <div className="canvas__line violet-gradient " />
            </div>
            <div className="data__align">
              <h1 className="hero_head">
                Hi, I'm <span className="hero_username">Sachin</span>
              </h1>
              <span className="hero_profession">
                ----
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full Stack Developer")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("UI/UX Developer")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("Freelancer")
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>

              <p className="hero_description">
                I'm creative designer, and I'm very passionate and dedicated to
                my work.
              </p>
              <a href="#Contact">
                <button type="button" className="btn">
                  <strong>Say Hello</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
              </a>
            </div>
          </div>

          <div className="profile__img"></div>
        </div>

        <a href="#About" style={{ display: "contents" }}>
          <div className="scrolldown">
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AppWrap(Hero, "Home");
