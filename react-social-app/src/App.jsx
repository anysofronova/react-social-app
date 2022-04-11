import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";

function App({ store }) {
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
        </div>
      </div>
    </div>
  );
}

export default App;
