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
  return (
    <Router>
      <div className="w-screen h-full select-none">
        <div className="w-screen h-16 flex items-center shadow-sm px-44 select-none">
          <Header />
        </div>
        <main className="w-screen h-full flex flex-col flex-grow px-44 pb-8">
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
