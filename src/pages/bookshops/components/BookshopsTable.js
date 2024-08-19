import { data } from "../utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import AddNewModal from "./AddNewModal";
import useSidebarStore from "stores/States";
import EditInfoModal from "./EditInfoModal ";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";

const BookshopsTable = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);

  return (
    <div className={`m- transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"}`}>
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
          onClick={() => setIsModalVisible(true)}
        />
      </div>
      <div className="overflow-x-auto shadow-md transition-all duration-300 custom-scrollbarw">
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
                  <TableButton title="Edit" onClick={() => setIsInfoModalVisible(true)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddNewModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <EditInfoModal isModalVisible={isInfoModalVisible} setIsModalVisible={setIsInfoModalVisible} />
    </div>
  );
};

export default BookshopsTable;
