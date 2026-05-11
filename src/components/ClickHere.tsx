import React, { useEffect, useState } from "react";
import pointerAnimation from "./animations/pointer.json";

const ClickHere = () => {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  if (!Lottie) return null;

  return <Lottie animationData={pointerAnimation} />;
};

export default ClickHere;
