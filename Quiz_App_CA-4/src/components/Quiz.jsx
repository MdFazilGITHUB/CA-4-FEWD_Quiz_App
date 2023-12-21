import React, { useState, useEffect } from "react";
import reactQuestions from "../react";

function Quiz({ props }) {
  const { dark, setRenderEnd,correctAns,setCorrectAns } = props;

  const [question, setQuestion] = useState(0);
  
  const [highlight, setHighlight] = useState(false);

  const optionChoosen = (isCorrect) => {
    if (isCorrect) {
      setCorrectAns(correctAns + 1);
    }

    if (question < reactQuestions.length - 1) {
      setQuestion(question + 1);
    } else {
      setRenderEnd(true);
    }
  };

  return (
    <div
      style={{
        background: dark ? "#252525" : "#CCC",
        border: `4px solid ${dark ? "white" : "black"}`,
      }}
      className="quiz-container"
    >
      <h1 style={{ color: dark ? "white" : "black" }}>
        QUESTION: {question + 1} of {reactQuestions.length}
      </h1>
      <h2 style={{ color: `${highlight ? "red" : dark ? "white" : "black"}` }}>
        {reactQuestions[question].text}
      </h2>
      {reactQuestions[question].options.map((options) => (
        <div className="block">
          <button
            className="options"
            key={options.id}
            onClick={() => optionChoosen(options.isCorrect)}
          >
            {options.text}
          </button>
        </div>
      ))}

      <button
        className="highlight"
        onClick={() => {
          setHighlight(!highlight);
        }}
      >
        {highlight ? "De-emphasize" : "Emphasize"}
      </button>
    </div>
  );
}

export default Quiz;
