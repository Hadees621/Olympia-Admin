import React, { useState } from "react";
import Speaker from "utils/icons/Speaker";
import Notepad from "utils/icons/Notepad";
import Modal from "components/modals/Modal";
import EditableField from "./EditableField";
import { getStatusClass } from "utils/utils";
import Calculator from "utils/icons/Calculator";
import TableButton from "components/TableButton";
import EditorialNotes from "pages/editorial/components/EditorialNotes";

const BumblebeeTable = ({ data, onSave }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editableData, setEditableData] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = () => {
    setEditingIndex(null);
    if (onSave) onSave(editableData);
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
    <>
      <div className="overflow-x-auto shadow-md transition-all duration-300 custom-scrollbarw max-h-[600px] custom-scrollbar">
        <table className="w-full">
          <thead className="text-sm uppercase bg-gray-50 whitespace-nowrap sticky top-[-10px] z-10 border">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center">
              <th className="px-6 py-3 ">Status</th>
              <th className="px-6 py-3 ">Pen Name</th>
              <th className="px-6 py-3 ">Book Title</th>
              <th className="px-6 py-3 ">Illustrated by</th>
              <th className="px-6 py-3 ">Contract Date</th>
              <th className="px-6 py-3 ">Remaining Day(s)/Date</th>
              <th className="px-6 py-3 ">Author Forms</th>
              <th className="px-6 py-3 ">90 days activated</th>
              <th className="px-6 py-3 ">Job Started</th>
              <th className="px-6 py-3 ">Sample approved</th>
              <th className="px-6 py-3 ">Outlines approved</th>
              <th className="px-6 py-3 ">Coloured approved</th>
              <th className="px-6 py-3 ">Cover design to author</th>
              <th className="px-6 py-3 ">Inners to author</th>
              <th className="px-6 py-3 ">1st Proofs @reader</th>
              <th className="px-6 py-3 ">1st Proofs @author</th>
              <th className="px-6 py-3 ">1st Proofs @amender</th>
              <th className="px-6 py-3 ">2nd Proofs @author</th>
              <th className="px-6 py-3 ">3rd proofs @author</th>
              <th className="px-6 py-3 ">Cover certificate received</th>
              <th className="px-6 py-3 ">Proofs certificate received</th>
              <th className="px-6 py-3 ">Finalised for print</th>
              <th className="px-6 py-3 ">Send for final check</th>
              <th className="px-6 py-3 ">Publication Date</th>
              <th className="px-6 py-3 ">Contract payment status</th>
              <th className="px-6 py-3 ">Edit</th>
              <th className="px-6 py-3 ">Notes</th>
            </tr>
          </thead>
          <tbody>
            {editableData.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center custom-hover-row font-bold whitespace-nowrap border"
              >
                <td className="px-6 py-4 ">{row.status}</td>
                <td className="px-6 py-4 ">{row.penName}</td>
                <td className="px-6 py-4 ">{row.bookTitle}</td>
                <td className="px-6 py-4 ">{row.illustratedBy}</td>
                <td className="px-6 py-4 ">{row.contractDate}</td>
                <td className="px-6 py-4 ">
                  {row.remainingDays} / {row.remainingDate || "-"}
                </td>
                <td className="px-6 py-4 ">
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
                {['daysActivated', 'jobStarted', 'sampleApproved', 'outlinesApproved', 'colouredApproved', 'coverDesignToAuthor', 'innersToAuthor', 'firstProofsReader', 'firstProofsAuthor', 'firstProofsAmender', 'secondProofsAuthor', 'thirdProofsAuthor', 'coverCertificateReceived', 'proofsCertificateReceived', 'finalisedForPrint'].map((field) => (
                  <EditableField
                    key={field}
                    fieldData={row[field]}
                    isEditing={index === editingIndex}
                    onCheckboxChange={() => handleCheckboxChange(index, field)}
                  />
                ))}
                <td className="px-6 py-4 ">
                  <TableButton title="Send" bg="bg-green-600" hover="hover:bg-green-700" text="text-white" />
                </td>
                <td className="px-6 py-4 ">{row.publicationDate}</td>
                <td className="px-6 py-4  whitespace-nowrap">
                  <span className={`w-[90px] ${getStatusClass(row.contractPaymentStatus)}`}>
                    £ {row.contractPaymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 ">
                  {index === editingIndex ? (
                    <TableButton
                      title="Save"
                      text="text-white"
                      bg="bg-green-500"
                      hover="bg-green-600"
                      onClick={handleSaveClick}
                    />
                  ) : (
                    <TableButton
                      title="Edit"
                      bg="bg-blue-600"
                      text="text-white"
                      hover="bg-blue-700"
                      onClick={() => handleEditClick(index)}
                    />
                  )}
                </td>
                <td className="px-6 py-4 ">
                  <TableButton title="Edit" bg="bg-blue-600" hover="hover:bg-blue-700" text={'text-white'} onClick={() => setIsModalVisible(true)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} title="Editorial" width="max-w-[120vh]">
        <EditorialNotes title={"Editorial notes"}
          questionnaire={"/pending-production-questionnaires"} questionnaireType={"Pending Production questionnaire"}
        />
      </Modal>
    </>
  );
};

export default BumblebeeTable;

