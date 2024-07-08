import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contract from "./pages/contract/Contract";
import Author from "./pages/author/Author";
import Book from "./pages/book/Book";
import Editorial from "./pages/editorial/Editorial";
import Publicity from "./pages/publicity/Publicity";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contract" element={<Contract />} />
    <Route path="/author" element={<Author />} />
    <Route path="/book" element={<Book />} />
    <Route path="/editorial" element={<Editorial />} />
    <Route path="/publicity" element={<Publicity />} />
  </Routes>
);

export default App;
