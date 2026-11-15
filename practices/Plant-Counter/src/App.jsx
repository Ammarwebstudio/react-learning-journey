import { useState } from "react";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  return (
    <>
      <main className="app">
        <span className="leaf leaf--1" aria-hidden="true"></span>
        <span className="leaf leaf--2" aria-hidden="true"></span>
        <span className="leaf leaf--3" aria-hidden="true"></span>
        <Counter />
      </main>
    </>
  );
}

export default App;
