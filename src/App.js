import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';

class App extends React.Component {
  catchAllUnhandleErrors = (reason, promise) => {
    alert('Some error');
    console.error(promise);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandleErrors
    );
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
  return <AppContainer />;
};
export default JsApp;
