import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import HeaderContainer from './components/Header/HeaderContainer';
import connect from 'react-redux/lib/connect/connect';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

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
          <Aside sidebar={this.props.sidebar} />
          <Main />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
