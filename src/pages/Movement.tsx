import React, { useEffect, useState } from "react";
import "../theme/variables.scss";
import "./Movement.scss";

const Movement: React.FC = () => {
  const [isShining, setIsShining] = useState(false);
  var shinyElement = document.getElementById("shinyElement");
  useEffect(() => {
    const shine = (e: any) => {
      setIsShining(true);

      setTimeout(() => setIsShining(false), 10);
    };

    shinyElement.addEventListener("keypress", shine);
    return () => {
      shinyElement.removeEventListener("keypress", shine);
    };
  });

  return (
    <div className="gridContainment">
      <div className="gridButton b1">
        <div
          id="shinyElement"
          className={
            isShining ? "gridButton shinyOnly active" : "gridButton shinyOnly"
          }
        />
      </div>
      <div className="gridButton b1">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b1">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b1">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b2">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b2">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b2">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b2">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b3">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b3">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b3">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b3">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b4">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b4">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b4">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
      <div className="gridButton b4">
        <div className="gridButton shinyOnly" id="shinyElement" />
      </div>
    </div>
  );
};

export default Movement;

/* <div
      className="movementText"
      draggable="true"
      onDragStart={() => setCurrentState("BEING DRAGGED")}
      onDragEnd={() => setCurrentState("STATIONARY")}
    >
      {currentState}
    </div> */

/*   const [xPosition, setXPosition] = useState<Number>();
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

  return <p className="primaryText">{xPosition}</p>; */
