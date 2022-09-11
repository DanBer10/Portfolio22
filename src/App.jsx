import "./App.scss";
import Navbar from "./components/Navbar";
import Routing from "./routers/Routing";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
