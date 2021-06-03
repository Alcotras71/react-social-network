import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Aside sidebar={props.sidebar} />
      <Main />
    </div>
  );
};

export default App;
