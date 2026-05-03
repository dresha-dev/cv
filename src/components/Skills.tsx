import React from "react";
import SideList from "./SideList";

const skills = [
  {
    name: "Frontend",
    description: "ReactJs, Svelte, Vue, Tailwind, Cypress, Jest, .etc",
  },
  {
    name: "Backend",
    description:
      "NestJS, NextJS, GraphQL, PostgreSQL, Redis, MongoDB, Firestore, TypeORM, RabbitMQ .etc",
  },
  {
    name: "DevOps",
    description: "Docker, GCP, CI/CD, .etc",
  },
  {
    name: "Additional",
    description:
      "Git, Jira, Confluence, Slack, Figma, Blender, Notion, GA .etc",
  },
];

const Skills = () => <SideList items={skills} title="Skills" />;

export default Skills;
