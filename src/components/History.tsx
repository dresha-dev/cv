import React from "react";
import { format, formatDistance } from "date-fns";

const items = [
  {
    startDate: "2022-01-07",
    title: "Senior Software Engineer",
    company: "Ankorstore",
    location: "Luxembourg",
    accomplishments: [
      "Develop and release internal tool for engineering growth framework",
      "Provide a great onboarding experience for a new joiners",
    ],
    technologies:
      "VueJs, Jest, Cypress, Laravel, GCP, Docker, Jira, Notion, Figma, NextJs, NextAuth, .ect",
  },
  {
    startDate: "2020-01-01",
    endDate: "2021-12-01",
    title: "Senior Software Engineer/Line Manager",
    company: "OAT",
    location: "Luxembourg",
    accomplishments: [
      "Features support for most valuable client",
      "Introducing high demanded features which increase the interest in product",
      "Increased the code coverage E2E testing by 50%",
      "Line manager for team of 6 people",
    ],
    technologies:
      "Svelte, Cypress, Jest, PHP, Symphony, GCP, Docker, K6, Git, Jira, Confluence",
  },
  {
    startDate: "2019-12-01",
    endDate: "2019-08-01",
    title: "Senior Software Developer",
    company: "Sport50/Clubee",
    location: "Luxembourg",
    accomplishments: [
      "Introduced a new website with personalized geolocation functions",
      "Upgrade existing payment system",
    ],
    technologies: "AWS, NodeJS, NextJS, ReactJS, Strapi",
  },
  {
    startDate: "2016-07-15",
    endDate: "2019-07-15",
    title: "Frontend Developer",
    company: "Docler",
    location: "Luxembourg",
    accomplishments: [
      "Introduced migration process from legacy code base to ES6",
      "Integrated ReactJS to the system",
      "Created and automatized generation documentation for internal framework",
      "Integrate GA and GO",
    ],
    technologies:
      "Ext.js, JQuery, ReactJS, Redux, RiotJS, PHP, Google Optimize, Git, Jira, Confluence",
  },
  {
    startDate: "2012-03-01",
    endDate: "2016-07-01",
    title: "Frontend Developer",
    company: "Maxymiser - Oracle",
    location: "Ukraine, Poland",
    accomplishments: [
      "Created internal API, which increased the speed and quality of development",
      "Created build system for tests development",
      "Got experience in fast problem solving and bug fixing",
      "Got experience in making flexible and adjustable code",
    ],
    technologies:
      "JavaScript, HTML, CSS, JQuery, Mootools, AngularJS, KnockoutJS, BackboneJS, Git",
  },
];

const List: React.FC<{ items: string[]; title: string }> = ({
  items,
  title,
}) => (
  <>
    <h4 className="my-1 text-neutral-700">{title}</h4>
    <ul className="text-neutral-500">
      {items.map((item, index) => (
        <li key={index} className="list-disc list-inside">
          {item}
        </li>
      ))}
    </ul>
  </>
);

const History = () => {
  return (
    <section className="my-4 flex flex-col break-inside-avoid-page">
      <h2 className="mb-4 border-b">Experience</h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-l-2 relative px-4 gap-8 pb-8
        flex
        after:w-3 after:h-3 after:absolute after:top-4 after:-left-2 after:content-[''] after:border-2 after:rounded-full after:bg-white
        "
        >
          <div className="flex flex-col text-sm pt-1">
            <span className="whitespace-nowrap">
              {item.endDate
                ? format(new Date(item.endDate), "LLL yyyy")
                : "Current"}
            </span>
            <span className="whitespace-nowrap">
              {format(new Date(item.startDate), "LLL yyyy")}
            </span>

            <span className="text-neutral-500 text-xs">
              {item.endDate
                ? formatDistance(
                    new Date(item.startDate),
                    new Date(item.endDate)
                  )
                : null}
            </span>
          </div>

          <div>
            <h3>
              {item.title}
              <br />
              {item.company} - {item.location}
            </h3>

            <List title="Major Accomplishments:" items={item.accomplishments} />
            <h4 className="my-1">Technologies/Tools:</h4>
            <p className="text-neutral-500 text-sm">{item.technologies}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default History;
