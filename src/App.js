import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />

      <LandingPage />
    </div>
  );
}

export default App;
