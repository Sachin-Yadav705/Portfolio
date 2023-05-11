import React from "react";
import { Frontend, Backend } from "../../assets";

import Web from "../../assets/web.png";

const Info = () => {
  return (
    <div className="about__info grid ">
      <div className="about__box">
        <div className="about__inner flex">
          <div className="about__icon">
            <img src={Frontend} alt="frontend" />
          </div>
          <h3 className="about__title">Frontend Developer</h3>
        </div>
      </div>

      <div className="about__box">
        <div className="about__inner flex">
          <div className="about__icon">
            <img src={Backend} alt="backend" />
          </div>
          <h3 className="about__title">Backend Developer</h3>
        </div>
      </div>

      <div className="about__box">
        <div className="about__inner flex">
          <div className="about__icon">
            <img src={Web} alt="web" />
          </div>
          <h3 className="about__title">
            UI/UX
            <br /> Developer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
