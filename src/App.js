import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import HeaderContainer from './components/Header/HeaderContainer';
import connect from 'react-redux/lib/connect/connect';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import Provider from 'react-redux/lib/components/Provider';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Aside sidebar={store.getState().sidebar} />
          <Main />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const JsApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default JsApp;
