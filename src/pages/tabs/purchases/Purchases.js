import Title from "components/Title";
import { data } from "./utils/utils";
import Button from "components/Button";
import React, { useState } from "react";
import TableRow from "components/TableRow";
import Modal from "components/modals/Modal";
import useSidebarStore from "stores/States";
import SearchField from "components/SearchField";
import ScrollableTable from "./components/ScrollableTable";

const Purchases = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const tableData = [
    { section: "Personal Information:", fields: ["First Name", "Last Name"] },
    {
      section: "Contact Information:",
      fields: [
        "Company Name",
        "First Address",
        "2nd Address",
        "Town/City",
        "County/State",
        "Country",
        "Zipcode",
        "Telephone",
        "Mobile",
        "Email 1",
        "Email 2",
        "Email 3",
        "Website",
        "Skype",
        "VAT",
      ],
    },
  ];

  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex items-center mt-3 gap-3">
        <SearchField placeholder="Client Name" />
        <Button title="Search" />
        <SearchField placeholder="Company Name" />
        <Button title="Search" />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="flex items-center justify-end mt-3 gap-3 my-4">
        <Button title="Pending purchases" href="/pending-purchases" />
        <Button
          title="Add New Client"
          bg="bg-green-600"
          hover="hover:bg-green-700"
          text={"text-white"}
          onClick={() => setIsModalVisible(true)}
        />
        <Button title="All purchases" href="/all-purchases" />
      </div>

      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
        }`}
      >
        <ScrollableTable data={data} />
      </div>

      {/* Add New Client Modal */}
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={() => setIsModalVisible(false)}
        width={"max-w-[70vh]"}
        title="Add/Update Client"
      >
        <div className="w-full shadow">
          <div className="overflow-y-auto max-h-[70vh] custom-scrollbar px-2">
            {tableData.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                <p className="text-xl font-semibold w-full">
                  {section.section}
                </p>
                <table className="text-start mx-auto w-full">
                  <tbody className="">
                    {section.fields.map((field, fieldIndex) => (
                      <TableRow key={fieldIndex} label={field} />
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Purchases;
