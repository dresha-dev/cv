import React from "react";
import SideList from "./SideList";

const skills = [
  {
    name: "Frontend",
    description:
      "ReactJS · NextJS · Svelte · VueJS · Angular · TypeScript · JavaScript ES6+ · Redux · Zustand · TanStack (Query · Start · Forms) · Tailwind CSS · MUI · Storybook · Three.js · Remix · Gatsby · ExtJS ",
  },
  { name: "Build & Tooling", description: "Vite · Turborepo · Nx · Webpack" },
  {
    name: "Testing & Quality",
    description: "Cypress · Jest · Axe · TDD · E2E Testing",
  },
  {
    name: "Backend",
    description:
      "Node.js · NestJS · GraphQL · PostgreSQL · Redis · MongoDB · Firestore · TypeORM · RabbitMQ · PHP · Laravel",
  },
  {
    name: "AI & Emerging",
    description:
      "GitHub Copilot · Claude AI · RAG Architecture · Web3 · Web Bluetooth API · Vector Search · Object Detection",
  },
  {
    name: "Analytics",
    description: "Google Analytics GA4",
  },
  {
    name: "DevOps",
    description:
      "Docker · Kubernetes · GCP · AWS · CI/CD · Jenkins · Rancher · Argo CD",
  },
  {
    name: "Practices",
    description:
      "Agile · Scrum · RFC Authoring · Technical Roadmap · Cross-functional Leadership · Mentoring · Accessibility A11y · SEO",
  },
];

const Skills = () => <SideList items={skills} title="Skills" />;

export default Skills;
