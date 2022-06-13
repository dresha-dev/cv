import * as React from "react";
import "../css/index.css";
import Profile from "../components/Profile";
import Title from "../components/Title";
import History from "../components/History";
import Skills from "../components/Skills";
import Languages from "../components/Languages";

const IndexPage = () => (
  <main className="flex justify-center my-4">
    <div className="w-80">
      <Profile />
      <Skills />
      <Languages />
    </div>
    <div className="px-4">
      <Title />
      <History />
    </div>
  </main>
);

export default IndexPage;
