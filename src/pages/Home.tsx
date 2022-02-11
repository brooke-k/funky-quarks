import React from "react";
import { ContainerBox, Containment } from "../components/ContainerBox";
import "../theme/models.scss";
import "../theme/variables.scss";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="mainContentFrame">
      <text className="paragraph">This is paragraph for home page.</text>
    </div>
  );
};

export default Home;
