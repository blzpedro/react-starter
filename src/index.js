import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./configureStore";
import { ThemeProvider } from "emotion-theming";

import "./index.css";
import theme from "./theme";

ReactDOM.render(
  // <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  // </Provider>,
  document.getElementById("root")
);
