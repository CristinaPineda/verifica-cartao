import React from "react";
import Cartao from "./components/Cartao";
import HeaderApp from "./components/HeaderApp";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Cartao />
      <Footer />
    </div>
  );
}

export default App;
