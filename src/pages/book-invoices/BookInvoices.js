import Button from "components/Button";
import React, { useState } from "react";
import StackTab from "./components/StackTab";
import SelectField from "components/SelectField";
import InvoicesTab from "./components/InvoicesTab";
import SearchField from "../home/components/SearchField";
import Remaindered from "../editorial/components/Remaindered";

const BookInvoices = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedValues, setSelectedValues] = useState(["", ""]);

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
        <p className="text-3xl font-semibold mt-8">
          Welcome to Olympia Portal (olympia admin)
        </p>

        <div className="flex gap-2 justify-start mt-8 items-center w-full px-">
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
      </>

      <Remaindered />

      <div className="mb-4 justify-center flex pt-3">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-xl font-bold ${activeTab === "profile"
                ? "text-red-600 border-red-600"
                : "text-black hover:text-black border-black"
                }`}
              id="profile-styled-tab"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            >
              Stock
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-xl font-bold ${activeTab === "dashboard"
                ? "text-red-600 border-red-600"
                : "text-black hover:text-black border-black"
                }`}
              id="dashboard-styled-tab"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            >
              Invoices
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className={`p-4 dark:bg-gray-800 ${activeTab === "profile" ? "block" : "hidden"
            }`}
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <StackTab />
        </div>
        <div
          className={`p-4 rounded-lg dark:bg-gray-800 ${activeTab === "dashboard" ? "block" : "hidden"
            }`}
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <InvoicesTab />
        </div>
      </div>
    </div>
  );
};

export default BookInvoices;
