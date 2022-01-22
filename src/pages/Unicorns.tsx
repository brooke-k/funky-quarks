import React from "react";
import "../pages/Unicorn.scss";

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
  return (
    <>
      <div className="primaryText unicornParagraph">{randomLetter()}</div>
    </>
  );
};

export default Home;
