import { data } from "../utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import InputWithLabel from "components/InputWithLabel";
import EditableTextarea from "components/EditableTextarea";
import DisplayInfo from "pages/card-payments/components/DisplayInfo";

const AllOverdue = () => {
  const { isOpen } = useSidebarStore();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

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

  const handleViewClick = (row) => {
    setSelectedRow(row);
    setIsModalVisible(true);
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setIsEditModalVisible(true);
  };

  const handleInputChange = (e, fieldName) => {
    setSelectedRow({
      ...selectedRow,
      [fieldName]: e.target.value,
    });
  };

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
        }`}
    >
      <div className="flex items-center mt-8 gap-3 my-4 justify-end">
        <Button
          title={"Add New Client"}
          bg="bg-green-500"
          hover="hover:bg-green-600"
          text={"text-white"}
          onClick={() => setIsAddModalVisible(true)}
        />
      </div>
      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 "></th>
              <th className="px-6 py-3 ">First Name</th>
              <th className="px-6 py-3 ">Last Name</th>
              <th className="px-6 py-3 ">Company</th>
              <th className="px-6 py-3 ">VAT</th>
              <th className="px-6 py-3 ">Telephone</th>
              <th className="px-6 py-3 ">Mobile</th>
              <th className="px-6 py-3 ">Emails</th>
              <th className="px-6 py-3 ">Skype</th>
              <th className="px-6 py-3 ">Website</th>
              <th className="px-6 py-3 ">1st Address</th>
              <th className="px-6 py-3 ">2und Address</th>
              <th className="px-6 py-3 ">Signup Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row"
              >
                <td className="px-6 py-4 ">
                  <div className="space-x-2">
                    <TableButton title={"View"} onClick={() => handleViewClick(row)} />
                    <TableButton title={"Edit"} onClick={() => handleEditClick(row)} />
                  </div>
                </td>
                <td className="px-6 py-4 ">{row.firstName}</td>
                <td className="px-6 py-4 ">{row.lastName}</td>
                <td className="px-6 py-4 ">{row.company}</td>
                <td className="px-6 py-4 ">{row.vat}</td>
                <td className="px-6 py-4 ">{row.telephone}</td>
                <td className="px-6 py-4 ">{row.mobile}</td>
                <td className="px-6 py-4 ">{row.emails}</td>
                <td className="px-6 py-4 ">{row.skype}</td>
                <td className="px-6 py-4 ">{row.website}</td>
                <td className="px-6 py-4 ">{row.address1}</td>
                <td className="px-6 py-4 ">{row.address2}</td>
                <td className="px-6 py-4 ">{row.signupDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        width="max-w-[70vh]"
        title="Information"
      >
        {selectedRow && (
          <div className="w-full shadow">
            <div className="overflow-y-auto max-h-[70vh] custom-scrollbar p-6">
              <div className="mb-4 space-y-2">
                {Object.entries(selectedRow).map(([key, value]) => (
                  <DisplayInfo key={key} label={key} value={value} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* edit */}
      <Modal
        isVisible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        width="max-w-[70vh]"
        title="Edit Information"
      >
        {selectedRow && (
          <div className="w-full shadow">
            <div className="overflow-y-auto max-h-[70vh] custom-scrollbar p-6">
              <div className="mb-4 space-y-2">
                {Object.entries(selectedRow).map(([key, value]) => (
                  <EditableTextarea
                    key={key}
                    label={key}
                    name={key}
                    value={value}
                    onChange={(e) => handleInputChange(e, key)}
                    rows={2}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal isVisible={isAddModalVisible} onClose={() => setIsAddModalVisible(false)} onSave={() => setIsAddModalVisible(false)} width={"max-w-[80vh]"} title="Add New Client">
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
            <ModalFormSection
              title="Personal Information"
              fields={[
                { component: InputWithLabel, label: "First Name :", flex: true },
                { component: InputWithLabel, label: "Last Name :", flex: true },
              ]}
            />
            <ModalFormSection
              title="Contact Information"
              fields={[
                { component: InputWithLabel, label: "Company Name :", flex: true },
                { component: InputWithLabel, label: "First Address :", flex: true },
                { component: InputWithLabel, label: "Phone number :", flex: true },
                { component: InputWithLabel, label: "Town/City :", flex: true },
                { component: InputWithLabel, label: "County/State :", flex: true },
                { component: InputWithLabel, label: "Country :", flex: true },
                { component: InputWithLabel, label: "Town :", flex: true },
                { component: InputWithLabel, label: "Mobile :", flex: true },
                { component: InputWithLabel, label: "Email 1 :", flex: true },
                { component: InputWithLabel, label: "Email 2 :", flex: true },
                { component: InputWithLabel, label: "Email 3 :", flex: true },
                { component: InputWithLabel, label: "Website :", flex: true },
                { component: InputWithLabel, label: "Skype :", flex: true },
                { component: InputWithLabel, label: "VAT :", flex: true },
              ]}
            />
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default AllOverdue;
