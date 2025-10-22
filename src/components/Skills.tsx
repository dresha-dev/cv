import React from "react";
import SideList from "./SideList";

const skills = [
  {
    name: "Frontend",
    description: "ReactJs, Svelte, Vue, Tailwind, Cypress, Jest, .ect",
  },
  {
    name: "Backend",
    description:
      "NestJS, NextJS, GraphQL, PostgreSQL, Redis, MongoDB, Firestore, TypeORM, RabbitMQ .ect",
  },
  {
    name: "DevOps",
    description:
      "Docker, GCP, AWS, CI/CD, Jenkins, Rancher, Argo, Kubernetes, .ect",
  },
  {
    name: "Additional",
    description:
      "PHP, Rust, Go, Python, Git, Jira, Confluence, Slack, Figma, Blender, Notion, GA, C++ .ect",
  },
];

const Skills = () => <SideList items={skills} title="Skills" />;

export default Skills;
