import React from "react";
import TotalRevenue from "./TotalRevenue";
import ArchiveTabRow from "./ArchiveTabRow";

const ArchiveTab = () => {
  return (
    <div>
      <div className="overflow-x-auto text-center shadow max-h-[500px]">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-[12px] w-full font-medium text-gray-500 uppercase">
              <th className="p-3">Invoice Date</th>
              <th className="p-3">Invoice No.</th>
              <th className="p-3">Credit No.</th>
              <th className="p-3">Client</th>
              <th className="p-3">P&P Total</th>
              <th className="p-3">Sale Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
            <ArchiveTabRow />
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <p className="p-4 text-xl font-bold"> Total invoices: 12 </p>
        <div>
          <TotalRevenue />
        </div>
      </div>
    </div>
  );
};

export default ArchiveTab;
