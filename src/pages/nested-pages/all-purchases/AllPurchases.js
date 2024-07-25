import React, { useState } from "react";
import Button from "components/Button";
import useSidebarStore from "stores/States";
import SearchField from "pages/home/components/SearchField";
import AllPurchasesTable from "./components/AllPurchasesTable";

const AllPurchases = () => {
    const { isOpen } = useSidebarStore();
    const [activeTab, setActiveTab] = useState("AllPurchase");

    const tabs = [
        {
            name: "All Purchases",
            component: AllPurchasesTable,
            key: "AllPurchase",
        },
        {
            name: "All Overdue Purchase",
            component: AllPurchasesTable,
            key: "AllOverduePurchase",
        },
        {
            name: "All Unpaid Purchase",
            component: AllPurchasesTable,
            key: "AllUnpaidPurchase",
        },
        {
            name: "All Paid Purchase",
            component: AllPurchasesTable,
            key: "AllPaidPurchase",
        },
        {
            name: "All Dispute Purchase",
            component: AllPurchasesTable,
            key: "AllDisputePurchase",
        },

        {
            name: "Cancelled Purchase",
            component: AllPurchasesTable,
            key: "CancelledPurchase",
        },
    ];

    return (
        <div className="w-full text-start items-center m-4">
            {/* header */}
            <>
                <p className="text-3xl font-semibold my-8 ml-8">
                    All Purchases
                </p>
                <div className="flex items-center mt-3 gap-3 m-4">
                    <SearchField placeholder="Client Name" />
                    <Button title="Search" />
                    <SearchField placeholder="Company Name" />
                    <Button title="Search" />
                    <Button title="ISBN Search" href="/isbn-search" />
                </div>
            </>
            <div
                className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
                    }`}
            >

                <div className="mb-4 justify-center flex pt-10">
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
                        <div
                            key={tab.key}
                            className={`dark:bg-gray-800 ${activeTab === tab.key ? "block" : "hidden"
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
        </div >
    );
};

export default AllPurchases;
