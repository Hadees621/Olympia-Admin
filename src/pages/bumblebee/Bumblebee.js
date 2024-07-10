import React, { useState } from "react";
import Button from "components/Button";
import useSidebarStore from "stores/States";
import SearchField from "../home/components/SearchField";
import BumblebeeTable from "./components/BumblebeeTable";
import SelectField from "components/SelectField";

const Bumblebee = () => {
  const { isOpen } = useSidebarStore();
  const [activeTab, setActiveTab] = useState("processing");

  const data = [
    {
      status: "Under Production",
      penName: "Barbara Harrison",
      bookTitle: "Count on the Animals (Hardback)",
      illustratedBy: "Olympia",
      contractDate: "07-11-2020",
      remainingDays: "0",
      daysActivated: "31-12-2021",
      authorForms: { form1: true, form2: false, form3: true },
      jobStarted: "03-05-2023",
      sampleApproved: "03-05-2023",
      outlinesApproved: "03-05-2023",
      colouredApproved: "03-05-2023",
      coverDesignToAuthor: "03-05-2023",
      innersToAuthor: "03-05-2023",
      firstProofsReader: "03-05-2023",
      firstProofsAuthor: "03-05-2023",
      firstProofsAmender: "03-05-2023",
      secondProofsAuthor: "03-05-2023",
      thirdProofsAuthor: "03-05-2023",
      coverCertificateReceived: "03-05-2023",
      proofsCertificateReceived: "03-05-2023",
      finalisedForPrint: "03-05-2023",
      sendForFinalCheck: "Send",
      publicationDate: "03-05-2023",
      contractPaymentStatus: "Pending",
      notes: "",
    },
    {
      status: "Under Production",
      penName: "Barbara Harrison",
      bookTitle: "Count on the Animals (Hardback)",
      illustratedBy: "Olympia",
      contractDate: "07-11-2020",
      remainingDays: "0",
      daysActivated: "31-12-2021",
      authorForms: { form1: true, form2: false, form3: true },
      jobStarted: "03-05-2023",
      sampleApproved: "03-05-2023",
      outlinesApproved: "03-05-2023",
      colouredApproved: "03-05-2023",
      coverDesignToAuthor: "03-05-2023",
      innersToAuthor: "03-05-2023",
      firstProofsReader: "03-05-2023",
      firstProofsAuthor: "03-05-2023",
      firstProofsAmender: "03-05-2023",
      secondProofsAuthor: "03-05-2023",
      thirdProofsAuthor: "03-05-2023",
      coverCertificateReceived: "03-05-2023",
      proofsCertificateReceived: "03-05-2023",
      finalisedForPrint: "03-05-2023",
      sendForFinalCheck: "Send",
      publicationDate: "03-05-2023",
      contractPaymentStatus: "Pending",
      notes: "",
    },
    {
      status: "Under Production",
      penName: "Barbara Harrison",
      bookTitle: "Count on the Animals (Hardback)",
      illustratedBy: "Olympia",
      contractDate: "07-11-2020",
      remainingDays: "0",
      daysActivated: "31-12-2021",
      authorForms: { form1: true, form2: false, form3: true },
      jobStarted: "03-05-2023",
      sampleApproved: "03-05-2023",
      outlinesApproved: "03-05-2023",
      colouredApproved: "03-05-2023",
      coverDesignToAuthor: "03-05-2023",
      innersToAuthor: "03-05-2023",
      firstProofsReader: "03-05-2023",
      firstProofsAuthor: "03-05-2023",
      firstProofsAmender: "03-05-2023",
      secondProofsAuthor: "03-05-2023",
      thirdProofsAuthor: "03-05-2023",
      coverCertificateReceived: "03-05-2023",
      proofsCertificateReceived: "03-05-2023",
      finalisedForPrint: "03-05-2023",
      sendForFinalCheck: "Send",
      publicationDate: "03-05-2023",
      contractPaymentStatus: "Pending",
      notes: "",
    },
    {
      status: "Under Production",
      penName: "Barbara Harrison",
      bookTitle: "Count on the Animals (Hardback)",
      illustratedBy: "Olympia",
      contractDate: "07-11-2020",
      remainingDays: "0",
      daysActivated: "31-12-2021",
      authorForms: { form1: true, form2: false, form3: true },
      jobStarted: "03-05-2023",
      sampleApproved: "03-05-2023",
      outlinesApproved: "03-05-2023",
      colouredApproved: "03-05-2023",
      coverDesignToAuthor: "03-05-2023",
      innersToAuthor: "03-05-2023",
      firstProofsReader: "03-05-2023",
      firstProofsAuthor: "03-05-2023",
      firstProofsAmender: "03-05-2023",
      secondProofsAuthor: "03-05-2023",
      thirdProofsAuthor: "03-05-2023",
      coverCertificateReceived: "03-05-2023",
      proofsCertificateReceived: "03-05-2023",
      finalisedForPrint: "03-05-2023",
      sendForFinalCheck: "Send",
      publicationDate: "03-05-2023",
      contractPaymentStatus: "Pending",
      notes: "",
    },
  ];

  return (
    <div
      className={`w-full text-start items-center m-4  ${
        !isOpen && "max-w-[1250px]"
      }`}
    >
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Books ( Imprint: BumbleBee )
        </p>
      </>

      <div className="mb-4 justify-center flex pt-3">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "processing"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="books-tab"
              type="button"
              role="tab"
              aria-controls="processing"
              aria-selected={activeTab === "processing"}
              onClick={() => setActiveTab("processing")}
            >
              Books
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "pre-orders"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="final-check-tab"
              type="button"
              role="tab"
              aria-controls="pre-orders"
              aria-selected={activeTab === "pre-orders"}
              onClick={() => setActiveTab("pre-orders")}
            >
              Final Check
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content" className="w-full">
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "processing" ? "block" : "hidden"
          }`}
          id="books-tab"
          role="tabpanel"
          aria-labelledby="processing-tab"
        >
          <>
            <div className="flex items-center mt-3 gap-3 m-4">
              <SearchField placeholder="Book Title" />
              <SearchField placeholder="Pen Name/Author Name" />
              <Button title="Search" />
              <Button title="Clear" />
              <SelectField placeholder={"Select Filter"} />
            </div>
            <div className="flex items-center justify-center gap-3 my-8">
              {[...Array(17)].map((_, index) => (
                <li role="presentation" key={index} className="list-none">
                  <button
                    className="border-b-2 rounded-t-lg text-md font-bold"
                    id=""
                    type="button"
                    role="tab"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </div>
            <div
              className={`m-4 transition-all duration-300 ${
                isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
              }`}
            >
              <BumblebeeTable data={data} />
            </div>
          </>
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "pre-orders" ? "block" : "hidden"
          }`}
          id="final-check-tab"
          role="tabpanel"
          aria-labelledby="pre-orders-tab"
        ></div>
      </div>
    </div>
  );
};

export default Bumblebee;
