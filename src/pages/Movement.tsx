import React from "react";
import "../theme/variables.scss";

function captureCoordinates(event: { movementX: any; movementY: any }) {
  return `movement: ${event.movementX}, ${event.movementY}`;
}

const Movement: React.FC = () => {
  return <p className="primaryText">this will be movement</p>;
};

export default Movement;
