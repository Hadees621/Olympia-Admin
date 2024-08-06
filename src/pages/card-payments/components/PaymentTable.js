import React from "react";
import { data } from "../utils/utils";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";

const PaymentTable = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div>
      <div
        className={`m-4 transition-all duration-300 mt-10 ${
          isOpen ? "max-w-[1050px]" : "max-w-[1300px]"
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
                    <TableButton title={"View"} />
                    <TableButton title={"Edit"} />
                    <TableButton title={"Delete"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
