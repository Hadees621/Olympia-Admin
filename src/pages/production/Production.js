import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import { booksData } from "./utils/utils";
import useSidebarStore from "stores/States";
import Pagination from "components/Pagination";
import SelectField from "components/SelectField";
import SearchField from "../home/components/SearchField";
import ProductionTable from "./components/ProductionTable";

const tabs = [
  {
    name: "KS",
    component: ProductionTable,
    key: "ks",
    data: booksData,
  },
  {
    name: "IA",
    component: ProductionTable,
    key: "ia",
    data: booksData,

  },
  {
    name: "RR",
    component: ProductionTable,
    key: "rr",
    data: booksData,
  },
  {
    name: "Final Check(0)",
    component: ProductionTable,
    key: "finalcheck",
    data: booksData,
  },
  {
    name: "UAE Books",
    component: ProductionTable,
    key: "uae",
    data: booksData,
  },
];

const Production = () => {
  const { isOpen } = useSidebarStore();
  const [activeTab, setActiveTab] = useState("ks");

  return (
    <div
      className={`w-full text-start items-center m-4 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
        }`}
    >
      <Title />

      <div className="flex items-center mt-3 gap-3">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen Name/Author Name" />
        <Button title="Search" />
        <Button title="Clear" />
        <SelectField placeholder="Select Filter" />
      </div>

      <div className="mt-5">
        <p className="font-semibold text-lg">Total Records: 2589</p>
      </div>

      <Pagination num={7} />

      <div className="mb-6 justify-center flex">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.key} className="me-2" role="presentation">
              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg text-[13px] font-semibold ${activeTab === tab.key
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
          <div key={tab.key} className={`dark:bg-gray-800 ${activeTab === tab.key ? "block" : "hidden"}`} id={tab.key} role="tabpanel" aria-labelledby={`${tab.key}-tab`}>
            {React.createElement(tab.component, { data: tab.data })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Production;
