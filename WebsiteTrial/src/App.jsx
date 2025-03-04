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
import About from "./components/AboutPage/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/OsmanGndzWebsite">
      <div className="min-h-screen flex flex-col select-none">
        {/* Header */}
        <div className="w-full flex justify-center shadow-sm bg-white">
          <div className="w-full max-w-[1440px] h-16 flex items-center px-4 sm:px-8 lg:px-44">
            <Header />
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full flex justify-center flex-grow">
          <div className="w-full max-w-[1440px] flex flex-col px-4 sm:px-8 lg:px-44 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <div className="w-full flex justify-center shadow-sm bg-blue-100 py-6">
          <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-44">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
