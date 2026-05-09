import React from "react";

interface SideListItem {
  name: string;
  description: string;
}

interface IProps {
  title: string;
  items: SideListItem[];
}

const SideList: React.FC<IProps> = ({ items, title }) => (
  <section className="pt-3 border-gray-200 mb-3">
    <h2 className="border-b">{title}</h2>
    {items.map((item) => (
      <div key={item.name} className="mt-2">
        <h3 className="print:text-sm">{item.name}</h3>
        <p className="text-sm text-neutral-500 py-1">{item.description}</p>
      </div>
    ))}
  </section>
);

export default SideList;
