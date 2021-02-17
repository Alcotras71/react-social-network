import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let state = store.getState();

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={ state }
           store={ store }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(state);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
