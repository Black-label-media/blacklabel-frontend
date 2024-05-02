import './App.css';
import Home from './components/Pages/Home';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
  
  </BrowserRouter>
);

function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/" />
      </Routes>
      <Home />
    </BrowserRouter>
  );
}

export default App;
