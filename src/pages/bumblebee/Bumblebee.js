import Title from "components/Title";
import { data } from "./utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import useSidebarStore from "stores/States";
import Pagination from "components/Pagination";
import SelectField from "components/SelectField";
import FinalCheckTab from "./components/FinalCheckTab";
import SearchField from "../home/components/SearchField";
import BumblebeeTable from "./components/BumblebeeTable";

const tabs = [
  {
    id: "books-tab",
    label: "Books",
    totalRecords: 260,
    component: BumblebeeTable,
    data,
  },
  {
    id: "final-check-tab",
    label: "Final Check (0)",
    totalRecords: 0,
    component: FinalCheckTab,
    data,
  },
];

const TabContent = ({ activeTab, isOpen }) => {
  const tabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={` ${activeTab ? "block" : "hidden"}`}>
      {activeTab === "books-tab" && (
        <div className="flex items-center mt-3 gap-3">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen Name/Author Name" />
          <Button title="Search" />
          <Button title="Clear" />
          <SelectField placeholder="Select Filter" />
        </div>
      )}
      {tabData.totalRecords > 0 && (
        <div className="mt-3 w-full font-semibold text-lg">
          <p>Olympia illustrations: 113</p>
          <p>Author illustrations: 137</p>
          <p>No illustrations: 10</p>
          <p>Total Records: {tabData.totalRecords}</p>
        </div>
      )}

      <Pagination num={7} />

      <div
        className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
          }`}
      >
        {React.createElement(tabData.component, { data: tabData.data })}
      </div>
    </div>
  );
};

const Bumblebee = () => {
  const { isOpen } = useSidebarStore();
  const [activeTab, setActiveTab] = useState("books-tab");

  return (
    <div
      className={`w-full text-start items-center m-4 ${!isOpen && "max-w-[1250px]"
        }`}
    >

      <Title title="Books (Imprint: Bumblebee)" />

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

export default Bumblebee;
