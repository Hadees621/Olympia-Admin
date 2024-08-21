import Title from "components/Title";
import Xero from "./components/Xero";
import Button from "components/Button";
import React, { useState } from "react";
import useSidebarStore from "stores/States";
import Modal from "components/modals/Modal";
import AllPending from "./components/AllPending";
import AllInvoices from "./components/AllInvoices";
import AllContractsTab from "./components/AllContractsTab";
import AllPaidInvoices from "./components/AllPaidInvoices";
import AllUnpaidInvoices from "./components/AllUnpaidInvoices";
import AllOverdueInvoices from "./components/AllOverdueInvoices";
import AllContractsInvoicesTab from "./components/AllContractsInvoicesTab";
import InvoiceCreator from "../contract-accounts/components/InvoiceCreator";

const tabs = [
    {
        name: "All Contracts (Not Invoiced)",
        component: AllContractsTab,
        key: "AllContracts(NotInvoices)",
    },
    {
        name: "All Contracts",
        component: AllContractsInvoicesTab,
        key: "AllContracts",
    },
    {
        name: "All Invoices",
        component: AllInvoices,
        key: "AllInvoices",
    },
    {
        name: "Xero All Invoices",
        component: Xero,
        key: "XeroAllInvoices",
    },
    {
        name: "All Pending Invoices",
        component: AllPending,
        key: "AllPendingInvoices",
    },
    {
        name: "All Paid Invoices",
        component: AllPaidInvoices,
        key: "AllPaidInvoices",
    },
    {
        name: "All Unpaid Invoices",
        component: AllUnpaidInvoices,
        key: "AllUnpaidInvoices",
    },
    {
        name: "All Overdue Invoices",
        component: AllOverdueInvoices,
        key: "AllOverdueInvoices",
    },
];

const ContractInvoices = () => {
    const { isOpen } = useSidebarStore();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("AllContracts(NotInvoices)");

    return (
        <div
            className={`w-full text-start items-center m-4 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
                }`}
        >
            <Title title="Contract Invoices" />

            <div className="flex items-center justify-end my-4 gap-3">
                <Button title="Create Contract New Invoice" bg="bg-green-600" hover="hover:bg-green-700" text={"text-white"} onClick={() => setModalIsOpen(true)} />
            </div>

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

            <Modal
                isVisible={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                contentLabel="Create New Invoice"
                saveButton={false}
            >
                <InvoiceCreator />
            </Modal>
        </div>
    );
};

export default ContractInvoices;
