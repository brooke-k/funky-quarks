import React, { useEffect, useState } from "react";
import "../theme/variables.scss";
import "./Movement.scss";

const Movement: React.FC = () => {
  const [currentState, setCurrentState] = useState("STATIONARY");
  return (
    <div className="gridContainment">
      <button className="gridButton b1" />
      <button className="gridButton b1" />
      <button className="gridButton b1" />
      <button className="gridButton b1" />
      <button className="gridButton b2" />
      <button className="gridButton b2" />
      <button className="gridButton b2" />
      <button className="gridButton b2" />
      <button className="gridButton b3" />
      <button className="gridButton b3" />
      <button className="gridButton b3" />
      <button className="gridButton b3" />
      <button className="gridButton b4" />
      <button className="gridButton b4" />
      <button className="gridButton b4" />
      <button className="gridButton b4" />
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
