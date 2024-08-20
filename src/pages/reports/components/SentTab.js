import React from "react";
import useSidebarStore from "stores/States";
import Button from "components/Button";
import DatePickerField from "components/DatePickerField";

const SentTab = () => {
  const manuscripts = {
    totalUnderProduction: 25,
    total: 25,
    publishers: [
      { name: "Bumblebee Books", count: 1 },
      { name: "Olympia Publishers", count: 24 },
    ],
  };
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
      }`}
    >
      <p className="text-lg font-semibold text-center mt-12 mb-8">
        Show report:(by default current month)
      </p>
      <div className="flex items-center gap-3 px-5 w-[60%] mx-auto mb-8">
        <p className="text-lg font-semibold"> From </p>
        <DatePickerField />
        <p className="text-lg font-semibold"> To </p>
        <DatePickerField />
        <Button title="Search" />
      </div>
      <div className="font-bold shadow text-center">
        <h2 className="text-xl p-3 uppercase bg-[#F7F7F7]">
          Manuscripts sent to proofreader
        </h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Category</th>
              <th className="px-6 py-3 border-b">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b text-lg">Under Production</td>
              <td className="px-6 py-4 border-b text-lg">
                {manuscripts.totalUnderProduction}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b text-lg">Total</td>
              <td className="px-6 py-4 border-b text-lg">
                {manuscripts.total}
              </td>
            </tr>
            {manuscripts.publishers.map((publisher, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b text-lg">{publisher.name}</td>
                <td className="px-6 py-4 border-b text-lg">
                  {publisher.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SentTab;
