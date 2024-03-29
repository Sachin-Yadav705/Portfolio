import React from "react";
import { NavigationDots, SocialMedia } from "../Components/Navbar";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className="app__container">
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 SACHIN Kumar</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
