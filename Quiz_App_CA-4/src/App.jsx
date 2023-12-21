import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import lightThemeImg from "./assets/Light On.png";
import darkThemeImg from "./assets/No Idea.png";
import End from "./components/End";

function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [correctAns, setCorrectAns] = useState(0);
  const [renderEnd,setRenderEnd] = useState(false)
  const [retake,setRetake] = useState(false)

  const changeTheme = () => {
    setDark(!dark);
  };

  const srcChange = () => {
    return dark ? lightThemeImg : darkThemeImg;
  };

  return (
    <div
      className="body"
      style={{
        background: `${
          dark
            ? "linear-gradient(180deg, #000 0%, #3a3a3a 50%, #000 100%)"
            : "linear-gradient(180deg, #FFF 0%, #1F1F1F 50%, #FFF 100%)"
        }`,
      }}
    >
      <button
        className="themeButton"
        style={{
          backgroundColor: dark ? "white" : "black"
        }}
        onClick={changeTheme}
      >
        <img src={srcChange()} alt="" />
      </button>
      {retake?<Quiz props={{ dark, setRenderEnd,correctAns,setCorrectAns }}/>:(renderEnd ? <End props={{dark,correctAns,setRetake,retake}}/> : (open ? <Quiz props={{ dark, setRenderEnd,correctAns,setCorrectAns }} /> : <Home props={{ dark, setOpen }} />))}

    </div>
  );
}

export default App;
