import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views";

// Palette 1: https://colorhunt.co/palette/161616346751c84b31ecdbba
// Palette 2: https://colorhunt.co/palette/040303461111a13333b3541e

function App() {
  return (
    <div
      style={{
        backgroundColor: "#040303",
        color: "#B3541E",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
