import React from 'react';
import "./App.css";
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside sidebar={props.state.sidebar}/>
        <Main
          state={props.state}
          dispatch={props.dispatch}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
