import React, { useState } from "react";
import SubTabsTable from "./SubTabsTable";

const SubTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: "All", label: "All", component: SubTabsTable },
    {
      id: "bumblebee",
      label: "Bumblebee",
      component: SubTabsTable,
    },
    {
      id: "olympiaPublishers",
      label: "OlympiaPublishers",
      component: SubTabsTable,
    },
    { id: "ebooks", label: "E-books", component: SubTabsTable },
  ];

  return (
    <div className="w-full text-start items-center">
      <div className="mb-4 justify-center flex pt-3">
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
            className={`  dark:bg-gray-800 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
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

export default SubTabs;
