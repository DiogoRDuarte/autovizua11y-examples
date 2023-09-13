import React, { useState } from "react";
const ApiKeyForm = ({ apiKey, setApiKey, isValid, setIsValid }) => {
	const [submitStatus, setSubmitStatus] = useState(true);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValidApiKey(apiKey)) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};

	const handleChanges = (e) => {
		e.preventDefault();
		setApiKey(e.target.value);
		if (isValidApiKey(e.target.value)) {
			setSubmitStatus(false);
		} else {
			setSubmitStatus(true);
		}
	};
	const isValidApiKey = (key) => {
		const apiKeyPattern = /^sk-[a-zA-Z0-9]{48}$/;
		return apiKeyPattern.test(key);
	};
	return (
		<form onSubmit={handleSubmit}>
			{" "}
			<p>Please provide an OpenAI API key</p>{" "}
			<label>
				{" "}
				API Key: <input
					type="text"
					placeholder="sk-..."
					value={apiKey}
					onChange={handleChanges}
				/>{" "}
			</label>{" "}
			<button type="submit" disabled={submitStatus}>
				Submit
			</button>{" "}
			{submitStatus && apiKey.length > 0 ? (
				<p style={{ color: "red" }}>
					Invalid API key format. It should be 48 characters long and start with sk-
				</p>
			) : null}{" "}
		</form>
	);
};
export default ApiKeyForm;
