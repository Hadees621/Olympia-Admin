import React from "react";
import Button from "components/Button";
import SummaryTable from "./components/SummaryTable";
import DetailedTable from "./components/DetailedTable";
import SearchField from "../../home/components/SearchField";
import {
  availableISBNData,
  totalAvailableISBN,
  totalUsedISBN,
  usedISBNData,
} from "./utils/utils";

const IsbnSearch = () => {
  return (
    <div className="w-full text-start items-center">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
        <div className="flex gap-2 justify-start items-center w-[43%] mx-auto px-4 my-6">
          <p className="text-md font-semibold text-gray-500">
            Search by ISBN :
          </p>
          <SearchField placeholder="000-0-0000000-00-0" />
          <Button title="Search" />
          <Button title="Clear" />
        </div>
      </>
      <div className="mt-4 m-4 font-semibold text-lg grid grid-cols-2 gap-4">
        <SummaryTable title="Available ISBN (Press)" data={availableISBNData} />
        <SummaryTable title="Used ISBN (Press)" data={usedISBNData} />
        <DetailedTable title="Total Available ISBN" data={totalAvailableISBN} />
        <DetailedTable title="Total Used ISBN" data={totalUsedISBN} />
      </div>
    </div>
  );
};

export default IsbnSearch;
