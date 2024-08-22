import React from "react";
import Title from "components/Title";
import Button from "components/Button";
import SearchField from "components/SearchField";
import SummaryTable from "./components/SummaryTable";
import DetailedTable from "./components/DetailedTable";
import {
  availableISBNData,
  totalAvailableISBN,
  totalUsedISBN,
  usedISBNData,
} from "./utils/utils";

const IsbnSearch = () => {
  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex gap-2 justify-start items-center w-[43%] mx-auto my-6">
        <p className="text-md font-semibold text-gray-500">Search by ISBN :</p>
        <SearchField placeholder="000-0-0000000-00-0" />
        <Button title="Search" />
        <Button title="Clear" />
      </div>

      <div className="mt-4 font-semibold text-lg grid grid-cols-2 gap-4">
        <SummaryTable title="Available ISBN (Press)" data={availableISBNData} />
        <SummaryTable title="Used ISBN (Press)" data={usedISBNData} />
        <DetailedTable title="Total Available ISBN" data={totalAvailableISBN} />
        <DetailedTable title="Total Used ISBN" data={totalUsedISBN} />
      </div>
    </div>
  );
};

export default IsbnSearch;
