import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/HomePage/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/OsmanGndzWebsite">
      <div className="w-screen min-h-screen flex flex-col select-none">
        <div className="w-screen h-16 flex items-center shadow-sm px-4 sm:px-8 lg:px-44 select-none">
          <Header />
        </div>
        <main className="w-screen h-full flex flex-col flex-grow px-4 sm:px-8 lg:px-44 pb-16">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="w-screen flex items-center shadow-sm px-4 sm:px-8 lg:px-44 select-none bg-blue-100 py-6">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
