import React from "react";
import { format, formatDistance } from "date-fns";

const items = [
  {
    startDate: "2023-01-05",
    title: "Frontend Tech Lead / Software Engineer",
    company: "Staizen",
    location: "Luxembourg/Remote",
    accomplishments: [
      {
        title:
          "Fund Operating System - FinTech SaaS (institutional alternatives industry)",
        items: [
          "Designed and owned the full technical roadmap for migrating a large-scale legacy ExtJS application to React, coordinating a cross-functional team of 8 engineers (frontend + backend)",
          "Established high coding standards and codebase structure across both legacy and new systems, and built the team's deep understanding of ExtJS internals - enabling engineers to confidently investigate, extend, and deliver complex client-requested features throughout the migration",
          "Implemented a feature-flag strategy enabling incremental, zero-disruption rollout - allowing parallel operation of legacy and modernized systems",
          "Balanced migration delivery alongside continuous feature development and live defect resolution in a fast-paced environment",
          "Participated in the hiring process by interviewing engineering candidates",
        ],
      },
      {
        title:
          "Internal People & Resource Management Platform - AI-Powered MVP",
        items: [
          "Architected a proof-of-concept AI assistant using a RAG (Retrieval-Augmented Generation) pipeline, enabling natural language querying of a live GraphQL API for people and resource assignment management",
        ],
      },
      {
        title:
          "B2B E-commerce re-platform (Multi-million euro project for a global enterprise client operating across 25+ countries)",
        items: [
          "Delivered performance and scalability solutions within a cross-functional squad for a high-traffic enterprise B2B platform",
          "Architected and implemented a Redis caching layer that dramatically reduced application response times",
          "Led CMS (Contentful) integration: designed content models, established deployment pipeline from development to production",
          "Built a next-generation internationalization (i18n) solution on top of CMS for multi-market rollout",
          "Owned SEO strategy and technical implementation, achieving a perfect Lighthouse SEO score of 100 and full Google indexing compliance",
          "Delivered accessibility (A11y) improvements across the platform, achieving a score of 94",
          "Developed a code generation tool that accelerated team development velocity in accordance with high developer-set standards",
          "Integrated third-party tools including GetSiteControl, YouTube, and others via CMS to enable dynamic content generation on landing pages",
          "Authored technical and non-technical documentation; onboarded new engineers to squad processes and standards",
          "Refined business requirements into actionable technical tasks; presented sprint delivery demos to company stakeholders",
        ],
      },
    ],
    technologies:
      "NextJS 13-16, Redis, Rancher, Argo, Contentful, Jenkins, ExtJs, React, MUI, Redux, Docker, Jira, Confluence, Miro, ai-sdk, Drizzle, OpenAI, TurboRepo",
  },
  {
    startDate: "2022-01-07",
    endDate: "2023-01-05",
    title: "Senior Software Engineer/Tech Lead",
    company: "Ankorstore",
    location: "Luxembourg/Remote",
    accomplishments: [
      {
        title:
          "B2B marketplace connecting independent brands with retailers across Europe",
        items: [
          "Translated business requirements into detailed technical specifications, decomposed into epics and tickets, managed end-to-end delivery - 90% of initiatives delivering significant business value, 20% shipped ahead of schedule",
          "Redesigned the checkout flow, reducing page load time by 2 seconds and directly improving conversion",
          "Designed and shipped an internal engineering growth framework tool adopted across the engineering organization",
          "Authored RFCs for performance optimizations and new feature development",
          "Played a key role in incident response, production issue triage and resolution",
          "Onboarded new engineers and introduced new technologies and engineering best practices to the team",
        ],
      },
    ],
    technologies:
      "VueJs, Jest, Cypress, Laravel, GCP, Algolia, RabbitMQ, Grafana, Docker, Jira, Notion, Figma, NextJs, NextAuth, .etc",
  },
  {
    startDate: "2020-01-01",
    endDate: "2021-12-01",
    title: "Senior Software Engineer/Line Manager/Team Lead",
    company: "OAT",
    location: "Luxembourg/Remote",
    accomplishments: [
      {
        title:
          "Open Assessment Technologies, leading open-source digital assessment platform",
        items: [
          "Line manager for a team of 6 engineers; accountable for roadmap planning, prioritization, and performance management",
          "Introduced 10+ high-demand product features that directly increased user engagement and product adoption",
          "Grew E2E test coverage by 50% and introduced TDD practices for resolving complex, hard-to-reproduce defects",
          "Architected and delivered a dynamic PDF report generation engine for assessment workflows, producing fully customized, data-driven reports - the platform's most strategically critical feature",
          "Managed delivery under strict time constraints and high standardization requirements",
        ],
      },
    ],
    technologies:
      "Svelte, Cypress, Jest, PHP, Symphony, Redis, GCP, Docker, K6, Git, Jira, Confluence",
  },
  {
    startDate: "2019-12-01",
    endDate: "2019-08-01",
    title: "Senior Software Developer",
    company: "Sport50/Clubee",
    location: "Luxembourg",
    accomplishments: [
      {
        title:
          "Digital management platform for sports clubs and federations across Europe",
        items: [
          "Launched a new website featuring personalized geolocation functionality, server-side rendering (SSR) for improved SEO, and multi-language support for European markets",
          "Upgraded and modernized the existing payment platform integration",
        ],
      },
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
      {
        title: "Global tech and entertainment group, live-streaming platform",
        items: [
          "Integrated React.js into the existing system, enabling component-based UI development at scale",
          "Built and automated documentation generation for an internal framework, reducing onboarding time to understand the overall architecture",
          "Integrated Google Analytics and Google Optimize, enabling data-driven UX decision making",
        ],
      },
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
      {
        title:
          "Web optimization and A/B testing platform serving Fortune 500 companies across Gaming, Travel, E-commerce, and Media sectors",
        items: [
          "Developed an internal API that measurably improved development speed and output quality across the team",
          "Implemented A/B testing variants and required event tracking across client platforms, enabling data-driven optimization for enterprise clients",
          "Delivered robust, flexible, and maintainable JavaScript across multiple high-accountability client engagements in diverse industry verticals",
        ],
      },
    ],
    technologies:
      "JavaScript, HTML, CSS, JQuery, Mootools, AngularJS, KnockoutJS, BackboneJS, Git",
  },
];

type Project = {
  items: string[];
  title: string;
};

const List: React.FC<Project> = ({ items, title }) => (
  <section className="my-2">
    <p className="mb-4 text-neutral-700 italic">{title}</p>
    <ul className="text-neutral-500 mb-4">
      {items.map((item, index) => (
        <li key={index} className="list-disc list-inside">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

const History = () => {
  return (
    <section className="pt-3 flex flex-col">
      <h2 className="mb-4 print:mb-2 border-b">Experience</h2>
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
                    new Date(item.endDate),
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
            {item.accomplishments.map((project: Project) => (
              <List
                key={project.title}
                title={project.title}
                items={project.items}
              />
            ))}

            <h4 className="my-1">Technologies/Tools:</h4>
            <p className="text-neutral-500 text-sm">{item.technologies}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default History;
