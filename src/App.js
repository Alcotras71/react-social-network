import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside sidebar={props.sidebar} />
      <Main />
    </div>
  );
};

export default App;
