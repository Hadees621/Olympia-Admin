import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Book from "./pages/tabs/book/Book";
import Posts from "./pages/tabs/posts/Posts";
import Author from "./pages/tabs/author/Author";
import { Route, Routes } from "react-router-dom";
import Reports from "./pages/tabs/reports/Reports";
import Archive from "./pages/tabs/archive/Archive";
import Printers from "./pages/tabs/printers/Printers";
import Graphics from "./pages/tabs/graphics/Graphics";
import Contract from "./pages/tabs/contract/Contract";
import Royalties from "./pages/tabs/royalties/Royalties";
import Purchases from "./pages/tabs/purchases/Purchases";
import Publicity from "./pages/tabs/publicity/Publicity";
import Editorial from "./pages/tabs/editorial/Editorial";
import Bumblebee from "./pages/tabs/bumblebee/Bumblebee";
import Bookshops from "./pages/tabs/bookshops/Bookshops";
import Production from "./pages/tabs/production/Production";
import Outworkers from "./pages/tabs/out-workers/Outworkers";
import FinalCheck from "./pages/tabs/final-check/FinalCheck";
import BookOrders from "./pages/tabs/book-orders/BookOrders";
import OtherClients from "./pages/tabs/other-clients/OtherClients";
import CardPayments from "./pages/tabs/card-payments/CardPayments";
import BookInvoices from "./pages/tabs/book-invoices/BookInvoices";
import IsbnSearch from "./pages/nested-pages/isbn-search/IsbnSearch";
import AddRecord from "./pages/nested-pages/add-record-home/AddRecord";
import UaeInvoices from "./pages/nested-pages/Uae-invoices/UaeInvoices";
import DeliveryNotes from "./pages/tabs//delivery-notes/Delivery-Notes";
import PublishedBooks from "./pages/tabs/published-books/PublishedBooks";
import AllPurchases from "./pages/nested-pages/all-purchases/AllPurchases";
import FinalCheckView from "./pages/tabs/final-check/components/FinalCheckView";
import ContractAccount from "./pages/nested-pages/contract-accounts/ContractAccount";
import ViewDeliveryNote from "./pages/tabs/delivery-notes/components/ViewDeliveryNote";
import ContractInvoices from "./pages/nested-pages/contract-invoices/ContractInvoices";
import PendingPurchases from "./pages/nested-pages/pending-purchases/PendingPurchases";
import ReadyForPublication from "./pages/tabs/ready-for-publication/ReadyForPublication";
import TheseInvoicesCN from "./pages/nested-pages/book-these-Invoices-CN/TheseInvoicesCN";
import OlympiaWebsitesPortal from "./pages/tabs/olympia-websites-portal/OlympiaWebsitesPortal";
import PendingQuestionaire from "./pages/nested-pages/production-questionaires/PendingQuestionaire";
import PublicityQuestionaires from "./pages/nested-pages/publicity-questionaires/PublicityQuestionaires";
import PublicityQuestionairesForm from "./pages/nested-pages/PublicityQuestionairesForm/PublicityQuestionairesForm";
import ProductionQuestionnaireForm from "./pages/nested-pages/production-questionnaire-form/ProductionQuestionnaireForm";

const App = () => {
  return (
    <>
      <Routes>
        {/* tabs */}
        <>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
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
          <Route
            path="/ready-for-publication"
            element={<ReadyForPublication />}
          />
          <Route path="/other-clients" element={<OtherClients />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/published-books" element={<PublishedBooks />} />
          <Route
            path="/olympia-websites-portal"
            element={<OlympiaWebsitesPortal />}
          />
        </>

        {/* nested pages */}
        <>
          <Route path="/isbn-search" element={<IsbnSearch />} />
          <Route path="/add-new-record" element={<AddRecord />} />
          <Route path="/all-purchases" element={<AllPurchases />} />
          <Route path="/pending-purchases" element={<PendingPurchases />} />
          <Route
            path="/pending-production-questionnaires"
            element={<PendingQuestionaire />}
          />
          <Route
            path="/pending-questionnaires-form"
            element={<ProductionQuestionnaireForm />}
          />
          <Route
            path="/pending-publicity-questionnaire"
            element={<PublicityQuestionaires />}
          />
          <Route
            path="/publicity-questionnaire-form"
            element={<PublicityQuestionairesForm />}
          />
          <Route path="/these-invoices-CN" element={<TheseInvoicesCN />} />
          <Route path="/view-delivery-note" element={<ViewDeliveryNote />} />
          <Route path="/view-final-check" element={<FinalCheckView />} />
          <Route path="/account-details" element={<ContractAccount />} />
          <Route path="/contract-invoices" element={<ContractInvoices />} />
          <Route path="/uae-invoices" element={<UaeInvoices />} />
        </>
      </Routes>
    </>
  );
};
export default App;
