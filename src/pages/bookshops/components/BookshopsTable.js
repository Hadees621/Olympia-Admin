import EditModal from "./EditModal";
import { data } from "../utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import InputWithLabel from "components/InputWithLabel";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const BookshopsTable = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditCModalOpen, setIsEditCModalOpen] = useState(false);

  const openModal = (setModalState) => {
    setModalState(true);
  };

  const closeModal = (setModalState) => {
    setModalState(false);
  };

  return (
    <div className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"}`}>
      <div className="flex items-center mt-10 mb-4 gap-5">
        <p className="text-lg font-semibold"> Company: </p>
        <SelectField />
        <p className="text-lg font-semibold"> Country: </p>
        <SelectField />
        <p className="text-lg font-semibold"> City: </p>
        <SelectField />
        <Button
          title="Add New"
          bg="bg-green-500"
          hover="hover:bg-green-600"
          text="text-white"
          onClick={() => openModal(setIsModalVisible)}
        />
      </div>
      <div className="overflow-x-auto shadow-md transition-all duration-300">
        <table className="w-full text-sm text-left">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              {["Company", "Title", "First Name", "Last Name", "Designation", "Address 1", "Address 2", "Address 3", "Town/ City", "State/ County", "Post Code", "Country", "Telephone 1", "Telephone 2", "Email", "Web Address", "Actions"].map((header) => (
                <th key={header} className="px-6 py-3 border">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                {Object.values(row).map((value, idx) => (
                  <td key={idx} className="px-6 py-4 border">{value}</td>
                ))}
                <td className="px-6 py-4 border">
                  <TableButton title="Edit" onClick={() => openModal(setIsEditModalOpen)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => closeModal(setIsModalVisible)}
        onSave={() => closeModal(setIsModalVisible)}
        width="max-w-[95vh]"
        title="Add New Bookshops"
      >
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
            <div className="space-y-5 p-4">
              <InputWithLabel label="Company:" flex={true} />
              <SelectInputWithLabel
                label="Country:"
                flex={true}
                width="w-[25%]"
                edit={true}
                onClick={() => openModal(setIsEditModalOpen)}
              />
              <InputWithLabel label="First Name:" flex={true} />
              <InputWithLabel label="Last Name:" flex={true} />
              <InputWithLabel label="Designation:" flex={true} />
              <InputWithLabel label="Address 1:" flex={true} />
              <InputWithLabel label="Address 3:" flex={true} />
              <InputWithLabel label="City/Town:" flex={true} />
              <InputWithLabel label="Post Code:" flex={true} />
              <InputWithLabel label="State/ County:" flex={true} />
              <SelectInputWithLabel
                label="Country:"
                flex={true}
                width="w-[25%]"
                edit={true}
                onClick={() => openModal(setIsEditCModalOpen)}
              />
              <InputWithLabel label="Telephone1:" flex={true} />
              <InputWithLabel label="Telephone2:" flex={true} />
              <InputWithLabel label="Email:" flex={true} />
              <InputWithLabel label="Web Address:" flex={true} />
            </div>
          </div>
        </div>
      </Modal>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => closeModal(setIsEditModalOpen)}
        title="Add New City"
        label={"Enter City :"}
      />

      <EditModal
        isOpen={isEditCModalOpen}
        onClose={() => closeModal(setIsEditCModalOpen)}
        title="Add New Country"
        label={"Enter Country :"}
      />
    </div>
  );
};

export default BookshopsTable;
