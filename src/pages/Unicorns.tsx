import React from "react";
import "../theme/variables.scss";

function randomLetter() {
  if (Math.floor(Math.random()) == 0) {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
  } else {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
  }
  const ascciVal = Math.random() * (90 - 65) + 65;
  return String.fromCharCode(ascciVal);
}

const Home: React.FC = () => {
  return <p className="primaryText unicornParagraph">{randomLetter()}</p>;
};

export default Home;
