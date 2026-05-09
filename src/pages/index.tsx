import * as React from "react";
import "../css/index.css";
import Profile from "../components/Profile";
import Title from "../components/Title";
import History from "../components/History";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Education from "../components/Education";
import { Helmet } from "react-helmet";
import Summary from "../components/Summary";
import Cat from "../components/Cat";
import Certifications from "../components/Certifications";
import SideProjects from "../components/SideProjects";

const IndexPage = () => (
  <main className="max-w-screen-lg mx-auto min-w-min print:overflow-visible p-4 print:m-0 print:p-0">
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta charSet="utf-8" />
      <title>Andrii Ponamarov - Senior Software Engineer</title>
      <meta
        name="description"
        content="CV, Senior Software Engineer, Andrii Ponamarov"
      ></meta>
    </Helmet>
    <header>
      <div className="md:w-1/3 md:float-left print:w-1/3 print:float-left">
        <Profile />
      </div>

      <div className="flex flex-col">
        <Title />
        <Summary />
      </div>
    </header>
    <div className="">
      <div
        className="w-1/3 float-left clear-left px-4"
        aria-label="Skills, Certifications, Languages, Education, and Side Projects"
      >
        <Skills />
        <Certifications />
        <Languages />
        <Education />
        <SideProjects />
        <Cat />
      </div>
      <div className="w-2/3 float-left" aria-label="Work Experience">
        <History />
      </div>
    </div>
  </main>
);

export default IndexPage;
