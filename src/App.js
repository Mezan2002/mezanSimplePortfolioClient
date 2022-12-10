import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
}

export default App;
