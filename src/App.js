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
import BookOrders from "./pages/book-orders/BookOrders";
import Purchases from "./pages/purchases/Purchases";
import Bumblebee from "./pages/bumblebee/Bumblebee";
import FinalCheck from "./pages/final-check/FinalCheck";
import Production from "./pages/production/Production";
import Archive from "./pages/archive/Archive";
import Royalties from "./pages/royalties/Royalties";
import CardPayments from "./pages/card-payments/CardPayments";
import Outworkers from "./pages/out-workers/Outworkers";
import Graphics from "./pages/graphics/Graphics";
import Bookshops from "./pages/bookshops/Bookshops";
import Printers from "./pages/printers/Printers";

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
    <Route path="/book-orders" element={<BookOrders />} />
    <Route path="/purchases" element={<Purchases />} />
    <Route path="/bumblebee" element={<Bumblebee />} />
    <Route path="/production" element={<Production />} />
    <Route path="/final-check" element={<FinalCheck />} />
    <Route path="/archive" element={<Archive />} />
    <Route path="/royalties" element={<Royalties />} />
    <Route path="/card-payments" element={<CardPayments />} />
    <Route path="/outworkers" element={<Outworkers />} />
    <Route path="/graphics" element={<Graphics />} />
    <Route path="/bookshops" element={<Bookshops />} />
    <Route path="/printers" element={<Printers />} />
  </Routes>
);

export default App;
