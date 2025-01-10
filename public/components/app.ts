import React from "../lib/react.js";
import Box from "./box";

function App() {
  return React.createElement(
    "div",
    {
      className: "app",
    },

    React.createElement(
      Box,
      {
        className: "box--circle",
        id: "i'm-box",
        "aria-label": "나는 박스다!",
        title: "나는 박스다!",
        translate: "no",
      },
      "기본 박스"
    ),

    React.createElement(
      Box,
      {
        size: "small",
        style: {
          backgroundColor: "#ff93eb",
        },
      },
      "작은 박스"
    ),

    React.createElement(
      Box,
      {
        size: "big",
        style: {
          backgroundColor: "#6fe2fb",
          borderRadius: 20,
        },
      },
      "큰 박스"
    )
  );
}

export default App;
