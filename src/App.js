import React from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Services from "./components/services/services";
import Latest from "./components/latest/latest";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
