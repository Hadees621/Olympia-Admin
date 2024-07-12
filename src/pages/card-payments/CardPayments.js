import React, { useState } from "react";
import PaymentTable from "./components/PaymentTable";
import Button from "components/Button";

const tabs = [
  {
    name: "Processing",
    component: PaymentTable,
    key: "withoutRemaindered",
  },
  {
    name: "Approved",
    component: PaymentTable,
    key: "withoutRemainderedUnder20",
  },
  { name: "Unauthorized", component: PaymentTable, key: "remaindered" },
  { name: "Cancelled", component: PaymentTable, key: "marketing" },
];

const CardPayments = () => {
  const [activeTab, setActiveTab] = useState("withoutRemaindered");

  return (
    <div className="w-full text-start items-center m-4">
      {/* header */}
      <p className="text-3xl font-semibold mt-8 ml-8">
        Telephone Payment Records
      </p>
      <div className="flex items-center justify-end mr-24">
        <Button title="Add New Payment" />
      </div>
      <div className="mb-4 justify-center flex pt-10">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
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
            className={`dark:bg-gray-800 ${
              activeTab === tab.key ? "block" : "hidden"
            }`}
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

export default CardPayments;
