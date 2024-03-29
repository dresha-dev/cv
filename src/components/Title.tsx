import React from "react";
import PrintButton from "./PrintButton";

interface IProps {
  className?: string;
}
const Title: React.FC<IProps> = ({ className = "" }) => (
  <>
    <section className={`flex flex-col relative ${className} print:hidden`}>
      <PrintButton />
      <h1>Andrii Ponamarov</h1>
      <h2>Senior Software Engineer</h2>
    </section>
  </>
);

export default Title;
