import React from "react";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./store";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // provider store provides state to components
  <Provider store={store}>
    <App />
  </Provider>
);
