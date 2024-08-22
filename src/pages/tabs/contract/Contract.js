import Plus from "utils/icons/Plus";
import Title from "components/Title";
import Button from "components/Button";
import ReactDOM from 'react-dom/client';
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import SearchField from "components/SearchField";
import SelectField from "components/SelectField";
import BookDetailsTable from "./components/BookDetailsTable";
import { authorInfo, contractInfoLeft, contractInfoRight } from "./utils/utils";
import ContractInformationDisplay from "./components/ContractInformationDisplay";
import ContractInformationEditable from "./components/ContractInformationEditable";

const Contract = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  const InformationSection = ({ title, info, imageUrl }) => (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="p-5 mx-4 border-b">
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="flex justify-between p-8">
        <div className="my-4 gap-4 grid">
          {info.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold text-black">{item.value}</p>
            </div>
          ))}
        </div>
        {imageUrl && (
          <div>
            <p className="text-sm font-semibold text-gray-600">Author Picture:</p>
            <img src={imageUrl} alt="author" />
          </div>
        )}
      </div>
    </div>
  );

  const openWindow = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write('<html><head><title>Book Details</title>');
    newWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">');
    newWindow.document.write('<style>');
    newWindow.document.write('body { font-family: "Lato", sans-serif; margin: 20px; }');
    newWindow.document.write('td { padding: 10px; border: 1px solid #ddd; text-align: center; }');
    newWindow.document.write('table { width: 100%; border-collapse: collapse; margin-top: 20px; }');
    newWindow.document.write('button { font-size: 12px; padding: 10px 20px; margin-top: 20px; }');
    newWindow.document.write('</style>');
    newWindow.document.write('</head><body>');
    newWindow.document.write('<div id="book-details"></div>');
    newWindow.document.write('<button onclick="window.print()" class="rounded-md text-[#001C4E] bg-red-600 font-bold px-8 py-2 text-[12px]">Print</button>');
    newWindow.document.write('</body></html>');
    newWindow.document.close();

    const container = newWindow.document.getElementById('book-details');
    const root = ReactDOM.createRoot(container);
    root.render(<BookDetailsTable />);
  };

  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex items-center mt-8 gap-3">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="flex gap-2 justify-start mt-3 items-center w-full">
        <p className="text-md font-semibold text-gray-500">Pen Name:</p>
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
          />
        ))}
        <Button title="Search" />
        <Button title="Contract Accounts" href="/account-details" />
        <Button title="Author Data Sheet" onClick={openWindow} />

        <Button title="Edit" onClick={() => setIsModalVisible(true)} />
      </div>

      <div className="shadow mt-4 bg-[#F7F7F7] p-3 flex justify-between items-center">
        <p className="text-md font-semibold text-gray-500">
          Aine By Yugtha YJ <span className="text-black"> Book No. </span> 1
        </p>
        <p className="text-md font-normal text-gray-500">Remaindered</p>
        <div className="w-16">
          <Plus classes={"h-full w-full"} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 my-4">
        <div>
          <InformationSection
            title="Author Information"
            info={authorInfo}
            imageUrl="https://picsum.photos/200/300?grayscale"
          />
        </div>
        <div>
          <ContractInformationDisplay infoLeft={contractInfoLeft} infoRight={contractInfoRight} />
        </div>
      </div>

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={() => setIsModalVisible(false)} title="Edit Contract Information">
        <ContractInformationEditable
          infoLeft={contractInfoLeft}
          infoRight={contractInfoRight}
        />
      </Modal>
    </div>
  );
};

export default Contract;
