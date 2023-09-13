import "./App.css";
import CardGrid from "./components/ChartGrid";
import React from "react";
import { useState } from "react";
import ApiKeyForm from "./components/ApiKeyForm";

function App() {
	const [apiKey, setApiKey] = useState("");
	const [isValid, setIsValid] = useState(false);
	return (
		<div className="App">
			<h1>AutoVizuA11y - examples</h1>
			<h5>
				Data from{" "}
				<a href="https://data.un.org/" target="_blank">
					UN Data
				</a>
			</h5>
			{isValid && apiKey !== "" ? (
				<div style={{ margin: 20 }}>
					{" "}
					<CardGrid apiKey={apiKey} />{" "}
				</div>
			) : (
				<ApiKeyForm
					apiKey={apiKey}
					setApiKey={setApiKey}
					isValid={isValid}
					setIsValid={setIsValid}
				/>
			)}
		</div>
	);
}

export default App;
