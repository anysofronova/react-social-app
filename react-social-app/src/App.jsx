import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import React, { Component, Suspense, lazy } from "react";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/authReducer";
import PreLoader from "./components/UI/PreLoader";
import store from "./redux/reduxStore";

const ProfileContainer = lazy(() =>
  import("./components/profile/ProfileContainer")
);
const UsersContainer = lazy(() => import("./components/users/UsersContainer"));
const Dialogs = lazy(() => import("./components/dialogs/Dialogs"));
const Login = lazy(() => import("./components/Login/Login"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    let { store, initializedSuccess } = this.props;
    if (!initializedSuccess) return <PreLoader />;
    return (
      <div className="main">
        <div className="main__wrapper">
          <div className="main__header">
            <HeaderContainer />
          </div>
          <div className="main__navbar">
            <Navbar />
          </div>
          <div className="main__profile">
            <Suspense fallback={<PreLoader />}>
              <Routes>
                <Route path="/profile">
                  <Route path=":userId" element={<ProfileContainer />} />
                  <Route path="" element={<ProfileContainer />} />
                </Route>
                <Route path="/users" element={<UsersContainer />} />
                <Route
                  path="/dialogs/*"
                  element={
                    <Dialogs
                      dialogsData={store.getState().dialogsReducer.dialogsData}
                    />
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProfileContainer />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initializedSuccess: state.authReducer.initializedSuccess,
  };
};

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const AppMain = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </Router>
  );
};

export default AppMain;
