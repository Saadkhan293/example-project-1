import React, { useRef } from "react";

function App() {
  const childWindowRef = useRef(null);

  const openChildWindow = () => {
    // Open child app in a new tab/window
    childWindowRef.current = window.open(
      "https://example-project-2.vercel.app/",
      "_blank",
      "width=600,height=400"
    );
  };

  const sendToken = () => {
    const token = {
      token: "asdasdasdasdasdas123124512easdada",
      name: "Saad",
      message: "it works",
    };
    if (childWindowRef.current) {
      childWindowRef.current.postMessage(
        { token },
        "https://example-project-2.vercel.app/" // must match child app origin
      );
    } else {
      alert("Child window not opened yet!");
    }
  };

  return (
    <div>
      <h1>Parent React App</h1>
      <button onClick={openChildWindow}>Open Child Window</button>
      <button onClick={sendToken}>Send Token to Child</button>
    </div>
  );
}

export default App;
