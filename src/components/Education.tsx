import React from "react";
import { format } from "date-fns";

const items = [
  {
    startDate: "2003-08-01",
    endDate: "2008-06-01",
    title: "Master Degree",
    name: "Oles Honchar Dnipro National University",
    location: "Ukraine",
  },
];

const Education = () => (
  <section className="my-4 flex flex-col break-inside-avoid-page">
    <h2 className="mb-4 border-b">Education</h2>
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
        </div>

        <div>
          <h3>{item.title}</h3>
          <h3>
            {item.name} - {item.location}
          </h3>
        </div>
      </div>
    ))}
  </section>
);

export default Education;
