import React from "react";
import { Switch, Route } from "react-router-dom";
import GlitchClip from "react-glitch-effect/core/Clip";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <text>Hi there!</text>
        <GlitchClip>
          <text style={{ color: "#a3cc0f", fontSize: "64px", fontWeight: "bold" }}>I'm Gourav.</text>
        </GlitchClip>
        <text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Work in progress.
        </text>
      </header>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <text>Dont' be smart!</text>
        <text style={{ fontSize: "20px", fontWeight: "bold" }}>
          I'm still working on this.
        </text>
      </header>
    </div>
  );
}

function About() {
  return (
    <div className="App">
    <header className="App-header">
      <text>Dont' be smart!</text>
      <text style={{ fontSize: "20px", fontWeight: "bold" }}>
        I'm still working on this.
      </text>
    </header>
  </div>
  );
}

export default App;
