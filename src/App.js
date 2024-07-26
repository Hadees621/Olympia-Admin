import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Book from "./pages/book/Book";
import Posts from "./pages/posts/Posts";
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
import Graphics from "./pages/graphics/Graphics";
import Bookshops from "./pages/bookshops/Bookshops";
import Printers from "./pages/printers/Printers";
import Outworkers from "./pages/out-workers/Outworkers";
import CardPayments from "./pages/card-payments/CardPayments";
import OtherClients from "./pages/other-clients/OtherClients";
import ReadyForPublication from "./pages/ready-for-publication/ReadyForPublication";
import Reports from "./pages/reports/Reports";
import PublishedBooks from "./pages/published-books/PublishedBooks";
import OlympiaWebsitesPortal from "./pages/olympia-websites-portal/OlympiaWebsitesPortal";
import IsbnSearch from "./pages/nested-pages/isbn-search/IsbnSearch";
import AddRecord from "./pages/nested-pages/add-record-home/AddRecord";
import AllPurchases from "./pages/nested-pages/all-purchases/AllPurchases";
import PendingPurchases from "./pages/nested-pages/pending-purchases/PendingPurchases";

const App = () => (
  <Routes>
    {/* tabs */}
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
    <Route path="/posts" element={<Posts />} />
    <Route path="/ready-for-publication" element={<ReadyForPublication />} />
    <Route path="/other-clients" element={<OtherClients />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/published-books" element={<PublishedBooks />} />
    <Route
      path="/olympia-websites-portal"
      element={<OlympiaWebsitesPortal />}
    />
    {/* nested pages */}
    <Route path="/isbn-search" element={<IsbnSearch />} />
    <Route path="/add-record-home" element={<AddRecord />} />
    <Route path="/all-purchases" element={<AllPurchases />} />
    <Route path="/pending-purchases" element={<PendingPurchases />} />


  </Routes>
);

export default App;
