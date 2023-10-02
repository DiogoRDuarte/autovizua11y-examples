import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Options.css";

const KeyRequest = ({
  apiKey,
  setApiKey,
  setIsValid,
  setAutomatic,
  setHome,
}) => {
  const handleChanges = (e) => {
    setApiKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidApiKey(apiKey)) {
      setIsValid(true);
    } else {
      alert(
        "The API key should start with 'sk-' and be followed by a string of exactly 48 alphanumeric characters."
      );
      setIsValid(false);
    }
  };

  const isValidApiKey = (key) => {
    const apiKeyPattern = /^sk-[a-zA-Z0-9]{48}$/;
    return apiKeyPattern.test(key);
  };

  const goBack = () => {
    setHome(true);
    setAutomatic(false);
  };

  return (
    <>
      <button onClick={goBack} tabIndex={0}>
        Go back
      </button>
      <div id="cardContainer">
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <h2>
                Option A)
                <br /> <b>Automatic Descriptions</b>
              </h2>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ whiteSpace: "pre-wrap" }}
              >
                Please provide an{" "}
                <a
                  href="https://platform.openai.com/account/api-keys"
                  target="_blank"
                >
                  OpenAI API key
                </a>{" "}
                (the key is not saved). <br></br>The API key should start with
                'sk-' and be followed by a string of exactly 48 alphanumeric
                characters.
              </Typography>
              <br />
              <label>
                API Key:{" "}
                <input
                  type="text"
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={handleChanges}
                />
              </label>
              <button type="submit" tabIndex={0}>
                Submit
              </button>
            </form>
            {apiKey.length > 0 && !isValidApiKey(apiKey) && (
              <p style={{ color: "red" }} role="alert">
                Invalid API key format.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default KeyRequest;
