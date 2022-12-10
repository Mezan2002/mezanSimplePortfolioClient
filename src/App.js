import { Toaster } from "react-hot-toast";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
