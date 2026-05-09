import React, { useEffect, useState } from "react";

const Cat = () => {
  const [Lottie, setLottie] = useState<any>(null);
  const [animation, setAnimation] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
    import("./animations/cat.json").then((mod) => setAnimation(mod.default));
  }, []);

  if (!Lottie || !animation) return null;

  return (
    <div className="flex justify-end print:hidden">
      <Lottie animationData={animation} className="w-[120px]" />
    </div>
  );
};

export default Cat;
