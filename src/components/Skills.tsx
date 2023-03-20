import React from "react";
import SideList from "./SideList";

const skills = [
  {
    name: "Frontend",
    description:
      "ReactJs, Svelte, Vue, AngularJs, Cypress, Jest, Webpack, Vite, Rollup, Grunt, Prettier, MaterialUI, Bootstrap, Tailwind, Typescript, ESLint, Babel, JQuery, AngularJS, ExtJS, Backbone, Redux, RxJS, Lodash, Underscore, Chart.js, Three.js, D3.js, Moment.js, date-fns, Phaser, Pixi, Babylon.js, Raphaël, Formik, MathJax, TensorFlow, web3.js, Ethers.js, ipfs, socket.io,  .ect",
  },
  {
    name: "Backend",
    description:
      "Node.js, NestJS, NextJS, Express, Koa, GraphQL, PHP, Symfony, Laravel, PostgreSQL, Redis, MongoDB, Firestore, TypeORM, RabbitMQ, Grafana .ect",
  },
  {
    name: "DevOps",
    description: "Docker, K8s, AWS, GCP, CI/CD, .ect",
  },
  {
    name: "Mobile",
    description: "React Native, Expo, Flutter",
  },
  {
    name: "Additional",
    description:
      "Git, Jira, Confluence, Slack, Figma, Blender, Notion, GA .ect",
  },
  {
    name: "Familiar with",
    description:
      "Solidity, Python, PHP, Dart, shellscript, C++, GO, Rust, Java, .ect",
  },
];

const Skills = () => <SideList items={skills} title="Skills" />;

export default Skills;
