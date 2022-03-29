import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
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
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
