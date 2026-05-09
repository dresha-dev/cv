import React from "react";
import SideList from "./SideList";

const languages = [
  {
    name: "English",
    description: "Professional working proficiency",
  },
  {
    name: "Ukrainian",
    description: "Native",
  },
  {
    name: "Luxembourgish",
    description: "Elementary proficiency",
  },
  {
    name: "French",
    description: "Elementary proficiency",
  },
];

const Languages = () => <SideList items={languages} title="Languages" />;

export default Languages;
