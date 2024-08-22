import Title from "components/Title";
import { data } from "./utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import ToDoTab from "./components/ToDoTab";
import useSidebarStore from "stores/States";
import Pagination from "components/Pagination";
import SelectField from "components/SelectField";
import SearchField from "components/SearchField";

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
    <div className={` ${activeTab ? "block" : "hidden"}`}>
      <div className="mt-3 w-full font-semibold text-lg">
        {tabData.Olympia !== undefined && <p>Olympia: {tabData.Olympia}</p>}
        <p>Bumblebee: {tabData.Bumblebee}</p>
        <p>Total Records: {tabData.totalRecords}</p>
      </div>

      <Pagination num={7} />

      <div
        className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
          }`}
      >
        {activeTab === "archive-tab" ? (
          <ToDoTab data={data} />
        ) : (
          <ToDoTab data={data} />
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
      className={`m-4 w-full text-start items-center ${!isOpen && "max-w-[1250px]"
        }`}
    >
      <Title title="Books (Final Check)" />

      <div className="flex items-center mt-3 gap-3">
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
                className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${activeTab === tab.id
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
