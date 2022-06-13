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
  <div className="border-t-2 border-gray-200 border-st pt-3">
    <h2 className="text-xl font-bold">{title}</h2>
    {items.map((item) => (
      <div key={item.name} className="mt-2">
        <h3 className="font-bold text-xl">{item.name}</h3>
        <p className="text-sm text-neutral-500 py-1">{item.description}</p>
      </div>
    ))}
  </div>
);

export default SideList;
