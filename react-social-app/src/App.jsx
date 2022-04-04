import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

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
            <Route path="/" element={<Profile/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogsData={store.getState().dialogsReducer.dialogsData} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
