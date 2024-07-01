import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/about" element={<About />} /> */}
  </Routes>
);

export default App;
