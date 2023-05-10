import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilePage from "./components/FilePage";
import Auth from "./components/Auth";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <FilePage></FilePage>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Auth></Auth>} />
      </Routes>
    </div>
  );
};

export default App;
