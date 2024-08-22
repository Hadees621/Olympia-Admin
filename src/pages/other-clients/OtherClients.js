import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import AllOverdue from "./components/AllOverdue";
import ClientsTable from "./components/ClientsTable";
import SearchField from "../home/components/SearchField";

const tabs = [
  {
    name: "All Overdue Invoices",
    component: AllOverdue,
    key: "Newspapers",
  },
  {
    name: "All Unpaid Invoices",
    component: ClientsTable,
    key: "Wholesalers",
  },
  {
    name: "All Paid Invoices",
    component: ClientsTable,
    key: "BookshopsDistributors",
  },
  {
    name: "All Invoices",
    component: ClientsTable,
    key: "airportBookshops",
  },
  {
    name: "Cancelled By Credit",
    component: ClientsTable,
    key: "individualBookBuyers",
  },
  {
    name: "Cancelled Invoices",
    component: ClientsTable,
    key: "filmProducer",
  },
];

const OtherClients = () => {
  const [activeTab, setActiveTab] = useState("Newspapers");

  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex items-center mt-3 gap-3 px-6 pt-10 w-[60%] mx-auto">
        <p className="text-lg font-semibold"> Client Name : </p>
        <SearchField />
        <Button title={"Search"} />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="mb-4 justify-center flex pt-10">
        <ul
          className="flex flex-wrap -mb-px justify-center gap-3 px-20 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.key} className="me-2" role="presentation">
              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg text-[13px] font-semibold ${
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
            <tab.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherClients;
