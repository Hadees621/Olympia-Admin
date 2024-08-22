import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import IngramTab from "./components/IngramTab";
import ShippedTab from "./components/ShipedTab";
import Remaindered from "components/Remaindered";
import ReportsTab from "./components/ReportsTab";
import ArchiveTab from "./components/ArchiveTab";
import SelectField from "components/SelectField";
import PreOrdersTab from "./components/PreOrdersTab";
import ProcessingTab from "./components/ProcessingTab";
import SearchField from "pages/home/components/SearchField";

const tabs = [
  { id: "processing", label: "Processing", component: ProcessingTab },
  { id: "pre-orders", label: "Pre-Orders", component: PreOrdersTab },
  { id: "shipped", label: "Shipped", component: ShippedTab },
  { id: "ingram", label: "Ingram", component: IngramTab },
  { id: "reports", label: "Reports", component: ReportsTab },
  { id: "archive", label: "Archive", component: ArchiveTab },
];

const BookOrders = () => {
  const [activeTab, setActiveTab] = useState("processing");
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex gap-2 justify-start mt-8 items-center w-full">
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

      <div className="flex items-center mt-3 gap-3">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <Remaindered />

      <div className="mb-4 justify-center flex py-3">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${
                  activeTab === tab.id
                    ? "text-red-600 border-red-600"
                    : "text-black hover:text-black border-black"
                }`}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-styled-tab-content" className="w-full">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={` ${activeTab === tab.id ? "block" : "hidden"}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <tab.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookOrders;
