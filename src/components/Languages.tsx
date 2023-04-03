import React from "react";
import SideList from "./SideList";

const languages = [
  {
    name: "English",
    description: "B2",
  },
  {
    name: "Ukrainian",
    description: "Native",
  },
  {
    name: "Luxembourgish",
    description: "A2",
  },
  {
    name: "French",
    description: "A2",
  },
];

const Languages = () => <SideList items={languages} title="Languages" />;

export default Languages;
