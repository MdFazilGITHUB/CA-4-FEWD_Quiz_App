import React from "react";

function Home({ props }) {
  const { dark, setOpen } = props;

  const openChange = () => setOpen(true)

  return (
    <div className="home-page">
      <img src="\src\assets\logo.png" alt="" />
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
