import React from "react";
import Home from "./pages/home/Home";
import Book from "./pages/book/Book";
import Posts from "./pages/posts/Posts";
import Author from "./pages/author/Author";
import Archive from "./pages/archive/Archive";
import Reports from "./pages/reports/Reports";
import { Route, Routes } from "react-router-dom";
import Graphics from "./pages/graphics/Graphics";
import Printers from "./pages/printers/Printers";
import Contract from "./pages/contract/Contract";
import Editorial from "./pages/editorial/Editorial";
import Publicity from "./pages/publicity/Publicity";
import Purchases from "./pages/purchases/Purchases";
import Bumblebee from "./pages/bumblebee/Bumblebee";
import Royalties from "./pages/royalties/Royalties";
import Bookshops from "./pages/bookshops/Bookshops";
import Production from "./pages/production/Production";
import FinalCheck from "./pages/final-check/FinalCheck";
import BookOrders from "./pages/book-orders/BookOrders";
import Outworkers from "./pages/out-workers/Outworkers";
import CardPayments from "./pages/card-payments/CardPayments";
import BookInvoices from "./pages/book-invoices/BookInvoices";
import OtherClients from "./pages/other-clients/OtherClients";
import DeliveryNotes from "./pages/delivery-notes/Delivery-Notes";
import IsbnSearch from "./pages/nested-pages/isbn-search/IsbnSearch";
import PublishedBooks from "./pages/published-books/PublishedBooks";
import AddRecord from "./pages/nested-pages/add-record-home/AddRecord";
import UaeInvoices from "./pages/nested-pages/Uae-invoices/UaeInvoices";
import FinalCheckView from "./pages/final-check/components/FinalCheckView";
import AllPurchases from "./pages/nested-pages/all-purchases/AllPurchases";
import ViewDeliveryNote from "./pages/delivery-notes/components/ViewDeliveryNote";
import ReadyForPublication from "./pages/ready-for-publication/ReadyForPublication";
import ContractAccount from "./pages/nested-pages/contract-accounts/ContractAccount";
import ContractInvoices from "./pages/nested-pages/contract-invoices/ContractInvoices";
import PendingPurchases from "./pages/nested-pages/pending-purchases/PendingPurchases";
import OlympiaWebsitesPortal from "./pages/olympia-websites-portal/OlympiaWebsitesPortal";
import TheseInvoicesCN from "./pages/nested-pages/book-these-Invoices-CN/TheseInvoicesCN";
import PendingQuestionaire from "./pages/nested-pages/production-questionaires/PendingQuestionaire";
import PublicityQuestionaires from "./pages/nested-pages/publicity-questionaires/PublicityQuestionaires";
import PublicityQuestionairesForm from "./pages/nested-pages/PublicityQuestionairesForm/PublicityQuestionairesForm";
import ProductionQuestionnaireForm from "./pages/nested-pages/production-questionnaire-form/ProductionQuestionnaireForm";

const App = () => (
  <Routes>
    {/* tabs */}
    <>
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
      <Route path="/olympia-websites-portal" element={<OlympiaWebsitesPortal />} />
    </>

    {/* nested pages */}
    <Route path="/isbn-search" element={<IsbnSearch />} />
    <Route path="/add-new-record" element={<AddRecord />} />
    <Route path="/all-purchases" element={<AllPurchases />} />
    <Route path="/pending-purchases" element={<PendingPurchases />} />
    <Route path="/pending-production-questionnaires" element={<PendingQuestionaire />} />
    <Route path="/pending-questionnaires-form" element={<ProductionQuestionnaireForm />} />
    <Route path="/pending-publicity-questionnaire" element={<PublicityQuestionaires />} />
    <Route path="/publicity-questionnaire-form" element={<PublicityQuestionairesForm />} />
    <Route path="/these-invoices-CN" element={<TheseInvoicesCN />} />
    <Route path="/view-delivery-note" element={<ViewDeliveryNote />} />
    <Route path="/view-final-check" element={<FinalCheckView />} />
    <Route path="/account-details" element={<ContractAccount />} />
    <Route path="/contract-invoices" element={<ContractInvoices />} />
    <Route path="/uae-invoices" element={<UaeInvoices />} />





  </Routes>
);

export default App;
