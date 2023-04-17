import React, { useState } from "react";

function App() {
  const [value, handlee] = useState(false);
  const [name, handler] = useState("");
  const [namee, han] = useState("");

  function mouseoverHandel() {
    handlee(true);
    console.log("hovered");
  }

  function mouseoutHandel() {
    handlee(false);
    console.log("un");
  }
  function changeHandel(event) {
    handler(event.target.value);
  }
  function clickHandel() {
    han(name);
  }

  return (
    <div className="container">
      <h1>Hello {namee}</h1>
      <input
        onChange={changeHandel}
        type="text"
        placeholder="What's your name?"
      />

      <button
        onMouseOut={mouseoutHandel}
        onMouseOver={mouseoverHandel}
        style={{ backgroundColor: value ? "Black" : "white" }}
        onClick={clickHandel}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
