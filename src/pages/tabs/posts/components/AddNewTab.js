import React from "react";
import Button from "components/Button";
import InputWithLabel from "components/InputWithLabel";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const AddNewTab = () => {
  return (
    <>
      <div className="w-full shadow bg-[#F7F7F7]">
        <div className="p-5 border-b">
          <p className="text-xl font-bold">Log New Items</p>
        </div>
        <div className="p-6 grid mx-auto gap-y-4">
          <div className="flex w-full gap-4">
            <InputWithLabel label={"Sender’s name:"} background="bg-white" />
            <SelectInputWithLabel label={"Your name:"} background="bg-white" />
          </div>
          <SelectInputWithLabel label={"Department"} background="bg-white" />
          <div className="w-[18%]">
            <Button
              title={"Submit"}
              text={"text-white w-full"}
              bg="bg-green-600"
              hover="hover:bg-green-700"
            />
          </div>
        </div>
      </div>

      <div className="w-full shadow bg-[#F7F7F7]">
        <div className="p-5 mx- border-b">
          <p className="text-xl font-bold">Logged items</p>
        </div>
        <div className="p-8 grid w-full gap-y-4"></div>
      </div>

      <div className="mt-4 overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="p-3 w-1/6">Date</th>
              <th className="p-3 w-1/6">Sender's name</th>
              <th className="p-3 w-1/6">Logged by</th>
              <th className="p-3 w-1/6">Department</th>
              <th className="p-3 w-1/6">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row">
              <td className="p-3">08-06-2010</td>
              <td className="p-3">2107</td>
              <td className="p-3">0000-00-00</td>
              <td className="p-3">Amazon.co.uk (oly)</td>
              <td className="p-3 whitespace-wrap">
                lorsumloreoremipsumloremipsumloremipsumloremipsumloremipsumloremipmipsumloremipsuml
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddNewTab;
