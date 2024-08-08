import React, { useState } from "react";
import Modal from "components/modals/Modal";
import useSidebarStore from "stores/States";
import { outworkersData } from "../utils/utils";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import InputWithLabel from "components/InputWithLabel";
import SearchField from "pages/home/components/SearchField";
import SelectInputWithLabel from "components/SelectInputWithLabel";
import DisplayInfo from "pages/card-payments/components/DisplayInfo";

const OutworkersTable = () => {
  const { isOpen } = useSidebarStore();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);

  const handleViewClick = (row) => {
    setSelectedRow(row);
    setIsViewModalVisible(true);
  };

  return (
    <div>
      <div
        className={`m-4 transition-all duration-300 mt-10 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
          }`}
      >
        <div className="flex items-center justify-between mt-10 mb-4 gap-3">
          <div className="w-[30%] gap-5 flex items-center">
            <p className="text-lg font-semibold"> Show:</p>
            <SelectField placeholder="Show " />
            <p className="text-lg font-semibold"> Entries </p>
          </div>
          <div className="w-[30%] gap-5 flex items-center justify-end">
            <p className="text-lg font-semibold"> Search: </p>
            <SearchField />
          </div>
        </div>

        <div className="overflow-x-auto shadow-md transition-all duration-300">
          <table className="w-full text-sm text-left">
            <thead className="text-sm bg-gray-50 whitespace-nowrap sticky top-0 z-10">
              <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3 border">Skill Type</th>
                <th className="px-6 py-3 border">Name</th>
                <th className="px-6 py-3 border">Grade</th>
                <th className="px-6 py-3 border">Status</th>
                <th className="px-6 py-3 border">Manage</th>
              </tr>
            </thead>
            <tbody>
              {outworkersData.map((row, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap`}
                >
                  <td className="px-6 py-4 border">{row["Skill Type"]}</td>
                  <td className="px-6 py-4 border">{row.Name}</td>
                  <td className="px-6 py-4 border">{row.Grade}</td>
                  <td className="px-6 py-4 border">{row.Status}</td>
                  <td className="px-6 py-4 flex gap-x-2 items-center justify-center">
                    <TableButton title={"View"} onClick={() => handleViewClick(row)} />
                    <TableButton title={"Edit"} onClick={() => setIsModalVisible(true)} />
                    <TableButton title={"Archive It!"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={() => setIsModalVisible(false)} width={"max-w-[90vh]"} title="Add New Outworker"  >
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2 space-y-3">
            <InputWithLabel label={"Name"} />
            <InputWithLabel label={"Email"} />
            <InputWithLabel label={"Address"} />
            <InputWithLabel label={"Tel"} />
            <InputWithLabel label={"Mobile"} />
            <SelectInputWithLabel label={"Skill Type"} />
            <SelectInputWithLabel label={"Grade"} />
          </div>
        </div>
      </Modal>

      <Modal
        isVisible={isViewModalVisible}
        onClose={() => setIsViewModalVisible(false)}
        width="max-w-[70vh]"
        title="Information"
      >
        {selectedRow && (
          <div className="w-full shadow">
            <div className="overflow-y-auto max-h-[70vh] custom-scrollbar p-6">
              <div className="mb-4 space-y-2">
                {Object.entries(selectedRow).map(([key, value]) => (
                  <DisplayInfo key={key} label={key} value={value} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OutworkersTable;

