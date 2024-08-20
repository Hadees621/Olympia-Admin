import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import InputWithLabel from "components/InputWithLabel";
import OutworkersTable from "./components/OutworkersTable";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const tabs = [
  {
    name: "Available",
    component: OutworkersTable,
    key: "withoutRemaindered",
  },
  {
    name: "Archive",
    component: OutworkersTable,
    key: "withoutRemainderedUnder20",
  },
];

const Outworkers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("withoutRemaindered");

  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex items-center justify-end m- gap-3">
        <Button title="Add New Outworker" bg="bg-green-500" hover="hover:bg-green-600" text={'text-white'} onClick={() => setIsModalVisible(true)} />
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

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={() => setIsModalVisible(false)} width={"max-w-[90vh]"} title="Add New record">
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2 space-y-3">
            <InputWithLabel label={"Name"} />
            <InputWithLabel label={"Email"} />
            <InputWithLabel label={"Address"} />
            <InputWithLabel label={"Tel"} />
            <InputWithLabel label={"Mobile"} />
            <SelectInputWithLabel label={"Skill Type"} />
            <SelectInputWithLabel label={"Grade"} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Outworkers;
