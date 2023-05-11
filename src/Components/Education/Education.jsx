import React from "react";
import "./education.scss";
import { AppWrap } from "../../Wrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { education } from "../../constants";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "12px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="flex education__icon ">
        <img
          src={education.icon}
          alt={education.company_name}
          className="education__img "
        />
      </div>
    }
  >
    <div>
      <h3 className="education__title ">{education.title}</h3>
      <p className="education__company " style={{ margin: 0 }}>
        {education.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <section>
      <div className="education__container container ">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle flex">My personel journey</span>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default AppWrap(Education, "Education");
