const reactQuestions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "User interface framework", isCorrect: true },
      { id: 2, text: "Both a and b", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  {
    text: "What is the return value of the useState hook?",
    options: [
      {
        id: 0,
        text: "Pair of current state and function updating it",
        isCorrect: true,
      },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "4", isCorrect: false },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "JavaScript Extension", isCorrect: false },
      { id: 2, text: "Java Syntax XML", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the useEffect hook in React?",
    options: [
      { id: 0, text: "Managing forms in React", isCorrect: false },
      {
        id: 1,
        text: "Performing side effects in functional components",
        isCorrect: true,
      },
      { id: 2, text: "Handling AJAX requests", isCorrect: false },
      { id: 3, text: "State management", isCorrect: false },
    ],
  },
  {
    text: "What is the role of ReactDOM in React?",
    options: [
      { id: 0, text: "Handling routing in React", isCorrect: false },
      {
        id: 1,
        text: "Rendering React components into the DOM",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Managing state in functional components",
        isCorrect: false,
      },
      { id: 3, text: "Creating reusable components", isCorrect: false },
    ],
  },
  {
    text: "In React, what is the significance of keys in lists?",
    options: [
      {
        id: 0,
        text: "They provide styling information for list items",
        isCorrect: false,
      },
      {
        id: 1,
        text: "They help React identify which items have changed, are added, or are removed",
        isCorrect: true,
      },
      {
        id: 2,
        text: "They determine the order of list items",
        isCorrect: false,
      },
      {
        id: 3,
        text: "They control the visibility of list items",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the role of the useCallback hook in React?",
    options: [
      {
        id: 0,
        text: "Managing state in functional components",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Memo-izing functions to prevent unnecessary renders",
        isCorrect: true,
      },
      { id: 2, text: "Handling asynchronous operations", isCorrect: false },
      {
        id: 3,
        text: "Controlling the lifecycle of functional components",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the significance of the term 'lifting state up' in React?",
    options: [
      {
        id: 0,
        text: "Elevating the visual appearance of a component",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Passing state from a child component to its parent component",
        isCorrect: true,
      },
      { id: 2, text: "Animating components in React", isCorrect: false },
      { id: 3, text: "Implementing global state management", isCorrect: false },
    ],
  },
  {
    text: "Which lifecycle method is invoked immediately after a component is inserted into the DOM?",
    options: [
      { id: 0, text: "componentWillUnmount", isCorrect: false },
      { id: 1, text: "componentDidMount", isCorrect: true },
      { id: 2, text: "componentDidUpdate", isCorrect: false },
      { id: 3, text: "componentWillUpdate", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the 'className' attribute in React?",
    options: [
      {
        id: 0,
        text: "It defines the class of a JavaScript function",
        isCorrect: false,
      },
      {
        id: 1,
        text: "It specifies the CSS class for a DOM element",
        isCorrect: true,
      },
      {
        id: 2,
        text: "It sets the class for a React component",
        isCorrect: false,
      },
      {
        id: 3,
        text: "It identifies the name of a component",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the role of the 'useState' hook in React?",
    options: [
      {
        id: 0,
        text: "Managing side effects in functional components",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Handling asynchronous operations in React",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Managing state in functional components",
        isCorrect: true,
      },
      {
        id: 3,
        text: "Optimizing the performance of class components",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the 'map' function in React?",
    options: [
      {
        id: 0,
        text: "Creating a new array with modified elements",
        isCorrect: true,
      },
      { id: 1, text: "Rendering a map view in React", isCorrect: false },
      {
        id: 2,
        text: "Navigating between different routes in a React application",
        isCorrect: false,
      },
      { id: 3, text: "Styling React components", isCorrect: false },
    ],
  },
];

export default reactQuestions;
