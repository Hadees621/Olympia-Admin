import Title from "components/Title";
import Button from "components/Button";
import Modal from "components/modals/Modal";
import EditableRadio from "components/EditableRadio";
import React, { useState, useCallback } from "react";
import PaymentTable from "./components/PaymentTable";
import InputWithLabel from "components/InputWithLabel";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const tabs = [
  { name: "Processing", key: "withoutRemaindered" },
  { name: "Approved", key: "withoutRemainderedUnder20" },
  { name: "Unauthorized", key: "remaindered" },
  { name: "Cancelled", key: "marketing" },
];

const TabButton = ({ tab, isActive, onClick }) => (
  <li key={tab.key} className="me-2" role="presentation">
    <button
      className={`inline-block p-2 border-b-2 rounded-t-lg text-[14px] font-semibold ${isActive
        ? "text-red-600 border-red-600"
        : "text-black hover:text-black border-black"
        }`}
      id={`${tab.key}-tab`}
      type="button"
      role="tab"
      aria-controls={tab.key}
      aria-selected={isActive}
      onClick={onClick}
    >
      {tab.name}
    </button>
  </li>
);

const TabContent = ({ tab, isActive }) => (
  <div
    key={tab.key}
    className={`dark:bg-gray-800 ${isActive ? "block" : "hidden"}`}
    id={tab.key}
    role="tabpanel"
    aria-labelledby={`${tab.key}-tab`}
  >
    <PaymentTable />
  </div>
);

const ModalFormSection = ({ title, fields }) => (
  <div className="space-y-5 p-4">
    <h1 className="font-bold text-xl py-3">{title}</h1>
    {fields.map((field, index) => (
      React.createElement(field.component, {
        key: index,
        label: field.label,
        flex: true,
        ...field.props
      })
    ))}
  </div>
);

const CardPayments = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("withoutRemaindered");

  const handleTabClick = useCallback((key) => {
    setActiveTab(key);
  }, []);

  return (
    <div className="w-full text-start items-center m-4">
      <Title title="Telephone Payment Records" />
      <div className="flex items-center justify-end">
        <Button title="Add New Payment" bg="bg-green-600" hover="hover:bg-green-700" text={"text-white"} onClick={() => setIsModalVisible(true)} />
      </div>
      <div className="mb-4 justify-center flex pt-10">
        <ul
          className="flex flex-wrap -mb-px gap-3 text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              tab={tab}
              isActive={activeTab === tab.key}
              onClick={() => handleTabClick(tab.key)}
            />
          ))}
        </ul>
      </div>
      <div id="default-styled-tab-content" className="w-full">
        {tabs.map((tab) => (
          <TabContent
            key={tab.key}
            tab={tab}
            isActive={activeTab === tab.key}
          />
        ))}
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={() => setIsModalVisible(false)}
        width="max-w-[90vh]"
        title="Add New Payment"
      >
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-">
            <ModalFormSection
              title="Telephone Payment Record"
              fields={[
                { component: InputWithLabel, label: "Date :", flex: true },
                { component: EditableRadio, label: "Invoice Type :", flex: true },
                { component: InputWithLabel, label: "Invoice number / Ref :", flex: true },
                { component: InputWithLabel, label: "Contact name :", flex: true },
              ]}
            />
            <ModalFormSection
              title="Payment Information"
              fields={[
                { component: SelectInputWithLabel, label: "Date :", flex: true },
                { component: EditableRadio, label: "Card Number :", flex: true },
                { component: InputWithLabel, label: "Card Expiry date (mmyy) :", flex: true },
                { component: InputWithLabel, label: "CV2 (security code at back) :", flex: true },
                { component: InputWithLabel, label: "Name on the card :", flex: true },
                { component: InputWithLabel, label: "Total amount (£):", flex: true },
              ]}
            />
            <ModalFormSection
              title="Billing Information"
              fields={[
                { component: InputWithLabel, label: "First Name :", flex: true },
                { component: InputWithLabel, label: "Second Name :", flex: true },
                { component: InputWithLabel, label: "Phone number :", flex: true },
                { component: InputWithLabel, label: "Email address :", flex: true },
                { component: InputWithLabel, label: "Address line 1 :", flex: true },
                { component: InputWithLabel, label: "Address line 2 :", flex: true },
                { component: InputWithLabel, label: "Town :", flex: true },
                { component: InputWithLabel, label: "City :", flex: true },
                { component: InputWithLabel, label: "Post code :", flex: true },
                { component: SelectInputWithLabel, label: "Country :", flex: true, width: "w-[25%]" },
                { component: SelectInputWithLabel, label: "Completed by: ", flex: true, width: "w-[25%]" },
                { component: SelectInputWithLabel, label: "Status :", flex: true, width: "w-[25%]" },
              ]}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardPayments;
