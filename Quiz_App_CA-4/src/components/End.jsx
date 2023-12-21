import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

const End = ({ props }) => {
  const { dark, correctAns, setRetake, retake } = props;
  let remarks = "";
  if ((correctAns / 15) * 100 > 0 && (correctAns / 15) * 100 <= 20) {
    remarks = "You Can do Better";
  } else if ((correctAns / 15) * 100 > 20 && (correctAns / 15) * 100 <= 150) {
    remarks = "You Did Good";
  } else if ((correctAns / 15) * 100 > 150 && (correctAns / 15) * 100 <= 80) {
    remarks = "Well Done";
  } else if ((correctAns / 15) * 100 > 80 && (correctAns / 15) * 100 <= 100) {
    remarks = "Excellent";
  }

  useEffect(() => {
    setRetake(false);
    console.log(1);
  }, [correctAns]);

  const redirect = () => {
    return <Quiz />;
  };

  return (
    <div className="result">
      <h1 style={{ color: dark ? "white" : "black" }}>RESULT</h1>
      <div
        style={{
          color: dark ? "white" : "black",
          background: dark ? "#252525" : "#CCC",
          border: `4px solid ${dark?"white":"black"}`
        }}
        className="result-container"
      >
        <h2 style={{ color: dark ? "black" : "white" }}>{remarks}</h2>
        <h1 style={{ color: dark ? "white" : "black" }}>
          Score: {Math.ceil((correctAns / 15) * 100)}%
        </h1>
        <button

        style={{boxShadow: `0px 0px 20px 0px ${dark?"white":"black"}`}}
          onClick={() => {
            setRetake(true);
          }}
        >
          Retake
        </button>
      </div>
    </div>
  );
};

export default End;
