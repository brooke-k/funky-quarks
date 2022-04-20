import React from "react";

import { useState } from "react";
import "../theme/writer.scss";

const Writer: React.FC = () => {
  const [lightingClass, setLightingClass] = useState("cold");
  const [writerDisplay, setWriterDisplay] = useState("");

  const handleLightSwitch = () => {
    setLightingClass(lightingClass === "cold" ? "warm" : "cold");
    setWriterDisplay("");
  };

  const handleWriterInput = (e: string) => {
    const newString: string = writerDisplay;

    setWriterDisplay(newString + e);
  };

  return (
    <div className={"writerBackground " + lightingClass}>
      {" "}
      <p className={"writerDisplay " + lightingClass}>{writerDisplay}</p>
      <input
        type="text"
        value={""}
        onChange={(e) => handleWriterInput(e.target.value)}
        className={"writerInput " + lightingClass}
      ></input>{" "}
      <button
        onClick={handleLightSwitch}
        className={"lightswitch " + lightingClass}
      >
        I <br /> O{" "}
      </button>{" "}
    </div>
  );
};

export default Writer;
