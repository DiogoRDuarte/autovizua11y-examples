import "./Homepage.css";
import React from "react";
import { useState } from "react";
import Options from "./Options";
import KeyRequest from "./KeyRequest";
import CardGrid from "./components/automatic/ChartGrid";
import CardGridManual from "./components/manual/ChartGridManual";

function Homepage() {
  const [apiKey, setApiKey] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [manual, setManual] = useState(false);
  const [home, setHome] = useState(true);

  const goBack = () => {
    setHome(true);
    setAutomatic(false);
    setManual(false);
    setIsValid(false);
  };

  return (
    <div className="Homepage">
      <link
        href="https://fonts.googleapis.com/css?family=Outfit"
        rel="stylesheet"
      ></link>
      <h1>AutoVizuA11y - examples</h1>
      <h5>
        Data from{" "}
        <a href="https://data.un.org/" target="_blank">
          UN Data
        </a>
      </h5>
      {home === false ? (
        <button onClick={goBack} tabIndex={0}>
          Go back
        </button>
      ) : null}
      {isValid && apiKey !== "" ? (
        <div style={{ margin: 20 }}>
          {" "}
          <CardGrid apiKey={apiKey} setHome={setHome} /> {console.log("A")}
        </div>
      ) : manual ? (
        <div style={{ margin: 20 }}>
          {" "}
          <CardGridManual setHome={setHome} /> {console.log("M")}
        </div>
      ) : automatic ? (
        <div style={{ margin: 20 }}>
          {" "}
          <KeyRequest
            apiKey={apiKey}
            setApiKey={setApiKey}
            isValid={isValid}
            setIsValid={setIsValid}
            home={home}
            setHome={setHome}
            setAutomatic={setAutomatic}
          />{" "}
          {console.log("KEY")}
        </div>
      ) : home ? (
        <Options
          apiKey={apiKey}
          setApiKey={setApiKey}
          isValid={isValid}
          setIsValid={setIsValid}
          automatic={automatic}
          setAutomatic={setAutomatic}
          manual={manual}
          setManual={setManual}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Homepage;
