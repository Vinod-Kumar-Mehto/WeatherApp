import React from "react";
import Weathapp from "./Components/Weathapp";
import "../src/Components/CSS/style.css";


function App() {
  return (
    <>
      <div className="box">
        <h1 className="head">Live Temperature</h1>
        <Weathapp />
      </div>

    </>

  )
}

export default App;
