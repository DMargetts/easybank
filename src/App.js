import React from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Services from "./components/services/services";
import Latest from "./components/latest/latest";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <Latest />
    </div>
  );
}

export default App;
