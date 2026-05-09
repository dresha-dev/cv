import React from "react";
import PrintButton from "./PrintButton";

interface IProps {
  className?: string;
}
const Title: React.FC<IProps> = ({ className = "" }) => (
  <section className={`flex flex-col relative ${className} float-left`}>
    <PrintButton />
    <h1>Andrii Ponamarov</h1>
    <h2>Tech Lead · Principal Engineer</h2>
  </section>
);

export default Title;
