import React, { useState } from "react";
import EditableField from "./EditableField";
import TableButton from "components/TableButton";
import Calculator from "utils/icons/Calculator";
import Notepad from "utils/icons/Notepad";
import Speaker from "utils/icons/Speaker";

const BumblebeeTable = ({ data, onSave }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editableData, setEditableData] = useState(data);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = () => {
    setEditingIndex(null);
    if (onSave) onSave(editableData);
  };

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

  const handleCheckboxChange = (rowIndex, field) => {
    const updatedData = [...editableData];
    updatedData[rowIndex] = {
      ...updatedData[rowIndex],
      [field]: {
        ...updatedData[rowIndex][field],
        completed: !updatedData[rowIndex][field].completed,
        date: !updatedData[rowIndex][field].completed ? new Date().toLocaleDateString() : ""
      }
    };
    setEditableData(updatedData);
  };

  return (
    <div className="overflow-x-auto shadow-md transition-all duration-300">
      <table className="w-full text-sm text-left max-h-[500px]">
        <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-sm font-medium text-gray-500 uppercase text-center">
            <th className="px-6 py-3 border">Status</th>
            <th className="px-6 py-3 border">Pen Name</th>
            <th className="px-6 py-3 border">Book Title</th>
            <th className="px-6 py-3 border">Illustrated by</th>
            <th className="px-6 py-3 border">Contract Date</th>
            <th className="px-6 py-3 border">Remaining Day(s)/Date</th>
            <th className="px-6 py-3 border">90 days activated</th>
            <th className="px-6 py-3 border">Author Forms</th>
            <th className="px-6 py-3 border">Job Started</th>
            <th className="px-6 py-3 border">Sample approved</th>
            <th className="px-6 py-3 border">Outlines approved</th>
            <th className="px-6 py-3 border">Coloured approved</th>
            <th className="px-6 py-3 border">Cover design to author</th>
            <th className="px-6 py-3 border">Inners to author</th>
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
          {editableData.map((row, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
            >
              <td className="px-6 py-4 border">{row.status}</td>
              <td className="px-6 py-4 border">{row.penName}</td>
              <td className="px-6 py-4 border">{row.bookTitle}</td>
              <td className="px-6 py-4 border">{row.illustratedBy}</td>
              <td className="px-6 py-4 border">{row.contractDate}</td>
              <td className="px-6 py-4 border">
                {row.remainingDays} / {row.remainingDate || "-"}
              </td>
              <td className="px-6 py-4 border">{row.daysActivated}</td>
              <td className="px-6 py-4 border">
                <div className="flex space-x-2">
                  <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                    <Calculator color={row.authorForms.form1 ? "green" : "white"} />
                  </div>
                  <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                    <Notepad color={row.authorForms.form2 ? "green" : "white"} />
                  </div>
                  <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                    <Speaker color={row.authorForms.form3 ? "green" : "white"} />
                  </div>
                </div>
              </td>
              {['jobStarted', 'sampleApproved', 'outlinesApproved', 'colouredApproved', 'coverDesignToAuthor', 'innersToAuthor', 'firstProofsReader', 'firstProofsAuthor', 'firstProofsAmender', 'secondProofsAuthor', 'thirdProofsAuthor', 'coverCertificateReceived', 'proofsCertificateReceived', 'finalisedForPrint'].map((field) => (
                <EditableField
                  key={field}
                  fieldData={row[field]}
                  isEditing={index === editingIndex}
                  onCheckboxChange={() => handleCheckboxChange(index, field)}
                />
              ))}
              <td className="px-6 py-4 border">
                <TableButton title="Send" bg="bg-green-600" text="text-white" />
              </td>
              <td className="px-6 py-4 border">{row.publicationDate}</td>
              <td className="px-6 py-4 border whitespace-nowrap">
                <span className={`w-[90px] ${getStatusClass(row.contractPaymentStatus)}`}>
                  £ {row.contractPaymentStatus}
                </span>
              </td>
              <td className="px-6 py-4 border">
                {index === editingIndex ? (
                  <TableButton
                    title="Save"
                    bg="bg-green-600"
                    text="text-white"
                    onClick={handleSaveClick}
                  />
                ) : (
                  <TableButton
                    title="Edit"
                    bg="bg-blue-600"
                    text="text-white"
                    onClick={() => handleEditClick(index)}
                  />
                )}
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

export default BumblebeeTable;

