import React from "react";
import ReportsTabRow from "./RepotsTabRow";

const ReportsTab = () => {
  return (
    <div className="overflow-x-auto text-center shadow max-h-[500px]">
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-[10px] w-full font-medium text-gray-500 uppercase">
            <th className="p-3">Book Title</th>
            <th className="p-3">Author Name</th>
            <th className="p-3">ISBN</th>
            <th className="p-3">Price</th>
            <th className="p-3">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
          <ReportsTabRow />
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTab;
