import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Timer from "./Timer";
import timesand from "./images/time-sand.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${timesand})`,
        height: '100vh'
      }}
    >
      <Timer />
    </div>
  );
}

export default App;
