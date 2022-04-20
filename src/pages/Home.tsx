import React, { useState } from "react";
import { ContainerBox, Containment } from "../components/ContainerBox";
import "../theme/models.scss";
import "../theme/variables.scss";
import "../theme/home.scss";

const Home: React.FC = () => {
  const [lightingClass, setLightingClass] = useState("lightOff");
  const [pageIsLit, setPageLit] = useState(false);

  const handleTitleSwitch = () => {
    setLightingClass(lightingClass === "lightOff" ? "lightOn" : "lightOff");
    setPageLit(!pageIsLit);
  };

  return (
    <div className={"homeBackground " + lightingClass}>
      <h1 className={"homeTitle " + lightingClass}>
        Funky
        <br />
        Quarks
      </h1>
      <button
        onClick={handleTitleSwitch}
        className={"homepageButton " + lightingClass}
      >
        I <br /> O
      </button>
      <h3 className={lightingClass}>Bruh</h3>
      <p className={"homeSignature " + lightingClass}>made by brooke</p>
    </div>
  );
};

export default Home;
