import React from "react";

interface IProps {
  className?: string;
}
const Title: React.FC<IProps> = ({ className = "" }) => (
  <section className={`flex flex-col ${className}`}>
    <h1>Andrii Ponamarov</h1>
    <h2>Senior Software Engineer/Team Lead</h2>
  </section>
);

export default Title;
