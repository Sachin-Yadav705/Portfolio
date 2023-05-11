import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/sachin-kumar-1638b9231/"
      target="_blank"
    >
      <div>
        <FaLinkedinIn />
      </div>
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=100008202634851"
      target="_blank"
    >
      <div>
        <FaFacebookF />
      </div>
    </a>

    <a href="https://www.instagram.com/sachin_kumar1808/" target="_blank">
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
