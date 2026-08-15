import React from "react";
import SideList from "./SideList";

const projects = [
  {
    name: "Prolabb",
    url: "https://admin.thefetchapp.com/",
    description:
      "League operator platform built end-to-end through a full agentic AI workflow — sub-agents write code, review changes, and author tests to deliver a production-ready product",
  },
  {
    name: "AI Productivity Platform",
    description:
      "Personal tool combining AI voice-to-text, object detection & classification, and vector search - powered by modern ML models",
  },
  {
    name: "Web3 Donation Platform",
    description:
      "Contributed to building a decentralised donation platform using Web3 technologies and smart contracts",
  },
  {
    name: "Bluetooth-Connected UI",
    description:
      "Browser-based UI with real-time integration with hardware devices via the Web Bluetooth API",
  },
];

const SideProjects = () => <SideList items={projects} title="Beyond Work" />;

export default SideProjects;
