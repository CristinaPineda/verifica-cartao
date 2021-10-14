import React from "react";
import PaymentForm from "./components/cartao";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Verifica cartões</h1>
      </header>
      <PaymentForm />
    </div>
  );
}

export default App;
