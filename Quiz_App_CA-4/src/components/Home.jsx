import React from "react";
import logo from "./../assets/logo.png"

function Home({ props }) {
  const { dark, setOpen } = props;

  const openChange = () => setOpen(true)

  return (
    <div className="home-page">
      <img src={logo} alt="" />
      <button
        className="home-page-button"
        onClick={openChange}
        style={{
          boxShadow: `${
            dark ? "0px 0px 50px 0px #fff" : "0px 0px 50px 0px #000000"
          }`,
        }}
      >
        Take Quiz
      </button>
    </div>
  );
}

export default Home;
