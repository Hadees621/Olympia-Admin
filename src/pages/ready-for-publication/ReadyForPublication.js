import Title from "components/Title";
import React, { useState } from "react";
import ReadyForPublicationTable from "./components/ReadyForPublicationTable";

const ReadyForPublication = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: "All", label: "All", component: ReadyForPublicationTable },
    {
      id: "bumblebee",
      label: "Bumblebee",
      component: ReadyForPublicationTable,
    },
    {
      id: "olympiaPublishers",
      label: "Olympia Publishers",
      component: ReadyForPublicationTable,
    },
    { id: "ebooks", label: "Ebooks", component: ReadyForPublicationTable },
  ];

  return (
    <div className="w-full text-start items-center m-4">
    
      <Title title="Ready for Publication Books" />

      <div className="mb-4 justify-center flex pt-3">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg text-lg font-bold ${activeTab === tab.id
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
            className={` ${activeTab === tab.id ? "block" : "hidden"
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

export default ReadyForPublication;
