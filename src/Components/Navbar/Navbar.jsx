import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar flex">
        <div className="app__navbar-logo">
          <span className="logo">
            <a href="/">
              {/* <img src={Logo} alt="Logo" /> */}
              SACHIN KUMAR
            </a>
          </span>
        </div>

        <ul className="app__navbar-links flex">
          {["Home", "About", "Skills", "Works", "Education", "Contact"].map(
            (item) => (
              <li className="flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Works",
                  "Education",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
