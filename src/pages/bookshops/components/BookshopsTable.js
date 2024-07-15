import React from "react";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import Button from "components/Button";
import { data } from "../utils/utils";

const BookshopsTable = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`m-4 transition-all duration-300 ${
        isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
      }`}
    >
      <div className="flex items-center mt-10 mb-4 gap-5">
        <p className="text-lg font-semibold"> Company : </p>
        <SelectField />
        <p className="text-lg font-semibold"> Country : </p>
        <SelectField />
        <p className="text-lg font-semibold"> City : </p>
        <SelectField />
        <Button title={"Add New"} />
      </div>
      <div className="overflow-x-auto shadow-md transition-all duration-300">
        <table className="w-full text-sm text-left">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 border">Company</th>
              <th className="px-6 py-3 border">Title</th>
              <th className="px-6 py-3 border">First Name</th>
              <th className="px-6 py-3 border">Last Name</th>
              <th className="px-6 py-3 border">Designation</th>
              <th className="px-6 py-3 border">Address 1</th>
              <th className="px-6 py-3 border">Address 2</th>
              <th className="px-6 py-3 border">Address 3</th>
              <th className="px-6 py-3 border">Town/ City</th>
              <th className="px-6 py-3 border">State/ County</th>
              <th className="px-6 py-3 border">Post Code</th>
              <th className="px-6 py-3 border">Country</th>
              <th className="px-6 py-3 border">Telephone 1</th>
              <th className="px-6 py-3 border">Telephone 2</th>
              <th className="px-6 py-3 border">Email</th>
              <th className="px-6 py-3 border">Web Address</th>
              <th className="px-6 py-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
              >
                <td className="px-6 py-4 border">{row.company}</td>
                <td className="px-6 py-4 border">{row.title}</td>
                <td className="px-6 py-4 border">{row.firstName}</td>
                <td className="px-6 py-4 border">{row.lastName}</td>
                <td className="px-6 py-4 border">{row.designation}</td>
                <td className="px-6 py-4 border">{row.address1}</td>
                <td className="px-6 py-4 border">{row.address2}</td>
                <td className="px-6 py-4 border">{row.address3}</td>
                <td className="px-6 py-4 border">{row.townCity}</td>
                <td className="px-6 py-4 border">{row.stateCounty}</td>
                <td className="px-6 py-4 border">{row.postCode}</td>
                <td className="px-6 py-4 border">{row.country}</td>
                <td className="px-6 py-4 border">{row.telephone1}</td>
                <td className="px-6 py-4 border">{row.telephone2}</td>
                <td className="px-6 py-4 border">{row.email}</td>
                <td className="px-6 py-4 border">{row.webAddress}</td>
                <td className="px-6 py-4 border">
                  <TableButton title="Edit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookshopsTable;
