import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  next,
  firebase,
  WhatsApp,
  ChatGpt,
  Zomato,
  meta,
} from "../assets";

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "next",
    icon: next,
  },
];

export const projects = [
  {
    name: "ChatGPT Clone",
    description:
      "This is a web-based platform that provides users with the ability to chat with OpenAI. Users can input prompts and OpenAI will respond with answers. The platform offers an interactive experience that allows users to engage with the AI and receive informative and insightful responses.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ChatGpt,
    source_code_link: "https://github.com/Sachin-Yadav705/chatGPT_clone",
    website_link: "https://chatgpt-clone-blue.vercel.app",
  },
  {
    name: "Whatsapp 2.0",
    description:
      "This is a real-time chat application that allows users to communicate securely and privately. Users can sign in and out with their Google accounts to start messaging each other one-on-one. The authentication process ensures that only authorized users can access the chat feature.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: WhatsApp,
    source_code_link: "https://github.com/Sachin-Yadav705/WhatsApp-V2",
    website_link: "https://whats-app-v2-eight.vercel.app/",
  },
  {
    name: "Zomato clone",
    description:
      " web-based food ordering application that enables users to browse a selection of restaurants and place food orders. The application offers an online payment facility that is easily and securely. With this application, users can conveniently order food  without leaving their homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: Zomato,
    source_code_link: "https://github.com/Sachin-Yadav705/Zomato-2.0",
    website_link: "https://zomato-2-0.vercel.app/",
  },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    company_name: "Indira Gandhi National Open University",
    icon: meta,
    iconBg: "#383E56",
    date: "2021 - Present",
  },
  {
    title: "Bachelors of Computer Applications (BCA)",
    company_name: "Indira Gandhi National Open University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2017 - 2020",
  },
  {
    title: "Intermediate Standard (Science)",
    company_name: " Raghubir Singh Modern Sr. Sec School, New Delhi",
    icon: meta,
    iconBg: "#383E56",
    date: "2015 - 2016",
  },
  {
    title: "Matriculation Standard",
    company_name: "Govt CO-ED SEC School F Block, Vikas Puri, New Delhi",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2014 - 2015",
  },
];
