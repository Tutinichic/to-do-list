import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import App from "./App";
import "./index.css";

ReactDOM.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(Provider, { store: store },
      React.createElement(BrowserRouter, null,
        React.createElement(App, null)
      )
    )
  ),
  document.getElementById("root")
);