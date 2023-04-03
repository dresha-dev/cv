import React from "react";
import PrintIcon from "./PrintIcon";
import ClickHere from "./ClickHere";

const Button = () => (
  <button
    title="Save as PDF or Print"
    className="ml-2 w-12 px-2 py-2 shadow rounded print:hidden md:absolute right-0 top-0"
    onClick={() => {
      window.print();
    }}
  >
    <PrintIcon />
    <span className="scale-x-[-1] absolute top-full right-4 w-[100px] p-2 invisible print:hidden md:visible">
      <ClickHere />
    </span>
  </button>
);

export default Button;
