//without using suspense:

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* 

import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";

// const Home = lazy(() => import("./components/Home"));
const Home = lazy(() => import("./components/Home").then((module) => module.Home));
const About = lazy(() => import("./components/About"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

 */
