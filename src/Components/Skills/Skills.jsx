import React from "react";
import "./skills.scss";
import { AppWrap } from "../../Wrapper";
import { technologies } from "../../constants";
import BallCanvas from "./Ball";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__container container grid ">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__area ">
          <div className="skills__ball flex">
            {technologies.map((technology) => (
              <div className="skills__size" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Skills, "Skills");
