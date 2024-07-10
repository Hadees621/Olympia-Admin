import React from "react";
import Button from "components/Button";
import useSidebarStore from "stores/States";
import SearchField from "../home/components/SearchField";
import BumblebeeTable from "./components/BumblebeeTable";

const Bumblebee = () => {
  const { isOpen } = useSidebarStore();

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
          Welcome to Olympia Portal (olympia admin)
        </p>

        <div className="flex items-center mt-3 gap-3 m-4">
          <SearchField placeholder="Client Name" />
          <Button title="Search" />
          <SearchField placeholder="Company Name" />
          <Button title="Search" />
          <Button title="ISBN Search" />
        </div>
        <div className="flex items-center justify-end mt-3 gap-3 my-4">
          <Button title="Unpaid Invoices" />
          <Button title="Pending purchases" />
          <Button
            title="Add New Client"
            bg="bg-green-600"
            text={"text-white"}
          />
          <Button title="All purchases" />
        </div>
      </>

      <div
        className={`m-4 transition-all duration-300 ${
          isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
        }`}
      >
        <BumblebeeTable data={data} />
      </div>
    </div>
  );
};

export default Bumblebee;
