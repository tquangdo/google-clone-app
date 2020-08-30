import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./datalayer/reducer/reducer";
import { StateProvider } from "./datalayer/StateProvider";

ReactDOM.render(
  <StateProvider propsInitialState={initialState} propsReducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);