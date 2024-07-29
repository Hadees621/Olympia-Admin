import React, { useState } from 'react'
import Table from './components/Table';

const PendingQuestionaire = () => {
    const [activeTab, setActiveTab] = useState("AuthorProduction");

    const tabs = [
        {
            name: "Author Production",
            component: Table,
            key: "AuthorProduction",
        },
        {
            name: "Bumblebee Olympia (illustrations)",
            component: Table,
            key: "BumblebeeOlympia",
        },
        {
            name: "Bumblebee Author(illustrations)",
            component: Table,
            key: "BumblebeeAuthor",
        },
        {
            name: " Bumblebee(no illustrations)",
            component: Table,
            key: "Bumblebee",
        }
    ];

    return (
        <div className="w-full text-start items-center m-4">
            {/* header */}
            <>
                <p className="text-3xl font-semibold mt-8 ml-8">
                    Pending Production questionnaires
                </p>
                <p className="text-2xl font-semibold mt-2 ml-8">
                    Contract Status Excluded (Released, On Hold, Marketing)
                </p>
            </>

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
    )
}

export default PendingQuestionaire