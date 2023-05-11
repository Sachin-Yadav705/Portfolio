import React from "react";
import "./about.scss";
import AboutImg from "../../assets/about1.jpg";
import Info from "./Info";
import CV from "../../assets/CV_SACHIN.pdf";
import { AppWrap } from "../../Wrapper";
import { HiOutlineDownload } from "react-icons/hi";

const About = () => {
  return (
    <section>
      <div className="about__container container">
        <h2 className="about__subhead">
          I Know that <span>Good Design</span> <br />
          means <span>Good Business</span>
        </h2>

        <div className="about__data grid">
          <img src={AboutImg} alt="AboutImage" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description">
              I am Full Stack Web Developer who is passionate about user
              friendly applications. Something that I love about programming is
              the opportunity to work different people and departments, as a
              programmer
            </p>
            <div className="flex">
              <a download="" href={CV} className="button ">
                Download CV
                <HiOutlineDownload className="download__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(About, "About");
