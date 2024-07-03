import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contract from "./pages/contract/Contract";
import Author from "./pages/author/Author";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contract" element={<Contract />} />
    <Route path="/author" element={<Author />} />
  </Routes>
);

export default App;
