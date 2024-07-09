import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Book from "./pages/book/Book";
import Author from "./pages/author/Author";
import Contract from "./pages/contract/Contract";
import Editorial from "./pages/editorial/Editorial";
import Publicity from "./pages/publicity/Publicity";
import BookInvoices from "./pages/book-invoices/BookInvoices";
import DeliveryNotes from "./pages/delivery-notes/Delivery-Notes";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contract" element={<Contract />} />
    <Route path="/author" element={<Author />} />
    <Route path="/book" element={<Book />} />
    <Route path="/editorial" element={<Editorial />} />
    <Route path="/publicity" element={<Publicity />} />
    <Route path="/delivery-notes" element={<DeliveryNotes />} />
    <Route path="/book-invoices" element={<BookInvoices />} />
  </Routes>
);

export default App;
