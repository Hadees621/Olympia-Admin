import ViewModal from "./ViewModal";
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import { data, paymentData } from "../utils/utils";
import EditableRadio from "components/EditableRadio";
import InputWithLabel from "components/InputWithLabel";
import SearchField from "pages/home/components/SearchField";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const PaymentTable = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const ModalFormSection = ({ title, fields, data }) => (
    <div className="space-y-5 p-4">
      <h1 className="font-bold text-xl py-3">{title}</h1>
      {fields.map((field, index) => {
        const value = data ? data[field.label.replace(/ :$/, '')] : '';
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
        className={`transition-all duration-300 mt-10 ${isOpen ? "max-w-[1050px]" : "max-w-[1300px]"
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

        <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead className="uppercase bg-gray-50 sticky top-0 z-10">
              <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3 ">Invoice Type</th>
                <th className="px-6 py-3 ">Date</th>
                <th className="px-6 py-3 ">Invoice number/Ref</th>
                <th className="px-6 py-3 ">Contact name</th>
                <th className="px-6 py-3 ">Card Type</th>
                <th className="px-6 py-3 ">Total amount </th>
                <th className="px-6 py-3 ">Billing Name</th>
                <th className="px-6 py-3 ">Completed by</th>
                <th className="px-6 py-3 ">Status</th>
                <th className="px-6 py-3 ">Manage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row"
                >
                  <td className="px-6 py-4 ">{row.invoiceType}</td>
                  <td className="px-6 py-4 ">{row.date}</td>
                  <td className="px-6 py-4 ">{row.invoiceNumber}</td>
                  <td className="px-6 py-4 ">{row.contactName}</td>
                  <td className="px-6 py-4 ">{row.cardType}</td>
                  <td className="px-6 py-4 ">{row.totalAmount}</td>
                  <td className="px-6 py-4 ">{row.billingName}</td>
                  <td className="px-6 py-4 ">{row.completedBy}</td>
                  <td className="px-6 py-4  text-red-600">{row.status}</td>
                  <td className="px-6 py-4 flex justify-center items-center gap-x-2">
                    <TableButton
                      title="View"
                      onClick={() => setIsModalVisible(true)}
                    />
                    <TableButton
                      title="Edit"
                      bg="bg-green-600"
                      hover="hover:bg-green-700"
                      text="text-white"
                      onClick={() => {
                        setSelectedRowData(row);
                        setIsModalVisible2(true);
                      }}
                    />
                    <TableButton
                      title="Delete"
                      bg="bg-red-500"
                      hover="hover:bg-red-600"
                      text="text-white"
                    />
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