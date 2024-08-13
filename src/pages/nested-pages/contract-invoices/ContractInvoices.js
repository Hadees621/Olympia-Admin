import React, { useState } from "react";
import useSidebarStore from "stores/States";
import { booksData } from "pages/production/utils/utils";
import AllContractsTab from "./components/AllContractsTab";
import ProductionTable from "pages/production/components/ProductionTable";

const tabs = [
    {
        name: "All Contracts(Not Invoices)",
        component: AllContractsTab,
        key: "AllContracts(NotInvoices)",
        data: booksData,
    },
    {
        name: "All Contracts",
        component: ProductionTable,
        key: "AllContracts",
        data: booksData,
    },
    {
        name: "Xero All Invoices",
        component: ProductionTable,
        key: "Xero All Invoices",
        data: booksData,
    },
    {
        name: "All Pending Invoices",
        component: ProductionTable,
        key: "AllPendingInvoices",
        data: booksData,
    },
    {
        name: "All Invoices",
        component: ProductionTable,
        key: "All Invoices",
        data: booksData,
    },
    {
        name: "All Paid Invoices",
        component: ProductionTable,
        key: "AllPaidInvoices",
        data: booksData,
    },
    {
        name: "All Unpaid Invoices",
        component: ProductionTable,
        key: "AllUnpaidInvoices",
        data: booksData,
    },
    {
        name: "All Overdue Invoices",
        component: ProductionTable,
        key: "AllOverdueInvoices",
        data: booksData,
    },
];

const ContractInvoices = ({ data, onSave }) => {
    const { isOpen } = useSidebarStore();
    const [activeTab, setActiveTab] = useState("AllContracts(NotInvoices)");

    return (
        <div
            className={`w-full text-start items-center m-4  ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
                }`}
        >
            <p className="text-3xl font-semibold mt-8">
                Contract Invoices
            </p>

            <div className="mb-4 justify-center flex pt-10">
                <ul
                    className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center w-[70%] justify-center"
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
                    <div key={tab.key} className={` ${activeTab === tab.key ? "block" : "hidden"}`} id={tab.key} role="tabpanel" aria-labelledby={`${tab.key}-tab`}>
                        {React.createElement(tab.component, { data: tab.data })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContractInvoices;
