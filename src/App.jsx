import { useState } from "react";
import "./App.css";
import WeatherApi from "./Components/WeatherApi";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Features from "./Components/Features";

function App() {
  return (
    <>
      <NavBar />
      <Welcome/>
      <WeatherApi />
      <Features/>
      <Footer/>
    </>
  );
}

export default App;
