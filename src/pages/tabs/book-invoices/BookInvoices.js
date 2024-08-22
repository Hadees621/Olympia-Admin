import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import StackTab from "./components/StackTab";
import SelectField from "components/SelectField";
import InvoicesTab from "./components/InvoicesTab";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "pages/editorial/components/Remaindered";

const tabs = [
  {
    name: "Stock",
    component: StackTab,
    key: "stock",
  },
  {
    name: "Invoices",
    component: InvoicesTab,
    key: "invoices",
  },
];

const BookInvoices = () => {
  const [activeTab, setActiveTab] = useState("stock");
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  return (
    <div className="w-full text-start m-4">
      <Title />

      <div className="flex gap-2 justify-start mt-8 items-center w-full">
        <p className="text-md font-semibold">Pen Name:</p>
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

      <div className="mb-6 justify-center flex">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.key} className="me-2" role="presentation">
              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg text-[15px] pb-4 font-semibold ${
                  activeTab === tab.key
                    ? "text-red-600 border-red-600"
                    : "text-black hover:text-black border-black"
                }`}
                id={`${tab.key}-tab`}
                type="button"
                role="tab"
                aria-controls={tab.key}
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div id="default-styled-tab-content" className="w-full">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`${activeTab === tab.key ? "block" : "hidden"}`}
            id={tab.key}
            role="tabpanel"
            aria-labelledby={`${tab.key}-tab`}
          >
            {React.createElement(tab.component, { data: tab.data })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookInvoices;
