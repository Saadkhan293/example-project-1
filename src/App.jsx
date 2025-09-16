import React, { useRef } from "react";

function App() {
  const iframeRef = useRef(null);

  const sendToken = () => {
    const token = "sample_jwt_token_12345"; // pretend from auth service
    iframeRef.current.contentWindow.postMessage(
      { token },
      "http://localhost:5174" // child app origin
    );
  };

  return (
    <div>
      <h1>Parent React App</h1>
      <button onClick={sendToken}>Send Token to Iframe</button>

      <iframe
        ref={iframeRef}
        title="ChildApp"
        src="http://localhost:5174"
        style={{ width: "600px", height: "400px", border: "1px solid black" }}
      />
    </div>
  );
}

export default App;
