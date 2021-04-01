import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//import { createStore, applyMiddleWare, compose } from "redux";
import { Provider } from "react-redux";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE || compose;

//const store = createStore();

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
