// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home/Home";
import Drawer from "./Components/Drawer";
// import { Visualizer } from "react-audio-visualizer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Drawer />
      <Footer />
      {/* <Visualizer model="./1.wav" /> */}
    </div>
  );
};

export default App;
