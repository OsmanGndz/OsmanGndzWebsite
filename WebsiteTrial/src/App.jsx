import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Projects from "./components/ProjectPage/Projects";
import Footer from "./components/Footer";
import AlanyaKebab from "./components/ProjectPage/AlanyaKebab";
import Portfolio from "./components/ProjectPage/Portfolio";
import DataSet from "./components/ProjectPage/DataSet";
import YoutubeChannels from "./components/ProjectPage/YoutubeChannels";
import PlotDraw from "./components/ProjectPage/PlotDraw";
import ScrollToTop from "./common/ScrollToTop";
import "./language/i18n";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col select-none">
        {/* Header */}
        <div className="w-full h-full flex justify-center border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-950">
          <div className="w-full min-h-20 max-w-[1440px] h-full sm:h-20 flex items-center px-4 sm:px-8 lg:px-44">
            <Header />
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full flex justify-center flex-grow bg-white dark:bg-neutral-900">
          <div className="w-full max-w-[1440px] flex flex-col px-4 sm:px-8 lg:px-44 py-8">
            <Routes>
              <Route path="*" element = {<NotFound/>} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/alanyakebab" element={<AlanyaKebab />} />
              <Route path="/projects/portfolio" element={<Portfolio />} />
              <Route path="/projects/datasetanalysis" element={<DataSet />} />
              <Route
                path="/projects/youtubechannels"
                element={<YoutubeChannels />}
              />
              <Route path="/projects/plotdraw" element={<PlotDraw />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <div className="w-full flex justify-center shadow-sm border-t border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-neutral-950 py-6">
          <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-44">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
