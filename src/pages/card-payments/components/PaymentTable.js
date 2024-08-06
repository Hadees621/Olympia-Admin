

import React, { useState } from "react";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import { data, paymentData } from "../utils/utils";
import SearchField from "pages/home/components/SearchField";
import ViewModal from "./ViewModal";
import InputWithLabel from "components/InputWithLabel";
import EditableRadio from "components/EditableRadio";
import SelectInputWithLabel from "components/SelectInputWithLabel";
import Modal from "components/modals/Modal";

const PaymentTable = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const ModalFormSection = ({ title, fields, data }) => (
    <div className="space-y-5 p-4">
      <h1 className="font-bold text-xl py-3">{title}</h1>
      {fields.map((field, index) => {
        const value = data ? data[field.label.replace(/ :$/, '')] : ''; // Extract value based on label
        return React.createElement(field.component, {
          key: index,
          label: field.label,
          flex: true,
          value: value,
          ...field.props
        });
      })}
    </div>
  );



  return (
    <div>
      <div
        className={`m-4 transition-all duration-300 mt-10 ${isOpen ? "max-w-[1050px]" : "max-w-[1300px]"
          }`}
      >
        <div className="flex items-center justify-between mt-10 mb-4 gap-3">
          <div className="w-[30%] gap-5 flex items-center">
            <p className="text-lg font-semibold"> Show:</p>
            <SelectField placeholder="Show " />{" "}
            <p className="text-lg font-semibold"> Entries </p>
          </div>
          <div className="w-[30%] gap-5 flex items-center justify-end">
            <p className="text-lg font-semibold"> Search: </p>
            <SearchField />
          </div>
        </div>

        <div className="overflow-x-auto shadow-md transition-all duration-300">
          <table className="w-full text-sm text-left">
            <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
              <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3 border">Invoice Type</th>
                <th className="px-6 py-3 border">Date</th>
                <th className="px-6 py-3 border">Invoice number/Ref</th>
                <th className="px-6 py-3 border">Contact name</th>
                <th className="px-6 py-3 border">Card Type</th>
                <th className="px-6 py-3 border">Total amount </th>
                <th className="px-6 py-3 border">Billing Name</th>
                <th className="px-6 py-3 border">Completed by</th>
                <th className="px-6 py-3 border">Status</th>
                <th className="px-6 py-3 border">Manage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap`}
                >
                  <td className="px-6 py-4 border">{row["Invoice Type"]}</td>
                  <td className="px-6 py-4 border">{row["Date"]}</td>
                  <td className="px-6 py-4 border">
                    {row["Invoice number/Ref"]}
                  </td>
                  <td className="px-6 py-4 border">{row["Contact name"]}</td>
                  <td className="px-6 py-4 border">{row["Card type"]}</td>
                  <td className="px-6 py-4 border">{row["Total amount"]}</td>
                  <td className="px-6 py-4 border">{row["Billing name"]}</td>
                  <td className="px-6 py-4 border">{row["Completed by"]}</td>
                  <td className="px-6 py-4 border text-red-600">
                    {row["Status"]}
                  </td>
                  <td className="px-6 py-4 flex gap-x-2">
                    <TableButton title={"View"} onClick={() => setIsModalVisible(true)} />
                    <TableButton
                      title={"Edit"}
                      bg="bg-green-500"
                      hover="hover:bg-green-600"
                      text={'text-white'}
                      onClick={() => {
                        setSelectedRowData(row);
                        setIsModalVisible2(true);
                      }}
                    />

                    <TableButton title={"Delete"} bg="bg-red-500" hover="hover:bg-red-600" text={'text-white'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isVisible={isModalVisible2}
        onClose={() => setIsModalVisible2(false)}
        onSave={() => setIsModalVisible2(false)}
        width="max-w-[90vh]"
        title="Edit Payment Record"
      >
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
            <ModalFormSection
              title="Telephone Payment Record"
              fields={[
                { component: InputWithLabel, label: "Date :", flex: true },
                { component: EditableRadio, label: "Invoice Type :", flex: true },
                { component: InputWithLabel, label: "Invoice number / Ref :", flex: true },
                { component: InputWithLabel, label: "Contact name :", flex: true },
              ]}
              data={selectedRowData}
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
              data={selectedRowData}
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
              data={selectedRowData}
            />
          </div>
        </div>
      </Modal>

      <ViewModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        paymentData={paymentData}
      />
    </div>
  );
};

export default PaymentTable;