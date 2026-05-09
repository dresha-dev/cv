import React from "react";
import SideList from "./SideList";

const projects = [
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
