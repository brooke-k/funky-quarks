import React, { useEffect, useState } from "react";

function randomLetter() {
  if (Math.floor(Math.random()) == 0) {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
  } else {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
  }

  const ascciVal = Math.random() * (90 - 65) + 65;
  return String.fromCharCode(ascciVal);
}

function getLetter(a: number) {
  return String.fromCharCode(a);
}

function randomNumber() {
  if (Math.floor(Math.random()) == 0) {
    return Math.floor(Math.random() * (90 - 65) + 65).valueOf();
  } else {
    return Math.floor(Math.random() * (122 - 97) + 97).valueOf();
  }
}

const mouseTarget = document.getElementById("mouseTarget");

const Home: React.FC = () => {
  return <div></div>;
};

// const Home: React.FC = () => {
//   const [ranNum, setRanNum] = useState<number>(randomNumber());

//   useEffect(() => {
//     const update = (e: any) => {
//       setRanNum(randomNumber());
//     };

//     window.addEventListener("keypress", update);

//     return () => {
//       window.removeEventListener("keypress", update);
//     };
//   }, [10]);

//   return (
//     <>
//       {" "}
//       <div id="mouseTarget" className="primaryText unicornParagraph">
//         {" "}
//         {getLetter(ranNum)}
//       </div>{" "}
//     </>
//   );
// };

export default Home;
