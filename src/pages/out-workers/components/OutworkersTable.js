import React, { useState } from "react";
import Modal from "components/modals/Modal";
import useSidebarStore from "stores/States";
import { outworkersData } from "../utils/utils";
import SearchField from "components/SearchField";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import InputWithLabel from "components/InputWithLabel";
import SelectInputWithLabel from "components/SelectInputWithLabel";
import DisplayInfo from "pages/tabs/card-payments/components/DisplayInfo";

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
        className={`transition-all duration-300 mt-10 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
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

        <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
              <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3 ">Skill Type</th>
                <th className="px-6 py-3 ">Name</th>
                <th className="px-6 py-3 ">Grade</th>
                <th className="px-6 py-3 ">Status</th>
                <th className="px-6 py-3 ">Manage</th>
              </tr>
            </thead>
            <tbody>
              {outworkersData.map((row, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row`}
                >
                  <td className="px-6 py-4 ">{row["Skill Type"]}</td>
                  <td className="px-6 py-4 ">{row.Name}</td>
                  <td className="px-6 py-4 ">{row.Grade}</td>
                  <td className="px-6 py-4 ">{row.Status}</td>
                  <td className="px-6 py-4 flex gap-x-2 items-center justify-center">
                    <TableButton title={"View"} onClick={() => handleViewClick(row)} />
                    <TableButton title={"Edit"} onClick={() => setIsModalVisible(true)}   bg="bg-green-600"
                      hover="hover:bg-green-700" text={'text-white'} />
                    <TableButton title={"Archive It!"}   bg="bg-red-500"
                      hover="hover:bg-red-600" text={'text-white'}/>
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

