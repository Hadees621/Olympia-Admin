import React, { useState } from "react";
import Button from "components/Button";
import useSidebarStore from "stores/States";
import SearchField from "../home/components/SearchField";
import SelectField from "components/SelectField";
import FinalCheckTable from "./components/FinalCheckTable";
import { data } from "./utils/utils";
import FinalCheckTab from "../bumblebee/components/FinalCheckTab";

const tabs = [
  {
    id: "todo-tab",
    label: "To Do",
    Olympia: 113,
    Bumblebee: 92,
    totalRecords: 205,
  },
  {
    id: "archive-tab",
    label: "Archive",
    Olympia: 15,
    Bumblebee: 10,
    totalRecords: 25,
  },
];

const TabContent = ({ activeTab, isOpen }) => {

  const tabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={`p-4 dark:bg-gray-800 ${activeTab ? "block" : "hidden"}`}>
      <div className="mt-3 w-full mx-4 font-semibold text-lg">
        {tabData.Olympia !== undefined && <p>Olympia: {tabData.Olympia}</p>}
        <p>Bumblebee: {tabData.Bumblebee}</p>
        <p>Total Records: {tabData.totalRecords}</p>
      </div>
      <div className="flex items-center h-full justify-center gap-3 w-full">
        {[...Array(7)].map((_, index) => (
          <li role="presentation" key={index} className="list-none">
            <button
              className="border-b-2 rounded-t-lg text-md font-bold"
              type="button"
              role="tab"
            >
              {index + 1}
            </button>
          </li>
        ))}
      </div>
      <div
        className={`m-4 transition-all duration-300 ${
          isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
        }`}
      >
        {activeTab === "archive-tab" ? (
          <FinalCheckTab data={data} />
        ) : (
          <FinalCheckTab data={data} />
        )}
      </div>
    </div>
  );
};

const FinalCheck = () => {
  const { isOpen } = useSidebarStore();
  const [activeTab, setActiveTab] = useState("todo-tab");

  return (
    <div
      className={`w-full text-start items-center m-4 ${
        !isOpen && "max-w-[1250px]"
      }`}
    >
      <p className="text-3xl font-semibold mt-8 ml-8">Books (Final Check)</p>
      <div className="flex items-center mt-3 gap-3 m-4">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen Name/Author Name" />
        <Button title="Search" />
        <Button title="Clear" />
        <SelectField placeholder="Select Filter" />
      </div>

      <div className="mb-4 justify-center flex pt-3">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
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
                id={tab.id}
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
        <TabContent activeTab={activeTab} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default FinalCheck;
