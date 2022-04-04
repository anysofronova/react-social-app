import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({ state, dispatch, store }) {
  return (
    <Router>
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
              <Route path="/" element={<Profile store={store} />} />
              <Route path="/dialogs/*" element={<Dialogs store={store} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
