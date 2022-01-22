import React, { useEffect, useState } from "react";
import "../theme/variables.scss";

const Movement: React.FC = () => {
  const [xPosition, setXPosition] = useState<Number>();
  const [yPosition, setYPosition] = useState<Number>();

  useEffect(() => {
    const update = (e: {
      x: React.SetStateAction<Number>;
      y: React.SetStateAction<Number>;
    }) => {
      setXPosition(e.x);
      setYPosition(e.y);
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  });

  return <p className="primaryText">{xPosition}</p>;
};

export default Movement;
