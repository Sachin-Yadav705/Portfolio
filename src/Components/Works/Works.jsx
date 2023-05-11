import React from "react";
import "./works.scss";
import { projects } from "../../constants";
import { AppWrap } from "../../Wrapper";
import { github, link } from "../../assets";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <>
      <div className="single__card">
        <div className="work__img">
          <img src={image} alt={name} className="work__img" />
          <div className="work__link">
            <div
              className="link__click flex"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="github" className="github__linkS" />
            </div>
            <div
              className="link__click flex"
              onClick={() => window.open(website_link, "_blank")}
            >
              <img src={link} alt="github" className="github__linkS" />
            </div>
          </div>
        </div>

        <div className="details">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="tags">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Works = () => {
  return (
    <section>
      <div className="work__container container">
        <p className="work__head">My work</p>
        {/* <h2 className="work__subhead">Projects</h2> */}
        <div className="w_full">
          <p className="work__description">
            Following projects showcase my skills and experience through
            real-world example of my work. Each projects is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div className="work__card flex">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Works, "Works");
