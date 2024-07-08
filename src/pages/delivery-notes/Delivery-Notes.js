import React, { useState } from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "../editorial/components/Remaindered";
import DatePickerField from "components/DatePickerField";

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
          <Button title="ISBN Search" />
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
    </div>
  );
};

export default DeliveryNotes;
