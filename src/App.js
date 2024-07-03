import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contract from "./pages/contract/Contract";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contract" element={<Contract />} />
  </Routes>
);

export default App;
