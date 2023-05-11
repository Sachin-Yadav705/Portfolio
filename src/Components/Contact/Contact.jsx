import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./Earth";
import { AppWrap } from "../../Wrapper";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_2ext3sb",
      "template_hsnkzmd",
      formRef.current,
      "jH37c7znZ-k6U3x4U"
    );
    e.target.reset();
  };

  const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <section>
      <div className="contact__container  container">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="contact "
        >
          <p className="contact__heading">Get in touch</p>
          <h3 className="contact__subheading">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" contact__form "
          >
            <label>
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="what's your name?"
                className="contact__input bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label>
              <span>Your Email</span>
              <input
                type="text"
                name="email"
                placeholder="what's your email?"
                className="contact__input bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label>
              <span>Your Message</span>
              <textarea
                rows="7"
                type="text"
                name="message"
                placeholder="what do you want to say?"
                className="contact__input bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              Send
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="earth__canvas"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(Contact, "Contact");
