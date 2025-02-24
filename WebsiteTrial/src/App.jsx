import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/HomePage/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div
        className="w-screen h-full bg-no-repeat bg-cover bg-center"
      >
        <div className="w-full h-16 flex items-center shadow-sm px-44 select-none">
          <Header />
        </div>
        <main className="w-full h-full flex flex-grow flex-col px-44 ">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
