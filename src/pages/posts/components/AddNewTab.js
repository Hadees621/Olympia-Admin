import React from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";

const AddNewTab = () => {
  return (
    <>
      <div className="">
        <div className="w-full shadow bg-[#F7F7F7]">
          <div className="p-5 mx- border-b">
            <p className="text-xl font-bold">Log New Items</p>
          </div>
          <div className="p-8 grid mx-auto gap-y-4 w-[]">
            <div className="flex w-full gap-4">
              <div className="w-full space-y-2">
                <p className="text-lg font-semibold"> Sender’s name: </p>
                <SearchField />
              </div>
              <div className="w-full space-y-2">
                <p className="text-lg font-semibold">Your name: </p>
                <SelectField />
              </div>
            </div>
            <p className="text-lg font-semibold">Department </p>
            <SelectField />
            <p className="text-lg font-semibold">Department </p>
            <textarea rows={6} />
            <div className="w-[20%]">
              <Button
                title={"Submit"}
                text={"text-white w-full"}
                bg="bg-green-600"
              />
            </div>
          </div>
        </div>
        <div className="w-full shadow-md bg-[#F7F7F7]">
          <div className="p-5 mx- border-b">
            <p className="text-xl font-bold">Logged items</p>
          </div>
          <div className="p-8 grid w-full gap-y-4"></div>
        </div>
      </div>

      <div className="overflow-x-auto mt-5 text-center shadow">
        <table className="min-w-full table-fixed divide-y divide-gray-200 ">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="text-sm w-full font-medium text-gray-500 uppercase">
              <th className="p-3 w-1/6">Date</th>
              <th className="p-3 w-1/6">Sender's name</th>
              <th className="p-3 w-1/6">Logged by</th>
              <th className="p-3 w-1/6">Department</th>
              <th className="p-3 w-1/6">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm border-b text-center ">
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
