import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="main__wrapper">
          <div className="main__header">
            <Header />
          </div>
          <div className="main__navbar">
            <Navbar />
          </div>
          <div className="main__profile">
            <Routes>
              <Route
                path="/"
                element={
                  <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={<Dialogs messagesPage={props.state.messagesPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
