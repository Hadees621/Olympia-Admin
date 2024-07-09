import React, { useState } from "react";
import SearchField from "../home/components/SearchField";
import SelectField from "components/SelectField";
import Button from "components/Button";
import Remaindered from "../editorial/components/Remaindered";
import ProcessingTab from "./components/ProcessingTab";
import PreOrdersTab from "./components/PreOrdersTab";

const BookOrders = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);
  const [activeTab, setActiveTab] = useState("processing");

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  return (
    <div className="w-full text-start items-center m-4">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>

        <div className="flex gap-2 justify-start mt-8 items-center w-full px-4">
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
        <div className="flex items-center mt-3 gap-3 m-4">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" />
          <Button title="Clear" />
          <Button title="ISBN Search" />
        </div>
      </>

      <Remaindered />

      <div className="mb-4 justify-center flex pt-3">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "processing"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="processing-tab"
              type="button"
              role="tab"
              aria-controls="processing"
              aria-selected={activeTab === "processing"}
              onClick={() => setActiveTab("processing")}
            >
              Processing
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "pre-orders"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="pre-orders-tab"
              type="button"
              role="tab"
              aria-controls="pre-orders"
              aria-selected={activeTab === "pre-orders"}
              onClick={() => setActiveTab("pre-orders")}
            >
              Pre-Orders
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "shipped"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="shipped-tab"
              type="button"
              role="tab"
              aria-controls="shipped"
              aria-selected={activeTab === "shipped"}
              onClick={() => setActiveTab("shipped")}
            >
              Shipped
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "ingram"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="ingram-tab"
              type="button"
              role="tab"
              aria-controls="ingram"
              aria-selected={activeTab === "ingram"}
              onClick={() => setActiveTab("ingram")}
            >
              Ingram
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "reports"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="reports-tab"
              type="button"
              role="tab"
              aria-controls="reports"
              aria-selected={activeTab === "reports"}
              onClick={() => setActiveTab("reports")}
            >
              Reports
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                activeTab === "archive"
                  ? "text-red-600 border-red-600"
                  : "text-black hover:text-black border-black"
              }`}
              id="archive-tab"
              type="button"
              role="tab"
              aria-controls="archive"
              aria-selected={activeTab === "archive"}
              onClick={() => setActiveTab("archive")}
            >
              Archive
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content" className="w-full">
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "processing" ? "block" : "hidden"
          }`}
          id="processing"
          role="tabpanel"
          aria-labelledby="processing-tab"
        >
          <ProcessingTab />
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "pre-orders" ? "block" : "hidden"
          }`}
          id="pre-orders"
          role="tabpanel"
          aria-labelledby="pre-orders-tab"
        >
          <PreOrdersTab />
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "shipped" ? "block" : "hidden"
          }`}
          id="shipped"
          role="tabpanel"
          aria-labelledby="shipped-tab"
        >
          {/* Add your Shipped content here */}
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "ingram" ? "block" : "hidden"
          }`}
          id="ingram"
          role="tabpanel"
          aria-labelledby="ingram-tab"
        >
          {/* Add your Ingram content here */}
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "reports" ? "block" : "hidden"
          }`}
          id="reports"
          role="tabpanel"
          aria-labelledby="reports-tab"
        >
          {/* Add your Reports content here */}
        </div>
        <div
          className={`p-4 dark:bg-gray-800 ${
            activeTab === "archive" ? "block" : "hidden"
          }`}
          id="archive"
          role="tabpanel"
          aria-labelledby="archive-tab"
        >
          {/* Add your Archive content here */}
        </div>
      </div>
    </div>
  );
};

export default BookOrders;
