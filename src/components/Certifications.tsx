import React from "react";
import SideList from "./SideList";

const certificates = [
  {
    name: "Amazon Web Services (AWS)",
    description: "Certified Solutions Architect – Associate ",
  },
];

const Certifications = () => (
  <SideList items={certificates} title="Certifications" />
);

export default Certifications;
