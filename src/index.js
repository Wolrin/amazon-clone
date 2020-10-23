import React from "react";
import { render } from "react-dom";
import reducer, { initialState } from "./redux/reducer";
import { StateProvider } from "./hooks/useStateValue";
import App from "./app/App.jsx";
import "./styles/index.css";

render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
