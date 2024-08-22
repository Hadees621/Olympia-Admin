import React from "react";
import Title from "components/Title";
import Button from "components/Button";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import SearchField from "components/SearchField";
import Remaindered from "components/Remaindered";
import { deliveryNotesData } from "./utils/utils";
import DatePickerField from "components/DatePickerField";

const DeliveryNotes = () => {
  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex items-center mt-8 gap-3">
        <SearchField placeholder="Reference" />
        <SelectField placeholder={"Select Author"} />
        <DatePickerField />
        <Button title="Search" />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="flex items-center mt-3 gap-3">
        <SearchField placeholder="Reference" />
        <SelectField placeholder={"Select Author"} />
        <DatePickerField />
        <SelectField placeholder={"DN"} />
        <Button
          title="Add"
          bg="bg-green-600 text-white"
          hover="hover:bg-green-700"
        />
      </div>

      <Remaindered />

      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="text-sm w-full font-medium text-gray-500 uppercase">
              <th className="p-3 w-1/6">Date</th>
              <th className="p-3 w-1/6">Reference</th>
              <th className="p-3 w-1/6">Company</th>
              <th className="p-3 w-1/6">DN / RN</th>
              <th className="p-3 w-1/6"></th>
            </tr>
          </thead>
          <tbody>
            {deliveryNotesData.map((row, index) => (
              <tr
                key={index}
                className="text-sm border-b text-center  custom-hover-row"
              >
                <td className="p-3">{row.date}</td>
                <td className="p-3">{row.reference}</td>
                <td className="p-3">{row.company}</td>
                <td className="p-3">{row.dnRn}</td>
                <td className="p-3">
                  <div className="flex justify-center items-center space-x-2">
                    <TableButton title={"View"} href={"/view-delivery-note"} />
                    <TableButton
                      title={"Edit"}
                      bg="bg-green-600"
                      hover="hover:bg-green-700"
                      text={"text-white"}
                    />
                    <TableButton
                      title={"Delete"}
                      bg="bg-red-500"
                      hover="hover:bg-red-600"
                      text={"text-white"}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryNotes;
