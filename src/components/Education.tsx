import React from "react";
import { format } from "date-fns";

const item = {
  startDate: "2003-08-01",
  endDate: "2008-06-01",
  title: "Master Degree",
  specialist: "Radio Physics and Electronics",
  name: "Dnipro National University",
  location: "Ukraine",
};

const Education = () => (
  <section className="my-4 flex flex-col break-inside-avoid-page">
    <h2 className="mb-4 border-t pt-3">Education</h2>
    <div className="">
      <p className="whitespace-nowrap">
        {format(new Date(item.startDate), "yyyy")}-
        {format(new Date(item.endDate), "yyyy")}
      </p>
    </div>

    <div>
      <p className="font-bold">{item.title}</p>
      <p>{item.specialist}</p>
      <p>
        {item.name} - {item.location}
      </p>
    </div>
  </section>
);

export default Education;
