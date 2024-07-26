import React from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "../editorial/components/Remaindered";
import DatePickerField from "components/DatePickerField";
import Row from "./components/Row";

const DeliveryNotes = () => {
  return (
    <div className="w-full text-start items-center m-4">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
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
          <Button title="Add" bg="bg-green-600 text-white" />
        </div>
      </>

      <Remaindered />

      <div className="overflow-x-auto mt-5 text-center shadow">
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
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryNotes;
