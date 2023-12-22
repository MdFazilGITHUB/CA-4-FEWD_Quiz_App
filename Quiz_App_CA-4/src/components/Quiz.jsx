import React, { useState, useEffect } from "react";

import reactQuestions from "../react";

// Quiz component
function Quiz({ props }) {
  // Destructuring props to extract values
  const { dark, setRenderEnd, correctAns, setCorrectAns } = props;

  const [question, setQuestion] = useState(0);
  const [highlight, setHighlight] = useState(false);

  // Function to handle option selection
  const optionChoosen = (isCorrect) => {
    // Incrementing correct answers count if the selected option is correct
    if (isCorrect) {
      setCorrectAns(correctAns + 1);
    }

    // Checking if there are more questions
    if (question < reactQuestions.length - 1) {
      setQuestion(question + 1);
    } else {
      // Setting renderEnd to true when all questions are answered
      setRenderEnd(true);
    }
  };

  // JSX structure for the Quiz component
  return (
    <div
      style={{
        // Dynamic styling based on the theme
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

      {/* Mapping through options and rendering buttons for each option */}
      {reactQuestions[question].options.map((options) => (
        <div className="block" key={options.id}>
          <button
            className="options"
            onClick={() => optionChoosen(options.isCorrect)}
          >
            {options.text}
          </button>
        </div>
      ))}

      {/* Button to toggle highlighting of the question text */}
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
