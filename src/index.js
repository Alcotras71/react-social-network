import React from "react";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Provider from "react-redux/lib/components/Provider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App sidebar={store.getState().sidebar} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
