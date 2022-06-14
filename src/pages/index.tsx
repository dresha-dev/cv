import * as React from "react";
import "../css/index.css";
import Profile from "../components/Profile";
import Title from "../components/Title";
import History from "../components/History";
import Skills from "../components/Skills";
import Languages from "../components/Languages";

const IndexPage = () => (
  <main className="max-w-screen-lg mx-auto min-w-min print:overflow-visible">
    <div className="md:w-1/3 md:float-left print:float-left print:w-1/3">
      <Profile />
    </div>

    <Title className="pl-4 inline-block md:w-2/3 print:w-2/3 items-center md:items-start" />

    <div className="md:float-left print:float-left md:w-1/3 print:w-1/3 clear-left px-4 mt-2">
      <Skills />
      <hr className="border-b-2 border-gray-200 " />
      <Languages />
    </div>
    <div className="pl-4 inline-block md:w-2/3 print:w-2/3">
      <History />
    </div>
  </main>
);

export default IndexPage;
