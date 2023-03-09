import React from "react";
import SideList from "./SideList";

const skills = [
  {
    name: "Frontend",
    description:
      "ReactJs, Svelte, Vue, AngularJs, Cypress, Jest, Webpack, Vite, Rollup, Grunt, Prettier, MaterialUI, Bootstrap, Tailwind, .ect",
  },
  {
    name: "Backend",
    description:
      "Node.js, NestJS, Express, Koa, GraphQL, PHP, Symfony, Laravel, PostgreSQL, Redis, MongoDB, Firestore, TypeORM, RabbitMQ, Grafana .ect",
  },
  {
    name: "DevOps",
    description: "Docker, K8s, AWS, GCP, CI/CD, .ect",
  },
  {
    name: "Additional",
    description: "Git, Jira, Confluence, Slack, Figma, Blender, GA .ect",
  },
];

const Skills = () => <SideList items={skills} title="Skills" />;

export default Skills;
