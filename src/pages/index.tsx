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
    <div className="md:w-1/3 md:float-left print:float-left print:w-1/4">
      <Profile />
    </div>

    <Title className="pl-4 inline-block md:w-2/3 print:w-3/4 items-center md:items-start" />

    <div className="md:float-left print:float-left md:w-1/3 print:w-1/3 clear-left px-4 mt-2">
      <Skills />
      <Languages />
      <Education />
    </div>
    <div className="pl-4 inline-block md:w-2/3 print:w-2/3">
      <Summary />
      <History />
    </div>
  </main>
);

export default IndexPage;
