import React from "react";
import PrintIcon from "./PrintIcon";

const Button = () => (
  <button
    title="Save as PDF or Print"
    className="ml-2 w-12 px-2 py-2 shadow rounded print:hidden md:absolute right-0 top-0"
    onClick={window.print}
  >
    <PrintIcon />
  </button>
);

export default Button;
