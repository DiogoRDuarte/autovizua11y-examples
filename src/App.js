import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.location.href = "https://feedzai.github.io/AutoVizuA11y/";
  }, []);

  return (
    <div className="container">
      <p>
        There is an updated AutoVizuA11y examples website. <br></br>Please click
        <a href="https://feedzai.github.io/AutoVizuA11y/">here</a> to be
        redirected.
      </p>
    </div>
  );
}

export default App;
