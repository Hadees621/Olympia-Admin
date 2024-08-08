import Button from "components/Button";
import Table from "./components/Table";
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import Pagination from "components/Pagination";
import SelectField from "components/SelectField";
import InputWithLabel from "components/InputWithLabel";
import SearchField from "../home/components/SearchField";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const Archive = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState(["", ""]);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleAddAuthorClick = () => {
    setShowAdditionalFields(prevState => !prevState);
  };

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];
  return (
    <div className="w-full">
      <p className="text-3xl font-semibold mt-8 ml-4">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="mt-3 w-full m-6 font-semibold text-lg">
        <p>Total Records Found: 0</p>
        <p className="text-green-600">Fully paid: 113</p>
        <p className="text-red-600">Over due: 137</p>
        <p className="text-orange-600">Remaining: 10</p>
      </div>
      <div className="flex gap-2 justify-start mt-8 items-center w-full px-6">
        <p className="text-md font-semibold text-gray-500">Pen Name:</p>
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
          />
        ))}
        <Button title="Clear" />
      </div>
      <div className="flex items-center mt-3 gap-3 px-6">
        <SelectField placeholder={"All"} />
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="Add New Record" bg="bg-green-500" hover="hover:bg-green-600" text={"text-white"} onClick={() => setIsModalVisible(true)} />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>
      <Pagination num={12} />
      <Table />

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={() => setIsModalVisible(false)} width={"max-w-[90vh]"} title="Add New record">
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
            <SelectInputWithLabel label={"Author"} />
            <p className="text-lg my-4 font-bold">OR</p>
            <Button title={"Add Author"} bg="bg-green-500" hover="hover:bg-green-600" text={"text-white"} onClick={handleAddAuthorClick} />
            {showAdditionalFields && (
              <div className="space-y-2 mt-4 mb-4 shadow p-3">
                <InputWithLabel label={"Surname"} />
                <InputWithLabel label={"First Name"} />
            <p className="text-md italic pt-4 font-bold">Please Check if author already exist before adding new</p>
              </div>
            )}
            <div className="space-y-3 mt-4">
              <InputWithLabel label={"Pen Name"} />
              <InputWithLabel label={"Book Title"} />
              <div className="">
                <label className="w-[30%] font-bold text-lg">Contract Date: </label>
                <div className="flex w-full gap-3 my-1">
                  <SelectInputWithLabel />
                  <SelectInputWithLabel />
                  <SelectInputWithLabel />
                </div>
              </div>
              <InputWithLabel label={"Book No"} />
              <InputWithLabel label={"Status"} />
              <InputWithLabel label={"Imprint"} />
              <InputWithLabel label={"ISBN"} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Archive;
