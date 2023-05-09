import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilePage from "./FilePage";
import Auth from "./Auth";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/upload" element={<FilePage></FilePage>} />
        <Route path="/" element={<Auth></Auth>} />
      </Routes>
    </div>
  );
};

export default App;
