import React from "react";
import TableButton from "components/TableButton";
import Calculator from "utils/icons/Calculator";
import Notepad from "utils/icons/Notepad";
import Speaker from "utils/icons/Speaker";
import Tick from "pages/bumblebee/components/Tick";

const FinalCheckTable = ({ data }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-button status-pending";
      case "Paid in Full":
        return "status-button status-paid";
      case "Hardback":
        return "status-button status-hardback";
      case "Traditional":
        return "status-button status-traditional";
      case "Paying":
        return "status-button status-paying";
      default:
        return "status-button";
    }
  };
  return (
    <div className="overflow-x-auto shadow-md transition-all duration-300">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 max-h-[500px]">
        <thead className="text-xs text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-xs font-medium text-gray-500 uppercase text-center">
            <th className="px-6 py-3 border">Status</th>
            <th className="px-6 py-3 border">Pen Name</th>
            <th className="px-6 py-3 border">Book Title</th>
            <th className="px-6 py-3 border">Imprint</th>
            <th className="px-6 py-3 border">Images</th>
            <th className="px-6 py-3 border">Contract Date</th>
            <th className="px-6 py-3 border">Remaining Day(s)/Date</th>
            <th className="px-6 py-3 border">90 days activated</th>
            <th className="px-6 py-3 border">Author Forms</th>
            <th className="px-6 py-3 border">HS</th>
            <th className="px-6 py-3 border">Cover Blurb</th>
            <th className="px-6 py-3 border">Proofs format</th>
            <th className="px-6 py-3 border">Cover design</th>
            <th className="px-6 py-3 border">1st Proofs @reader</th>
            <th className="px-6 py-3 border">1st Proofs @author</th>
            <th className="px-6 py-3 border">1st Proofs @amender</th>
            <th className="px-6 py-3 border">2nd Proofs @author</th>
            <th className="px-6 py-3 border">3rd proofs @author</th>
            <th className="px-6 py-3 border">Cover certificate received</th>
            <th className="px-6 py-3 border">Proofs certificate received</th>
            <th className="px-6 py-3 border">Finalised for print</th>
            <th className="px-6 py-3 border">Send for final check</th>
            <th className="px-6 py-3 border">Publication Date</th>
            <th className="px-6 py-3 border">Contract payment status</th>
            <th className="px-6 py-3 border">Edit</th>
            <th className="px-6 py-3 border">Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
            >
              <td className="px-6 py-4 border font-extrabold text-orange-400">
                {row.status}
              </td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.penName}
              </td>
              <td className="px-6 py-4 border whitespace-nowrap">
                {row.bookTitle}
              </td>
              <td className="px-6 py-4 border">{row.illustratedBy}</td>
              <td className="px-6 py-4 border">{row.contractDate}</td>
              <td className="px-6 py-4 border">
                <span className="text-red-600">{row.remainingDays}</span>
                <div>{row.sampleApproved}</div>
              </td>
              <td className="px-6 py-4 border">{row.daysActivated}</td>
              <td className="px-6 py-4 border">
                <div className="flex space-x-2">
                  <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                    <Calculator
                      color={row.authorForms.form1 ? "green" : "white"}
                    />
                  </div>
                  <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                    <Notepad
                      color={row.authorForms.form2 ? "green" : "white"}
                    />
                  </div>
                  <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                    <Speaker
                      color={row.authorForms.form3 ? "green" : "white"}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.jobStarted}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.sampleApproved}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.outlinesApproved}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.colouredApproved}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.coverDesignToAuthor}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.innersToAuthor}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.firstProofsReader}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.firstProofsAuthor}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.firstProofsAmender}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.secondProofsAuthor}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.thirdProofsAuthor}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.coverCertificateReceived}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.proofsCertificateReceived}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <div className="flex flex-col items-center">
                  <Tick />
                  {row.finalisedForPrint}
                </div>
              </td>
              <td className="px-6 py-4 border">
                <TableButton
                  title="Send"
                  bg="bg-green-600"
                  text={"text-white"}
                />
              </td>
              <td className="px-6 py-4 border">{row.publicationDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`w-[90px] ${getStatusClass(
                    row.contractPaymentStatus
                  )}`}
                >
                  £ {row.contractPaymentStatus}
                </span>
              </td>
              <td className="px-6 py-4 border">
                <TableButton title="Edit" />
              </td>
              <td className="px-6 py-4 border">
                <TableButton title="Edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalCheckTable;
