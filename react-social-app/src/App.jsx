import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

function App({ store }) {
  return (
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
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsData={store.getState().dialogsReducer.dialogsData}
                />
              }
            />
            <Route path="/" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
