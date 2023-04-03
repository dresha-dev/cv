import React from "react";
import Lottie from "lottie-react";
import catPlayingAnimation from "./animations/cat.json";

const Cat = () => (
  <div className="flex justify-end print:hidden">
    <Lottie animationData={catPlayingAnimation} className="w-[120px]" />
  </div>
);

export default Cat;
